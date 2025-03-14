"use client";

import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, Package, Edit, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

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
  nombre: string | null;
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
  const router = useRouter();
  const cacheRef = useRef<{data: Centro[], timestamp: number} | null>(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const cargarCentros = async () => {
      try {
        if (!isMountedRef.current) return;
        
        setLoading(true);
        console.log("Cargando centros de distribución, filtro activo:", activoFiltro);
        
        // Verificar si tenemos datos en caché y si son recientes (menos de 30 segundos)
        const now = Date.now();
        const cachedData = cacheRef.current;
        
        if (cachedData && (now - cachedData.timestamp < 30000)) {
          console.log("Usando datos en caché para centros");
          setCentros(cachedData.data);
          setLoading(false);
          return;
        }
        
        const response = await fetch("/api/centros-distribucion", {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache'
          }
        });
        
        if (!response.ok) {
          throw new Error("Error al cargar centros de distribución");
        }
        
        const data = await response.json();
        console.log("Centros cargados:", data);
        
        // Guardar en caché
        cacheRef.current = {
          data,
          timestamp: now
        };
        
        if (isMountedRef.current) {
          setCentros(data);
        }
      } catch (error) {
        console.error("Error al cargar centros:", error);
        toast.error("Error al cargar centros de distribución");
      } finally {
        if (isMountedRef.current) {
          setLoading(false);
        }
      }
    };

    // Verificar si debemos recargar basado en el localStorage
    const lastRefreshedSection = localStorage.getItem("lastRefreshedSection");
    const refreshTimestamp = localStorage.getItem("refreshTimestamp");
    
    if (lastRefreshedSection === "centros" || lastRefreshedSection === "all") {
      // Invalidar caché si se solicitó un refresh
      if (refreshTimestamp) {
        cacheRef.current = null;
        localStorage.removeItem("refreshTimestamp");
      }
      cargarCentros();
      localStorage.removeItem("lastRefreshedSection");
    } else {
      cargarCentros();
    }
  }, [activoFiltro]);

  // Filtrar centros cuando cambia el filtro o los centros
  useEffect(() => {
    if (!isMountedRef.current) return;
    
    console.log("Aplicando filtro de centros:", activoFiltro);
    if (activoFiltro === undefined) {
      console.log("Mostrando todos los centros");
      setCentrosFiltrados(centros);
    } else {
      console.log(`Filtrando centros por activo=${activoFiltro}`);
      setCentrosFiltrados(centros.filter(c => c.activo === activoFiltro));
    }
  }, [activoFiltro, centros]);

  const handleToggleActivo = async (id: number, activo: boolean) => {
    try {
      console.log(`Cambiando estado de centro ${id} a ${!activo ? "activo" : "inactivo"}`);
      const response = await fetch(`/api/centros-distribucion/${id}/toggle-activo`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ activo: !activo }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error en respuesta:", errorData);
        throw new Error(`Error al actualizar el centro: ${errorData.error || response.statusText}`);
      }

      const result = await response.json();
      console.log("Respuesta de cambio de estado:", result);

      // Actualizar el estado local
      setCentros(prev => 
        prev.map(centro => 
          centro.id === id ? { ...centro, activo: !activo } : centro
        )
      );

      toast.success(`Centro ${!activo ? "activado" : "desactivado"} correctamente`);
    } catch (error) {
      console.error("Error al cambiar estado del centro:", error);
      toast.error(`Error al actualizar el centro: ${error instanceof Error ? error.message : 'Error desconocido'}`);
    }
  };

  const eliminarCentro = async (id: number) => {
    try {
      if (!confirm("¿Está seguro que desea eliminar este centro de distribución? Esta acción no se puede deshacer.")) {
        return;
      }

      console.log(`Eliminando centro ${id}`);
      const response = await fetch(`/api/centros-distribucion/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error en respuesta:", errorData);
        throw new Error(`Error al eliminar el centro: ${errorData.error || response.statusText}`);
      }

      // Actualizar el estado local
      setCentros(prev => prev.filter(centro => centro.id !== id));
      toast.success("Centro eliminado correctamente");
    } catch (error) {
      console.error("Error al eliminar centro:", error);
      toast.error(`Error al eliminar el centro: ${error instanceof Error ? error.message : 'Error desconocido'}`);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-4 sm:py-8">
        <p className="text-sm sm:text-base">Cargando centros de distribución...</p>
      </div>
    );
  }

  if (centrosFiltrados.length === 0) {
    return (
      <div className="text-center py-4 sm:py-8">
        <h3 className="text-base sm:text-lg font-medium">No hay centros de distribución {activoFiltro === undefined ? "" : activoFiltro ? "activos" : "inactivos"}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground mt-2">
          Utiliza el formulario de registro para crear nuevos centros
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="grid gap-3 sm:gap-6 sm:grid-cols-2">
        {centrosFiltrados.map((centro) => (
          <Card key={centro.id} className={`${centro.activo ? "" : "opacity-70"} hover:shadow-md transition-shadow duration-200 border-slate-200 dark:border-slate-700`}>
            <CardHeader className="pb-2 sm:pb-3">
              <div className="flex justify-between items-start">
                {centro.nombre ? (
                  <div>
                    <CardTitle className="text-sm sm:text-lg">{centro.nombre}</CardTitle>
                    <p className="text-xs sm:text-sm text-muted-foreground">Responsable: {centro.responsable}</p>
                  </div>
                ) : (
                  <CardTitle className="text-sm sm:text-lg">{centro.responsable}</CardTitle>
                )}
                <Badge 
                  variant={centro.activo ? "default" : "outline"} 
                  className={`text-xs px-1.5 py-0.5 sm:text-sm sm:px-2 sm:py-1 ${
                    centro.activo 
                      ? "default" 
                      : "bg-gray-500 hover:bg-gray-600"
                  } transition-colors`}
                >
                  {centro.activo ? "Activo" : "Inactivo"}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-2 sm:space-y-4 pt-0 sm:pt-2">
              <div className="space-y-1 sm:space-y-2">
                <div className="flex items-start gap-1 sm:gap-2">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mt-0.5 text-muted-foreground" />
                  <span className="text-xs sm:text-sm">{centro.direccion}</span>
                </div>
                
                {centro.telefono && (
                  <div className="flex items-start gap-1 sm:gap-2">
                    <Phone className="h-3 w-3 sm:h-4 sm:w-4 mt-0.5 text-muted-foreground" />
                    <span className="text-xs sm:text-sm">{centro.telefono}</span>
                  </div>
                )}
                
                {(centro.horarioApertura || centro.horarioCierre) && (
                  <div className="flex items-start gap-1 sm:gap-2">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 mt-0.5 text-muted-foreground" />
                    <span className="text-xs sm:text-sm">
                      {centro.horarioApertura && centro.horarioCierre 
                        ? `${centro.horarioApertura} - ${centro.horarioCierre}`
                        : centro.horarioApertura || centro.horarioCierre}
                    </span>
                  </div>
                )}

                {centro.descripcion && (
                  <div className="mt-1 sm:mt-2">
                    <p className="text-xs sm:text-sm"><span className="font-medium">Descripción:</span> {centro.descripcion}</p>
                  </div>
                )}
              </div>
              
              <div>
                <h4 className="font-medium flex items-center gap-1 text-xs sm:text-sm">
                  <Package className="h-3 w-3 sm:h-4 sm:w-4" /> Artículos disponibles
                </h4>
                
                {centro.articulos && centro.articulos.length > 0 ? (
                  <ul className="space-y-0.5 sm:space-y-1 pl-4 sm:pl-6 list-disc">
                    {centro.articulos.map((articulo) => (
                      <li key={articulo.id} className="text-xs sm:text-sm">
                        {articulo.tipoArticulo.nombre} ({articulo.cantidad})
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs sm:text-sm text-muted-foreground">No hay artículos disponibles</p>
                )}
              </div>
              
              <div className="flex gap-1 sm:gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => router.push(`/admin/editar-centro/${centro.id}`)}
                  className="flex-1 h-7 text-xs sm:h-8 sm:text-sm hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-colors"
                >
                  <Edit className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  Editar
                </Button>
                <Button
                  variant={centro.activo ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleToggleActivo(centro.id, centro.activo)}
                  className={`flex-1 h-7 text-xs sm:h-8 sm:text-sm transition-colors ${
                    centro.activo 
                      ? "default" 
                      : "outline"
                  }`}
                >
                  {centro.activo ? "Desactivar" : "Activar"}
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => eliminarCentro(centro.id)}
                  className="flex-1 h-7 text-xs sm:h-8 sm:text-sm bg-red-600 hover:bg-red-700 text-white transition-colors"
                >
                  <Trash2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  Eliminar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 