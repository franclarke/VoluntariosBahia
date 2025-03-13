"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FormularioSolicitud from "@/components/solicitar/FormularioSolicitud";

export default function SolicitarPage() {
  const [enviado, setEnviado] = useState(false);

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Solicitar Donaciones</h1>
        <p className="text-muted-foreground">
          Completa el formulario para solicitar los artículos que necesitas
        </p>
      </div>

      {enviado ? (
        <Card>
          <CardHeader>
            <CardTitle>¡Solicitud enviada correctamente!</CardTitle>
            <CardDescription>
              Tu solicitud ha sido recibida y será revisada por nuestros administradores.
              Te contactaremos pronto para confirmar los detalles.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => setEnviado(false)}
              className="w-full"
            >
              Realizar otra solicitud
            </Button>
          </CardContent>
        </Card>
      ) : (
        <FormularioSolicitud onSuccess={() => setEnviado(true)} />
      )}
    </div>
  );
} 