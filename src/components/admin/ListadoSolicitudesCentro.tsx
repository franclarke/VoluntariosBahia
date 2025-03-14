"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Package } from "lucide-react";

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

export default function ListadoSolicitudesCentro() {
  const [solicitudes, setSolicitudes] = useState<SolicitudCentro[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarSolicitudes = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/solicitudes-centro");
        if (!response.ok) {
          throw new Error("Error al cargar solicitudes de centros");
        }
        const data = await response.json();
        setSolicitudes(data);
      } catch (error) {
        console.error("Error:", error);
        toast.error("Error al cargar solicitudes de centros");
      } finally {
        setLoading(false);
      }
    };

    cargarSolicitudes();
  }, []);

  const aprobarSolicitud = async (id: number) => {
    try {
      const response = await fetch(`/api/solicitudes-centro/${id}/aprobar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (!response.ok) {
        throw new Error("Error al aprobar la solicitud");
      }

      // Actualizar el estado local
      setSolicitudes(prev =>
        prev.map(solicitud =>
          solicitud.id === id ? { ...solicitud, estado: "Aprobada" } : solicitud
        )
      );

      toast.success("Solicitud aprobada correctamente");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al aprobar la solicitud");
    }
  };

  const rechazarSolicitud = async (id: number) => {
    try {
      const response = await fetch(`/api/solicitudes-centro/${id}/rechazar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (!response.ok) {
        throw new Error("Error al rechazar la solicitud");
      }

      // Actualizar el estado local
      setSolicitudes(prev =>
        prev.map(solicitud =>
          solicitud.id === id ? { ...solicitud, estado: "Rechazada" } : solicitud
        )
      );

      toast.success("Solicitud rechazada correctamente");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al rechazar la solicitud");
    }
  };

  if (loading) {
    return <div className="text-center py-4">Cargando solicitudes de centros...</div>;
  }

  if (solicitudes.length === 0) {
    return <div className="text-center py-4">No hay solicitudes de centros registradas</div>;
  }

  return (
    <div className="space-y-4">
      {solicitudes.map((solicitud) => (
        <Card key={solicitud.id} className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">Solicitud #{solicitud.id}</h3>
              <p className="text-sm text-muted-foreground">
                {new Date(solicitud.createdAt).toLocaleDateString()}
              </p>
            </div>
            <Badge
              className={
                solicitud.estado === "Pendiente"
                  ? "bg-yellow-500"
                  : solicitud.estado === "Aprobada"
                  ? "bg-green-500"
                  : "bg-red-500"
              }
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

          {solicitud.estado === "Pendiente" && (
            <div className="mt-4 flex gap-2">
              <Button
                size="sm"
                variant="default"
                className="flex-1"
                onClick={() => aprobarSolicitud(solicitud.id)}
              >
                Aprobar
              </Button>
              <Button
                size="sm"
                variant="destructive"
                className="flex-1"
                onClick={() => rechazarSolicitud(solicitud.id)}
              >
                Rechazar
              </Button>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
} 