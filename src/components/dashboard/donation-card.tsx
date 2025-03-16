import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, Check } from "lucide-react"

interface DonationCardProps {
  donation: {
    id: string
    title: string
    description: string
    donor: string
    location: string
    date: string
    status: string
    items: string[]
  }
}

export function DonationCard({ donation }: DonationCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{donation.title}</CardTitle>
          <Badge variant={donation.status === "Pendiente" ? "outline" : "default"}>{donation.status}</Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{donation.description}</p>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="font-medium">Donante:</p>
              <p className="text-muted-foreground">{donation.donor}</p>
            </div>
            <div>
              <p className="font-medium">Ubicación:</p>
              <p className="text-muted-foreground">{donation.location}</p>
            </div>
          </div>

          <div>
            <p className="font-medium text-sm">Fecha:</p>
            <p className="text-sm text-muted-foreground">
              {new Date(donation.date).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div>
            <p className="font-medium text-sm">Artículos:</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {donation.items.map((item, index) => (
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
        {donation.status === "Pendiente" ? (
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

