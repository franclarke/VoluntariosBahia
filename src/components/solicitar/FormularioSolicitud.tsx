"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Trash2, Plus, MapPin } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import dynamic from "next/dynamic";

// Importar el mapa de forma dinámica para evitar problemas con SSR
const MapaUbicacion = dynamic(() => import("@/components/solicitar/MapaUbicacion"), {
  ssr: false,
  loading: () => <div className="h-[300px] w-full bg-muted flex items-center justify-center">Cargando mapa...</div>
});

interface ArticuloSolicitado {
  tipoArticulo: string;
  cantidad: number | null;
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
    descripcion: "",
    latitud: "",
    longitud: ""
  });
  const [articulos, setArticulos] = useState<ArticuloSolicitado[]>([
    { tipoArticulo: "", cantidad: null }
  ]);
  const [ubicacionSeleccionada, setUbicacionSeleccionada] = useState(false);

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

  const handleUbicacionChange = (lat: number, lng: number) => {
    setFormData(prev => ({
      ...prev,
      latitud: lat.toString(),
      longitud: lng.toString()
    }));
    setUbicacionSeleccionada(true);
  };

  const handleArticuloChange = (index: number, field: keyof ArticuloSolicitado, value: string | number | null) => {
    const nuevosArticulos = [...articulos];
    nuevosArticulos[index] = { ...nuevosArticulos[index], [field]: value };
    
    // Si cambia el tipo de artículo a algo que no es "Otro", eliminar el tipo personalizado
    if (field === "tipoArticulo" && value !== "Otro") {
      delete nuevosArticulos[index].tipoPersonalizado;
    }
    
    setArticulos(nuevosArticulos);
  };

  const agregarArticulo = () => {
    setArticulos([...articulos, { tipoArticulo: "", cantidad: null }]);
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

    // Validar que se haya seleccionado una ubicación en el mapa
    if (!ubicacionSeleccionada) {
      toast.error("Por favor selecciona una ubicación en el mapa");
      return;
    }

    // Validar que todos los artículos tengan tipo y cantidad
    const articulosInvalidos = articulos.some(art => {
      if (!art.tipoArticulo) return true;
      if (art.cantidad === null || art.cantidad <= 0) return true;
      if (art.tipoArticulo === "Otro" && (!art.tipoPersonalizado || art.tipoPersonalizado.trim() === "")) return true;
      return false;
    });
    if (articulosInvalidos) {
      toast.error("Todos los artículos deben tener tipo y cantidad válida");
      return;
    }

    try {
      setLoading(true);
      
      // Preparar los artículos para enviar (usar el tipo existente, no el personalizado)
      const articulosParaEnviar = articulos.map(art => {
        // Si la cantidad es null, asignarle valor 1 antes de enviar
        const cantidad = art.cantidad === null ? 1 : art.cantidad;
        
        // Si es "Otro", usamos el tipo existente en lugar de crear uno nuevo
        if (art.tipoArticulo === "Otro") {
          return {
            tipoArticulo: art.tipoArticulo,
            tipoPersonalizado: art.tipoPersonalizado,
            cantidad
          };
        } else {
          return {
            tipoArticulo: art.tipoArticulo,
            cantidad
          };
        }
      });

      // Enviar datos al servidor
      const response = await fetch("/api/solicitudes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          direccion: formData.direccion,
          contactoNombre: formData.contactoNombre,
          contactoTel: formData.contactoTel,
          descripcion: formData.descripcion,
          latitud: parseFloat(formData.latitud),
          longitud: parseFloat(formData.longitud),
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
      <CardHeader className="pb-4">
        <CardTitle className="text-lg sm:text-xl">Formulario de Solicitud</CardTitle>
        <CardDescription>
          Completa todos los campos para solicitar donaciones
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Datos de contacto */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm sm:text-base font-medium">Datos de contacto</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="contactoNombre">Nombre completo</Label>
                <Input
                  id="contactoNombre"
                  name="contactoNombre"
                  value={formData.contactoNombre}
                  onChange={handleChange}
                  placeholder="Ej: Juan Pérez"
                  required
                  className="text-sm sm:text-base"
                />
              </div>
              
              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="contactoTel">Teléfono de contacto</Label>
                <Input
                  id="contactoTel"
                  name="contactoTel"
                  value={formData.contactoTel}
                  onChange={handleChange}
                  placeholder="Ej: 291-4123456"
                  required
                  className="text-sm sm:text-base"
                />
              </div>
            </div>
          </div>
          
          {/* Ubicación */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm sm:text-base font-medium">Ubicación</h3>
            
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="direccion">Dirección completa</Label>
              <Input
                id="direccion"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                placeholder="Ej: Calle 123, Bahía Blanca"
                required
                className="text-sm sm:text-base"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Incluye calle, número, piso/depto y barrio para facilitar la entrega
              </p>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
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
          </div>
          
          {/* Artículos solicitados */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-sm sm:text-base font-medium">Artículos solicitados</h3>
              <Button 
                type="button" 
                onClick={agregarArticulo} 
                size="sm" 
                variant="outline"
                className="h-7 sm:h-8 text-xs sm:text-sm"
              >
                <Plus className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                Agregar artículo
              </Button>
            </div>
            
            <div className="space-y-3">
              {articulos.map((articulo, index) => (
                <div key={index} className="flex flex-col sm:flex-row gap-2 sm:gap-4 p-3 border rounded-md relative">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => eliminarArticulo(index)}
                    className="absolute top-1 right-1 h-6 w-6 sm:h-8 sm:w-8"
                    disabled={articulos.length === 1}
                  >
                    <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                  
                  <div className="flex-1 space-y-1.5 sm:space-y-2">
                    <Label htmlFor={`tipoArticulo-${index}`}>Tipo de artículo</Label>
                    <Select
                      value={articulo.tipoArticulo}
                      onValueChange={(value: string) => handleArticuloChange(index, "tipoArticulo", value)}
                    >
                      <SelectTrigger id={`tipoArticulo-${index}`} className="text-sm sm:text-base">
                        <SelectValue placeholder="Selecciona un tipo" />
                      </SelectTrigger>
                      <SelectContent className="z-[9999]">
                        {cargandoTipos ? (
                          <div className="p-2 text-center">Cargando...</div>
                        ) : (
                          <>
                            {tiposArticulos.map((tipo) => (
                              <SelectItem key={tipo} value={tipo} className="text-sm sm:text-base">
                                {tipo}
                              </SelectItem>
                            ))}
                          </>
                        )}
                      </SelectContent>
                    </Select>
                    
                    {articulo.tipoArticulo === "Otro" && (
                      <div className="mt-2">
                        <Input
                          placeholder="Especifica el tipo de artículo"
                          value={articulo.tipoPersonalizado || ""}
                          onChange={(e) => handleArticuloChange(index, "tipoPersonalizado", e.target.value)}
                          className="text-sm sm:text-base"
                          required={articulo.tipoArticulo === "Otro"}
                        />
                      </div>
                    )}
                  </div>
                  
                  <div className="w-full sm:w-24 space-y-1.5 sm:space-y-2">
                    <Label htmlFor={`cantidad-${index}`}>Cantidad</Label>
                    <Input
                      id={`cantidad-${index}`}
                      type="number"
                      min="1"
                      value={articulo.cantidad === null ? "" : articulo.cantidad}
                      onChange={(e) => {
                        const value = e.target.value === "" ? null : parseInt(e.target.value);
                        handleArticuloChange(index, "cantidad", value);
                      }}
                      className="text-sm sm:text-base"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Descripción adicional */}
          <div className="space-y-1.5 sm:space-y-2">
            <Label htmlFor="descripcion">Descripción adicional (opcional)</Label>
            <Textarea
              id="descripcion"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              placeholder="Información adicional que pueda ser útil para los voluntarios"
              className="min-h-[80px] text-sm sm:text-base"
            />
          </div>
          
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Enviando solicitud..." : "Enviar solicitud"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
} 