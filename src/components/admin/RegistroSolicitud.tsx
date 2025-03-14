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
    setFormData(prev => ({ ...prev, [name]: value }));
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
      toast.error("Debes tener al menos un artículo");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.direccion || !formData.contactoNombre || !formData.contactoTel) {
      toast.error("Por favor completa todos los campos obligatorios");
      return;
    }

    // Validar que todos los artículos tengan tipo y cantidad
    const articulosInvalidos = articulos.some(art => 
      (art.tipoArticuloId === 0) || 
      (art.tipoArticuloId === -1 && (!art.tipoPersonalizado || art.tipoPersonalizado.trim() === "")) || 
      art.cantidad < 1
    );
    
    if (articulosInvalidos) {
      toast.error("Por favor completa correctamente todos los artículos");
      return;
    }

    try {
      setLoading(true);
      
      // Geocodificar la dirección para obtener latitud y longitud si no están definidas
      let latitudFinal = formData.latitud;
      let longitudFinal = formData.longitud;
      
      if (!latitudFinal || !longitudFinal) {
        // Aquí iría la lógica para geocodificar la dirección
        // Por ahora, usamos valores de ejemplo
        latitudFinal = "-38.7196";
        longitudFinal = "-62.2724";
      }

      // Primero, registrar los tipos de artículos personalizados si existen
      const articulosFinales = [...articulos];
      
      for (let i = 0; i < articulosFinales.length; i++) {
        const articulo = articulosFinales[i];
        if (articulo.tipoArticuloId === -1 && articulo.tipoPersonalizado) {
          // Verificar si ya existe un tipo de artículo con ese nombre
          const tipoExistente = tiposArticulos.find(
            tipo => tipo.nombre.toLowerCase() === articulo.tipoPersonalizado?.toLowerCase()
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
      toast.error("Error al registrar la solicitud");
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

      <div className="grid grid-cols-2 gap-4">
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
          placeholder="Información adicional sobre la solicitud"
          value={formData.descripcion}
          onChange={handleChange}
          rows={3}
        />
      </div>

      <div className="space-y-3 pt-4">
        <div className="flex justify-between items-center">
          <Label>Artículos necesitados *</Label>
          <Button 
            type="button" 
            variant="outline" 
            size="sm"
            onClick={agregarArticulo}
            className="flex items-center gap-1"
          >
            <Plus className="h-4 w-4" /> Agregar artículo
          </Button>
        </div>

        {articulos.map((articulo, index) => (
          <div key={index} className="flex gap-3 items-start border p-3 rounded-md">
            <div className="flex-1 space-y-2">
              <Label>Tipo de artículo</Label>
              {cargandoTipos ? (
                <div className="h-10 bg-muted animate-pulse rounded-md"></div>
              ) : (
                <Select 
                  value={articulo.tipoArticuloId.toString()} 
                  onValueChange={(value) => handleArticuloChange(index, "tipoArticuloId", parseInt(value))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un tipo de artículo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0" disabled>Selecciona un tipo</SelectItem>
                    {tiposArticulos.map((tipo) => (
                      <SelectItem key={tipo.id} value={tipo.id.toString()}>
                        {tipo.nombre}
                      </SelectItem>
                    ))}
                    <SelectItem value="-1">Otro (especificar)</SelectItem>
                  </SelectContent>
                </Select>
              )}

              {articulo.tipoArticuloId === -1 && (
                <div className="mt-2">
                  <Input
                    placeholder="Especifica el tipo de artículo"
                    value={articulo.tipoPersonalizado || ""}
                    onChange={(e) => handleArticuloChange(index, "tipoPersonalizado", e.target.value)}
                  />
                </div>
              )}
            </div>

            <div className="w-24 space-y-2">
              <Label>Cantidad</Label>
              <Input
                type="number"
                min="1"
                value={articulo.cantidad}
                onChange={(e) => handleArticuloChange(index, "cantidad", parseInt(e.target.value) || 0)}
              />
            </div>

            <Button 
              type="button" 
              variant="ghost" 
              size="icon"
              className="mt-8"
              onClick={() => eliminarArticulo(index)}
            >
              <Trash2 className="h-4 w-4 text-destructive" />
            </Button>
          </div>
        ))}
      </div>

      <Button type="submit" className="w-full mt-6" disabled={loading}>
        {loading ? "Registrando..." : "Registrar Solicitud"}
      </Button>
    </form>
  );
} 