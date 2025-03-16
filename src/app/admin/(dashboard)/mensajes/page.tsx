"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { MessageCard } from "@/components/message-card"

export default function MensajesPage() {
  const [messages, setMessages] = useState(initialMessages)

  const markAsRead = (id: string) => {
    setMessages(messages.map((message) => (message.id === id ? { ...message, read: true } : message)))
  }

  const deleteMessage = (id: string) => {
    setMessages(messages.filter((message) => message.id !== id))
  }

  // Sort messages: unread first, then by date
  const sortedMessages = [...messages].sort((a, b) => {
    if (a.read !== b.read) return a.read ? 1 : -1
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Mensajes</h1>
        <p className="text-muted-foreground">Gestiona los mensajes recibidos de voluntarios y colaboradores</p>
      </div>

      <Card>
        <CardHeader className="p-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-2 w-full max-w-sm">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar mensajes..." className="h-9" />
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <Button variant="outline" size="sm">
                Marcar todos como leídos
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4 grid-cols-1">
          {sortedMessages.map((message) => (
            <MessageCard key={message.id} message={message} onMarkAsRead={markAsRead} onDelete={deleteMessage} />
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

const initialMessages = [
  {
    id: "1",
    sender: "Carlos Mendoza",
    email: "carlos.mendoza@ejemplo.com",
    subject: "Consulta sobre donación de medicamentos",
    content:
      "Hola, me gustaría saber si están aceptando donaciones de medicamentos y cuáles son los requisitos para hacerlo. Tengo varios medicamentos que podrían ser útiles. Gracias.",
    date: "2023-11-15T10:30:00",
    read: false,
  },
  {
    id: "2",
    sender: "Laura Fernández",
    email: "laura.fernandez@ejemplo.com",
    subject: "Voluntariado para limpieza de playa",
    content:
      "Buenos días, soy coordinadora de un grupo de 15 personas que quieren participar en la próxima limpieza de playa. ¿Cómo podemos registrarnos? ¿Hay algún requisito especial?",
    date: "2023-11-14T15:45:00",
    read: false,
  },
  {
    id: "3",
    sender: "Miguel Ángel Torres",
    email: "miguel.torres@ejemplo.com",
    subject: "Propuesta de punto de donación",
    content:
      "Estimados, represento a la Asociación Vecinal del Barrio Este y nos gustaría ofrecer nuestro local como punto de donación. Tenemos espacio disponible y voluntarios para gestionarlo. Quedo atento a su respuesta.",
    date: "2023-11-13T09:15:00",
    read: true,
  },
  {
    id: "4",
    sender: "Sofía Ramírez",
    email: "sofia.ramirez@ejemplo.com",
    subject: "Agradecimiento por ayuda recibida",
    content:
      "Quiero expresar mi más sincero agradecimiento por la ayuda que brindaron a mi familia después de las inundaciones. Los alimentos y ropa que recibimos fueron fundamentales en esos momentos difíciles. Muchas gracias por su labor.",
    date: "2023-11-12T18:20:00",
    read: true,
  },
  {
    id: "5",
    sender: "Javier López",
    email: "javier.lopez@ejemplo.com",
    subject: "Consulta sobre próximas actividades",
    content:
      "Hola, me gustaría saber cuáles son las próximas actividades de limpieza programadas para este mes. Estoy interesado en participar con mi familia. Saludos cordiales.",
    date: "2023-11-11T11:05:00",
    read: false,
  },
  {
    id: "6",
    sender: "Elena Martínez",
    email: "elena.martinez@ejemplo.com",
    subject: "Donación de equipos electrónicos",
    content:
      "Buenas tardes, trabajo en una empresa que está renovando sus equipos informáticos y queremos donar 10 computadoras en buen estado. ¿Podrían indicarme el procedimiento para hacer esta donación? Gracias de antemano.",
    date: "2023-11-10T14:30:00",
    read: true,
  },
]

