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

export function CreateDonationDialog() {
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
          Nueva Donación
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Crear Nueva Donación</DialogTitle>
          <DialogDescription>Registra una nueva donación en el sistema.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Título</Label>
              <Input id="title" placeholder="Título de la donación" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descripción</Label>
              <Textarea id="description" placeholder="Descripción detallada de la donación" required />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="donor">Donante</Label>
                <Input id="donor" placeholder="Nombre del donante" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Ubicación</Label>
                <Input id="location" placeholder="Lugar de entrega" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Fecha</Label>
              <Input id="date" type="date" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="items">Artículos (separados por coma)</Label>
              <Input id="items" placeholder="Arroz, Frijoles, Aceite, etc." required />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit">Crear Donación</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

