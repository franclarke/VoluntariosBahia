"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FormularioCentro from "@/components/solicitar/FormularioCentro";

export default function SolicitarCentroPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSuccess = () => {
    setFormSubmitted(true);
  };

  return (
    <div className="container mx-auto py-4 space-y-4 px-4 sm:px-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Solicitud de Registro de Punto de Donación</h1>
        <p className="text-muted-foreground">
          Registra tu centro, organización o comercio como punto de donación
        </p>
      </div>

      {formSubmitted ? (
        <Card className="shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg sm:text-xl">¡Solicitud enviada con éxito!</CardTitle>
            <CardDescription>
              Gracias por ponerte a disposición de la comunidad.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-center">
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-primary hover:underline"
                >
                  Realizar otra solicitud
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <FormularioCentro onSuccess={handleSuccess} />
      )}

      <div className="mt-8 text-sm text-muted-foreground">
        <h2 className="font-medium text-foreground mb-2">Acerca de los puntos de donación</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Los puntos de donación son lugares donde los donantes pueden llevar sus donaciones.</li>
          <li>Pueden ser organizaciones, comercios, iglesias, centros comunitarios, etc.</li>
          <li>Tu punto aparecerá en el mapa una vez sea verificado y aprobado por los administradores.</li>
          <li>Es importante mantener actualizada la información sobre qué artículos necesitan.</li>
          <li>Los voluntarios transportarán donaciones hacia y desde tu punto según sea necesario.</li>
        </ul>
      </div>
    </div>
  );
} 