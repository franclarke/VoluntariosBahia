import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, Check, Users } from "lucide-react"

interface CleanupCardProps {
  cleanup: {
    id: string
    title: string
    description: string
    organizer: string
    location: string
    date: string
    time: string
    status: string
    volunteers: number
    materials: string[]
  }
}

export function CleanupCard({ cleanup }: CleanupCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{cleanup.title}</CardTitle>
          <Badge variant={cleanup.status === "Pendiente" ? "outline" : "default"}>{cleanup.status}</Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{cleanup.description}</p>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="font-medium">Organizador:</p>
              <p className="text-muted-foreground">{cleanup.organizer}</p>
            </div>
            <div>
              <p className="font-medium">Ubicación:</p>
              <p className="text-muted-foreground">{cleanup.location}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="font-medium">Fecha:</p>
              <p className="text-muted-foreground">
                {new Date(cleanup.date).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div>
              <p className="font-medium">Hora:</p>
              <p className="text-muted-foreground">{cleanup.time}</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">{cleanup.volunteers} voluntarios</p>
          </div>

          <div>
            <p className="font-medium text-sm">Materiales:</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {cleanup.materials.map((material, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {material}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <Button variant="outline" size="sm">
          <Edit className="h-4 w-4 mr-1" />
          Editar
        </Button>
        {cleanup.status === "Pendiente" ? (
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            <Check className="h-4 w-4 mr-1" />
            Completar
          </Button>
        ) : (
          <Button variant="destructive" size="sm">
            <Trash2 className="h-4 w-4 mr-1" />
            Eliminar
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

