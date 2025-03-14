"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Trash2, Plus } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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

export default function RegistroCentro() {
  const [loading, setLoading] = useState(false);
  const [tiposArticulos, setTiposArticulos] = useState<TipoArticulo[]>([]);
  const [cargandoTipos, setCargandoTipos] = useState(true);
  const [formData, setFormData] = useState({
    direccion: "",
    responsable: "",
    telefono: "",
    horarioApertura: "",
    horarioCierre: "",
    latitud: "-38.7196", // Valor predeterminado para Bahía Blanca
    longitud: "-62.2724", // Valor predeterminado para Bahía Blanca
    descripcion: ""
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
    const articulosInvalidos = articulos.some(art => art.tipoArticuloId === 0 || art.cantidad < 1);
    if (articulosInvalidos) {
      toast.error("Por favor completa correctamente todos los artículos disponibles");
      return;
    }

    try {
      setLoading(true);
      
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
      
      // Crear el centro de distribución
      const responseCentro = await fetch("/api/centros-distribucion", {
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
          latitud: parseFloat(formData.latitud),
          longitud: parseFloat(formData.longitud),
          descripcion: formData.descripcion || null
        }),
      });

      if (!responseCentro.ok) {
        const errorData = await responseCentro.json();
        throw new Error(errorData.error || "Error al crear el centro de distribución");
      }

      const centroDatos = await responseCentro.json();
      
      // Registrar los artículos disponibles
      for (const articulo of articulosFinales) {
        const responseArticulo = await fetch("/api/ofertas", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            centroDistribucionId: centroDatos.id,
            tipoArticuloId: articulo.tipoArticuloId,
            cantidad: articulo.cantidad
          }),
        });

        if (!responseArticulo.ok) {
          const errorData = await responseArticulo.json();
          throw new Error(errorData.error || "Error al registrar artículos disponibles");
        }
      }

      toast.success("Centro de distribución registrado correctamente");
      
      // Limpiar formulario
      setFormData({
        direccion: "",
        responsable: "",
        telefono: "",
        horarioApertura: "",
        horarioCierre: "",
        latitud: "-38.7196",
        longitud: "-62.2724",
        descripcion: ""
      });
      setArticulos([{ tipoArticuloId: 0, cantidad: 1 }]);
      
    } catch (error) {
      console.error("Error:", error);
      toast.error(error instanceof Error ? error.message : "Error al registrar el centro de distribución");
    } finally {
      setLoading(false);
    }
  };

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

        <div className="grid grid-cols-2 gap-4">
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
            placeholder="Información adicional sobre el centro"
            value={formData.descripcion}
            onChange={handleChange}
            rows={3}
          />
        </div>

        <div className="pt-4">
          <h3 className="text-lg font-medium mb-2">Artículos disponibles</h3>
          {cargandoTipos ? (
            <div className="flex justify-center items-center py-4">
              <p>Cargando tipos de artículos...</p>
            </div>
          ) : (
            <div className="space-y-4">
              {articulos.map((articulo, index) => (
                <div key={index} className="flex flex-row gap-2 items-start border p-3 rounded-md">
                  <div className={`flex-grow space-y-2 ${articulo.tipoArticuloId === -1 ? "w-1/2" : "w-full"}`}>
                    <Label htmlFor={`tipoArticulo-${index}`}>Tipo de artículo *</Label>
                    <Select
                      value={articulo.tipoArticuloId.toString()}
                      onValueChange={(value) => handleArticuloChange(index, "tipoArticuloId", parseInt(value))}
                    >
                      <SelectTrigger id={`tipoArticulo-${index}`}>
                        <SelectValue placeholder="Selecciona un tipo de artículo" />
                      </SelectTrigger>
                      <SelectContent>
                        {tiposArticulos.map((tipo) => (
                          <SelectItem key={tipo.id} value={tipo.id.toString()}>
                            {tipo.nombre}
                          </SelectItem>
                        ))}
                        <SelectItem value="-1">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {articulo.tipoArticuloId === -1 && (
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

      <Button type="submit" className="w-full" disabled={loading || cargandoTipos}>
        {loading ? "Registrando centro..." : "Registrar centro de distribución"}
      </Button>
    </form>
  );
} 