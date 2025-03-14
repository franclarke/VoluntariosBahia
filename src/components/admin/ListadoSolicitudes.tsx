"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { Edit, CheckCircle, XCircle } from "lucide-react";

interface ArticuloSolicitud {
  id: number;
  tipoArticulo: {
    id: number;
    nombre: string;
  };
  cantidad: number;
}

interface Solicitud {
  id: number;
  direccion: string;
  contactoNombre: string;
  contactoTel: string;
  estado: string;
  latitud: number | null;
  longitud: number | null;
  creadoEn: string;
  articulos: ArticuloSolicitud[];
  descripcion?: string;
}

interface ListadoSolicitudesProps {
  estadoFiltro?: string;
}

export default function ListadoSolicitudes({ estadoFiltro = "Pendiente" }: ListadoSolicitudesProps) {
  const [solicitudes, setSolicitudes] = useState<Solicitud[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const cacheRef = useRef<{[key: string]: {data: Solicitud[], timestamp: number}}>({});
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const cargarSolicitudes = async () => {
      try {
        if (!isMountedRef.current) return;
        
        setLoading(true);
        console.log("Cargando solicitudes con filtro:", estadoFiltro);
        
        // Verificar si tenemos datos en caché y si son recientes (menos de 30 segundos)
        const cacheKey = `solicitudes-${estadoFiltro}`;
        const now = Date.now();
        const cachedData = cacheRef.current[cacheKey];
        
        if (cachedData && (now - cachedData.timestamp < 30000)) {
          console.log("Usando datos en caché para solicitudes:", estadoFiltro);
          setSolicitudes(cachedData.data);
          setLoading(false);
          return;
        }
        
        // Construir la URL según el filtro
        let url = '/api/solicitudes';
        if (estadoFiltro && estadoFiltro !== 'todas') {
          url += `?estado=${encodeURIComponent(estadoFiltro)}`;
        }
        
        console.log("URL de solicitudes:", url);
        const response = await fetch(url, {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache'
          }
        });
        
        if (!response.ok) {
          throw new Error("Error al cargar solicitudes");
        }
        
        const data = await response.json();
        console.log("Solicitudes cargadas:", data);
        
        // Guardar en caché
        cacheRef.current[cacheKey] = {
          data,
          timestamp: now
        };
        
        if (isMountedRef.current) {
          setSolicitudes(data);
        }
      } catch (error) {
        console.error("Error al cargar solicitudes:", error);
        toast.error("Error al cargar solicitudes");
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
        const cacheKey = `solicitudes-${estadoFiltro}`;
        delete cacheRef.current[cacheKey];
        localStorage.removeItem("refreshTimestamp");
      }
      cargarSolicitudes();
      localStorage.removeItem("lastRefreshedSection");
    } else {
      cargarSolicitudes();
    }
  }, [estadoFiltro]);

  const cambiarEstado = async (id: number, nuevoEstado: string) => {
    try {
      console.log(`Cambiando estado de solicitud ${id} a ${nuevoEstado}`);
      const response = await fetch(`/api/solicitudes/${id}/estado`, {
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
        // Si estamos mostrando todas las solicitudes, actualizamos el estado de la solicitud
        setSolicitudes(prev => 
          prev.map(solicitud => 
            solicitud.id === id ? { ...solicitud, estado: nuevoEstado } : solicitud
          )
        );
      } else {
        // Si estamos filtrando por estado, eliminamos la solicitud de la lista
        setSolicitudes(prev => 
          prev.filter(solicitud => solicitud.id !== id)
        );
      }

      toast.success(`Solicitud marcada como ${nuevoEstado.toLowerCase()}`);
    } catch (error) {
      console.error("Error al cambiar estado:", error);
      toast.error(`Error al actualizar el estado: ${error instanceof Error ? error.message : 'Error desconocido'}`);
    }
  };

  if (loading) {
    return <div className="text-center py-2 sm:py-4 text-sm sm:text-base">Cargando solicitudes...</div>;
  }

  if (solicitudes.length === 0) {
    return <div className="text-center py-2 sm:py-4 text-sm sm:text-base">No hay solicitudes {estadoFiltro === "todas" ? "" : `en estado "${estadoFiltro}"`}</div>;
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      {solicitudes.map((solicitud) => (
        <Card key={solicitud.id} className={`p-2 sm:p-4 ${solicitud.estado === "Registrada" ? "opacity-70" : ""} hover:shadow-md transition-shadow duration-200`}>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm sm:text-base font-medium">Solicitud #{solicitud.id}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {new Date(solicitud.creadoEn).toLocaleDateString()}
              </p>
            </div>
            <Badge
              className={`text-xs px-1.5 py-0.5 sm:text-sm sm:px-2 sm:py-1 ${
                solicitud.estado === "Pendiente"
                  ? "outline"
                  : solicitud.estado === "Completada"
                  ? "bg-green-500 hover:bg-green-600"
                  : solicitud.estado === "Cancelada"
                  ? "bg-red-600 hover:bg-red-700"
                  : solicitud.estado === "Registrada"
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-gray-500 hover:bg-gray-600"
              } transition-colors`}
            >
              {solicitud.estado}
            </Badge>
          </div>

          <div className="mt-2 space-y-0.5 sm:space-y-1">
            <p className="text-xs sm:text-sm"><span className="font-medium">Dirección:</span> {solicitud.direccion}</p>
            <p className="text-xs sm:text-sm"><span className="font-medium">Contacto:</span> {solicitud.contactoNombre}</p>
            <p className="text-xs sm:text-sm"><span className="font-medium">Teléfono:</span> {solicitud.contactoTel || "No proporcionado"}</p>
            {solicitud.descripcion && (
              <p className="text-xs sm:text-sm"><span className="font-medium">Descripción:</span> {solicitud.descripcion}</p>
            )}
          </div>

          <div className="mt-2 sm:mt-3">
            <h4 className="font-medium text-xs sm:text-sm">Artículos solicitados:</h4>
            <ul className="list-disc list-inside mt-0.5 sm:mt-1">
              {solicitud.articulos && solicitud.articulos.length > 0 ? (
                solicitud.articulos.map((articulo) => (
                  <li key={articulo.id} className="text-xs sm:text-sm">
                    {articulo.tipoArticulo.nombre} ({articulo.cantidad})
                  </li>
                ))
              ) : (
                <li className="text-xs sm:text-sm text-muted-foreground">No hay artículos</li>
              )}
            </ul>
          </div>

          {solicitud.estado === "Pendiente" && (
            <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => router.push(`/admin/editar-solicitud/${solicitud.id}`)}
                className="flex-1 h-7 text-xs sm:h-8 sm:text-sm hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-colors"
              >
                <Edit className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Editar
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={() => cambiarEstado(solicitud.id, "Completada")}
                className="flex-1 h-7 text-xs sm:h-8 sm:text-sm default"
              >
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Completada
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => cambiarEstado(solicitud.id, "Cancelada")}
                className="flex-1 h-7 text-xs sm:h-8 sm:text-sm bg-red-600 hover:bg-red-700 text-white transition-colors"
              >
                <XCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Cancelar
              </Button>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
} 