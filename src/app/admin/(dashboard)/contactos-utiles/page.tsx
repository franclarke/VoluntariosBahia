import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { ContactCard } from "@/components/contact-card"
import { CreateContactDialog } from "@/components/create-contact-dialog"

export default function ContactosUtilesPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Contactos Útiles</h1>
          <p className="text-muted-foreground">Directorio de contactos importantes para emergencias y coordinación</p>
        </div>
        <CreateContactDialog />
      </div>

      <Card>
        <CardHeader className="p-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-2 w-full max-w-sm">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar contactos..." className="h-9" />
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
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

const contacts = [
  {
    id: "1",
    name: "Protección Civil",
    organization: "Gobierno Municipal",
    phone: "+123 456 7800",
    email: "proteccion.civil@ejemplo.com",
    address: "Av. Principal 100, Centro",
    category: "Emergencias",
    description: "Coordinación de emergencias y desastres naturales",
  },
  {
    id: "2",
    name: "Cruz Roja",
    organization: "Cruz Roja Nacional",
    phone: "+123 456 7801",
    email: "cruzroja@ejemplo.com",
    address: "Calle Salud 200, Zona Norte",
    category: "Emergencias",
    description: "Atención médica de emergencia y primeros auxilios",
  },
  {
    id: "3",
    name: "Bomberos Voluntarios",
    organization: "Cuerpo de Bomberos",
    phone: "+123 456 7802",
    email: "bomberos@ejemplo.com",
    address: "Av. Fuego 300, Zona Este",
    category: "Emergencias",
    description: "Atención a incendios y rescates",
  },
  {
    id: "4",
    name: "Policía Nacional",
    organization: "Ministerio de Seguridad",
    phone: "+123 456 7803",
    email: "policia@ejemplo.com",
    address: "Plaza Central 400, Centro",
    category: "Seguridad",
    description: "Seguridad ciudadana y orden público",
  },
  {
    id: "5",
    name: "Hospital General",
    organization: "Ministerio de Salud",
    phone: "+123 456 7804",
    email: "hospital@ejemplo.com",
    address: "Av. Salud 500, Zona Sur",
    category: "Salud",
    description: "Atención médica general y especializada",
  },
  {
    id: "6",
    name: "Defensa Civil",
    organization: "Gobierno Nacional",
    phone: "+123 456 7805",
    email: "defensa.civil@ejemplo.com",
    address: "Calle Protección 600, Zona Oeste",
    category: "Emergencias",
    description: "Coordinación de respuesta a desastres",
  },
  {
    id: "7",
    name: "Ministerio de Desarrollo Social",
    organization: "Gobierno Nacional",
    phone: "+123 456 7806",
    email: "desarrollo.social@ejemplo.com",
    address: "Av. Bienestar 700, Centro",
    category: "Asistencia Social",
    description: "Programas de asistencia y desarrollo comunitario",
  },
  {
    id: "8",
    name: "Fundación Ayuda Humanitaria",
    organization: "ONG",
    phone: "+123 456 7807",
    email: "fundacion@ejemplo.com",
    address: "Calle Solidaridad 800, Zona Norte",
    category: "ONG",
    description: "Asistencia humanitaria y proyectos de desarrollo",
  },
  {
    id: "9",
    name: "Centro de Coordinación de Voluntarios",
    organization: "Municipalidad",
    phone: "+123 456 7808",
    email: "voluntarios@ejemplo.com",
    address: "Plaza Voluntariado 900, Centro",
    category: "Voluntariado",
    description: "Coordinación de voluntarios para emergencias",
  },
]

