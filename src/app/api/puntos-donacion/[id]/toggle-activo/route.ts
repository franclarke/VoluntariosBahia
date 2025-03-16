import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Configuración para las rutas de API
export const dynamic = 'force-dynamic';

// PUT /api/puntos-donacion/[id]/toggle-activo
// Activa o desactiva un punto de donación
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Usar desestructuración para obtener el ID
    const { id } = params;
    
    if (!id) {
      return NextResponse.json(
        { error: "ID de punto de donación no proporcionado" },
        { status: 400 }
      );
    }
    
    const puntoId = parseInt(id);
    if (isNaN(puntoId)) {
      return NextResponse.json(
        { error: "ID inválido" },
        { status: 400 }
      );
    }
    
    // Obtener el nuevo estado del cuerpo de la solicitud
    const body = await request.json();
    const { activo } = body;
    
    if (activo === undefined) {
      return NextResponse.json(
        { error: "El estado 'activo' es requerido" },
        { status: 400 }
      );
    }
    
    console.log(`Cambiando estado de punto de donación ${puntoId} a ${activo ? "activo" : "inactivo"}`);
    
    // Verificar que el punto de donación existe
    const puntoExistente = await prisma.puntoDonacion.findUnique({
      where: { id: puntoId }
    });
    
    if (!puntoExistente) {
      return NextResponse.json(
        { error: "Punto de donación no encontrado" },
        { status: 404 }
      );
    }
    
    // Actualizar el estado del punto de donación
    const punto = await prisma.puntoDonacion.update({
      where: { id: puntoId },
      data: { activo }
    });
    
    return NextResponse.json({
      message: `Punto de donación ${activo ? "activado" : "desactivado"} correctamente`,
      punto
    });
  } catch (error) {
    console.error("Error al cambiar estado del punto de donación:", error);
    return NextResponse.json(
      { error: "Error al cambiar estado del punto de donación" },
      { status: 500 }
    );
  }
} 