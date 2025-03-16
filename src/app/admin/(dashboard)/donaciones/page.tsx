import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { DonationCard } from "@/components/donation-card"
import { CreateDonationDialog } from "@/components/create-donation-dialog"

export default function DonacionesPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Donaciones</h1>
          <p className="text-muted-foreground">Gestiona las donaciones pendientes y entregadas</p>
        </div>
        <CreateDonationDialog />
      </div>

      <Card>
        <CardHeader className="p-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-2 w-full max-w-sm">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar donaciones..." className="h-9" />
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
          {donations.map((donation) => (
            <DonationCard key={donation.id} donation={donation} />
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

const donations = [
  {
    id: "1",
    title: "Donación de alimentos",
    description: "Alimentos no perecederos para familias necesitadas",
    donor: "María González",
    location: "Centro Comunitario Norte",
    date: "2023-11-15",
    status: "Pendiente",
    items: ["Arroz", "Frijoles", "Aceite", "Pasta"],
  },
  {
    id: "2",
    title: "Donación de ropa",
    description: "Ropa de invierno para niños",
    donor: "Juan Pérez",
    location: "Escuela Primaria San José",
    date: "2023-11-14",
    status: "Entregada",
    items: ["Abrigos", "Guantes", "Bufandas", "Gorros"],
  },
  {
    id: "3",
    title: "Donación de útiles escolares",
    description: "Material escolar para estudiantes de primaria",
    donor: "Fundación Educativa",
    location: "Biblioteca Municipal",
    date: "2023-11-16",
    status: "Pendiente",
    items: ["Cuadernos", "Lápices", "Mochilas", "Libros"],
  },
  {
    id: "4",
    title: "Donación de medicamentos",
    description: "Medicamentos básicos para centro de salud",
    donor: "Farmacia Central",
    location: "Centro de Salud Comunitario",
    date: "2023-11-13",
    status: "Pendiente",
    items: ["Analgésicos", "Antibióticos", "Vendas", "Alcohol"],
  },
  {
    id: "5",
    title: "Donación de juguetes",
    description: "Juguetes para niños en orfanato",
    donor: "Asociación Infantil",
    location: "Orfanato Santa María",
    date: "2023-11-12",
    status: "Entregada",
    items: ["Muñecas", "Peluches", "Juegos de mesa", "Carritos"],
  },
  {
    id: "6",
    title: "Donación de equipos electrónicos",
    description: "Computadoras y tablets para escuela rural",
    donor: "Empresa Tecnológica",
    location: "Escuela Rural Las Flores",
    date: "2023-11-17",
    status: "Pendiente",
    items: ["Laptops", "Tablets", "Cargadores", "Auriculares"],
  },
]

