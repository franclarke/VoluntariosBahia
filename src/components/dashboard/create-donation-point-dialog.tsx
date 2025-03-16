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

export function CreateDonationPointDialog() {
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
          Nuevo Punto
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Crear Nuevo Punto de Donación</DialogTitle>
          <DialogDescription>Registra un nuevo punto para recibir donaciones.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" placeholder="Nombre del punto de donación" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Dirección</Label>
              <Textarea id="address" placeholder="Dirección completa" required />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="coordinator">Coordinador</Label>
                <Input id="coordinator" placeholder="Nombre del coordinador" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" placeholder="+123 456 7890" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" type="email" placeholder="correo@ejemplo.com" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="schedule">Horario</Label>
              <Input id="schedule" placeholder="Lunes a Viernes, 9:00 - 18:00" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="acceptedItems">Artículos aceptados (separados por coma)</Label>
              <Input id="acceptedItems" placeholder="Alimentos, Ropa, Medicamentos, etc." required />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit">Crear Punto</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

