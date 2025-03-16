import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { DonationPointCard } from "@/components/donation-point-card"
import { CreateDonationPointDialog } from "@/components/create-donation-point-dialog"

export default function PuntosDonacionesPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Puntos de Donaciones</h1>
          <p className="text-muted-foreground">Gestiona los puntos de recepción de donaciones</p>
        </div>
        <CreateDonationPointDialog />
      </div>

      <Card>
        <CardHeader className="p-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-2 w-full max-w-sm">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar puntos de donación..." className="h-9" />
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
          {donationPoints.map((point) => (
            <DonationPointCard key={point.id} point={point} />
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

const donationPoints = [
  {
    id: "1",
    name: "Centro Comunitario Norte",
    address: "Av. Principal 123, Zona Norte",
    coordinator: "Ana Martínez",
    phone: "+123 456 7890",
    email: "centro.norte@ejemplo.com",
    schedule: "Lunes a Viernes, 9:00 - 18:00",
    acceptedItems: ["Alimentos", "Ropa", "Medicamentos"],
    status: "Activo",
  },
  {
    id: "2",
    name: "Escuela Primaria San José",
    address: "Calle Educación 456, Barrio San José",
    coordinator: "Roberto Sánchez",
    phone: "+123 456 7891",
    email: "escuela.sanjose@ejemplo.com",
    schedule: "Lunes a Viernes, 8:00 - 16:00",
    acceptedItems: ["Útiles escolares", "Libros", "Juguetes"],
    status: "Activo",
  },
  {
    id: "3",
    name: "Biblioteca Municipal",
    address: "Plaza Central 789, Centro",
    coordinator: "Carmen Rodríguez",
    phone: "+123 456 7892",
    email: "biblioteca@ejemplo.com",
    schedule: "Martes a Sábado, 10:00 - 20:00",
    acceptedItems: ["Libros", "Material educativo"],
    status: "Activo",
  },
  {
    id: "4",
    name: "Centro de Salud Comunitario",
    address: "Av. Salud 234, Zona Este",
    coordinator: "Dr. Javier López",
    phone: "+123 456 7893",
    email: "centrosalud@ejemplo.com",
    schedule: "Lunes a Domingo, 24 horas",
    acceptedItems: ["Medicamentos", "Equipos médicos", "Insumos sanitarios"],
    status: "Activo",
  },
  {
    id: "5",
    name: "Orfanato Santa María",
    address: "Calle Niños 567, Barrio Sur",
    coordinator: "Patricia Gómez",
    phone: "+123 456 7894",
    email: "orfanato@ejemplo.com",
    schedule: "Lunes a Viernes, 9:00 - 17:00",
    acceptedItems: ["Ropa", "Juguetes", "Alimentos"],
    status: "Inactivo",
  },
  {
    id: "6",
    name: "Iglesia San Francisco",
    address: "Av. Fe 890, Zona Oeste",
    coordinator: "Padre Miguel Ángel",
    phone: "+123 456 7895",
    email: "iglesia@ejemplo.com",
    schedule: "Lunes a Domingo, 8:00 - 20:00",
    acceptedItems: ["Alimentos", "Ropa", "Artículos de hogar"],
    status: "Activo",
  },
  {
    id: "7",
    name: "Club Deportivo Juventud",
    address: "Calle Deportes 123, Zona Norte",
    coordinator: "Fernando Torres",
    phone: "+123 456 7896",
    email: "club@ejemplo.com",
    schedule: "Lunes a Sábado, 14:00 - 22:00",
    acceptedItems: ["Equipos deportivos", "Ropa deportiva"],
    status: "Inactivo",
  },
  {
    id: "8",
    name: "Universidad Central",
    address: "Campus Universitario, Av. Educación",
    coordinator: "Dra. Laura Mendoza",
    phone: "+123 456 7897",
    email: "universidad@ejemplo.com",
    schedule: "Lunes a Viernes, 8:00 - 21:00",
    acceptedItems: ["Libros", "Material educativo", "Equipos electrónicos"],
    status: "Activo",
  },
  {
    id: "9",
    name: "Centro Cultural",
    address: "Plaza de las Artes 456, Centro",
    coordinator: "Gabriela Vargas",
    phone: "+123 456 7898",
    email: "centrocultural@ejemplo.com",
    schedule: "Martes a Domingo, 11:00 - 20:00",
    acceptedItems: ["Libros", "Instrumentos musicales", "Material artístico"],
    status: "Inactivo",
  },
]

