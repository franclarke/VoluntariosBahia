"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FormularioSolicitud from "@/components/solicitar/FormularioSolicitud";
import { HandHeart, ArrowLeft } from "lucide-react";

export default function SolicitarPage() {
  const [enviado, setEnviado] = useState(false);

  return (
    <div className="container mx-auto py-4 px-4 sm:px-6 max-w-3xl">
      <div className="flex flex-col space-y-2 mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight flex items-center">
          <HandHeart className="mr-2 h-6 w-6 text-primary" />
          Solicitar Donaciones
        </h1>
        <p className="text-muted-foreground">
          Completa el formulario para solicitar artículos que necesitas. Los voluntarios de Bahía podrán ver tu solicitud y ayudarte.
        </p>
      </div>

      {enviado ? (
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl text-center text-green-600">¡Solicitud enviada correctamente!</CardTitle>
            <CardDescription className="text-center">
              Tu solicitud ha sido recibida y será visible para los voluntarios.
              Pronto alguien se pondrá en contacto contigo para coordinar la entrega.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center pt-4">
            <Button 
              onClick={() => setEnviado(false)}
              className="w-full max-w-xs"
              variant="outline"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
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