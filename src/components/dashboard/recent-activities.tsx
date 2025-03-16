import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Gift, Trash2, MapPin, MessageSquare } from "lucide-react"

export function RecentActivities() {
  return (
    <div className="space-y-8">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center">
          <Avatar className="h-9 w-9 border">
            {getActivityIcon(activity.type)}
            <AvatarFallback>{activity.title[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.title}</p>
            <p className="text-sm text-muted-foreground">{activity.date}</p>
          </div>
          <div className="ml-auto font-medium text-sm">{activity.status}</div>
        </div>
      ))}
    </div>
  )
}

function getActivityIcon(type: string) {
  switch (type) {
    case "donacion":
      return <Gift className="h-4 w-4 text-blue-500" />
    case "limpieza":
      return <Trash2 className="h-4 w-4 text-green-500" />
    case "punto":
      return <MapPin className="h-4 w-4 text-red-500" />
    case "mensaje":
      return <MessageSquare className="h-4 w-4 text-purple-500" />
    default:
      return null
  }
}

const activities = [
  {
    id: "1",
    title: "Nueva donación de alimentos",
    date: "Hace 10 minutos",
    status: "Pendiente",
    type: "donacion",
  },
  {
    id: "2",
    title: "Limpieza programada en Parque Central",
    date: "Hace 30 minutos",
    status: "Programada",
    type: "limpieza",
  },
  {
    id: "3",
    title: "Punto de donación activado",
    date: "Hace 1 hora",
    status: "Activo",
    type: "punto",
  },
  {
    id: "4",
    title: "Nuevo mensaje de voluntario",
    date: "Hace 2 horas",
    status: "No leído",
    type: "mensaje",
  },
  {
    id: "5",
    title: "Donación de ropa entregada",
    date: "Hace 3 horas",
    status: "Completada",
    type: "donacion",
  },
]

