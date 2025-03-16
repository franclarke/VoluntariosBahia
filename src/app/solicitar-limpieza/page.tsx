"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MapPin } from "lucide-react";
import dynamic from "next/dynamic";

// Importar el mapa de forma dinámica para evitar problemas con SSR
const MapaUbicacion = dynamic(() => import("@/components/solicitar/MapaUbicacion"), {
  ssr: false,
  loading: () => <div className="h-[300px] w-full bg-muted flex items-center justify-center">Cargando mapa...</div>
});

export default function SolicitarLimpiezaPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    direccion: "",
    contactoNombre: "",
    contactoTel: "",
    descripcion: "",
    latitud: "",
    longitud: ""
  });
  const [loading, setLoading] = useState(false);
  const [ubicacionSeleccionada, setUbicacionSeleccionada] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUbicacionChange = (lat: number, lng: number) => {
    setFormData(prev => ({
      ...prev,
      latitud: lat.toString(),
      longitud: lng.toString()
    }));
    setUbicacionSeleccionada(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.direccion || !formData.contactoNombre || !formData.contactoTel) {
      toast.error("Por favor completa todos los campos obligatorios");
      return;
    }
    
    if (!ubicacionSeleccionada) {
      toast.error("Por favor selecciona una ubicación en el mapa");
      return;
    }
    
    setLoading(true);
    
    try {
      const response = await fetch("/api/solicitudes-limpieza", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al enviar la solicitud");
      }
      
      toast.success("Solicitud de limpieza enviada correctamente");
      router.push("/");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al enviar la solicitud. Por favor intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-4 space-y-4 px-4 sm:px-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Solicitar Servicio de Limpieza</h1>
        <p className="text-muted-foreground">
          Completa el formulario para solicitar un servicio de limpieza en tu zona
        </p>
      </div>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Formulario de Solicitud</CardTitle>
          <CardDescription>
            Proporciona tus datos de contacto y la ubicación donde necesitas el servicio
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="contactoNombre">Nombre completo *</Label>
              <Input
                id="contactoNombre"
                name="contactoNombre"
                value={formData.contactoNombre}
                onChange={handleChange}
                placeholder="Ingresa tu nombre completo"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="contactoTel">Teléfono de contacto *</Label>
              <Input
                id="contactoTel"
                name="contactoTel"
                value={formData.contactoTel}
                onChange={handleChange}
                placeholder="Ingresa tu número de teléfono"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="direccion">Dirección *</Label>
              <Input
                id="direccion"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                placeholder="Ingresa la dirección donde necesitas el servicio"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="descripcion">Descripción de la situación</Label>
              <Textarea
                id="descripcion"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                placeholder="Describe brevemente la situación y qué tipo de limpieza necesitas"
                rows={4}
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <Label>Selecciona la ubicación en el mapa *</Label>
              </div>
              <div className="h-[300px] w-full rounded-md overflow-hidden border">
                <MapaUbicacion onUbicacionChange={handleUbicacionChange} />
              </div>
              {ubicacionSeleccionada && (
                <p className="text-xs text-muted-foreground">Ubicación seleccionada correctamente</p>
              )}
            </div>
            
            <div className="pt-4">
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Enviando solicitud..." : "Enviar solicitud"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
} 