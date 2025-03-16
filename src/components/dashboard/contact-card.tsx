import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, Building, Phone, Mail, MapPin } from "lucide-react"

interface ContactCardProps {
  contact: {
    id: string
    name: string
    organization: string
    phone: string
    email: string
    address: string
    category: string
    description: string
  }
}

export function ContactCard({ contact }: ContactCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{contact.name}</CardTitle>
          <Badge variant="outline">{contact.category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Building className="h-4 w-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">{contact.organization}</p>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">{contact.phone}</p>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">{contact.email}</p>
          </div>

          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
            <p className="text-sm text-muted-foreground">{contact.address}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">{contact.description}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <Button variant="outline" size="sm">
          <Edit className="h-4 w-4 mr-1" />
          Editar
        </Button>
        <Button variant="destructive" size="sm">
          <Trash2 className="h-4 w-4 mr-1" />
          Eliminar
        </Button>
      </CardFooter>
    </Card>
  )
}

