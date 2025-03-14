"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import EditarSolicitud from "@/components/admin/EditarSolicitud";
import { useParams } from "next/navigation";

export default function EditarSolicitudPage() {
  const params = useParams();
  const solicitudId = parseInt(params.id as string);

  return (
    <div className="container mx-auto py-6 max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle>Editar Solicitud de Donación</CardTitle>
          <CardDescription>
            Modifica los datos de la solicitud de donación
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EditarSolicitud solicitudId={solicitudId} />
        </CardContent>
      </Card>
    </div>
  );
} 