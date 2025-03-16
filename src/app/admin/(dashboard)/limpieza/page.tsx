import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { CleanupCard } from "@/components/cleanup-card"
import { CreateCleanupDialog } from "@/components/create-cleanup-dialog"

export default function LimpiezaPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Limpieza</h1>
          <p className="text-muted-foreground">Gestiona las actividades de limpieza pendientes y finalizadas</p>
        </div>
        <CreateCleanupDialog />
      </div>

      <Card>
        <CardHeader className="p-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-2 w-full max-w-sm">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar limpiezas..." className="h-9" />
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <Button variant="outline" size="sm">
                Exportar
              </Button>
              <Button variant="outline" size="sm">
                Filtrar
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cleanups.map((cleanup) => (
            <CleanupCard key={cleanup.id} cleanup={cleanup} />
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

const cleanups = [
  {
    id: "1",
    title: "Limpieza de Parque Central",
    description: "Recolección de basura y limpieza general del parque",
    organizer: "Grupo Ecológico Verde",
    location: "Parque Central, Zona 1",
    date: "2023-11-18",
    time: "09:00 - 12:00",
    status: "Pendiente",
    volunteers: 12,
    materials: ["Bolsas de basura", "Guantes", "Escobas", "Rastrillos"],
  },
  {
    id: "2",
    title: "Limpieza de Playa Los Cocos",
    description: "Recolección de plásticos y limpieza de la costa",
    organizer: "Asociación Mares Limpios",
    location: "Playa Los Cocos, Km 45",
    date: "2023-11-19",
    time: "08:00 - 14:00",
    status: "Pendiente",
    volunteers: 25,
    materials: ["Bolsas de basura", "Guantes", "Pinzas recolectoras", "Protector solar"],
  },
  {
    id: "3",
    title: "Limpieza de Río Claro",
    description: "Limpieza de las orillas del río y recolección de residuos",
    organizer: "Fundación Agua Limpia",
    location: "Río Claro, Sector Norte",
    date: "2023-11-15",
    time: "10:00 - 13:00",
    status: "Finalizada",
    volunteers: 18,
    materials: ["Bolsas de basura", "Guantes", "Botas de agua", "Redes"],
  },
  {
    id: "4",
    title: "Limpieza de Barrio San Juan",
    description: "Limpieza de calles y espacios públicos del barrio",
    organizer: "Junta Vecinal San Juan",
    location: "Barrio San Juan, Calles principales",
    date: "2023-11-20",
    time: "15:00 - 18:00",
    status: "Pendiente",
    volunteers: 15,
    materials: ["Bolsas de basura", "Guantes", "Escobas", "Carretillas"],
  },
  {
    id: "5",
    title: "Limpieza de Bosque Los Pinos",
    description: "Recolección de basura y limpieza de senderos",
    organizer: "Club de Montañismo",
    location: "Bosque Los Pinos, Entrada principal",
    date: "2023-11-12",
    time: "08:30 - 13:30",
    status: "Finalizada",
    volunteers: 22,
    materials: ["Bolsas de basura", "Guantes", "Bastones", "Mochilas"],
  },
  {
    id: "6",
    title: "Limpieza de Canal Principal",
    description: "Limpieza y desbloqueo del canal de agua",
    organizer: "Departamento de Obras Públicas",
    location: "Canal Principal, Zona 3",
    date: "2023-11-21",
    time: "07:00 - 12:00",
    status: "Pendiente",
    volunteers: 10,
    materials: ["Herramientas", "Guantes", "Botas de agua", "Carretillas"],
  },
]

