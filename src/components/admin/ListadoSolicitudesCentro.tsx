"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Package, Check, Trash2 } from "lucide-react";

interface ArticuloSolicitado {
  id: number;
  tipoArticulo: {
    id: number;
    nombre: string;
  };
  cantidad: number;
}

interface SolicitudCentro {
  id: number;
  direccion: string;
  responsable: string;
  telefono: string | null;
  horarioApertura: string | null;
  horarioCierre: string | null;
  latitud: number;
  longitud: number;
  estado: string;
  createdAt: string;
  articulosSolicitados: ArticuloSolicitado[];
}

interface ListadoSolicitudesCentroProps {
  estadoFiltro?: string;
}

export default function ListadoSolicitudesCentro({ estadoFiltro = "Pendiente" }: ListadoSolicitudesCentroProps) {
  const [solicitudes, setSolicitudes] = useState<SolicitudCentro[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const cacheRef = useRef<{[key: string]: {data: SolicitudCentro[], timestamp: number}}>({});
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
        setError(null);
        
        console.log("Solicitando datos de solicitudes de centros con filtro:", estadoFiltro);
        
        // Verificar si tenemos datos en caché y si son recientes (menos de 30 segundos)
        const cacheKey = `solicitudes-centro-${estadoFiltro}`;
        const now = Date.now();
        const cachedData = cacheRef.current[cacheKey];
        
        if (cachedData && (now - cachedData.timestamp < 30000)) {
          console.log("Usando datos en caché para solicitudes de centros:", estadoFiltro);
          setSolicitudes(cachedData.data);
          setLoading(false);
          return;
        }
        
        // Construir la URL según el filtro
        let url = "/api/solicitudes-centro";
        if (estadoFiltro && estadoFiltro !== 'todas') {
          url += `?estado=${encodeURIComponent(estadoFiltro)}`;
        }
        
        console.log("URL de solicitudes de centros:", url);
        
        const response = await fetch(url, {
          headers: {
            "Cache-Control": "no-cache"
          },
          cache: "no-store"
        });
        
        if (response.status === 401) {
          setError("Sesión expirada o no autorizada. Por favor, inicie sesión nuevamente.");
          setLoading(false);
          return;
        }
        
        if (!response.ok) {
          throw new Error(`Error al cargar solicitudes de centros: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log("Solicitudes de centros cargadas:", data);
        
        // Filtrar las solicitudes según el estado si es necesario
        const solicitudesFiltradas = estadoFiltro === 'todas' 
          ? data 
          : data.filter((solicitud: SolicitudCentro) => solicitud.estado === estadoFiltro);
        
        // Guardar en caché
        cacheRef.current[cacheKey] = {
          data: solicitudesFiltradas,
          timestamp: now
        };
        
        if (isMountedRef.current) {
          setSolicitudes(solicitudesFiltradas);
        }
      } catch (error) {
        console.error("Error:", error);
        if (isMountedRef.current) {
          setError("Error al cargar solicitudes de centros. Intente nuevamente más tarde.");
          toast.error("Error al cargar solicitudes de centros");
        }
      } finally {
        if (isMountedRef.current) {
          setLoading(false);
        }
      }
    };

    // Verificar si debemos recargar basado en el localStorage
    const lastRefreshedSection = localStorage.getItem("lastRefreshedSection");
    const refreshTimestamp = localStorage.getItem("refreshTimestamp");
    
    if (lastRefreshedSection === "solicitudesCentro" || lastRefreshedSection === "all") {
      // Invalidar caché si se solicitó un refresh
      if (refreshTimestamp) {
        const cacheKey = `solicitudes-centro-${estadoFiltro}`;
        delete cacheRef.current[cacheKey];
        localStorage.removeItem("refreshTimestamp");
      }
      cargarSolicitudes();
      localStorage.removeItem("lastRefreshedSection");
    } else {
      cargarSolicitudes();
    }
  }, [estadoFiltro]);

  const marcarComoAtendida = async (id: number) => {
    try {
      const response = await fetch(`/api/solicitudes-centro/${id}/atender`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (response.status === 401) {
        toast.error("Sesión expirada o no autorizada. Por favor, inicie sesión nuevamente.");
        return;
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al marcar como atendida la solicitud");
      }

      // Actualizar el estado local
      if (estadoFiltro === 'todas') {
        setSolicitudes(prev =>
          prev.map(solicitud =>
            solicitud.id === id ? { ...solicitud, estado: "Atendida" } : solicitud
          )
        );
      } else {
        // Si estamos filtrando, quitamos la solicitud de la lista
        setSolicitudes(prev => prev.filter(solicitud => solicitud.id !== id));
      }

      toast.success("Solicitud marcada como atendida correctamente");
    } catch (error) {
      console.error("Error:", error);
      toast.error(`Error al marcar como atendida la solicitud: ${error instanceof Error ? error.message : 'Error desconocido'}`);
    }
  };

  const eliminarSolicitud = async (id: number) => {
    try {
      if (!confirm("¿Está seguro que desea eliminar esta solicitud? Esta acción no se puede deshacer.")) {
        return;
      }

      const response = await fetch(`/api/solicitudes-centro/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (response.status === 401) {
        toast.error("Sesión expirada o no autorizada. Por favor, inicie sesión nuevamente.");
        return;
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al eliminar la solicitud");
      }

      // Eliminar la solicitud de la lista
      setSolicitudes(prev => prev.filter(solicitud => solicitud.id !== id));
      toast.success("Solicitud eliminada correctamente");
    } catch (error) {
      console.error("Error:", error);
      toast.error(`Error al eliminar la solicitud: ${error instanceof Error ? error.message : 'Error desconocido'}`);
    }
  };

  if (loading) {
    return <div className="text-center py-4">Cargando solicitudes de centros...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-4 text-red-500">
        <p>{error}</p>
        <Button 
          variant="outline" 
          className="mt-2"
          onClick={() => window.location.href = "/admin/login"}
        >
          Ir a iniciar sesión
        </Button>
      </div>
    );
  }

  if (solicitudes.length === 0) {
    return <div className="text-center py-4">No hay solicitudes de centros registradas</div>;
  }

  return (
    <div className="space-y-4">
      {solicitudes.map((solicitud) => (
        <Card key={solicitud.id} className="p-4 hover:shadow-md transition-shadow duration-200 border-slate-200 dark:border-slate-700">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">Solicitud #{solicitud.id}</h3>
              <p className="text-sm text-muted-foreground">
                {new Date(solicitud.createdAt).toLocaleDateString()}
              </p>
            </div>
            <Badge
              className={`px-2 py-1 ${
                solicitud.estado === "Pendiente"
                  ? "bg-yellow-500 hover:bg-yellow-600"
                  : solicitud.estado === "Atendida"
                  ? "bg-blue-700 hover:bg-blue-800"
                  : "bg-gray-500 hover:bg-gray-600"
              } transition-colors`}
            >
              {solicitud.estado}
            </Badge>
          </div>

          <div className="mt-3 space-y-2">
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-1 text-muted-foreground" />
              <span>{solicitud.direccion}</span>
            </div>
            
            <div className="flex items-start gap-2">
              <span className="font-medium">Responsable:</span>
              <span>{solicitud.responsable}</span>
            </div>
            
            {solicitud.telefono && (
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 text-muted-foreground" />
                <span>{solicitud.telefono}</span>
              </div>
            )}
            
            {(solicitud.horarioApertura || solicitud.horarioCierre) && (
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-1 text-muted-foreground" />
                <span>
                  {solicitud.horarioApertura && solicitud.horarioCierre 
                    ? `${solicitud.horarioApertura} - ${solicitud.horarioCierre}`
                    : solicitud.horarioApertura || solicitud.horarioCierre}
                </span>
              </div>
            )}
          </div>

          <div className="mt-3">
            <h4 className="font-medium text-sm flex items-center gap-1">
              <Package className="h-4 w-4" /> Artículos disponibles:
            </h4>
            <ul className="list-disc list-inside mt-1">
              {solicitud.articulosSolicitados.map((articulo) => (
                <li key={articulo.id} className="text-sm">
                  {articulo.tipoArticulo.nombre} ({articulo.cantidad})
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-2 mt-4">
            {solicitud.estado === "Pendiente" && (
              <>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-colors"
                  onClick={() => marcarComoAtendida(solicitud.id)}
                >
                  <Check className="h-4 w-4 mr-2" />
                  Atendida
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white transition-colors"
                  onClick={() => eliminarSolicitud(solicitud.id)}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Eliminar
                </Button>
              </>
            )}
            {solicitud.estado !== "Pendiente" && (
              <Button
                size="sm"
                variant="destructive"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white transition-colors"
                onClick={() => eliminarSolicitud(solicitud.id)}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Eliminar
              </Button>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
} 