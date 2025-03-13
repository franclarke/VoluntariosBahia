"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Trash2, Plus } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Tipos de artículos disponibles (en producción, esto vendría de la API)
const tiposArticulosDefault = [
  "Ropa",
  "Colchones",
  "Alimentos no perecederos",
  "Sabanas / Frazadas",
  "Agua",
  "Articulos de limpieza",
  "Articulos de higiene personal"
];

interface ArticuloSolicitado {
  tipoArticulo: string;
  cantidad: number;
}

interface TipoArticulo {
  id: number;
  nombre: string;
}

interface FormularioSolicitudProps {
  onSuccess: () => void;
}

export default function FormularioSolicitud({ onSuccess }: FormularioSolicitudProps) {
  const [loading, setLoading] = useState(false);
  const [tiposArticulos, setTiposArticulos] = useState<string[]>(tiposArticulosDefault);
  const [formData, setFormData] = useState({
    direccion: "",
    contactoNombre: "",
    contactoTel: "",
    latitud: "",
    longitud: ""
  });
  const [articulos, setArticulos] = useState<ArticuloSolicitado[]>([
    { tipoArticulo: "", cantidad: 1 }
  ]);

  // Cargar tipos de artículos desde la API
  useEffect(() => {
    const cargarTiposArticulos = async () => {
      try {
        const response = await fetch("/api/tipos-articulos");
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            setTiposArticulos(data.map((tipo: TipoArticulo) => tipo.nombre));
          }
        }
      } catch (error) {
        console.error("Error al cargar tipos de artículos:", error);
        // Si falla, usamos los tipos por defecto
      }
    };

    cargarTiposArticulos();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleArticuloChange = (index: number, field: keyof ArticuloSolicitado, value: string | number) => {
    const nuevosArticulos = [...articulos];
    nuevosArticulos[index] = {
      ...nuevosArticulos[index],
      [field]: value
    };
    setArticulos(nuevosArticulos);
  };

  const agregarArticulo = () => {
    setArticulos([...articulos, { tipoArticulo: "", cantidad: 1 }]);
  };

  const eliminarArticulo = (index: number) => {
    if (articulos.length > 1) {
      setArticulos(articulos.filter((_, i) => i !== index));
    } else {
      toast.error("Debes tener al menos un artículo en tu solicitud");
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar datos requeridos
    if (!formData.direccion || !formData.contactoNombre || !formData.contactoTel) {
      toast.error("Por favor completa todos los campos obligatorios");
      return;
    }

    // Validar que todos los artículos tengan tipo y cantidad
    const articulosInvalidos = articulos.some(art => !art.tipoArticulo || art.cantidad < 1);
    if (articulosInvalidos) {
      toast.error("Por favor completa correctamente todos los artículos solicitados");
      return;
    }

    try {
      setLoading(true);
      
      // Geocodificar la dirección para obtener latitud y longitud si no están presentes
      let latitud = formData.latitud;
      let longitud = formData.longitud;
      
      if (!latitud || !longitud) {
        // En un entorno real, aquí iría la lógica para geocodificar la dirección
        // Por ahora, usamos valores de ejemplo
        latitud = "-38.7196";
        longitud = "-62.2724";
      }

      // Enviar datos al servidor
      const response = await fetch("/api/peticiones", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          latitud: parseFloat(latitud),
          longitud: parseFloat(longitud),
          articulos: articulos
        }),
      });

      if (!response.ok) {
        throw new Error("Error al enviar la solicitud");
      }

      toast.success("Solicitud enviada correctamente");
      onSuccess();
      
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al enviar la solicitud");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Formulario de Solicitud</CardTitle>
        <CardDescription>
          Completa tus datos y selecciona los artículos que necesitas
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
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
              <Label htmlFor="contactoNombre">Nombre de contacto *</Label>
              <Input
                id="contactoNombre"
                name="contactoNombre"
                placeholder="Ej: Juan Pérez"
                value={formData.contactoNombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactoTel">Teléfono de contacto *</Label>
              <Input
                id="contactoTel"
                name="contactoTel"
                placeholder="Ej: 291-4123456"
                value={formData.contactoTel}
                onChange={handleChange}
                required
              />
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-medium mb-2">Artículos solicitados</h3>
              <div className="space-y-4">
                {articulos.map((articulo, index) => (
                  <div key={index} className="flex flex-col sm:flex-row gap-2 items-end border p-3 rounded-md">
                    <div className="flex-grow space-y-2">
                      <Label htmlFor={`tipoArticulo-${index}`}>Tipo de artículo *</Label>
                      <Select
                        value={articulo.tipoArticulo}
                        onValueChange={(value) => handleArticuloChange(index, "tipoArticulo", value)}
                      >
                        <SelectTrigger id={`tipoArticulo-${index}`}>
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
                    <div className="w-full sm:w-32 space-y-2">
                      <Label htmlFor={`cantidad-${index}`}>Cantidad *</Label>
                      <Input
                        id={`cantidad-${index}`}
                        type="number"
                        min="1"
                        value={articulo.cantidad}
                        onChange={(e) => handleArticuloChange(index, "cantidad", parseInt(e.target.value) || 1)}
                        required
                      />
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => eliminarArticulo(index)}
                      className="flex-shrink-0"
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={agregarArticulo}
                  className="w-full"
                >
                  <Plus className="h-4 w-4 mr-2" /> Agregar otro artículo
                </Button>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Enviando solicitud..." : "Enviar solicitud"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
} 