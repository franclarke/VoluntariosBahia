"use client";

import RegistroCentro from "@/components/admin/RegistroCentro";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function RegistroCentroPage() {
  return (
    <div className="container mx-auto py-6 max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle>Registrar Centro de Distribución</CardTitle>
          <CardDescription>
            Completa el formulario para registrar un nuevo centro de entrega de donaciones
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegistroCentro />
        </CardContent>
      </Card>
    </div>
  );
} 