"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

// Importamos el mapa de forma dinámica para evitar problemas con SSR
const MapaVoluntario = dynamic(() => import("@/components/voluntario/MapaVoluntario"), {
  ssr: false,
  loading: () => <div className="h-[500px] w-full bg-muted flex items-center justify-center">Cargando mapa...</div>
});

// Tipos de artículos disponibles (en producción, esto vendría de la API)
const tiposArticulosDefault = [
  "Ropa",
  "Colchones",
  "Alimentos no perecederos",
  "Sabanas / Frazadas",
  "Agua",
  "Articulos de limpieza",
  "Articulos de higiene personal"
];

interface TipoArticulo {
  id: number;
  nombre: string;
}

export default function VoluntarioPage() {
  const [tiposArticulos, setTiposArticulos] = useState<string[]>(tiposArticulosDefault);
  const [tiposSeleccionados, setTiposSeleccionados] = useState<string[]>([]);
  const [ubicacionActual, setUbicacionActual] = useState<[number, number] | null>(null);
  const [cargandoUbicacion, setCargandoUbicacion] = useState(false);
  const [mostrarMapa, setMostrarMapa] = useState(false);

  // Cargar tipos de artículos desde la API
  useEffect(() => {
    const cargarTiposArticulos = async () => {
      try {
        const response = await fetch("/api/tipos-articulos");
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            setTiposArticulos(data.map((tipo: TipoArticulo) => tipo.nombre));
          }
        }
      } catch (error) {
        console.error("Error al cargar tipos de artículos:", error);
        // Si falla, usamos los tipos por defecto
      }
    };

    cargarTiposArticulos();
  }, []);

  // Obtener la ubicación actual del usuario
  const obtenerUbicacionActual = () => {
    if (!navigator.geolocation) {
      toast.error("Tu navegador no soporta geolocalización");
      return;
    }

    setCargandoUbicacion(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUbicacionActual([position.coords.latitude, position.coords.longitude]);
        setCargandoUbicacion(false);
        toast.success("Ubicación actual obtenida");
      },
      (error) => {
        console.error("Error obteniendo ubicación:", error);
        toast.error("No se pudo obtener la ubicación actual");
        setCargandoUbicacion(false);
      }
    );
  };

  // Obtener la ubicación al cargar la página
  useEffect(() => {
    obtenerUbicacionActual();
  }, []);

  const handleToggleTipoArticulo = (tipo: string) => {
    setTiposSeleccionados(prev => {
      if (prev.includes(tipo)) {
        return prev.filter(t => t !== tipo);
      } else {
        return [...prev, tipo];
      }
    });
  };

  const handleBuscar = () => {
    if (tiposSeleccionados.length === 0) {
      toast.error("Por favor selecciona al menos un tipo de artículo");
      return;
    }

    if (!ubicacionActual) {
      toast.error("No se pudo obtener tu ubicación actual");
      return;
    }

    setMostrarMapa(true);
  };

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Voluntario</h1>
        <p className="text-muted-foreground">
          Encuentra puntos cercanos para retirar y entregar donaciones
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>¿Qué tipos de artículos quieres distribuir?</CardTitle>
          <CardDescription>
            Selecciona los tipos de artículos que deseas repartir (puedes elegir varios)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {tiposArticulos.map((tipo) => (
              <div key={tipo} className="flex items-center space-x-2">
                <Checkbox 
                  id={`tipo-${tipo}`} 
                  checked={tiposSeleccionados.includes(tipo)}
                  onCheckedChange={() => handleToggleTipoArticulo(tipo)}
                />
                <Label
                  htmlFor={`tipo-${tipo}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {tipo}
                </Label>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <Button 
              onClick={obtenerUbicacionActual} 
              variant="outline"
              disabled={cargandoUbicacion}
              className="sm:flex-1"
            >
              {cargandoUbicacion ? "Obteniendo ubicación..." : "Actualizar mi ubicación"}
            </Button>
            <Button 
              onClick={handleBuscar} 
              disabled={tiposSeleccionados.length === 0 || !ubicacionActual}
              className="sm:flex-1"
            >
              Buscar puntos cercanos
            </Button>
          </div>

          {ubicacionActual && (
            <p className="text-xs text-muted-foreground text-center">
              Tu ubicación actual: {ubicacionActual[0].toFixed(6)}, {ubicacionActual[1].toFixed(6)}
            </p>
          )}
        </CardContent>
      </Card>

      {mostrarMapa && tiposSeleccionados.length > 0 && ubicacionActual && (
        <Card>
          <CardHeader>
            <CardTitle>Mapa de distribución</CardTitle>
            <CardDescription>
              <div className="space-y-1">
                <span className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-blue-500"></span>
                  Puntos azules: Lugares para retirar artículos
                </span>
                <span className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-red-500"></span>
                  Puntos rojos: Lugares donde entregar artículos
                </span>
              </div>
              <div className="mt-2 text-sm">
                <p>Artículos seleccionados:</p>
                <ul className="list-disc list-inside">
                  {tiposSeleccionados.map(tipo => (
                    <li key={tipo}>{tipo}</li>
                  ))}
                </ul>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[500px] w-full rounded-md overflow-hidden border">
              <MapaVoluntario 
                tiposArticulos={tiposSeleccionados} 
                ubicacionActual={ubicacionActual} 
              />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 