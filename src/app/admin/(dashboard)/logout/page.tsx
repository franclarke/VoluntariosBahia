"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function LogoutPage() {
  const router = useRouter()

  // Esta función simula el cierre de sesión
  // En una implementación real, aquí se llamaría a la API para cerrar sesión
  const handleLogout = () => {
    // Simular cierre de sesión
    setTimeout(() => {
      // Redirigir al inicio de sesión
      router.push("/admin/login")
    }, 1000)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-14rem)]">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Cerrar Sesión</CardTitle>
          <CardDescription>¿Estás seguro que deseas cerrar sesión?</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <Button onClick={handleLogout} variant="destructive">
              Sí, cerrar sesión
            </Button>
            <Button onClick={() => router.back()} variant="outline">
              No, volver atrás
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 