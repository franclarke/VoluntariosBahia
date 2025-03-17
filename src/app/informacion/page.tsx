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

  // Datos actualizados de información útil
  const contactosUtiles = [
    {
      nombre: "LIMPIEZA DE TAPIZADOS Y COLCHONES",
      descripcion: "Lavadero AnnieCars pone a disposición máquinas limpia tapizados y máquina de vapor para limpieza y desinfección de colchones.",
      telefono: "2915111208",
    },
    {
      nombre: "BOMBAS DE AGUA",
      descripcion: "Ofrecen para desagotar sótanos, subsuelo, cocheras.",
      telefono: "2915744140",
    },
    {
      nombre: "GENERADOR Y BOMBA",
      descripcion: "Escribir al Instagram @joacofonta",
      instagram: "@joacofonta",
    },
    {
      nombre: "GRUPOS ELECTRÓGENOS Y BOMBA SUMERGIBLE",
      descripcion: "Para quien realmente lo necesite. Escribir al Instagram @freddyalbornoz",
      instagram: "@freddyalbornoz",
    },
    {
      nombre: "VEHÍCULOS DE CARGA",
      descripcion: "Cerramientos Bahía pone a disposición vehículos de carga. Trabajan en comunicación con Defensa Civil.",
      telefono: "2914433628",
    },
    {
      nombre: "CARGA DE AGUA",
      descripcion: "Del Punta hermanos. Domicilio: San Lorenzo 792. Horario: Lunes de 11 a 16h. ¡Importante! Llevar envases / botellas / bidones.",
      contacto: "@delpuntaok",
      direccion: "San Lorenzo 792",
      horario: "Lunes de 11 a 16h",
      importante: "Llevar envases / botellas / bidones",
    },
    {
      nombre: "AGUA SEGURA EN DOMICILIO PARTICULAR",
      direccion: "Blandengues al 300",
      telefono: "2914273420",
    },
    {
      nombre: "LIMPIEZA DE COLCHONES",
      descripcion: "Empresa Clint. ¡Importante! Es necesario contar con corriente eléctrica.",
      telefono: "2915025518",
      importante: "Es necesario contar con corriente eléctrica",
    },
    {
      nombre: "ALIMENTO BALANCEADO PARA MASCOTAS",
      descripcion: "Fauna&Flora Pet Shop. Domicilio: Alem y Aguado. Horario: Desde el lunes a las 10h.",
      direccion: "Alem y Aguado",
      horario: "Desde el lunes a las 10h",
    },
    {
      nombre: "HELADERAS: REVISIÓN ANTES DE VOLVER A CONECTARLAS",
      descripcion: "Refrigeración Jea.",
      telefonos: ["2914793074", "2914760840"],
    },
    {
      nombre: "HELADERAS: ARREGLO Y PUESTA EN FUNCIONAMIENTO",
      descripcion: "Refrigeración El Cata. Sin cargo en la mano de obra.",
      instagram: "@elcata_refrigeracion",
      nota: "Sin cargo en la mano de obra",
    },
    {
      nombre: "REVISIÓN DE COMPUTADORAS MOJADAS",
      instagram: "@dualtech",
    },
    {
      nombre: "CAMIONETA PARA TRASLADAR DONACIONES",
      telefono: "2915065240",
    },
  ];

  return (
    <div className="container mx-auto py-4 space-y-6 px-4 sm:px-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">OFRECIMIENTOS VARIOS SIN COSTO</h1>
        <p className="text-muted-foreground">
          Información útil de ofrecimientos sin costo disponibles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contactosUtiles.map((item, index) => (
          <Card key={index} className="shadow-sm">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{item.nombre}</CardTitle>
                  <CardDescription className="space-y-1">
                    {item.telefono && (
                      <a href={`tel:${item.telefono.replace(/[^0-9]/g, '')}`} className="hover:underline">
                        Contacto: {item.telefono}
                      </a>
                    )}
                    {item.telefonos && item.telefonos.length > 0 && (
                      <div>
                        Contactos: {item.telefonos.map((tel, i) => (
                          <span key={i}>
                            <a href={`tel:${tel.replace(/[^0-9]/g, '')}`} className="hover:underline">
                              {tel}
                            </a>
                            {i < item.telefonos.length - 1 && ' - '}
                          </span>
                        ))}
                      </div>
                    )}
                    {item.contacto && <div>Contacto: {item.contacto}</div>}
                    {item.instagram && (
                      <a href={`https://instagram.com/${item.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Instagram: {item.instagram}
                      </a>
                    )}
                  </CardDescription>
                </div>
                <div className="bg-primary/10 p-2 rounded-full">
                  <Info className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              {item.direccion && (
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                  <span className="text-sm">Domicilio: {item.direccion}</span>
                </div>
              )}
              {item.horario && (
                <div className="flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-0.5 text-muted-foreground" />
                  <span className="text-sm">Horario: {item.horario}</span>
                </div>
              )}
              {item.descripcion && <p className="text-sm mt-2">{item.descripcion}</p>}
              {item.importante && <p className="text-sm mt-2 font-semibold">¡Importante! {item.importante}</p>}
              {item.nota && <p className="text-sm mt-2 italic">{item.nota}</p>}
            </CardContent>
          </Card>
        ))}
      </div>


      <Card className="shadow-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Send className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">Enviar nuevo ofrecimiento sin costo</CardTitle>
          </div>
          <CardDescription>
            ¿Conoces algún ofrecimiento que pueda ser útil para la comunidad?
            Compártelo con nosotros.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre del ofrecimiento *</Label>
              <Input
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ej: Limpieza de colchones, Bomba de agua, etc."
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefono">Teléfono de contacto</Label>
              <Input
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Ej: 2915111208"
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
                placeholder="Dirección del lugar o persona que ofrece esto"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="horario">Horario de atención</Label>
              <Input
                id="horario"
                name="horario"
                value={formData.horario}
                onChange={handleChange}
                placeholder="Ej: Lunes a Viernes de 9 a 17h"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="descripcion">Descripción del ofrecimiento *</Label>
              <Textarea
                id="descripcion"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                placeholder="Describe detalladamente el ofrecimiento"
                rows={3}
                required
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