"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Trash2, Plus } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface ArticuloSolicitado {
  tipoArticulo: string;
  cantidad: number;
  tipoPersonalizado?: string;
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
  const [tiposArticulos, setTiposArticulos] = useState<string[]>([]);
  const [cargandoTipos, setCargandoTipos] = useState(true);
  const [formData, setFormData] = useState({
    direccion: "",
    contactoNombre: "",
    contactoTel: "",
    descripcion: ""
  });
  const [articulos, setArticulos] = useState<ArticuloSolicitado[]>([
    { tipoArticulo: "", cantidad: 1 }
  ]);

  // Cargar tipos de artículos desde la API
  useEffect(() => {
    const cargarTiposArticulos = async () => {
      setCargandoTipos(true);
      try {
        const response = await fetch("/api/tipos-articulos");
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            const tiposDesdeAPI = data.map((tipo: TipoArticulo) => tipo.nombre);
            setTiposArticulos([...tiposDesdeAPI, "Otro"]);
          } else {
            setTiposArticulos(["Otro"]);
          }
        } else {
          setTiposArticulos(["Otro"]);
        }
      } catch (error) {
        console.error("Error al cargar tipos de artículos:", error);
        setTiposArticulos(["Otro"]);
      } finally {
        setCargandoTipos(false);
      }
    };

    cargarTiposArticulos();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Validación para el nombre (no permitir números)
    if (name === "contactoNombre" && /\d/.test(value)) {
      return;
    }
    
    // Validación para el teléfono (solo números y guiones)
    if (name === "contactoTel" && !/^[0-9-]*$/.test(value)) {
      return;
    }
    
    setFormData({ ...formData, [name]: value });
  };

  const handleArticuloChange = (index: number, field: keyof ArticuloSolicitado, value: string | number) => {
    const nuevosArticulos = [...articulos];
    nuevosArticulos[index] = { ...nuevosArticulos[index], [field]: value };
    
    // Si cambia el tipo de artículo a algo que no es "Otro", eliminar el tipo personalizado
    if (field === "tipoArticulo" && value !== "Otro") {
      delete nuevosArticulos[index].tipoPersonalizado;
    }
    
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar datos requeridos
    if (!formData.direccion || !formData.contactoNombre) {
      toast.error("Por favor completa todos los campos obligatorios");
      return;
    }

    // Validar que todos los artículos tengan tipo y cantidad
    const articulosInvalidos = articulos.some(art => {
      if (!art.tipoArticulo || art.cantidad < 1) return true;
      if (art.tipoArticulo === "Otro" && (!art.tipoPersonalizado || art.tipoPersonalizado.trim() === "")) return true;
      return false;
    });
    
    if (articulosInvalidos) {
      toast.error("Por favor completa correctamente todos los artículos solicitados");
      return;
    }

    try {
      setLoading(true);
      
      // Preparar los artículos para enviar (usar el tipo personalizado si es "Otro")
      const articulosParaEnviar = articulos.map(art => ({
        tipoArticulo: art.tipoArticulo === "Otro" ? art.tipoPersonalizado! : art.tipoArticulo,
        cantidad: art.cantidad
      }));

      // Enviar datos al servidor
      const response = await fetch("/api/peticiones", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          articulos: articulosParaEnviar
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al enviar la solicitud");
      }

      toast.success("Solicitud enviada correctamente");
      onSuccess();
      
    } catch (error) {
      console.error("Error:", error);
      toast.error(error instanceof Error ? error.message : "Error al enviar la solicitud");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="shadow-sm">
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
              <p className="text-xs text-muted-foreground">
                Ingresa la dirección lo más detallada posible para que los voluntarios puedan ubicarte.
              </p>
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
              <Label htmlFor="contactoTel">Teléfono de contacto</Label>
              <Input
                id="contactoTel"
                name="contactoTel"
                placeholder="Ej: 291-4123456"
                value={formData.contactoTel}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="descripcion">Descripción (opcional)</Label>
              <Textarea
                id="descripcion"
                name="descripcion"
                placeholder="Describe brevemente tu solicitud"
                value={formData.descripcion}
                onChange={handleChange}
                rows={3}
              />
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-medium mb-2">Artículos solicitados</h3>
              {cargandoTipos ? (
                <div className="flex justify-center items-center py-4">
                  <p>Cargando tipos de artículos...</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {articulos.map((articulo, index) => (
                    <div key={index} className="flex flex-col gap-2 border p-3 rounded-md">
                      <div className="flex flex-row gap-2 items-start">
                        <div className={`flex-grow space-y-2 ${articulo.tipoArticulo === "Otro" ? "w-1/2" : "w-full"}`}>
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
                        
                        {articulo.tipoArticulo === "Otro" && (
                          <div className="flex-grow space-y-2 w-1/2">
                            <Label htmlFor={`tipoPersonalizado-${index}`}>Especificar *</Label>
                            <Input
                              id={`tipoPersonalizado-${index}`}
                              value={articulo.tipoPersonalizado || ""}
                              onChange={(e) => handleArticuloChange(index, "tipoPersonalizado", e.target.value)}
                              placeholder="Ej: Pañales"
                              required
                            />
                          </div>
                        )}
                        
                        <div className="space-y-2 w-24">
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
                        
                        <div className="pt-8">
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
                      </div>
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
              )}
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <Button type="submit" disabled={loading} className="w-full sm:w-auto">
              {loading ? "Enviando..." : "Enviar solicitud"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
} 