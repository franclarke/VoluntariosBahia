"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

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
  latitud: number;
  longitud: number;
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
  const [solicitudesFiltradas, setSolicitudesFiltradas] = useState<Solicitud[]>([]);

  useEffect(() => {
    const cargarSolicitudes = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/solicitudes");
        if (!response.ok) {
          throw new Error("Error al cargar solicitudes");
        }
        const data = await response.json();
        setSolicitudes(data);
      } catch (error) {
        console.error("Error:", error);
        toast.error("Error al cargar solicitudes");
      } finally {
        setLoading(false);
      }
    };

    cargarSolicitudes();
  }, []);

  // Filtrar solicitudes cuando cambia el estado del filtro o las solicitudes
  useEffect(() => {
    if (estadoFiltro === "todas") {
      setSolicitudesFiltradas(solicitudes);
    } else {
      setSolicitudesFiltradas(solicitudes.filter(s => s.estado === estadoFiltro));
    }
  }, [estadoFiltro, solicitudes]);

  const cambiarEstado = async (id: number, nuevoEstado: string) => {
    try {
      const response = await fetch(`/api/solicitudes/${id}/estado`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ estado: nuevoEstado }),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar estado");
      }

      setSolicitudes(prev =>
        prev.map(solicitud =>
          solicitud.id === id ? { ...solicitud, estado: nuevoEstado } : solicitud
        )
      );

      toast.success(`Solicitud marcada como ${nuevoEstado}`);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al actualizar estado");
    }
  };

  if (loading) {
    return <div className="text-center py-4">Cargando solicitudes...</div>;
  }

  if (solicitudesFiltradas.length === 0) {
    return <div className="text-center py-4">No hay solicitudes {estadoFiltro === "todas" ? "" : `en estado "${estadoFiltro}"`}</div>;
  }

  return (
    <div className="space-y-4">
      {solicitudesFiltradas.map((solicitud) => (
        <Card key={solicitud.id} className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">Solicitud #{solicitud.id}</h3>
              <p className="text-sm text-muted-foreground">
                {new Date(solicitud.creadoEn).toLocaleDateString()}
              </p>
            </div>
            <Badge
              className={
                solicitud.estado === "Pendiente"
                  ? "bg-yellow-500"
                  : solicitud.estado === "Entregada"
                  ? "bg-green-500"
                  : solicitud.estado === "Cancelada"
                  ? "bg-red-500"
                  : "bg-blue-500"
              }
            >
              {solicitud.estado}
            </Badge>
          </div>

          <div className="mt-2 space-y-1">
            <p><strong>Dirección:</strong> {solicitud.direccion}</p>
            <p><strong>Contacto:</strong> {solicitud.contactoNombre}</p>
            <p><strong>Teléfono:</strong> {solicitud.contactoTel || "No proporcionado"}</p>
            {solicitud.descripcion && (
              <p><strong>Descripción:</strong> {solicitud.descripcion}</p>
            )}
          </div>

          <div className="mt-3">
            <h4 className="font-medium text-sm">Artículos solicitados:</h4>
            <ul className="list-disc list-inside mt-1">
              {solicitud.articulos.map((articulo) => (
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
                variant="outline"
                className="flex-1"
                onClick={() => cambiarEstado(solicitud.id, "Entregada")}
              >
                Marcar como Entregada
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="flex-1"
                onClick={() => cambiarEstado(solicitud.id, "Cancelada")}
              >
                Cancelar
              </Button>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
} 