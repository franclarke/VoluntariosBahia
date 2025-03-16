import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, MapPin, Phone, Mail, Clock } from "lucide-react"

interface DonationPointCardProps {
  point: {
    id: string
    name: string
    address: string
    coordinator: string
    phone: string
    email: string
    schedule: string
    acceptedItems: string[]
    status: string
  }
}

export function DonationPointCard({ point }: DonationPointCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{point.name}</CardTitle>
          <Badge variant={point.status === "Activo" ? "default" : "destructive"}>{point.status}</Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
            <p className="text-sm text-muted-foreground">{point.address}</p>
          </div>

          <div>
            <p className="font-medium text-sm">Coordinador:</p>
            <p className="text-sm text-muted-foreground">{point.coordinator}</p>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">{point.phone}</p>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">{point.email}</p>
          </div>

          <div className="flex items-start gap-2">
            <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
            <p className="text-sm text-muted-foreground">{point.schedule}</p>
          </div>

          <div>
            <p className="font-medium text-sm">Artículos aceptados:</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {point.acceptedItems.map((item, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {item}
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
        {point.status === "Activo" ? (
          <Button variant="destructive" size="sm">
            <Trash2 className="h-4 w-4 mr-1" />
            Desactivar
          </Button>
        ) : (
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            <MapPin className="h-4 w-4 mr-1" />
            Activar
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

