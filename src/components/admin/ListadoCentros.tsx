"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, Package } from "lucide-react";

interface Articulo {
  id: number;
  tipoArticuloId: number;
  cantidad: number;
  estado: string;
  tipoArticulo: {
    id: number;
    nombre: string;
  };
}

interface Centro {
  id: number;
  direccion: string;
  responsable: string;
  telefono: string | null;
  horarioApertura: string | null;
  horarioCierre: string | null;
  latitud: number;
  longitud: number;
  activo: boolean;
  articulos: Articulo[];
  descripcion?: string;
}

interface ListadoCentrosProps {
  activoFiltro?: boolean;
}

export default function ListadoCentros({ activoFiltro = true }: ListadoCentrosProps) {
  const [centros, setCentros] = useState<Centro[]>([]);
  const [loading, setLoading] = useState(true);
  const [centrosFiltrados, setCentrosFiltrados] = useState<Centro[]>([]);

  useEffect(() => {
    const cargarCentros = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/centros-distribucion");
        
        if (!response.ok) {
          throw new Error("Error al cargar centros de distribución");
        }
        
        const data = await response.json();
        setCentros(data);
      } catch (error) {
        console.error("Error:", error);
        toast.error("Error al cargar centros de distribución");
      } finally {
        setLoading(false);
      }
    };

    cargarCentros();
  }, []);

  // Filtrar centros cuando cambia el filtro o los centros
  useEffect(() => {
    if (activoFiltro === undefined) {
      setCentrosFiltrados(centros);
    } else {
      setCentrosFiltrados(centros.filter(c => c.activo === activoFiltro));
    }
  }, [activoFiltro, centros]);

  const handleToggleActivo = async (id: number, activo: boolean) => {
    try {
      const response = await fetch(`/api/centros-distribucion/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ activo: !activo }),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el centro");
      }

      // Actualizar el estado local
      setCentros(centros.map(centro => 
        centro.id === id ? { ...centro, activo: !activo } : centro
      ));

      toast.success(`Centro ${!activo ? "activado" : "desactivado"} correctamente`);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al actualizar el centro");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <p>Cargando centros de distribución...</p>
      </div>
    );
  }

  if (centrosFiltrados.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium">No hay centros de distribución {activoFiltro === undefined ? "" : activoFiltro ? "activos" : "inactivos"}</h3>
        <p className="text-muted-foreground mt-2">
          Utiliza el formulario de registro para crear nuevos centros
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        {centrosFiltrados.map((centro) => (
          <Card key={centro.id} className={centro.activo ? "" : "opacity-70"}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{centro.responsable}</CardTitle>
                <Badge variant={centro.activo ? "default" : "secondary"}>
                  {centro.activo ? "Activo" : "Inactivo"}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-1 text-muted-foreground" />
                  <span>{centro.direccion}</span>
                </div>
                
                {centro.telefono && (
                  <div className="flex items-start gap-2">
                    <Phone className="h-4 w-4 mt-1 text-muted-foreground" />
                    <span>{centro.telefono}</span>
                  </div>
                )}
                
                {(centro.horarioApertura || centro.horarioCierre) && (
                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 mt-1 text-muted-foreground" />
                    <span>
                      {centro.horarioApertura && centro.horarioCierre 
                        ? `${centro.horarioApertura} - ${centro.horarioCierre}`
                        : centro.horarioApertura || centro.horarioCierre}
                    </span>
                  </div>
                )}

                {centro.descripcion && (
                  <div className="mt-2">
                    <p className="text-sm"><strong>Descripción:</strong> {centro.descripcion}</p>
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-1">
                  <Package className="h-4 w-4" /> Artículos disponibles
                </h4>
                
                {centro.articulos.length > 0 ? (
                  <ul className="space-y-1 pl-6 list-disc">
                    {centro.articulos.map((articulo) => (
                      <li key={articulo.id}>
                        {articulo.tipoArticulo.nombre} ({articulo.cantidad})
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">No hay artículos disponibles</p>
                )}
              </div>
              
              <div className="pt-2">
                <Button
                  variant={centro.activo ? "destructive" : "default"}
                  size="sm"
                  onClick={() => handleToggleActivo(centro.id, centro.activo)}
                  className="w-full"
                >
                  {centro.activo ? "Desactivar centro" : "Activar centro"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 