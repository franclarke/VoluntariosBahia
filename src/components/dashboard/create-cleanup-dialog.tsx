"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus } from "lucide-react"

export function CreateCleanupDialog() {
  const [open, setOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // En una aplicación real, aquí enviarías los datos a tu API
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nueva Limpieza
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Crear Nueva Limpieza</DialogTitle>
          <DialogDescription>Programa una nueva actividad de limpieza.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Título</Label>
              <Input id="title" placeholder="Título de la actividad" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descripción</Label>
              <Textarea id="description" placeholder="Descripción detallada de la actividad" required />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="organizer">Organizador</Label>
                <Input id="organizer" placeholder="Nombre del organizador" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Ubicación</Label>
                <Input id="location" placeholder="Lugar de la limpieza" required />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Fecha</Label>
                <Input id="date" type="date" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Horario</Label>
                <Input id="time" placeholder="09:00 - 12:00" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="volunteers">Número de voluntarios</Label>
              <Input id="volunteers" type="number" min="1" placeholder="10" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="materials">Materiales necesarios (separados por coma)</Label>
              <Input id="materials" placeholder="Bolsas, Guantes, Escobas, etc." required />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit">Crear Limpieza</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

