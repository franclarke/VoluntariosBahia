"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Filter, Map } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

// Dynamic import to avoid SSR issues
const MapaVoluntario = dynamic(() => import("@/components/voluntario/MapaVoluntario"), {
  ssr: false,
  loading: () => (
    <div className="h-[70vh] w-full bg-muted flex items-center justify-center rounded-lg">
      <div className="flex flex-col items-center gap-2">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        <p className="text-sm text-muted-foreground">Cargando mapa...</p>
      </div>
    </div>
  ),
})

export default function HomePage() {
  // Visibility filters
  const [mostrarPuntosDonacion, setMostrarPuntosDonacion] = useState(true)
  const [mostrarSolicitudesDonacion, setMostrarSolicitudesDonacion] = useState(true)
  const [mostrarSolicitudesLimpieza, setMostrarSolicitudesLimpieza] = useState(true)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Count active filters
  const activeFiltersCount = [mostrarPuntosDonacion, mostrarSolicitudesDonacion, mostrarSolicitudesLimpieza].filter(
    Boolean,
  ).length

  // Reset all filters
  const resetFilters = () => {
    setMostrarPuntosDonacion(true)
    setMostrarSolicitudesDonacion(true)
    setMostrarSolicitudesLimpieza(true)
  }

  return (
    <div className="container-fluid mx-auto py-4 space-y-4 px-0 sm:px-0">
      <Card className="shadow-sm">
        <CardHeader className="pb-2 px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <div>
              <CardTitle className="text-lg sm:text-xl">Mapa de Donaciones</CardTitle>
              <CardDescription>Encuentra centros de donación y personas que necesitan ayuda</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-2 px-4 sm:px-6">
          <div className="flex flex-col space-y-4">
            {/* Mobile filter button and desktop filter bar */}
            <div className="flex items-center justify-between">
              {/* Mobile filter button */}
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="sm:hidden flex items-center gap-1">
                    <Filter className="h-4 w-4" />
                    Filtros
                    {activeFiltersCount > 0 && (
                      <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 flex items-center justify-center">
                        {activeFiltersCount}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="h-auto max-h-[60vh] rounded-t-xl">
                  <SheetHeader className="mb-4">
                    <SheetTitle className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Map className="h-4 w-4" />
                        Mostrar en el mapa
                      </span>
                      <Button variant="ghost" size="sm" onClick={resetFilters} className="h-8">
                        Restablecer
                      </Button>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="space-y-4">
                    <FilterItem
                      id="mobile-puntos-donacion"
                      color="bg-blue-500"
                      label="Centros de donación"
                      checked={mostrarPuntosDonacion}
                      onChange={() => setMostrarPuntosDonacion(!mostrarPuntosDonacion)}
                    />
                    <FilterItem
                      id="mobile-solicitudes-donacion"
                      color="bg-red-500"
                      label="Solicitudes de donación"
                      checked={mostrarSolicitudesDonacion}
                      onChange={() => setMostrarSolicitudesDonacion(!mostrarSolicitudesDonacion)}
                    />
                    <FilterItem
                      id="mobile-solicitudes-limpieza"
                      color="bg-green-500"
                      label="Solicitudes de limpieza"
                      checked={mostrarSolicitudesLimpieza}
                      onChange={() => setMostrarSolicitudesLimpieza(!mostrarSolicitudesLimpieza)}
                    />
                  </div>
                  <div className="mt-6">
                    <Button className="w-full" onClick={() => setIsFilterOpen(false)}>
                      Aplicar filtros
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>

              {/* Desktop filter pills */}
              <div className="hidden sm:flex items-center gap-2 flex-wrap">
                <FilterPill
                  active={mostrarPuntosDonacion}
                  color="bg-blue-500"
                  label="Centros de donación"
                  onClick={() => setMostrarPuntosDonacion(!mostrarPuntosDonacion)}
                />
                <FilterPill
                  active={mostrarSolicitudesDonacion}
                  color="bg-red-500"
                  label="Solicitudes de donación"
                  onClick={() => setMostrarSolicitudesDonacion(!mostrarSolicitudesDonacion)}
                />
                <FilterPill
                  active={mostrarSolicitudesLimpieza}
                  color="bg-green-500"
                  label="Solicitudes de limpieza"
                  onClick={() => setMostrarSolicitudesLimpieza(!mostrarSolicitudesLimpieza)}
                />
                {activeFiltersCount < 3 && (
                  <Button variant="ghost" size="sm" onClick={resetFilters} className="h-8 text-xs">
                    Restablecer
                  </Button>
                )}
              </div>
            </div>

            <div className="h-[70vh] w-full rounded-lg overflow-hidden border">
              <MapaVoluntario
                mostrarPuntosDonacion={mostrarPuntosDonacion}
                mostrarSolicitudesDonacion={mostrarSolicitudesDonacion}
                mostrarSolicitudesLimpieza={mostrarSolicitudesLimpieza}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Filter item component for mobile sheet
interface FilterItemProps {
  id: string
  color: string
  label: string
  checked: boolean
  onChange: () => void
}

function FilterItem({ id, color, label, checked, onChange }: FilterItemProps) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg border">
      <Label htmlFor={id} className="flex items-center gap-2 cursor-pointer w-full">
        <span className={`inline-block w-3 h-3 rounded-full ${color}`}></span>
        <span className="text-sm font-medium">{label}</span>
      </Label>
      <Switch id={id} checked={checked} onCheckedChange={onChange} />
    </div>
  )
}

// Filter pill component for desktop
interface FilterPillProps {
  active: boolean
  color: string
  label: string
  onClick: () => void
}

function FilterPill({ active, color, label, onClick }: FilterPillProps) {
  return (
    <Button
      variant={active ? "default" : "outline"}
      size="sm"
      className={cn(
        "h-8 text-xs transition-all",
        active ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground",
      )}
      onClick={onClick}
    >
      <span className={`inline-block w-2 h-2 rounded-full ${color} mr-1.5`}></span>
      {label}
    </Button>
  )
}

