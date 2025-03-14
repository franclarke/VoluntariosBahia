"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ClipboardList,
  Building2,
  PlusCircle,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";

import RegistroSolicitud from "@/components/admin/RegistroSolicitud";
import ListadoPeticiones from "@/components/admin/ListadoPeticiones";
import ListadoSolicitudes from "@/components/admin/ListadoSolicitudes";
import RegistroCentro from "@/components/admin/RegistroCentro";
import ListadoCentros from "@/components/admin/ListadoCentros";
import ListadoSolicitudesCentro from "@/components/admin/ListadoSolicitudesCentro";

export default function AdminPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [leftPanelView, setLeftPanelView] = useState<"solicitudes" | "solicitudesCentro">("solicitudes");
  const [rightPanelView, setRightPanelView] = useState<"registroSolicitudes" | "registroCentro">("registroSolicitudes");
  const [solicitudesFilter, setSolicitudesFilter] = useState<"Pendiente" | "Entregada" | "Cancelada">("Pendiente");
  const [centrosFilter, setCentrosFilter] = useState<"activo" | "inactivo">("activo");

  const handleLogout = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/admin/logout", {
        method: "POST",
      });
      
      if (!response.ok) {
        throw new Error("Error al cerrar sesión");
      }
      
      toast.success("Sesión cerrada correctamente");
      router.push("/admin/login");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al cerrar sesión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Panel de Administración</h1>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            disabled={loading}
          >
            {loading ? "Cerrando sesión..." : "Cerrar sesión"}
          </Button>
        </div>
        <p className="text-muted-foreground">
          Gestiona puntos de distribución, solicitudes y peticiones
        </p>
      </div>

      {/* Paneles principales */}
      <ResizablePanelGroup direction="horizontal" className="min-h-[300px] rounded-lg border">
        <ResizablePanel defaultSize={50} minSize={20}>
          <Tabs 
            defaultValue="solicitudes" 
            className="w-full" 
            onValueChange={(value) => setLeftPanelView(value as "solicitudes" | "solicitudesCentro")}
          >
            <div className="p-4 border-b">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="solicitudes" className="flex items-center gap-2">
                  <ClipboardList className="h-4 w-4" />
                  Solicitudes de donaciones
                </TabsTrigger>
                <TabsTrigger value="solicitudesCentro" className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  Solicitudes de centros
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="solicitudes" className="p-4">
              <Card>
                <CardHeader>
                  <CardTitle>Solicitudes de Donación</CardTitle>
                  <CardDescription>
                    Visualice y gestione todas las solicitudes de donaciones registradas en el sistema.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Seleccione una opción en el panel derecho para registrar una nueva solicitud.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="solicitudesCentro" className="p-4">
              <Card>
                <CardHeader>
                  <CardTitle>Solicitudes de Centros</CardTitle>
                  <CardDescription>
                    Visualice y gestione todas las solicitudes de centros registradas en el sistema.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Seleccione una opción en el panel derecho para registrar un nuevo centro.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </ResizablePanel>
        
        <ResizableHandle withHandle />
        
        <ResizablePanel defaultSize={50} minSize={20} maxSize={80}>
          <Tabs 
            defaultValue="registroSolicitudes" 
            className="w-full" 
            onValueChange={(value) => setRightPanelView(value as "registroSolicitudes" | "registroCentro")}
          >
            <div className="p-4 border-b">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="registroSolicitudes" className="flex items-center gap-2">
                  <PlusCircle className="h-4 w-4" />
                  Registrar solicitud de donación
                </TabsTrigger>
                <TabsTrigger value="registroCentro" className="flex items-center gap-2">
                  <PlusCircle className="h-4 w-4" />
                  Registrar un centro
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="registroSolicitudes" className="p-4">
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
            
            <TabsContent value="registroCentro" className="p-4">
              <Card>
                <CardHeader>
                  <CardTitle>Registrar Centro de Distribución</CardTitle>
                  <CardDescription>
                    Registra un nuevo centro de entrega de donaciones
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RegistroCentro />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </ResizablePanel>
      </ResizablePanelGroup>

      {/* Paneles inferiores */}
      <ResizablePanelGroup direction="horizontal" className="min-h-[400px] rounded-lg border">
        <ResizablePanel defaultSize={50} minSize={20}>
          <div className="p-4 h-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Listado de Solicitudes</h2>
              <div className="flex gap-2">
                <Button 
                  variant={solicitudesFilter === "Pendiente" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setSolicitudesFilter("Pendiente")}
                  className="flex items-center gap-1"
                >
                  <Clock className="h-4 w-4" />
                  Pendientes
                </Button>
                <Button 
                  variant={solicitudesFilter === "Entregada" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setSolicitudesFilter("Entregada")}
                  className="flex items-center gap-1"
                >
                  <CheckCircle className="h-4 w-4" />
                  Entregadas
                </Button>
                <Button 
                  variant={solicitudesFilter === "Cancelada" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setSolicitudesFilter("Cancelada")}
                  className="flex items-center gap-1"
                >
                  <XCircle className="h-4 w-4" />
                  Canceladas
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <ListadoSolicitudes estadoFiltro={solicitudesFilter} />
            </div>
          </div>
        </ResizablePanel>
        
        <ResizableHandle withHandle />
        
        <ResizablePanel defaultSize={50} minSize={20} maxSize={80}>
          <div className="p-4 h-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Listado de Centros</h2>
              <div className="flex gap-2">
                <Button 
                  variant={centrosFilter === "activo" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setCentrosFilter("activo")}
                  className="flex items-center gap-1"
                >
                  <CheckCircle className="h-4 w-4" />
                  Activos
                </Button>
                <Button 
                  variant={centrosFilter === "inactivo" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setCentrosFilter("inactivo")}
                  className="flex items-center gap-1"
                >
                  <XCircle className="h-4 w-4" />
                  Inactivos
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <ListadoCentros activoFiltro={centrosFilter === "activo"} />
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
} 