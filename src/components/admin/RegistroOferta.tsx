"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const tiposArticulos = [
  "Ropa",
  "Colchones",
  "Alimentos no perecederos",
  "Sabanas / Frazadas",
  "Agua",
  "Articulos de limpieza",
  "Articulos de higiene personal"
];

export default function RegistroOferta() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    direccion: "",
    tipoArticulo: "",
    cantidad: "",
    latitud: "",
    longitud: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, tipoArticulo: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.direccion || !formData.tipoArticulo || !formData.cantidad) {
      toast.error("Por favor completa todos los campos obligatorios");
      return;
    }

    try {
      setLoading(true);
      
      // Geocodificar la dirección para obtener latitud y longitud
      if (!formData.latitud || !formData.longitud) {
        // Aquí iría la lógica para geocodificar la dirección
        // Por ahora, usamos valores de ejemplo
        setFormData(prev => ({
          ...prev,
          latitud: "-38.7196",
          longitud: "-62.2724"
        }));
      }

      // Enviar datos al servidor
      const response = await fetch("/api/ofertas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          cantidad: parseInt(formData.cantidad),
          latitud: parseFloat(formData.latitud),
          longitud: parseFloat(formData.longitud),
        }),
      });

      if (!response.ok) {
        throw new Error("Error al registrar la oferta");
      }

      toast.success("Oferta registrada correctamente");
      
      // Limpiar formulario
      setFormData({
        direccion: "",
        tipoArticulo: "",
        cantidad: "",
        latitud: "",
        longitud: ""
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al registrar la oferta");
    } finally {
      setLoading(false);
    }
  };

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData(prev => ({
            ...prev,
            latitud: position.coords.latitude.toString(),
            longitud: position.coords.longitude.toString()
          }));
          toast.success("Ubicación actual obtenida");
        },
        (error) => {
          console.error("Error obteniendo ubicación:", error);
          toast.error("No se pudo obtener la ubicación actual");
        }
      );
    } else {
      toast.error("Tu navegador no soporta geolocalización");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="direccion">Dirección exacta *</Label>
        <Input
          id="direccion"
          name="direccion"
          placeholder="Ej: Av. Colón 80, Bahía Blanca"
          value={formData.direccion}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex items-center gap-2">
        <Button 
          type="button" 
          variant="outline" 
          size="sm"
          onClick={handleUseCurrentLocation}
        >
          Usar mi ubicación actual
        </Button>
        <span className="text-xs text-muted-foreground">
          (Opcional)
        </span>
      </div>

      <div className="space-y-2">
        <Label htmlFor="tipoArticulo">Tipo de artículo *</Label>
        <Select 
          value={formData.tipoArticulo} 
          onValueChange={handleSelectChange}
          required
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecciona un tipo de artículo" />
          </SelectTrigger>
          <SelectContent>
            {tiposArticulos.map((tipo) => (
              <SelectItem key={tipo} value={tipo}>
                {tipo}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="cantidad">Cantidad disponible *</Label>
        <Input
          id="cantidad"
          name="cantidad"
          type="number"
          min="1"
          placeholder="Ej: 10"
          value={formData.cantidad}
          onChange={handleChange}
          required
        />
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Registrando..." : "Registrar Oferta"}
      </Button>
    </form>
  );
} 