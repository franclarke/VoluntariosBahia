"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Trash2, Plus } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

interface ArticuloDisponible {
  tipoArticuloId: number;
  cantidad: number;
  tipoPersonalizado?: string;
}

interface TipoArticulo {
  id: number;
  nombre: string;
}

interface EditarCentroProps {
  centroId: number;
}

export default function EditarCentro({ centroId }: EditarCentroProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [cargandoCentro, setCargandoCentro] = useState(true);
  const [tiposArticulos, setTiposArticulos] = useState<TipoArticulo[]>([]);
  const [cargandoTipos, setCargandoTipos] = useState(true);
  const [formData, setFormData] = useState({
    direccion: "",
    responsable: "",
    telefono: "",
    horarioApertura: "",
    horarioCierre: "",
    latitud: "-38.7196",
    longitud: "-62.2724",
    descripcion: "",
    nombre: ""
  });
  const [articulos, setArticulos] = useState<ArticuloDisponible[]>([
    { tipoArticuloId: 0, cantidad: 1 }
  ]);

  // Cargar datos del centro
  useEffect(() => {
    const cargarCentro = async () => {
      setCargandoCentro(true);
      try {
        const response = await fetch(`/api/centros-distribucion/${centroId}`);
        if (response.ok) {
          const data = await response.json();
          setFormData({
            direccion: data.direccion,
            responsable: data.responsable,
            telefono: data.telefono || "",
            horarioApertura: data.horarioApertura || "",
            horarioCierre: data.horarioCierre || "",
            latitud: data.latitud.toString(),
            longitud: data.longitud.toString(),
            descripcion: data.descripcion || "",
            nombre: data.nombre || ""
          });
          
          // Transformar artículos
          if (data.articulos && data.articulos.length > 0) {
            const articulosFormateados = data.articulos.map((art: { tipoArticuloId: number; cantidad: number }) => ({
              tipoArticuloId: art.tipoArticuloId,
              cantidad: art.cantidad
            }));
            setArticulos(articulosFormateados);
          }
        } else {
          toast.error("Error al cargar los datos del centro");
          router.push("/admin");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("Error al cargar los datos del centro");
        router.push("/admin");
      } finally {
        setCargandoCentro(false);
      }
    };

    cargarCentro();
  }, [centroId, router]);

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
          toast.error("Error al cargar los tipos de artículos");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("Error al cargar los tipos de artículos");
      } finally {
        setCargandoTipos(false);
      }
    };

    cargarTiposArticulos();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArticuloChange = (index: number, field: keyof ArticuloDisponible, value: number | string) => {
    const nuevosArticulos = [...articulos];
    nuevosArticulos[index] = {
      ...nuevosArticulos[index],
      [field]: value
    };
    setArticulos(nuevosArticulos);
  };

  const agregarArticulo = () => {
    setArticulos([...articulos, { tipoArticuloId: 0, cantidad: 1 }]);
  };

  const eliminarArticulo = (index: number) => {
    if (articulos.length > 1) {
      setArticulos(articulos.filter((_, i) => i !== index));
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
    const articulosInvalidos = articulos.some(art => art.tipoArticuloId === 0 || art.cantidad < 1);
    if (articulosInvalidos) {
      toast.error("Por favor completa correctamente todos los artículos disponibles");
      return;
    }

    // Validar que latitud y longitud sean números válidos
    const latitud = parseFloat(formData.latitud);
    const longitud = parseFloat(formData.longitud);
    
    if (isNaN(latitud) || isNaN(longitud)) {
      toast.error("La latitud y longitud deben ser números válidos");
      return;
    }

    // Filtrar artículos personalizados
    const articulosFinales = articulos.filter(art => art.tipoArticuloId !== -1);
    
    try {
      setLoading(true);
      
      // Actualizar el centro de distribución
      console.log("Actualizando centro de distribución:", centroId);
      const responseCentro = await fetch(`/api/centros-distribucion/${centroId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          direccion: formData.direccion,
          responsable: formData.responsable,
          telefono: formData.telefono || null,
          horarioApertura: formData.horarioApertura || null,
          horarioCierre: formData.horarioCierre || null,
          latitud: latitud,
          longitud: longitud,
          descripcion: formData.descripcion || null,
          nombre: formData.nombre || null
        }),
      });

      if (!responseCentro.ok) {
        const errorData = await responseCentro.json();
        console.error("Error en la respuesta del servidor:", errorData);
        throw new Error(errorData.error || "Error al actualizar el centro de distribución");
      }
      
      // Eliminar artículos existentes
      console.log("Eliminando artículos existentes");
      const responseEliminar = await fetch(`/api/centros-distribucion/${centroId}/articulos`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if (!responseEliminar.ok) {
        const errorData = await responseEliminar.json();
        console.error("Error al eliminar artículos:", errorData);
        throw new Error(errorData.error || "Error al actualizar los artículos disponibles");
      }
      
      // Registrar los artículos disponibles usando el nuevo endpoint
      if (articulosFinales.length > 0) {
        console.log("Agregando nuevos artículos:", articulosFinales);
        const responseArticulos = await fetch(`/api/centros-distribucion/${centroId}/articulos`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            articulos: articulosFinales
          }),
        });

        if (!responseArticulos.ok) {
          const errorData = await responseArticulos.json();
          console.error("Error al agregar artículos:", errorData);
          throw new Error(errorData.error || "Error al registrar artículos disponibles");
        }
      }

      toast.success("Centro de distribución actualizado correctamente");
      router.push("/admin");
      
    } catch (error) {
      console.error("Error completo:", error);
      toast.error(error instanceof Error ? error.message : "Error al actualizar el centro de distribución");
    } finally {
      setLoading(false);
    }
  };

  if (cargandoCentro || cargandoTipos) {
    return <div className="flex justify-center items-center p-8">Cargando datos...</div>;
  }

  return (
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="horarioApertura">Horario de apertura</Label>
            <Input
              id="horarioApertura"
              name="horarioApertura"
              placeholder="Ej: 9:00"
              value={formData.horarioApertura}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="horarioCierre">Horario de cierre</Label>
            <Input
              id="horarioCierre"
              name="horarioCierre"
              placeholder="Ej: 18:00"
              value={formData.horarioCierre}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="latitud">Latitud *</Label>
            <Input
              id="latitud"
              name="latitud"
              placeholder="Ej: -38.7196"
              value={formData.latitud}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="longitud">Longitud *</Label>
            <Input
              id="longitud"
              name="longitud"
              placeholder="Ej: -62.2724"
              value={formData.longitud}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="descripcion">Descripción (opcional)</Label>
          <Textarea
            id="descripcion"
            name="descripcion"
            placeholder="Describe brevemente este centro de distribución"
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
          
          <div className="space-y-4">
            {articulos.map((articulo, index) => (
              <div key={index} className="flex flex-col gap-2 border p-3 rounded-md bg-muted/30">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">Artículo {index + 1}</h4>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => eliminarArticulo(index)}
                    disabled={articulos.length === 1}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`tipo-${index}`}>Tipo de artículo *</Label>
                    <Select
                      value={articulo.tipoArticuloId.toString()}
                      onValueChange={(value) => handleArticuloChange(index, "tipoArticuloId", parseInt(value))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">Selecciona un tipo</SelectItem>
                        {tiposArticulos.map((tipo) => (
                          <SelectItem key={tipo.id} value={tipo.id.toString()}>
                            {tipo.nombre}
                          </SelectItem>
                        ))}
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
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-2 flex justify-end gap-2">
        <Button 
          type="button" 
          variant="outline" 
          onClick={() => router.push("/admin")}
        >
          Cancelar
        </Button>
        <Button type="submit" disabled={loading}>
          {loading ? "Guardando..." : "Guardar cambios"}
        </Button>
      </div>
    </form>
  );
} 