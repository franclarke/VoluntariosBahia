"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";

// Importamos el mapa de forma dinámica para evitar problemas con SSR
const MapaVoluntario = dynamic(() => import("@/components/voluntario/MapaVoluntario"), {
  ssr: false,
  loading: () => <div className="h-[500px] w-full bg-muted flex items-center justify-center">Cargando mapa...</div>
});

interface TipoArticulo {
  id: number;
  nombre: string;
}

export default function VoluntarioPage() {
  const [tiposArticulos, setTiposArticulos] = useState<string[]>([]);
  const [tiposSeleccionados, setTiposSeleccionados] = useState<string[]>([]);
  const [cargandoTipos, setCargandoTipos] = useState(true);

  // Cargar tipos de artículos desde la API
  useEffect(() => {
    const cargarTiposArticulos = async () => {
      setCargandoTipos(true);
      try {
        const response = await fetch("/api/tipos-articulos");
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            const nombres = data.map((tipo: TipoArticulo) => tipo.nombre);
            setTiposArticulos(nombres);
            setTiposSeleccionados(nombres); // Seleccionar todos por defecto
          } else {
            toast.error("No se encontraron tipos de artículos");
          }
        } else {
          toast.error("Error al cargar tipos de artículos");
        }
      } catch (error) {
        console.error("Error al cargar tipos de artículos:", error);
        toast.error("Error al cargar tipos de artículos");
      } finally {
        setCargandoTipos(false);
      }
    };

    cargarTiposArticulos();
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

  const seleccionarTodos = () => {
    setTiposSeleccionados([...tiposArticulos]);
  };

  const deseleccionarTodos = () => {
    setTiposSeleccionados([]);
  };

  return (
    <div className="container mx-auto py-4 space-y-4 px-4 sm:px-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight ">Voluntarios Bahía</h1>
        <p className="text-muted-foreground">
          Conectamos voluntarios con oportunidades para transportar donaciones en Bahía Blanca
        </p>
      </div>

      <Card className="shadow-sm">
        <CardHeader className="pb-2">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <div>
              <CardTitle className="text-lg sm:text-xl">Mapa de Donaciones</CardTitle>
              <CardDescription>
                Encuentra centros de donación y personas que necesitan ayuda
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-2">
          <div className="flex flex-col space-y-4">
            <div className="bg-muted p-3 rounded-md">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                <h3 className="text-sm font-medium flex items-center">
                  <Package className="mr-2 h-4 w-4" />
                  Tipos de artículos a distribuir
                </h3>
                <div className="flex space-x-2 mt-2 sm:mt-0">
                  <Button variant="outline" size="sm" onClick={seleccionarTodos}>Todos</Button>
                  <Button variant="outline" size="sm" onClick={deseleccionarTodos}>Ninguno</Button>
                </div>
              </div>
              
              {cargandoTipos ? (
                <div className="flex justify-center items-center py-4">
                  <p className="text-sm text-muted-foreground">Cargando tipos de artículos...</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
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
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-2 text-xs text-muted-foreground">
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-1"></span>
                <span>Centros de donación: Recoge artículos aquí</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-1"></span>
                <span>Solicitudes: Entrega artículos aquí</span>
              </div>
            </div>

            {tiposSeleccionados.length > 0 ? (
              <div className="h-[500px] w-full rounded-md overflow-hidden border">
                <MapaVoluntario 
                  tiposArticulos={tiposSeleccionados} 
                />
              </div>
            ) : (
              <div className="h-[500px] w-full rounded-md overflow-hidden border bg-muted flex items-center justify-center flex-col p-4 text-center">
                <p className="text-muted-foreground">Selecciona al menos un tipo de artículo para ver el mapa.</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 