import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Configuración para las rutas de API
export const dynamic = 'force-dynamic';

// PUT /api/puntos-donacion/[id]/articulos/[articuloId]/agotar
// Marca un artículo específico de un punto de donación como agotado
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string, articuloId: string } }
) {
  try {
    const id = params.id;
    const articuloId = params.articuloId;
    
    const puntoId = parseInt(id);
    const artId = parseInt(articuloId);
    
    if (isNaN(puntoId) || isNaN(artId)) {
      return NextResponse.json(
        { error: "ID inválido" },
        { status: 400 }
      );
    }
    
    // Verificar que el artículo existe y pertenece al punto de donación
    const articulo = await prisma.articuloOferta.findFirst({
      where: { 
        id: artId,
        puntoDonacionId: puntoId
      }
    });
    
    if (!articulo) {
      return NextResponse.json(
        { error: "Artículo no encontrado en este punto de donación" },
        { status: 404 }
      );
    }
    
    // Actualizar el estado del artículo a "Agotado"
    const articuloActualizado = await prisma.articuloOferta.update({
      where: { id: artId },
      data: {
        estado: "Agotado"
      }
    });
    
    // Verificar si todos los artículos del punto de donación están agotados
    const articulosDisponibles = await prisma.articuloOferta.findMany({
      where: {
        puntoDonacionId: puntoId,
        estado: { not: "Agotado" }
      }
    });
    
    let puntoActualizado = null;
    
    // Si no hay artículos disponibles, marcar el punto de donación como inactivo
    if (articulosDisponibles.length === 0) {
      puntoActualizado = await prisma.puntoDonacion.update({
        where: { id: puntoId },
        data: {
          activo: false
        }
      });
    }
    
    return NextResponse.json({
      message: "Artículo marcado como agotado correctamente",
      articulo: articuloActualizado,
      puntoInactivado: articulosDisponibles.length === 0,
      puntoDonacion: puntoActualizado
    });
  } catch (error) {
    console.error("Error al marcar artículo como agotado:", error);
    return NextResponse.json(
      { error: "Error al marcar artículo como agotado" },
      { status: 500 }
    );
  }
} 