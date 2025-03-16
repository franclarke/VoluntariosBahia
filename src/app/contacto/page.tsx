"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { MessageSquare, Send } from "lucide-react";
import { WhatsappIcon } from "@/components/icons/WhatsappIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.mensaje) {
      toast.error("Por favor completa los campos obligatorios");
      return;
    }
    
    setLoading(true);
    
    try {
      const response = await fetch("/api/mensajes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al enviar el mensaje");
      }
      
      toast.success("Mensaje enviado correctamente");
      setFormData({
        nombre: "",
        telefono: "",
        email: "",
        mensaje: ""
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al enviar el mensaje. Por favor intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-4 space-y-6 px-4 sm:px-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Contacto</h1>
        <p className="text-muted-foreground">
          Comunícate con nosotros a través del formulario o nuestros grupos de WhatsApp
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Send className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">Formulario de Contacto</CardTitle>
            </div>
            <CardDescription>
              Envíanos un mensaje y te responderemos a la brevedad
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre completo *</Label>
                <Input
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Ingresa tu nombre completo"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ingresa tu correo electrónico (opcional)"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="telefono">Teléfono</Label>
                <Input
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="Ingresa tu número de teléfono (opcional)"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="mensaje">Mensaje *</Label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Escribe tu mensaje aquí"
                  rows={5}
                  required
                />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button type="submit" onClick={handleSubmit} className="w-full" disabled={loading}>
              {loading ? "Enviando mensaje..." : "Enviar mensaje"}
            </Button>
          </CardFooter>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">Grupos de WhatsApp</CardTitle>
            </div>
            <CardDescription>
              Contamos con grupos de WhatsApp de voluntarios que se coordinan para transportar donaciones
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-6 space-y-4">
              <p className="text-center max-w-[600px]">
                Únete a nuestros grupos de WhatsApp para coordinar la entrega y recepción de donaciones en Bahía Blanca.
                Contamos con voluntarios dispuestos a ayudar en diferentes zonas de la ciudad.
              </p>
              <a 
                href="https://linktr.ee/voluntariosbahia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium rounded-full px-4 py-2 transition-colors"
              >
                <WhatsappIcon className="h-5 w-5 mr-2" />
                <span>Contactar por WhatsApp</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 