"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import RegistroOferta from "@/components/admin/RegistroOferta";
import RegistroSolicitud from "@/components/admin/RegistroSolicitud";

export default function AdminPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Panel de Administración</h1>
        <p className="text-muted-foreground">
          Registra puntos de distribución (ofertas) y necesidades (solicitudes)
        </p>
      </div>

      <Tabs defaultValue="ofertas" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="ofertas">Registrar Ofertas</TabsTrigger>
          <TabsTrigger value="solicitudes">Registrar Solicitudes</TabsTrigger>
        </TabsList>
        <TabsContent value="ofertas">
          <Card>
            <CardHeader>
              <CardTitle>Registrar Punto de Distribución</CardTitle>
              <CardDescription>
                Registra un punto donde hay artículos disponibles para ser distribuidos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RegistroOferta />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="solicitudes">
          <Card>
            <CardHeader>
              <CardTitle>Registrar Necesidad</CardTitle>
              <CardDescription>
                Registra un punto donde se necesitan artículos específicos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RegistroSolicitud />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 