import { Map, Trash, Info, MessageSquare, MapPin } from "lucide-react"

export const navItems = [
  {
    name: "Solicitar Donación",
    href: "/donacion",
    icon: <MapPin className="h-4 w-4 mr-2" />,
  },
  {
    name: "Solicitar Limpieza",
    href: "/limpieza",
    icon: <Trash className="h-4 w-4 mr-2" />,
  },
  {
    name: "Solicitar Punto de Donación",
    href: "/punto-donacion",
    icon: <MapPin className="h-4 w-4 mr-2" />,
  },
  {
    name: "Mapa",
    href: "/",
    icon: <Map className="h-4 w-4 mr-2" />,
  },
  {
    name: "Información Útil",
    href: "/informacion",
    icon: <Info className="h-4 w-4 mr-2" />,
  },
  {
    name: "Contacto",
    href: "/contacto",
    icon: <MessageSquare className="h-4 w-4 mr-2" />,
  },
]

