"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Map } from "lucide-react";

// Importamos el mapa de forma dinámica para evitar problemas con SSR
const MapaVoluntario = dynamic(() => import("@/components/voluntario/MapaVoluntario"), {
  ssr: false,
  loading: () => <div className="h-[500px] w-full bg-muted flex items-center justify-center">Cargando mapa...</div>
});

export default function VoluntarioPage() {
  // Filtros de visibilidad
  const [mostrarPuntosDonacion, setMostrarPuntosDonacion] = useState(true);
  const [mostrarSolicitudesDonacion, setMostrarSolicitudesDonacion] = useState(true);
  const [mostrarSolicitudesLimpieza, setMostrarSolicitudesLimpieza] = useState(true);

  return (
    <div className="container mx-auto py-4 space-y-4 px-4 sm:px-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Voluntarios Bahía</h1>
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
            {/* Filtros de visibilidad */}
            <div className="bg-muted p-3 rounded-md">
              <h3 className="text-sm font-medium flex items-center mb-3">
                <Map className="mr-2 h-4 w-4" />
                Mostrar en el mapa
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="mostrar-puntos-donacion" 
                    checked={mostrarPuntosDonacion}
                    onCheckedChange={() => setMostrarPuntosDonacion(!mostrarPuntosDonacion)}
                  />
                  <Label
                    htmlFor="mostrar-puntos-donacion"
                    className="text-sm font-medium leading-none flex items-center peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                    Centros de donación
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="mostrar-solicitudes-donacion" 
                    checked={mostrarSolicitudesDonacion}
                    onCheckedChange={() => setMostrarSolicitudesDonacion(!mostrarSolicitudesDonacion)}
                  />
                  <Label
                    htmlFor="mostrar-solicitudes-donacion"
                    className="text-sm font-medium leading-none flex items-center peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    <span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-2"></span>
                    Solicitudes de donación
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="mostrar-solicitudes-limpieza" 
                    checked={mostrarSolicitudesLimpieza}
                    onCheckedChange={() => setMostrarSolicitudesLimpieza(!mostrarSolicitudesLimpieza)}
                  />
                  <Label
                    htmlFor="mostrar-solicitudes-limpieza"
                    className="text-sm font-medium leading-none flex items-center peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                    Solicitudes de limpieza
                  </Label>
                </div>
              </div>
            </div>

            <div className="h-[500px] w-full rounded-md overflow-hidden border">
              <MapaVoluntario 
                mostrarPuntosDonacion={mostrarPuntosDonacion}
                mostrarSolicitudesDonacion={mostrarSolicitudesDonacion}
                mostrarSolicitudesLimpieza={mostrarSolicitudesLimpieza}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 