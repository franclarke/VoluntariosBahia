"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FormularioSolicitud from "@/components/solicitar/FormularioSolicitud";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function SolicitarDonacionPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSuccess = () => {
    setFormSubmitted(true);
  };

  return (
    <div className="container mx-auto py-4 space-y-4 px-4 sm:px-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Solicitud de Donación</h1>
        <p className="text-muted-foreground">
          Completa el formulario para solicitar artículos que necesitas
        </p>
      </div>

      {formSubmitted ? (
        <Card className="shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg sm:text-xl">¡Solicitud enviada con éxito!</CardTitle>
            <CardDescription>
              Gracias por tu solicitud. Nuestros voluntarios trabajarán para atender tus necesidades lo antes posible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Un voluntario se pondrá en contacto contigo para coordinar la entrega. Por favor, mantén tu teléfono disponible.
              </p>
              <div className="flex justify-center">
                <Button
                  onClick={() => setFormSubmitted(false)}
                  variant="outline"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Realizar otra solicitud
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <FormularioSolicitud onSuccess={handleSuccess} />
      )}

      <div className="mt-8 text-sm text-muted-foreground">
        <h2 className="font-medium text-foreground mb-2">Acerca de las solicitudes de donación</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Las solicitudes son atendidas según su urgencia y disponibilidad de artículos.</li>
          <li>Los artículos son donados por personas solidarias y transportados por voluntarios.</li>
          <li>El servicio es completamente gratuito y no debes pagar ningún monto a los voluntarios.</li>
          <li>Por favor, sé lo más específico posible en tu solicitud para que podamos ayudarte mejor.</li>
          <li>Recuerda que los recursos son limitados. Solicita solo lo que realmente necesites.</li>
        </ul>
      </div>
    </div>
  );
} 