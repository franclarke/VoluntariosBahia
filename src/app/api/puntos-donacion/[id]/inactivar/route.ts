import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Configuración para las rutas de API
export const dynamic = 'force-dynamic';

// PUT /api/puntos-donacion/[id]/inactivar
// Marca un punto de donación como inactivo
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    const puntoId = parseInt(id);
    if (isNaN(puntoId)) {
      return NextResponse.json(
        { error: "ID inválido" },
        { status: 400 }
      );
    }
    
    // Verificar que el punto de donación existe
    const punto = await prisma.puntoDonacion.findUnique({
      where: { id: puntoId }
    });
    
    if (!punto) {
      return NextResponse.json(
        { error: "Punto de donación no encontrado" },
        { status: 404 }
      );
    }
    
    if (!punto.activo) {
      return NextResponse.json(
        { error: "El punto de donación ya está inactivo" },
        { status: 400 }
      );
    }
    
    // Actualizar el estado del punto de donación a inactivo
    const puntoActualizado = await prisma.puntoDonacion.update({
      where: { id: puntoId },
      data: {
        activo: false
      }
    });
    
    // Marcar todos los artículos como agotados
    await prisma.articuloOferta.updateMany({
      where: { 
        puntoDonacionId: puntoId,
        estado: { not: "Agotado" }
      },
      data: {
        estado: "Agotado"
      }
    });
    
    return NextResponse.json({
      message: "Punto de donación marcado como inactivo correctamente",
      punto: puntoActualizado
    });
  } catch (error) {
    console.error("Error al marcar punto de donación como inactivo:", error);
    return NextResponse.json(
      { error: "Error al marcar punto de donación como inactivo" },
      { status: 500 }
    );
  }
} 