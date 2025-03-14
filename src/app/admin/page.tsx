"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
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
import {
  ClipboardList,
  Building2,
  PlusCircle,
  CheckCircle,
  XCircle,
  Clock,
  Check,
  RefreshCw,
  LogOut,
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
  const [peticionesFilter, setPeticionesFilter] = useState<"Pendiente" | "Atendida" | "todas">("Pendiente");
  const [solicitudesFilter, setSolicitudesFilter] = useState<"Pendiente" | "Completada" | "todas">("Pendiente");
  const [solicitudesCentroFilter, setSolicitudesCentroFilter] = useState<"Pendiente" | "Atendida" | "todas">("Pendiente");
  const [centrosFilter, setCentrosFilter] = useState<"activo" | "inactivo" | "todos">("activo");
  const [mobileTab, setMobileTab] = useState<"panel1" | "panel2" | "panel3" | "panel4">("panel1");
  const [refreshKey, setRefreshKey] = useState(0);
  const [lastRefreshTimestamp, setLastRefreshTimestamp] = useState<Record<string, number>>({});

  // Usar useMemo para evitar re-renders innecesarios
  const memoizedTabs = useMemo(() => {
    return {
      leftPanelView,
      rightPanelView,
      peticionesFilter,
      solicitudesFilter,
      solicitudesCentroFilter,
      centrosFilter,
      mobileTab
    };
  }, [leftPanelView, rightPanelView, peticionesFilter, solicitudesFilter, solicitudesCentroFilter, centrosFilter, mobileTab]);

  const shouldRefreshData = useCallback((section: string): boolean => {
    const now = Date.now();
    const lastRefresh = lastRefreshTimestamp[section] || 0;
    // Solo refrescar si han pasado más de 30 segundos
    return now - lastRefresh > 30000;
  }, [lastRefreshTimestamp]);

  // Añadir un useEffect para manejar la sincronización de estados
  useEffect(() => {
    // Si estamos en la vista móvil y cambiamos a solicitudes de centros
    if (leftPanelView === "solicitudesCentro" && mobileTab === "panel1") {
      setMobileTab("panel3");
    }
  }, [leftPanelView, mobileTab]);

  // Reducir logs para evitar ruido en la consola
  useEffect(() => {
    // Solo loguear en desarrollo
    if (process.env.NODE_ENV === 'development') {
      console.log("Estado actual del panel de administración:", memoizedTabs);
    }
  }, [memoizedTabs]);

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

  const handleRefresh = (section?: "solicitudes" | "centros" | "solicitudesCentro") => {
    console.log("Actualizando datos específicos:", section);
    const now = Date.now();
    
    if (section) {
      setLastRefreshTimestamp(prev => ({
        ...prev,
        [section]: now
      }));
      localStorage.setItem("lastRefreshedSection", section);
      localStorage.setItem("refreshTimestamp", now.toString());
    } else {
      // Si no hay sección específica, actualizar todas
      setLastRefreshTimestamp(prev => ({
        ...prev,
        solicitudes: now,
        centros: now,
        solicitudesCentro: now
      }));
      localStorage.setItem("lastRefreshedSection", "all");
      localStorage.setItem("refreshTimestamp", now.toString());
    }
    
    // Incrementar refreshKey solo para la sección específica
    setRefreshKey(prev => prev + 1);
    toast.success("Actualizando datos...");
  };

  const handlePeticionesFilterChange = (filter: "Pendiente" | "Atendida" | "todas") => {
    // Solo loguear en desarrollo
    if (process.env.NODE_ENV === 'development') {
      console.log("Cambiando filtro de peticiones a:", filter);
    }
    setPeticionesFilter(filter);
  };

  const handleSolicitudesFilterChange = (filter: "Pendiente" | "Completada" | "todas") => {
    // Solo loguear en desarrollo
    if (process.env.NODE_ENV === 'development') {
      console.log("Cambiando filtro de solicitudes a:", filter);
    }
    setSolicitudesFilter(filter);
  };

  const handleSolicitudesCentroFilterChange = (filter: "Pendiente" | "Atendida" | "todas") => {
    // Solo loguear en desarrollo
    if (process.env.NODE_ENV === 'development') {
      console.log("Cambiando filtro de solicitudes de centros a:", filter);
    }
    setSolicitudesCentroFilter(filter);
  };

  const handleCentrosFilterChange = (filter: "activo" | "inactivo" | "todos") => {
    // Solo loguear en desarrollo
    if (process.env.NODE_ENV === 'development') {
      console.log("Cambiando filtro de centros a:", filter);
    }
    setCentrosFilter(filter);
  };

  // Componente para la vista móvil
  const MobileView = () => (
    <Tabs value={mobileTab} onValueChange={(value: string) => {
      // Solo loguear en desarrollo
      if (process.env.NODE_ENV === 'development') {
        console.log("Cambiando tab móvil a:", value);
      }
      setMobileTab(value as "panel1" | "panel2" | "panel3" | "panel4");
      
      // No cambiar otras vistas al cambiar de tab
      if (value === "panel3") {
        setLeftPanelView("solicitudesCentro");
      } else if (value === "panel1") {
        setLeftPanelView("solicitudes");
      }
    }} className="w-full">
      <TabsList className="grid grid-cols-4 mb-4 p-1 bg-slate-100 dark:bg-slate-800">
        <TabsTrigger value="panel1" className="text-xs">
          <div className="flex flex-col items-center">
            <ClipboardList className="h-4 w-4 mb-1" />
            <span className="hidden sm:inline">Solicitudes</span>
          </div>
        </TabsTrigger>
        <TabsTrigger value="panel2" className="text-xs">
          <div className="flex flex-col items-center">
            <PlusCircle className="h-4 w-4 mb-1" />
            <span className="hidden sm:inline">Registrar</span>
          </div>
        </TabsTrigger>
        <TabsTrigger value="panel3" className="text-xs" onClick={() => setLeftPanelView("solicitudesCentro")}>
          <div className="flex flex-col items-center">
            <Building2 className="h-4 w-4 mb-1" />
            <span className="hidden sm:inline">Centros</span>
          </div>
        </TabsTrigger>
        <TabsTrigger value="panel4" className="text-xs">
          <div className="flex flex-col items-center">
            <PlusCircle className="h-4 w-4 mb-1" />
            <span className="hidden sm:inline">Nuevo Centro</span>
          </div>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="panel1" className="mt-0">
        <Card className="shadow-sm border-slate-200 dark:border-slate-700">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-base sm:text-lg">Solicitudes de Donación</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Visualice y gestione todas las solicitudes de donaciones.
                </CardDescription>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => handleRefresh("solicitudes")}
                className="h-8 w-8 p-0 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-2 sm:p-4">
            <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
              <Button 
                variant={peticionesFilter === "todas" ? "default" : "outline"} 
                size="sm"
                onClick={() => handlePeticionesFilterChange("todas")}
                className="flex items-center gap-1 text-xs h-7 px-2 sm:h-8 sm:px-3 sm:text-sm"
              >
                <span>Todas</span>
              </Button>
              <Button 
                variant={peticionesFilter === "Pendiente" ? "default" : "outline"} 
                size="sm"
                onClick={() => handlePeticionesFilterChange("Pendiente")}
                className="flex items-center gap-1 text-xs h-7 px-2 sm:h-8 sm:px-3 sm:text-sm"
              >
                <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Pendientes</span>
              </Button>
              <Button 
                variant={peticionesFilter === "Atendida" ? "default" : "outline"} 
                size="sm"
                onClick={() => handlePeticionesFilterChange("Atendida")}
                className="flex items-center gap-1 text-xs h-7 px-2 sm:h-8 sm:px-3 sm:text-sm"
              >
                <Check className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Atendidas</span>
              </Button>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">Mostrando peticiones con estado: {peticionesFilter}</p>
              <ListadoPeticiones key={getComponentKey("peticiones", peticionesFilter)} estadoFiltro={peticionesFilter} />
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="panel2" className="mt-0">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base sm:text-lg">Registrar Necesidad</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Registra un punto donde se necesitan artículos específicos
            </CardDescription>
          </CardHeader>
          <CardContent className="p-2 sm:p-4">
            <RegistroSolicitud />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="panel3" className="mt-0">
        <Card className="shadow-sm border-slate-200 dark:border-slate-700">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-base sm:text-lg">Centros de Distribución</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Visualice y gestione todos los centros de distribución.
                </CardDescription>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => handleRefresh("centros")}
                className="h-8 w-8 p-0 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-2 sm:p-4">
            <div className="flex gap-1 sm:gap-2 mb-3">
              <Button 
                variant={centrosFilter === "todos" ? "default" : "outline"} 
                size="sm"
                onClick={() => handleCentrosFilterChange("todos")}
                className="flex items-center gap-1 text-xs h-7 px-2 sm:h-8 sm:px-3 sm:text-sm"
              >
                <span>Todos</span>
              </Button>
              <Button 
                variant={centrosFilter === "activo" ? "default" : "outline"} 
                size="sm"
                onClick={() => handleCentrosFilterChange("activo")}
                className="flex items-center gap-1 text-xs h-7 px-2 sm:h-8 sm:px-3 sm:text-sm"
              >
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Activos</span>
              </Button>
              <Button 
                variant={centrosFilter === "inactivo" ? "default" : "outline"} 
                size="sm"
                onClick={() => handleCentrosFilterChange("inactivo")}
                className="flex items-center gap-1 text-xs h-7 px-2 sm:h-8 sm:px-3 sm:text-sm"
              >
                <XCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Inactivos</span>
              </Button>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">Mostrando centros: {centrosFilter === "todos" ? "Todos" : centrosFilter === "activo" ? "Activos" : "Inactivos"}</p>
              <ListadoCentros key={getComponentKey("centros", centrosFilter)} activoFiltro={centrosFilter === "todos" ? undefined : centrosFilter === "activo"} />
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="panel4" className="mt-0">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base sm:text-lg">Registrar Centro de Distribución</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Registra un nuevo centro de entrega de donaciones
            </CardDescription>
          </CardHeader>
          <CardContent className="p-2 sm:p-4">
            <RegistroCentro />
          </CardContent>
        </Card>
      </TabsContent>

      {leftPanelView === "solicitudesCentro" && (
        <Card className="mt-4 shadow-sm border-slate-200 dark:border-slate-700">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-base sm:text-lg">Solicitudes de Centros</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Solicitudes para registrar centros de distribución
                </CardDescription>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => handleRefresh("solicitudesCentro")}
                className="h-8 w-8 p-0 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-2 sm:p-4">
            <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
              <Button 
                variant={solicitudesCentroFilter === "todas" ? "default" : "outline"} 
                size="sm"
                onClick={() => handleSolicitudesCentroFilterChange("todas")}
                className="flex items-center gap-1 text-xs h-7 px-2 sm:h-8 sm:px-3 sm:text-sm"
              >
                <span>Todas</span>
              </Button>
              <Button 
                variant={solicitudesCentroFilter === "Pendiente" ? "default" : "outline"} 
                size="sm"
                onClick={() => handleSolicitudesCentroFilterChange("Pendiente")}
                className="flex items-center gap-1 text-xs h-7 px-2 sm:h-8 sm:px-3 sm:text-sm"
              >
                <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Pendientes</span>
              </Button>
              <Button 
                variant={solicitudesCentroFilter === "Atendida" ? "default" : "outline"} 
                size="sm"
                onClick={() => handleSolicitudesCentroFilterChange("Atendida")}
                className="flex items-center gap-1 text-xs h-7 px-2 sm:h-8 sm:px-3 sm:text-sm"
              >
                <Check className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Atendidas</span>
              </Button>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">Mostrando solicitudes con estado: {solicitudesCentroFilter}</p>
              <ListadoSolicitudesCentro key={getComponentKey("solicitudes-centro", solicitudesCentroFilter)} estadoFiltro={solicitudesCentroFilter} />
            </div>
          </CardContent>
        </Card>
      )}
    </Tabs>
  );

  // Componente para la vista de escritorio
  const DesktopView = () => (
    <>
      {/* Paneles principales */}
      <ResizablePanelGroup direction="horizontal" className="min-h-[300px] rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
        <ResizablePanel defaultSize={50} minSize={20}>
          <Tabs 
            defaultValue={leftPanelView} 
            value={leftPanelView}
            className="w-full" 
            onValueChange={(value: string) => {
              // Solo loguear en desarrollo
              if (process.env.NODE_ENV === 'development') {
                console.log("Cambiando panel izquierdo a:", value);
              }
              setLeftPanelView(value as "solicitudes" | "solicitudesCentro");
              // No afectar otras secciones
            }}
          >
            <div className="p-4 border-b border-slate-200 dark:border-slate-700">
              <TabsList className="grid w-full grid-cols-2 p-1 bg-slate-100 dark:bg-slate-800">
                <TabsTrigger 
                  value="solicitudes" 
                  className="flex items-center gap-2"
                  onClick={() => setLeftPanelView("solicitudes")}
                >
                  <ClipboardList className="h-4 w-4" />
                  Solicitudes de donaciones
                </TabsTrigger>
                <TabsTrigger 
                  value="solicitudesCentro" 
                  className="flex items-center gap-2"
                  onClick={() => setLeftPanelView("solicitudesCentro")}
                >
                  <Building2 className="h-4 w-4" />
                  Solicitudes de centros
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="solicitudes" className="p-4">
              <Card className="shadow-sm border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Solicitudes de Donación</CardTitle>
                      <CardDescription>
                        Visualice y gestione todas las solicitudes de donaciones registradas en el sistema.
                      </CardDescription>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleRefresh("solicitudes")}
                      className="h-8 w-8 p-0 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-2 sm:p-4">
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
                    <Button 
                      variant={peticionesFilter === "todas" ? "default" : "outline"} 
                      size="sm"
                      onClick={() => handlePeticionesFilterChange("todas")}
                      className="flex items-center gap-1 text-xs h-7 px-2 sm:h-8 sm:px-3 sm:text-sm"
                    >
                      <span>Todas</span>
                    </Button>
                    <Button 
                      variant={peticionesFilter === "Pendiente" ? "default" : "outline"} 
                      size="sm"
                      onClick={() => handlePeticionesFilterChange("Pendiente")}
                      className="flex items-center gap-1 text-xs h-7 px-2 sm:h-8 sm:px-3 sm:text-sm"
                    >
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>Pendientes</span>
                    </Button>
                    <Button 
                      variant={peticionesFilter === "Atendida" ? "default" : "outline"} 
                      size="sm"
                      onClick={() => handlePeticionesFilterChange("Atendida")}
                      className="flex items-center gap-1 text-xs h-7 px-2 sm:h-8 sm:px-3 sm:text-sm"
                    >
                      <Check className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>Atendidas</span>
                    </Button>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-2">Mostrando peticiones con estado: {peticionesFilter}</p>
                    <ListadoPeticiones key={getComponentKey("peticiones", peticionesFilter)} estadoFiltro={peticionesFilter} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="solicitudesCentro" className="p-4">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Solicitudes de Centros</CardTitle>
                      <CardDescription>
                        Visualice y gestione todas las solicitudes de centros registradas en el sistema.
                      </CardDescription>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleRefresh("solicitudesCentro")}
                      className="h-8 w-8 p-0"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-refresh-cw"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-2 sm:p-4">
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
                    <Button 
                      variant={solicitudesCentroFilter === "todas" ? "default" : "outline"} 
                      size="sm"
                      onClick={() => handleSolicitudesCentroFilterChange("todas")}
                      className="flex items-center gap-1 text-xs h-7 px-2 sm:h-8 sm:px-3 sm:text-sm"
                    >
                      <span>Todas</span>
                    </Button>
                    <Button 
                      variant={solicitudesCentroFilter === "Pendiente" ? "default" : "outline"} 
                      size="sm"
                      onClick={() => handleSolicitudesCentroFilterChange("Pendiente")}
                      className="flex items-center gap-1 text-xs h-7 px-2 sm:h-8 sm:px-3 sm:text-sm"
                    >
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>Pendientes</span>
                    </Button>
                    <Button 
                      variant={solicitudesCentroFilter === "Atendida" ? "default" : "outline"} 
                      size="sm"
                      onClick={() => handleSolicitudesCentroFilterChange("Atendida")}
                      className="flex items-center gap-1 text-xs h-7 px-2 sm:h-8 sm:px-3 sm:text-sm"
                    >
                      <Check className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>Atendidas</span>
                    </Button>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-2">Mostrando solicitudes con estado: {solicitudesCentroFilter}</p>
                    <ListadoSolicitudesCentro key={getComponentKey("solicitudes-centro", solicitudesCentroFilter)} estadoFiltro={solicitudesCentroFilter} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </ResizablePanel>
        
        <ResizableHandle withHandle />
        
        <ResizablePanel defaultSize={50} minSize={20} maxSize={80}>
          <Tabs 
            defaultValue={rightPanelView}
            value={rightPanelView}
            className="w-full" 
            onValueChange={(value: string) => {
              // Solo loguear en desarrollo
              if (process.env.NODE_ENV === 'development') {
                console.log("Cambiando panel derecho a:", value);
              }
              setRightPanelView(value as "registroSolicitudes" | "registroCentro");
              // No afectar otras secciones
            }}
          >
            <div className="p-4 border-b border-slate-200 dark:border-slate-700">
              <TabsList className="grid w-full grid-cols-2 p-1 bg-slate-100 dark:bg-slate-800">
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
      <ResizablePanelGroup direction="horizontal" className="min-h-[400px] rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
        <ResizablePanel defaultSize={50} minSize={20}>
          <div className="p-4 h-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-700 text-transparent bg-clip-text">Listado de Solicitudes</h2>
              <div className="flex gap-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handleRefresh("solicitudes")}
                  className="h-8 w-8 p-0 mr-2 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <RefreshCw className="h-4 w-4" />
                </Button>
                <Button 
                  variant={solicitudesFilter === "todas" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => handleSolicitudesFilterChange("todas")}
                  className="flex items-center gap-1"
                >
                  Todas
                </Button>
                <Button 
                  variant={solicitudesFilter === "Pendiente" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => handleSolicitudesFilterChange("Pendiente")}
                  className="flex items-center gap-1"
                >
                  <Clock className="h-4 w-4" />
                  Pendientes
                </Button>
                <Button 
                  variant={solicitudesFilter === "Completada" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => handleSolicitudesFilterChange("Completada")}
                  className="flex items-center gap-1"
                >
                  <Check className="h-4 w-4" />
                  Completadas
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <ListadoSolicitudes key={getComponentKey("solicitudes", solicitudesFilter)} estadoFiltro={solicitudesFilter} />
            </div>
          </div>
        </ResizablePanel>
        
        <ResizableHandle withHandle />
        
        <ResizablePanel defaultSize={50} minSize={20} maxSize={80}>
          <div className="p-4 h-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-700 text-transparent bg-clip-text">Listado de Centros</h2>
              <div className="flex gap-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handleRefresh("centros")}
                  className="h-8 w-8 p-0 mr-2 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <RefreshCw className="h-4 w-4" />
                </Button>
                <Button 
                  variant={centrosFilter === "todos" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setCentrosFilter("todos")}
                  className="flex items-center gap-1"
                >
                  Todos
                </Button>
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
              <ListadoCentros key={getComponentKey("centros", centrosFilter)} activoFiltro={centrosFilter === "todos" ? undefined : centrosFilter === "activo"} />
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );

  // Generar keys únicos para los componentes que hacen fetching
  const getComponentKey = useCallback((base: string, filter: string) => {
    const section = base.includes("peticiones") ? "solicitudes" : 
                   base.includes("centros") ? "centros" : "solicitudesCentro";
    
    return shouldRefreshData(section) ? 
      `${base}-${refreshKey}-${filter}` : 
      `${base}-${filter}`;
  }, [refreshKey, shouldRefreshData]);

  return (
    <div className="container mx-auto py-3 sm:py-6 space-y-4 sm:space-y-6 px-2 sm:px-4">
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-700 text-transparent bg-clip-text">Panel de Administración</h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Gestiona puntos de distribución, solicitudes y peticiones
            </p>
          </div>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            disabled={loading}
            size="sm"
            className="text-xs sm:text-sm hover:bg-red-50 hover:text-red-600 hover:border-red-300 transition-colors"
          >
            {loading ? "Cerrando..." : (
              <span className="flex items-center gap-1">
                <LogOut className="h-3.5 w-3.5" />
                Cerrar sesión
              </span>
            )}
          </Button>
        </div>
      </div>

      {/* Vista móvil para pantallas pequeñas */}
      <div className="block md:hidden">
        <MobileView />
      </div>

      {/* Vista de escritorio para pantallas medianas y grandes */}
      <div className="hidden md:block space-y-6">
        <DesktopView />
      </div>
    </div>
  );
} 