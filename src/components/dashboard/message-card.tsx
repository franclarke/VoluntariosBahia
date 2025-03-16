"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trash2, Mail, CheckCircle } from "lucide-react"

interface MessageCardProps {
  message: {
    id: string
    sender: string
    email: string
    subject: string
    content: string
    date: string
    read: boolean
  }
  onMarkAsRead: (id: string) => void
  onDelete: (id: string) => void
}

export function MessageCard({ message, onMarkAsRead, onDelete }: MessageCardProps) {
  const formattedDate = new Date(message.date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <Card className={message.read ? "opacity-80" : ""}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{message.subject}</CardTitle>
          {!message.read && (
            <Badge variant="default" className="bg-blue-500">
              Nuevo
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2">
          <div className="flex justify-between">
            <p className="text-sm font-medium">{message.sender}</p>
            <p className="text-xs text-muted-foreground">{formattedDate}</p>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">{message.email}</p>
          </div>

          <div className="mt-2">
            <p className="text-sm whitespace-pre-line">{message.content}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        {!message.read ? (
          <Button variant="outline" size="sm" onClick={() => onMarkAsRead(message.id)}>
            <CheckCircle className="h-4 w-4 mr-1" />
            Marcar como leído
          </Button>
        ) : (
          <Button variant="outline" size="sm" disabled>
            <CheckCircle className="h-4 w-4 mr-1" />
            Leído
          </Button>
        )}
        <Button variant="destructive" size="sm" onClick={() => onDelete(message.id)}>
          <Trash2 className="h-4 w-4 mr-1" />
          Eliminar
        </Button>
      </CardFooter>
    </Card>
  )
}

