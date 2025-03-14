"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Trash2, Plus } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

interface ArticuloSolicitud {
  tipoArticuloId: number;
  cantidad: number;
  tipoPersonalizado?: string;
}

interface TipoArticulo {
  id: number;
  nombre: string;
}

export default function RegistroSolicitud() {
  const [loading, setLoading] = useState(false);
  const [tiposArticulos, setTiposArticulos] = useState<TipoArticulo[]>([]);
  const [cargandoTipos, setCargandoTipos] = useState(true);
  const [formData, setFormData] = useState({
    direccion: "",
    contactoNombre: "",
    contactoTel: "",
    latitud: "",
    longitud: "",
    descripcion: ""
  });
  const [articulos, setArticulos] = useState<ArticuloSolicitud[]>([
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
    setFormData({ ...formData, [name]: value });
  };

  const handleArticuloChange = (index: number, field: keyof ArticuloSolicitud, value: number | string) => {
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
      toast.error("Debes tener al menos un artículo en la solicitud");
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
      if (art.tipoArticuloId === 0 || art.cantidad < 1) return true;
      if (art.tipoArticuloId === -1 && (!art.tipoPersonalizado || art.tipoPersonalizado.trim() === "")) return true;
      return false;
    });
    
    if (articulosInvalidos) {
      toast.error("Por favor completa correctamente todos los artículos solicitados");
      return;
    }

    // Validar coordenadas
    let latitudFinal = formData.latitud;
    let longitudFinal = formData.longitud;
    
    if (!latitudFinal || !longitudFinal) {
      // Usar coordenadas por defecto para Bahía Blanca
      latitudFinal = "-38.7196";
      longitudFinal = "-62.2724";
    }

    try {
      setLoading(true);
      
      // Preparar los artículos para enviar
      const articulosFinales = [...articulos];
      
      // Procesar tipos personalizados
      for (let i = 0; i < articulosFinales.length; i++) {
        const articulo = articulosFinales[i];
        
        if (articulo.tipoArticuloId === -1 && articulo.tipoPersonalizado) {
          // Verificar si ya existe un tipo con ese nombre
          const tipoExistente = tiposArticulos.find(
            t => t.nombre.toLowerCase() === articulo.tipoPersonalizado?.toLowerCase()
          );
          
          if (!tipoExistente) {
            // Crear nuevo tipo de artículo
            const responseTipo = await fetch("/api/tipos-articulos", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ nombre: articulo.tipoPersonalizado }),
            });
            
            if (!responseTipo.ok) {
              throw new Error("Error al registrar nuevo tipo de artículo");
            }

            const nuevoTipo = await responseTipo.json();
            
            // Actualizar el ID del tipo de artículo en el arreglo de artículos
            articulosFinales[i] = {
              ...articulo,
              tipoArticuloId: nuevoTipo.id
            };
            
            // Actualizar la lista de tipos de artículos
            setTiposArticulos(prev => [...prev, nuevoTipo]);
          } else {
            // Usar el ID del tipo existente
            articulosFinales[i] = {
              ...articulo,
              tipoArticuloId: tipoExistente.id
            };
          }
        }
      }

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
          latitud: parseFloat(latitudFinal),
          longitud: parseFloat(longitudFinal),
          descripcion: formData.descripcion || null,
          estado: "Pendiente",
          articulos: articulosFinales.map(art => ({
            tipoArticuloId: art.tipoArticuloId,
            cantidad: art.cantidad
          }))
        }),
      });

      if (!response.ok) {
        throw new Error("Error al registrar la solicitud");
      }

      toast.success("Solicitud registrada correctamente");
      
      // Limpiar formulario
      setFormData({
        direccion: "",
        contactoNombre: "",
        contactoTel: "",
        latitud: "",
        longitud: "",
        descripcion: ""
      });
      setArticulos([{ tipoArticuloId: 0, cantidad: 1 }]);
      
    } catch (error) {
      console.error("Error:", error);
      toast.error(error instanceof Error ? error.message : "Error al registrar la solicitud");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
      <div className="space-y-2 sm:space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <div className="space-y-1 sm:space-y-2">
            <Label htmlFor="contactoNombre" className="text-xs sm:text-sm">Nombre de contacto</Label>
            <Input
              id="contactoNombre"
              name="contactoNombre"
              value={formData.contactoNombre}
              onChange={handleChange}
              placeholder="Ej: Juan Pérez"
              className="text-xs sm:text-sm h-8 sm:h-10"
              required
            />
          </div>
          
          <div className="space-y-1 sm:space-y-2">
            <Label htmlFor="contactoTel" className="text-xs sm:text-sm">Teléfono de contacto</Label>
            <Input
              id="contactoTel"
              name="contactoTel"
              value={formData.contactoTel}
              onChange={handleChange}
              placeholder="Ej: 291-4123456"
              className="text-xs sm:text-sm h-8 sm:h-10"
            />
          </div>
        </div>
        
        <div className="space-y-1 sm:space-y-2">
          <Label htmlFor="direccion" className="text-xs sm:text-sm">Dirección completa</Label>
          <Input
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            placeholder="Ej: Calle 123, Bahía Blanca"
            className="text-xs sm:text-sm h-8 sm:h-10"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <div className="space-y-1 sm:space-y-2">
            <Label htmlFor="latitud" className="text-xs sm:text-sm">Latitud</Label>
            <Input
              id="latitud"
              name="latitud"
              value={formData.latitud}
              onChange={handleChange}
              placeholder="-38.7196"
              className="text-xs sm:text-sm h-8 sm:h-10"
            />
          </div>
          
          <div className="space-y-1 sm:space-y-2">
            <Label htmlFor="longitud" className="text-xs sm:text-sm">Longitud</Label>
            <Input
              id="longitud"
              name="longitud"
              value={formData.longitud}
              onChange={handleChange}
              placeholder="-62.2724"
              className="text-xs sm:text-sm h-8 sm:h-10"
            />
          </div>
        </div>
        
        <div className="space-y-1 sm:space-y-2">
          <Label htmlFor="descripcion" className="text-xs sm:text-sm">Descripción (opcional)</Label>
          <Textarea
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            placeholder="Información adicional sobre la solicitud"
            className="text-xs sm:text-sm min-h-[60px] sm:min-h-[80px]"
          />
        </div>
      </div>
      
      <div className="space-y-2 sm:space-y-3">
        <div className="flex justify-between items-center">
          <Label className="text-xs sm:text-sm font-medium">Artículos solicitados</Label>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={agregarArticulo}
            className="flex items-center gap-1 h-7 text-xs sm:h-8 sm:text-sm"
          >
            <Plus className="h-3 w-3 sm:h-4 sm:w-4" /> Agregar artículo
          </Button>
        </div>

        {articulos.map((articulo, index) => (
          <div key={index} className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-start border p-2 sm:p-3 rounded-md relative">
            <div className="flex-1 space-y-1 sm:space-y-2 w-full sm:w-auto">
              <Label className="text-xs sm:text-sm">Tipo de artículo</Label>
              {cargandoTipos ? (
                <div className="h-8 sm:h-10 bg-muted animate-pulse rounded-md"></div>
              ) : (
                <Select 
                  value={articulo.tipoArticuloId.toString()} 
                  onValueChange={(value: string) => handleArticuloChange(index, "tipoArticuloId", parseInt(value))}
                >
                  <SelectTrigger className="text-xs sm:text-sm h-8 sm:h-10">
                    <SelectValue placeholder="Selecciona un tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0" disabled className="text-xs sm:text-sm">Selecciona un tipo</SelectItem>
                    {tiposArticulos.map((tipo) => (
                      <SelectItem key={tipo.id} value={tipo.id.toString()} className="text-xs sm:text-sm">
                        {tipo.nombre}
                      </SelectItem>
                    ))}
                    <SelectItem value="-1" className="text-xs sm:text-sm">Otro (especificar)</SelectItem>
                  </SelectContent>
                </Select>
              )}

              {articulo.tipoArticuloId === -1 && (
                <div className="mt-1 sm:mt-2">
                  <Input
                    placeholder="Especifica el tipo de artículo"
                    value={articulo.tipoPersonalizado || ""}
                    onChange={(e) => handleArticuloChange(index, "tipoPersonalizado", e.target.value)}
                    className="text-xs sm:text-sm h-8 sm:h-10"
                  />
                </div>
              )}
            </div>

            <div className="w-full sm:w-24 space-y-1 sm:space-y-2">
              <Label className="text-xs sm:text-sm">Cantidad</Label>
              <Input
                type="number"
                min="1"
                value={articulo.cantidad}
                onChange={(e) => handleArticuloChange(index, "cantidad", parseInt(e.target.value) || 0)}
                className="text-xs sm:text-sm h-8 sm:h-10"
              />
            </div>

            <Button 
              type="button" 
              variant="ghost" 
              size="icon"
              className="absolute top-1 right-1 h-6 w-6 sm:h-8 sm:w-8"
              onClick={() => eliminarArticulo(index)}
              disabled={articulos.length === 1}
            >
              <Trash2 className="h-3 w-3 sm:h-4 sm:w-4 text-destructive" />
            </Button>
          </div>
        ))}
      </div>

      <Button type="submit" className="w-full mt-4 sm:mt-6 h-8 sm:h-10 text-xs sm:text-sm" disabled={loading}>
        {loading ? "Registrando..." : "Registrar Solicitud"}
      </Button>
    </form>
  );
} 