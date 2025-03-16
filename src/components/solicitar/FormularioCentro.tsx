"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Trash2, Plus, Building, RefreshCw, MapPin } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import dynamic from "next/dynamic";

// Importar el mapa de forma dinámica para evitar problemas con SSR
const MapaUbicacion = dynamic(() => import("@/components/solicitar/MapaUbicacion"), {
  ssr: false,
  loading: () => <div className="h-[300px] w-full bg-muted flex items-center justify-center">Cargando mapa...</div>
});

interface ArticuloDisponible {
  tipoArticuloId: number;
  cantidad: number;
  tipoPersonalizado?: string;
}

interface TipoArticulo {
  id: number;
  nombre: string;
}

interface FormularioCentroProps {
  onSuccess: () => void;
}

export default function FormularioCentro({ onSuccess }: FormularioCentroProps) {
  const [loading, setLoading] = useState(false);
  const [tiposArticulos, setTiposArticulos] = useState<TipoArticulo[]>([]);
  const [cargandoTipos, setCargandoTipos] = useState(true);
  const [formData, setFormData] = useState({
    direccion: "",
    responsable: "",
    telefono: "",
    horarioApertura: "",
    horarioCierre: "",
    descripcion: "",
    nombre: "",
    latitud: "",
    longitud: ""
  });
  const [articulos, setArticulos] = useState<ArticuloDisponible[]>([
    { tipoArticuloId: 0, cantidad: 1 }
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
          setTiposArticulos([...data, { id: -1, nombre: "Otro" }]);
        } else {
          toast.error("Error al cargar tipos de artículos");
          setTiposArticulos([{ id: -1, nombre: "Otro" }]);
        }
      } catch (error) {
        console.error("Error al cargar tipos de artículos:", error);
        toast.error("Error al cargar tipos de artículos");
        setTiposArticulos([{ id: -1, nombre: "Otro" }]);
      } finally {
        setCargandoTipos(false);
      }
    };

    cargarTiposArticulos();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Validación para el nombre y responsable (no permitir números)
    if ((name === "nombre" || name === "responsable") && /\d/.test(value)) {
      return;
    }
    
    // Validación para el teléfono (solo números y guiones)
    if (name === "telefono" && !/^[0-9-]*$/.test(value)) {
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

  const handleArticuloChange = (index: number, field: keyof ArticuloDisponible, value: number | string) => {
    const nuevosArticulos = [...articulos];
    nuevosArticulos[index] = { ...nuevosArticulos[index], [field]: value };
    
    // Si cambia el tipo de artículo a algo que no es "Otro", eliminar el tipo personalizado
    if (field === "tipoArticuloId" && value !== -1) {
      delete nuevosArticulos[index].tipoPersonalizado;
    }
    
    setArticulos(nuevosArticulos);
  };

  const agregarArticulo = () => {
    setArticulos([...articulos, { tipoArticuloId: 0, cantidad: 1 }]);
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
    if (!formData.direccion || !formData.responsable || !formData.telefono) {
      toast.error("Por favor completa todos los campos obligatorios");
      return;
    }

    // Validar que se haya seleccionado una ubicación en el mapa
    if (!ubicacionSeleccionada || !formData.latitud || !formData.longitud) {
      toast.error("Por favor selecciona una ubicación en el mapa");
      return;
    }

    // Validar que todos los artículos tengan tipo y cantidad
    const articulosInvalidos = articulos.some(art => {
      if (!art.tipoArticuloId || art.cantidad < 1) return true;
      if (art.tipoArticuloId === -1 && (!art.tipoPersonalizado || art.tipoPersonalizado.trim() === "")) return true;
      return false;
    });
    if (articulosInvalidos) {
      toast.error("Todos los artículos deben tener tipo y cantidad válida");
      return;
    }

    try {
      setLoading(true);
      
      // Preparar los datos para enviar
      const solicitudData = {
        ...formData,
        latitud: parseFloat(formData.latitud),
        longitud: parseFloat(formData.longitud),
        articulos: articulos.map(art => {
          if (art.tipoArticuloId === -1) {
            return {
              tipoArticuloId: art.tipoArticuloId,
              tipoPersonalizado: art.tipoPersonalizado,
              cantidad: art.cantidad
            };
          } else {
            return {
              tipoArticuloId: art.tipoArticuloId,
              cantidad: art.cantidad
            };
          }
        })
      };

      console.log("Enviando solicitud de punto de donación:", solicitudData);

      // Enviar datos al servidor
      const response = await fetch("/api/solicitudes-centro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(solicitudData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error en la respuesta del servidor:", errorData);
        throw new Error(errorData.error || "Error al enviar la solicitud");
      }

      const responseData = await response.json();
      console.log("Respuesta del servidor:", responseData);

      toast.success("Solicitud enviada correctamente.");
      onSuccess();
    } catch (error) {
      console.error("Error completo:", error);
      toast.error(error instanceof Error ? error.message : "Error al enviar la solicitud. Por favor intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg sm:text-xl">Formulario de Registro</CardTitle>
        <CardDescription>
          Completa todos los campos para registrar tu punto de donación
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Datos del punto */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm sm:text-base font-medium flex items-center gap-2">
              <Building className="h-4 w-4 text-muted-foreground" />
              Datos del punto de donación
            </h3>
            
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="nombre">Nombre del centro o establecimiento</Label>
              <Input
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ej: Iglesia San Cayetano, Club Social, etc."
                className="text-sm sm:text-base"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="responsable">Nombre del responsable *</Label>
                <Input
                  id="responsable"
                  name="responsable"
                  value={formData.responsable}
                  onChange={handleChange}
                  placeholder="Nombre y apellido"
                  required
                  className="text-sm sm:text-base"
                />
              </div>
              
              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="telefono">Teléfono de contacto *</Label>
                <Input
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="Ej: 291-4123456"
                  required
                  className="text-sm sm:text-base"
                />
              </div>
            </div>
            
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="direccion">Dirección completa *</Label>
              <Input
                id="direccion"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                placeholder="Ej: Calle 123, Bahía Blanca"
                required
                className="text-sm sm:text-base"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="horarioApertura">Horario de apertura</Label>
                <Input
                  id="horarioApertura"
                  name="horarioApertura"
                  value={formData.horarioApertura}
                  onChange={handleChange}
                  placeholder="Ej: 9:00"
                  className="text-sm sm:text-base"
                />
              </div>
              
              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="horarioCierre">Horario de cierre</Label>
                <Input
                  id="horarioCierre"
                  name="horarioCierre"
                  value={formData.horarioCierre}
                  onChange={handleChange}
                  placeholder="Ej: 18:00"
                  className="text-sm sm:text-base"
                />
              </div>
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
          
          {/* Artículos disponibles */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-sm sm:text-base font-medium flex items-center gap-2">
                <RefreshCw className="h-4 w-4 text-muted-foreground" />
                Artículos disponibles para donación
              </h3>
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
                      value={articulo.tipoArticuloId ? articulo.tipoArticuloId.toString() : ""}
                      onValueChange={(value) => handleArticuloChange(index, "tipoArticuloId", parseInt(value))}
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
                              <SelectItem 
                                key={tipo.id} 
                                value={tipo.id.toString()} 
                                className="text-sm sm:text-base"
                              >
                                {tipo.nombre}
                              </SelectItem>
                            ))}
                          </>
                        )}
                      </SelectContent>
                    </Select>
                    
                    {articulo.tipoArticuloId === -1 && (
                      <div className="mt-2">
                        <Input
                          placeholder="Especifica el tipo de artículo"
                          value={articulo.tipoPersonalizado || ""}
                          onChange={(e) => handleArticuloChange(index, "tipoPersonalizado", e.target.value)}
                          className="text-sm sm:text-base"
                          required={articulo.tipoArticuloId === -1}
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
                      value={articulo.cantidad}
                      onChange={(e) => handleArticuloChange(index, "cantidad", parseInt(e.target.value) || 1)}
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
              placeholder="Información adicional sobre tu punto de donación que pueda ser útil para los voluntarios"
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