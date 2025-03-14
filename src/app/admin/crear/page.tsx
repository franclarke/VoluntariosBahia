"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

export default function CrearAdminPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "Francisco",
    email: "francisco@voluntariosbahia.com",
    password: "Sportiva34"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.email || !formData.password) {
      toast.error("Por favor completa todos los campos");
      return;
    }
    
    try {
      setLoading(true);
      
      const response = await fetch("/api/admin/crear", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Error al crear administrador");
      }
      
      toast.success("Administrador creado correctamente");
      
      // Limpiar formulario
      setFormData({
        nombre: "",
        email: "",
        password: ""
      });
      
    } catch (error) {
      console.error("Error:", error);
      toast.error(error instanceof Error ? error.message : "Error al crear administrador");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-6 max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>Crear Administrador</CardTitle>
          <CardDescription>
            Completa el formulario para crear un nuevo administrador
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre</Label>
              <Input
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Creando..." : "Crear Administrador"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-start text-sm text-muted-foreground">
          <p>Nota: Esta operación solo está permitida desde localhost por seguridad.</p>
          <p className="mt-2">
            Para crear un administrador en producción, utiliza el script <code>crear-admin.ts</code> directamente en el servidor.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
} 