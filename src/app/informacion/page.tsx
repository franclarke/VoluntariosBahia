"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { MapPin, Clock, Info, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function InformacionPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    direccion: "",
    horario: "",
    descripcion: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.telefono) {
      toast.error("Por favor completa los campos obligatorios");
      return;
    }
    
    setLoading(true);
    
    try {
      const response = await fetch("/api/mensajes/informacion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          direccion: formData.direccion,
          horario: formData.horario,
          descripcion: formData.descripcion
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al enviar la información");
      }
      
      toast.success("Información enviada correctamente");
      setFormData({
        nombre: "",
        telefono: "",
        email: "",
        direccion: "",
        horario: "",
        descripcion: ""
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al enviar la información. Por favor intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  // Datos de ejemplo para información útil
  const contactosUtiles = [
    {
      nombre: "Defensa Civil",
      telefono: "103",
      direccion: "Chiclana 375, Bahía Blanca",
      horario: "24 horas",
      descripcion: "Atención de emergencias y coordinación de operativos de rescate."
    },
    {
      nombre: "Bomberos Voluntarios",
      telefono: "100",
      direccion: "Av. Colón 500, Bahía Blanca",
      horario: "24 horas",
      descripcion: "Atención de incendios, rescates y emergencias."
    },
    {
      nombre: "Municipalidad de Bahía Blanca",
      telefono: "(0291) 459-4000",
      direccion: "Alsina 65, Bahía Blanca",
      horario: "Lunes a Viernes de 8:00 a 14:00",
      descripcion: "Información general y coordinación de servicios municipales."
    },
    {
      nombre: "Hospital Municipal",
      telefono: "(0291) 459-8484",
      direccion: "Av. Alem 1200, Bahía Blanca",
      horario: "24 horas",
      descripcion: "Atención médica de emergencias y consultas."
    }
  ];

  return (
    <div className="container mx-auto py-4 space-y-6 px-4 sm:px-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Contactos Útiles</h1>
        <p className="text-muted-foreground">
          Contactos y recursos importantes para situaciones de emergencia
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactosUtiles.map((contacto, index) => (
          <Card key={index} className="shadow-sm">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{contacto.nombre}</CardTitle>
                  <CardDescription>
                    <a href={`tel:${contacto.telefono.replace(/[^0-9]/g, '')}`} className="hover:underline">
                      {contacto.telefono}
                    </a>
                  </CardDescription>
                </div>
                <div className="bg-primary/10 p-2 rounded-full">
                  <Info className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <span className="text-sm">{contacto.direccion}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <span className="text-sm">{contacto.horario}</span>
              </div>
              <p className="text-sm mt-2">{contacto.descripcion}</p>
            </CardContent>
          </Card>
        ))}
      </div>


      <Card className="shadow-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Send className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">Enviar nuevo contacto útil</CardTitle>
          </div>
          <CardDescription>
            ¿Conoces algún contacto que pueda ser útil para la comunidad? Compártelo con nosotros.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre del contacto *</Label>
              <Input
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ej: Defensa Civil, Bomberos, etc."
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="telefono">Teléfono de contacto *</Label>
              <Input
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Ej: 100, 103, (0291) 459-4000, etc."
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email de contacto</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ejemplo@correo.com"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="direccion">Dirección</Label>
              <Input
                id="direccion"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                placeholder="Dirección física del contacto"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="horario">Horario de atención</Label>
              <Input
                id="horario"
                name="horario"
                value={formData.horario}
                onChange={handleChange}
                placeholder="Ej: 24 horas, Lunes a Viernes de 8:00 a 14:00, etc."
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="descripcion">Descripción</Label>
              <Textarea
                id="descripcion"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                placeholder="Describe brevemente qué servicios ofrece este contacto"
                rows={3}
              />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button type="submit" onClick={handleSubmit} className="w-full" disabled={loading}>
            {loading ? "Enviando información..." : "Enviar información"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
} 