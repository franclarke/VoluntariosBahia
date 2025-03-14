"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Trash2, Plus, Building, RefreshCw } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

interface ArticuloDisponible {
  tipoArticuloId: number;
  cantidad: number;
  tipoPersonalizado?: string;
}

interface TipoArticulo {
  id: number;
  nombre: string;
}

export default function SolicitarCentroPage() {
  const [loading, setLoading] = useState(false);
  const [tiposArticulos, setTiposArticulos] = useState<TipoArticulo[]>([]);
  const [cargandoTipos, setCargandoTipos] = useState(true);
  const [enviado, setEnviado] = useState(false);
  const [formData, setFormData] = useState({
    direccion: "",
    responsable: "",
    telefono: "",
    horarioApertura: "",
    horarioCierre: "",
    descripcion: "",
    nombre: ""
  });
  const [articulos, setArticulos] = useState<ArticuloDisponible[]>([
    { tipoArticuloId: 0, cantidad: 1 }
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
            setTiposArticulos(data);
          } else {
            toast.error("No se encontraron tipos de artículos");
          }
        } else {
          toast.error("Error al cargar tipos de artículos");
        }
      } catch (error) {
        console.error("Error al cargar tipos de artículos:", error);
        toast.error("Error al cargar tipos de artículos");
      } finally {
        setCargandoTipos(false);
      }
    };

    cargarTiposArticulos();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Validación para el teléfono (solo números y guiones)
    if (name === "telefono" && !/^[0-9-]*$/.test(value)) {
      return;
    }
    
    setFormData({ ...formData, [name]: value });
  };

  const handleArticuloChange = (index: number, field: keyof ArticuloDisponible, value: number | string) => {
    const nuevosArticulos = [...articulos];
    nuevosArticulos[index] = { ...nuevosArticulos[index], [field]: value };
    
    // Si cambia el tipo de artículo a algo que no es -1 (Otro), eliminar el tipo personalizado
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
      toast.error("Debes tener al menos un artículo disponible");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar datos requeridos
    if (!formData.direccion || !formData.responsable) {
      toast.error("Por favor completa los campos obligatorios");
      return;
    }

    // Validar que todos los artículos tengan tipo y cantidad
    const articulosInvalidos = articulos.some(art => {
      if (art.tipoArticuloId === 0 || art.cantidad < 1) return true;
      if (art.tipoArticuloId === -1 && (!art.tipoPersonalizado || art.tipoPersonalizado.trim() === "")) return true;
      return false;
    });
    if (articulosInvalidos) {
      toast.error("Por favor completa correctamente todos los artículos disponibles");
      return;
    }

    try {
      setLoading(true);
      
      console.log("Enviando solicitud de centro:", {
        direccion: formData.direccion,
        responsable: formData.responsable,
        articulos: articulos
      });
      
      // Crear la solicitud de centro
      const response = await fetch("/api/solicitudes-centro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          direccion: formData.direccion,
          responsable: formData.responsable,
          telefono: formData.telefono || null,
          horarioApertura: formData.horarioApertura || null,
          horarioCierre: formData.horarioCierre || null,
          descripcion: formData.descripcion || null,
          nombre: formData.nombre || null,
          articulos: articulos
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error en la respuesta:", errorData);
        throw new Error(errorData.error || "Error al enviar la solicitud");
      }

      const responseData = await response.json();
      console.log("Respuesta del servidor:", responseData);
      
      toast.success("Solicitud enviada correctamente. Un administrador la revisará pronto.");
      setEnviado(true);
      
    } catch (error) {
      console.error("Error:", error);
      toast.error(error instanceof Error ? error.message : "Error al enviar la solicitud");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      direccion: "",
      responsable: "",
      telefono: "",
      horarioApertura: "",
      horarioCierre: "",
      descripcion: "",
      nombre: ""
    });
    setArticulos([{ tipoArticuloId: 0, cantidad: 1 }]);
    setEnviado(false);
  };

  return (
    <div className="container mx-auto py-4 px-4 sm:px-6 max-w-3xl">
      <div className="flex flex-col space-y-2 mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight flex items-center">
          <Building className="mr-2 h-6 w-6 text-primary" />
          Solicitar Registro de Centro
        </h1>
        <p className="text-muted-foreground">
          Completa el formulario para registrar un centro de distribución de donaciones en Bahía Blanca.
          Tu solicitud será revisada por un administrador antes de ser aprobada.
        </p>
      </div>

      {enviado ? (
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl text-center text-green-600">¡Solicitud enviada correctamente!</CardTitle>
            <CardDescription className="text-center">
              Tu solicitud ha sido recibida y será revisada por un administrador.
              Te contactaremos pronto para confirmar los detalles.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center pt-4">
            <Button 
              onClick={resetForm}
              className="w-full max-w-xs"
              variant="outline"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Realizar otra solicitud
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Formulario de Registro</CardTitle>
            <CardDescription>
              Completa los datos del centro de distribución y los artículos que podrás recibir
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="direccion">Dirección del centro *</Label>
                  <Input
                    id="direccion"
                    name="direccion"
                    placeholder="Ej: Av. Colón 80, Bahía Blanca"
                    value={formData.direccion}
                    onChange={handleChange}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Ingresa la dirección lo más detallada posible para que los voluntarios puedan ubicar el centro.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre del centro (opcional)</Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    placeholder="Ej: Centro Comunitario San Roque"
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="responsable">Nombre del responsable *</Label>
                  <Input
                    id="responsable"
                    name="responsable"
                    placeholder="Ej: Juan Pérez"
                    value={formData.responsable}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono de contacto</Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    placeholder="Ej: 291-4123456"
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="horarioApertura">Horario de apertura</Label>
                    <Input
                      id="horarioApertura"
                      name="horarioApertura"
                      type="time"
                      value={formData.horarioApertura}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="horarioCierre">Horario de cierre</Label>
                    <Input
                      id="horarioCierre"
                      name="horarioCierre"
                      type="time"
                      value={formData.horarioCierre}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="descripcion">Descripción (opcional)</Label>
                  <Textarea
                    id="descripcion"
                    name="descripcion"
                    placeholder="Describe brevemente tu centro de distribución"
                    value={formData.descripcion}
                    onChange={handleChange}
                    rows={3}
                  />
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">Artículos disponibles</h3>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={agregarArticulo}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Agregar artículo
                    </Button>
                  </div>
                  
                  {cargandoTipos ? (
                    <div className="flex justify-center items-center py-4">
                      <p className="text-sm text-muted-foreground">Cargando tipos de artículos...</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {articulos.map((articulo, index) => (
                        <div key={index} className="flex flex-col gap-2 border p-3 rounded-md bg-muted/30">
                          <div className="flex justify-between items-start">
                            <h4 className="text-sm font-medium">Artículo {index + 1}</h4>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => eliminarArticulo(index)}
                              disabled={articulos.length === 1}
                              className="h-8 w-8 p-0"
                            >
                              <Trash2 className="h-4 w-4 text-destructive" />
                              <span className="sr-only">Eliminar</span>
                            </Button>
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <div className="space-y-2">
                              <Label htmlFor={`tipoArticulo-${index}`}>Tipo de artículo *</Label>
                              <Select
                                value={articulo.tipoArticuloId.toString()}
                                onValueChange={(value: string) => handleArticuloChange(index, "tipoArticuloId", parseInt(value))}
                              >
                                <SelectTrigger id={`tipoArticulo-${index}`}>
                                  <SelectValue placeholder="Selecciona un tipo" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="0">Selecciona un tipo</SelectItem>
                                  {tiposArticulos.map((tipo) => (
                                    <SelectItem key={tipo.id} value={tipo.id.toString()}>
                                      {tipo.nombre}
                                    </SelectItem>
                                  ))}
                                  <SelectItem value="-1">Otro (especificar)</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor={`cantidad-${index}`}>Cantidad *</Label>
                              <Input
                                id={`cantidad-${index}`}
                                type="number"
                                min="1"
                                value={articulo.cantidad}
                                onChange={(e) => handleArticuloChange(index, "cantidad", parseInt(e.target.value) || 0)}
                                required
                              />
                            </div>
                          </div>
                          
                          {articulo.tipoArticuloId === -1 && (
                            <div className="space-y-2">
                              <Label htmlFor={`tipoPersonalizado-${index}`}>Especifica el tipo *</Label>
                              <Input
                                id={`tipoPersonalizado-${index}`}
                                value={articulo.tipoPersonalizado || ""}
                                onChange={(e) => handleArticuloChange(index, "tipoPersonalizado", e.target.value)}
                                placeholder="Ej: Pañales talle M"
                                required
                              />
                            </div>
                          )}
                        </div>
                      ))}
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
      )}
    </div>
  );
} 