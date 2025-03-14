"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Check, Trash2 } from "lucide-react";

interface ArticuloPeticion {
  id: number;
  tipoArticulo: {
    id: number;
    nombre: string;
  };
  cantidad: number;
}

interface Peticion {
  id: number;
  direccion: string;
  contactoNombre: string;
  contactoTel: string;
  estado: string;
  latitud: number | null;
  longitud: number | null;
  creadoEn: string;
  articulos: ArticuloPeticion[];
  descripcion?: string;
}

interface ListadoPeticionesProps {
  estadoFiltro?: string;
}

export default function ListadoPeticiones({ estadoFiltro = "Pendiente" }: ListadoPeticionesProps) {
  const [peticiones, setPeticiones] = useState<Peticion[]>([]);
  const [loading, setLoading] = useState(true);
  const cacheRef = useRef<{[key: string]: {data: Peticion[], timestamp: number}}>({});
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const cargarPeticiones = async () => {
      try {
        if (!isMountedRef.current) return;
        
        setLoading(true);
        // Solo loguear en desarrollo
        if (process.env.NODE_ENV === 'development') {
          console.log("Cargando peticiones con filtro:", estadoFiltro);
        }
        
        // Verificar si tenemos datos en caché y si son recientes (menos de 30 segundos)
        const cacheKey = `peticiones-${estadoFiltro}`;
        const now = Date.now();
        const cachedData = cacheRef.current[cacheKey];
        
        if (cachedData && (now - cachedData.timestamp < 30000)) {
          // Solo loguear en desarrollo
          if (process.env.NODE_ENV === 'development') {
            console.log("Usando datos en caché para peticiones:", estadoFiltro);
          }
          setPeticiones(cachedData.data);
          setLoading(false);
          return;
        }
        
        // Construir la URL según el filtro
        let url = '/api/peticiones';
        if (estadoFiltro && estadoFiltro !== 'todas') {
          url += `?estado=${encodeURIComponent(estadoFiltro)}`;
        }
        
        // Solo loguear en desarrollo
        if (process.env.NODE_ENV === 'development') {
          console.log("URL de peticiones:", url);
        }
        
        const response = await fetch(url, {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache'
          }
        });
        
        if (!response.ok) {
          throw new Error("Error al cargar peticiones");
        }
        
        const data = await response.json();
        // Solo loguear en desarrollo
        if (process.env.NODE_ENV === 'development') {
          console.log("Peticiones cargadas:", data.length);
        }
        
        // Guardar en caché
        cacheRef.current[cacheKey] = {
          data,
          timestamp: now
        };
        
        if (isMountedRef.current) {
          setPeticiones(data);
        }
      } catch (error) {
        console.error("Error al cargar peticiones:", error);
        toast.error("Error al cargar peticiones");
      } finally {
        if (isMountedRef.current) {
          setLoading(false);
        }
      }
    };

    // Verificar si debemos recargar basado en el localStorage
    const lastRefreshedSection = localStorage.getItem("lastRefreshedSection");
    const refreshTimestamp = localStorage.getItem("refreshTimestamp");
    
    if (lastRefreshedSection === "solicitudes" || lastRefreshedSection === "all") {
      // Invalidar caché si se solicitó un refresh
      if (refreshTimestamp) {
        const cacheKey = `peticiones-${estadoFiltro}`;
        delete cacheRef.current[cacheKey];
        localStorage.removeItem("refreshTimestamp");
      }
      cargarPeticiones();
      localStorage.removeItem("lastRefreshedSection");
    } else {
      cargarPeticiones();
    }
  }, [estadoFiltro]);

  const cambiarEstado = async (id: number, nuevoEstado: string) => {
    try {
      console.log(`Cambiando estado de petición ${id} a ${nuevoEstado}`);
      const response = await fetch(`/api/peticiones/${id}/estado`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ estado: nuevoEstado }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error en respuesta:", errorData);
        throw new Error(`Error al actualizar el estado: ${errorData.error || response.statusText}`);
      }

      const result = await response.json();
      console.log("Respuesta de cambio de estado:", result);

      // Actualizar el estado localmente
      if (estadoFiltro === 'todas') {
        // Si estamos mostrando todas las peticiones, actualizamos el estado de la petición
        setPeticiones(prev => 
          prev.map(peticion => 
            peticion.id === id ? { ...peticion, estado: nuevoEstado } : peticion
          )
        );
      } else {
        // Si estamos filtrando por estado, eliminamos la petición de la lista
        setPeticiones(prev => 
          prev.filter(peticion => peticion.id !== id)
        );
      }

      toast.success(`Petición marcada como ${nuevoEstado.toLowerCase()}`);
    } catch (error) {
      console.error("Error al cambiar estado:", error);
      toast.error(`Error al actualizar el estado: ${error instanceof Error ? error.message : 'Error desconocido'}`);
    }
  };

  const eliminarPeticion = async (id: number) => {
    try {
      if (!confirm("¿Está seguro que desea eliminar esta petición? Esta acción no se puede deshacer.")) {
        return;
      }

      console.log(`Eliminando petición ${id}`);
      const response = await fetch(`/api/peticiones/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error en respuesta:", errorData);
        throw new Error(`Error al eliminar la petición: ${errorData.error || response.statusText}`);
      }

      // Eliminar la petición de la lista
      setPeticiones(prev => prev.filter(peticion => peticion.id !== id));
      toast.success("Petición eliminada correctamente");
    } catch (error) {
      console.error("Error al eliminar petición:", error);
      toast.error(`Error al eliminar la petición: ${error instanceof Error ? error.message : 'Error desconocido'}`);
    }
  };

  if (loading) {
    return <div className="text-center py-2 sm:py-4 text-sm sm:text-base">Cargando peticiones...</div>;
  }

  if (peticiones.length === 0) {
    return <div className="text-center py-2 sm:py-4 text-sm sm:text-base">No hay peticiones {estadoFiltro === "todas" ? "" : `en estado "${estadoFiltro}"`}</div>;
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      {peticiones.map((peticion) => (
        <Card key={peticion.id} className={`p-2 sm:p-4 ${peticion.estado === "Registrada" ? "opacity-70" : ""} hover:shadow-md transition-shadow duration-200`}>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm sm:text-base font-medium">Petición #{peticion.id}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {new Date(peticion.creadoEn).toLocaleDateString()}
              </p>
            </div>
            <Badge
              className={`text-xs px-1.5 py-0.5 sm:text-sm sm:px-2 sm:py-1 ${
                peticion.estado === "Pendiente"
                  ? "bg-yellow-500 hover:bg-yellow-600"
                  : peticion.estado === "Entregada"
                  ? "bg-green-500 hover:bg-green-600"
                  : peticion.estado === "Cancelada"
                  ? "bg-red-600 hover:bg-red-700"
                  : peticion.estado === "Registrada"
                  ? "bg-blue-500 hover:bg-blue-600"
                  : peticion.estado === "Atendida"
                  ? "bg-blue-700 hover:bg-blue-800"
                  : "bg-gray-500 hover:bg-gray-600"
              } transition-colors`}
            >
              {peticion.estado}
            </Badge>
          </div>

          <div className="mt-2 space-y-0.5 sm:space-y-1">
            <p className="text-xs sm:text-sm"><span className="font-medium">Dirección:</span> {peticion.direccion}</p>
            <p className="text-xs sm:text-sm"><span className="font-medium">Contacto:</span> {peticion.contactoNombre}</p>
            <p className="text-xs sm:text-sm"><span className="font-medium">Teléfono:</span> {peticion.contactoTel || "No proporcionado"}</p>
            {peticion.descripcion && (
              <p className="text-xs sm:text-sm"><span className="font-medium">Descripción:</span> {peticion.descripcion}</p>
            )}
          </div>

          <div className="mt-2 sm:mt-3">
            <h4 className="font-medium text-xs sm:text-sm">Artículos solicitados:</h4>
            <ul className="list-disc list-inside mt-0.5 sm:mt-1">
              {peticion.articulos && peticion.articulos.length > 0 ? (
                peticion.articulos.map((articulo) => (
                  <li key={articulo.id} className="text-xs sm:text-sm">
                    {articulo.tipoArticulo.nombre} ({articulo.cantidad})
                  </li>
                ))
              ) : (
                <li className="text-xs sm:text-sm text-muted-foreground">No hay artículos</li>
              )}
            </ul>
          </div>

          <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-4">
            {peticion.estado === "Pendiente" && (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => cambiarEstado(peticion.id, "Atendida")}
                  className="flex-1 h-7 text-xs sm:h-8 sm:text-sm hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-colors"
                >
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  Atendida
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => eliminarPeticion(peticion.id)}
                  className="flex-1 h-7 text-xs sm:h-8 sm:text-sm bg-red-600 hover:bg-red-700 text-white transition-colors"
                >
                  <Trash2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  Eliminar
                </Button>
              </>
            )}
            {peticion.estado !== "Pendiente" && (
              <Button
                variant="destructive"
                size="sm"
                onClick={() => eliminarPeticion(peticion.id)}
                className="flex-1 h-7 text-xs sm:h-8 sm:text-sm bg-red-600 hover:bg-red-700 text-white transition-colors"
              >
                <Trash2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Eliminar
              </Button>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
} 