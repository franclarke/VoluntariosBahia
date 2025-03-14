"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const tiposArticulos = [
  "Ropa",
  "Colchon 1 plaza",
  "Colchon 2 plazas",
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
      
      // Valores por defecto para latitud y longitud si no están presentes
      let latitudFinal = formData.latitud;
      let longitudFinal = formData.longitud;
      
      if (!latitudFinal || !longitudFinal) {
        // Usar valores por defecto para Bahía Blanca
        latitudFinal = "-38.7196";
        longitudFinal = "-62.2724";
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
          latitud: parseFloat(latitudFinal),
          longitud: parseFloat(longitudFinal),
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