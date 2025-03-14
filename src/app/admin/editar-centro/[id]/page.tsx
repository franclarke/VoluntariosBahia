"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import EditarCentro from "@/components/admin/EditarCentro";
import { useParams } from "next/navigation";

export default function EditarCentroPage() {
  const params = useParams();
  const centroId = parseInt(params.id as string);

  return (
    <div className="container mx-auto py-6 max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle>Editar Centro de Distribución</CardTitle>
          <CardDescription>
            Modifica los datos del centro de distribución
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EditarCentro centroId={centroId} />
        </CardContent>
      </Card>
    </div>
  );
} 