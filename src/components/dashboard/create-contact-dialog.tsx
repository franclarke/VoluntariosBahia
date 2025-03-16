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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus } from "lucide-react"

export function CreateContactDialog() {
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
          Nuevo Contacto
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Crear Nuevo Contacto</DialogTitle>
          <DialogDescription>Añade un nuevo contacto útil al directorio.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" placeholder="Nombre del contacto" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="organization">Organización</Label>
              <Input id="organization" placeholder="Nombre de la organización" required />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" placeholder="+123 456 7890" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input id="email" type="email" placeholder="correo@ejemplo.com" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Dirección</Label>
              <Textarea id="address" placeholder="Dirección completa" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Categoría</Label>
              <Select required>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Seleccionar categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Emergencias">Emergencias</SelectItem>
                  <SelectItem value="Salud">Salud</SelectItem>
                  <SelectItem value="Seguridad">Seguridad</SelectItem>
                  <SelectItem value="Asistencia Social">Asistencia Social</SelectItem>
                  <SelectItem value="ONG">ONG</SelectItem>
                  <SelectItem value="Voluntariado">Voluntariado</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descripción</Label>
              <Textarea id="description" placeholder="Descripción de los servicios que ofrece" required />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit">Crear Contacto</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

