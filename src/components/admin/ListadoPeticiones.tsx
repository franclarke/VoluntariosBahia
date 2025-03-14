"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

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
}

export default function ListadoPeticiones() {
  const [peticiones, setPeticiones] = useState<Peticion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarPeticiones = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/peticiones");
        if (!response.ok) {
          throw new Error("Error al cargar peticiones");
        }
        const data = await response.json();
        setPeticiones(data);
      } catch (error) {
        console.error("Error:", error);
        toast.error("Error al cargar peticiones");
      } finally {
        setLoading(false);
      }
    };

    cargarPeticiones();
  }, []);

  const cambiarEstado = async (id: number, nuevoEstado: string) => {
    try {
      const response = await fetch(`/api/peticiones/${id}/estado`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ estado: nuevoEstado }),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar estado");
      }

      setPeticiones(prev =>
        prev.map(peticion =>
          peticion.id === id ? { ...peticion, estado: nuevoEstado } : peticion
        )
      );

      toast.success(`Petición marcada como ${nuevoEstado}`);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al actualizar estado");
    }
  };

  if (loading) {
    return <div className="text-center py-4">Cargando peticiones...</div>;
  }

  if (peticiones.length === 0) {
    return <div className="text-center py-4">No hay peticiones registradas</div>;
  }

  return (
    <div className="space-y-4">
      {peticiones.map((peticion) => (
        <Card key={peticion.id} className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">Petición #{peticion.id}</h3>
              <p className="text-sm text-muted-foreground">
                {new Date(peticion.creadoEn).toLocaleDateString()}
              </p>
            </div>
            <Badge
              className={
                peticion.estado === "Pendiente"
                  ? "bg-yellow-500"
                  : peticion.estado === "Aprobada"
                  ? "bg-green-500"
                  : peticion.estado === "Rechazada"
                  ? "bg-red-500"
                  : "bg-blue-500"
              }
            >
              {peticion.estado}
            </Badge>
          </div>

          <div className="mt-2 space-y-1">
            <p><strong>Dirección:</strong> {peticion.direccion}</p>
            <p><strong>Contacto:</strong> {peticion.contactoNombre}</p>
            <p><strong>Teléfono:</strong> {peticion.contactoTel || "No proporcionado"}</p>
          </div>

          <div className="mt-3">
            <h4 className="font-medium text-sm">Artículos ofrecidos:</h4>
            <ul className="list-disc list-inside mt-1">
              {peticion.articulos.map((articulo) => (
                <li key={articulo.id} className="text-sm">
                  {articulo.tipoArticulo.nombre} ({articulo.cantidad})
                </li>
              ))}
            </ul>
          </div>

          {peticion.estado === "Pendiente" && (
            <div className="mt-4 flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="flex-1"
                onClick={() => cambiarEstado(peticion.id, "Aprobada")}
              >
                Aprobar
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="flex-1"
                onClick={() => cambiarEstado(peticion.id, "Rechazada")}
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