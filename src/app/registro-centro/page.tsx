"use client";

import RegistroCentro from "@/components/admin/RegistroCentro";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function RegistroCentroPage() {
  return (
    <div className="container mx-auto py-6 max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle>Registrar Punto de Donación</CardTitle>
          <CardDescription>
            Completa el formulario para registrar un nuevo punto de donación
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegistroCentro />
        </CardContent>
      </Card>
    </div>
  );
} 