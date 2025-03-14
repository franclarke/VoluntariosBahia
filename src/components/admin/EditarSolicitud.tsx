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

interface ArticuloSolicitud {
  tipoArticuloId: number;
  cantidad: number;
  tipoPersonalizado?: string;
}

interface TipoArticulo {
  id: number;
  nombre: string;
}

interface EditarSolicitudProps {
  solicitudId: number;
}

export default function EditarSolicitud({ solicitudId }: EditarSolicitudProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [cargandoSolicitud, setCargandoSolicitud] = useState(true);
  const [tiposArticulos, setTiposArticulos] = useState<TipoArticulo[]>([]);
  const [cargandoTipos, setCargandoTipos] = useState(true);
  const [formData, setFormData] = useState({
    direccion: "",
    contactoNombre: "",
    contactoTel: "",
    latitud: "-38.7196", // Valor predeterminado para Bahía Blanca
    longitud: "-62.2724", // Valor predeterminado para Bahía Blanca
    descripcion: ""
  });
  const [articulos, setArticulos] = useState<ArticuloSolicitud[]>([
    { tipoArticuloId: 0, cantidad: 1 }
  ]);

  // Cargar datos de la solicitud
  useEffect(() => {
    const cargarSolicitud = async () => {
      setCargandoSolicitud(true);
      try {
        const response = await fetch(`/api/solicitudes/${solicitudId}`);
        if (response.ok) {
          const data = await response.json();
          setFormData({
            direccion: data.direccion,
            contactoNombre: data.contactoNombre,
            contactoTel: data.contactoTel || "",
            latitud: data.latitud.toString(),
            longitud: data.longitud.toString(),
            descripcion: data.descripcion || ""
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
          toast.error("Error al cargar los datos de la solicitud");
          router.push("/admin");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("Error al cargar los datos de la solicitud");
        router.push("/admin");
      } finally {
        setCargandoSolicitud(false);
      }
    };

    cargarSolicitud();
  }, [solicitudId, router]);

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

  const handleArticuloChange = (index: number, field: keyof ArticuloSolicitud, value: number | string) => {
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
    if (!formData.direccion || !formData.contactoNombre || !formData.contactoTel) {
      toast.error("Por favor completa los campos obligatorios");
      return;
    }

    // Validar que todos los artículos tengan tipo y cantidad
    const articulosInvalidos = articulos.some(art => art.tipoArticuloId === 0 || art.cantidad < 1);
    if (articulosInvalidos) {
      toast.error("Por favor completa correctamente todos los artículos solicitados");
      return;
    }

    // Filtrar artículos personalizados
    const articulosFinales = articulos.filter(art => art.tipoArticuloId !== -1);
    
    try {
      setLoading(true);
      
      // Actualizar la solicitud
      const responseSolicitud = await fetch(`/api/solicitudes/${solicitudId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          direccion: formData.direccion,
          contactoNombre: formData.contactoNombre,
          contactoTel: formData.contactoTel,
          latitud: parseFloat(formData.latitud),
          longitud: parseFloat(formData.longitud),
          descripcion: formData.descripcion || null
        }),
      });

      if (!responseSolicitud.ok) {
        const errorData = await responseSolicitud.json();
        throw new Error(errorData.error || "Error al actualizar la solicitud");
      }
      
      // Eliminar artículos existentes
      const responseEliminar = await fetch(`/api/solicitudes/${solicitudId}/articulos`, {
        method: "DELETE",
      });
      
      if (!responseEliminar.ok) {
        throw new Error("Error al actualizar los artículos solicitados");
      }
      
      // Registrar los artículos solicitados
      for (const articulo of articulosFinales) {
        const responseArticulo = await fetch(`/api/solicitudes/${solicitudId}/articulos`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tipoArticuloId: articulo.tipoArticuloId,
            cantidad: articulo.cantidad
          }),
        });

        if (!responseArticulo.ok) {
          const errorData = await responseArticulo.json();
          throw new Error(errorData.error || "Error al registrar artículos solicitados");
        }
      }

      toast.success("Solicitud actualizada correctamente");
      router.push("/admin");
      
    } catch (error) {
      console.error("Error:", error);
      toast.error(error instanceof Error ? error.message : "Error al actualizar la solicitud");
    } finally {
      setLoading(false);
    }
  };

  if (cargandoSolicitud || cargandoTipos) {
    return <div className="flex justify-center items-center p-8">Cargando datos...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="direccion">Dirección *</Label>
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

        <div className="space-y-2">
          <Label htmlFor="descripcion">Descripción (opcional)</Label>
          <Textarea
            id="descripcion"
            name="descripcion"
            placeholder="Describe brevemente esta solicitud"
            value={formData.descripcion}
            onChange={handleChange}
            rows={3}
          />
        </div>

        <div className="pt-4 border-t">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Artículos solicitados</h3>
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