"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import FormularioLimpieza from "@/components/solicitar/FormularioLimpieza";

export default function SolicitarLimpiezaPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSuccess = () => {
    setFormSubmitted(true);
  };

  return (
    <div className="container mx-auto py-4 space-y-4 px-4 sm:px-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Solicitud de Limpieza</h1>
        <p className="text-muted-foreground">
          Solicita ayuda para limpiar tu hogar o negocio tras las inundaciones
        </p>
      </div>

      {formSubmitted ? (
        <Card className="shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg sm:text-xl">¡Solicitud enviada con éxito!</CardTitle>
            <CardDescription>
              Gracias por tu solicitud. Nuestros voluntarios trabajarán para atenderla lo antes posible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Un voluntario se pondrá en contacto contigo para coordinar la visita. Por favor, mantén tu teléfono disponible.
              </p>
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
        <FormularioLimpieza onSuccess={handleSuccess} />
      )}

      <div className="mt-8 text-sm text-muted-foreground">
        <h2 className="font-medium text-foreground mb-2">Acerca de las solicitudes de limpieza</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Las solicitudes son atendidas según su urgencia y disponibilidad de voluntarios.</li>
          <li>Nuestros equipos de limpieza son voluntarios que donan su tiempo para ayudar.</li>
          <li>El servicio es completamente gratuito y no debes pagar ningún monto a los voluntarios.</li>
          <li>Por favor, sé lo más específico posible al describir la situación para que podamos evaluar adecuadamente.</li>
          <li>En caso de emergencias que pongan en riesgo tu vida, comunícate con los servicios de emergencia al 911.</li>
        </ul>
      </div>
    </div>
  );
} 