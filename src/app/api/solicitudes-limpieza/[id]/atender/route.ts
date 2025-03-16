import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Configuración para las rutas de API
export const dynamic = 'force-dynamic';

// PUT /api/solicitudes-limpieza/[id]/atender
// Marca una solicitud de limpieza como atendida
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    const solicitudId = parseInt(id);
    if (isNaN(solicitudId)) {
      return NextResponse.json(
        { error: "ID inválido" },
        { status: 400 }
      );
    }
    
    // Verificar que la solicitud existe
    const solicitud = await prisma.solicitudLimpieza.findUnique({
      where: { id: solicitudId }
    });
    
    if (!solicitud) {
      return NextResponse.json(
        { error: "Solicitud de limpieza no encontrada" },
        { status: 404 }
      );
    }
    
    if (solicitud.estado === "Atendida") {
      return NextResponse.json(
        { error: "La solicitud ya está marcada como atendida" },
        { status: 400 }
      );
    }
    
    // Actualizar el estado de la solicitud
    const solicitudActualizada = await prisma.solicitudLimpieza.update({
      where: { id: solicitudId },
      data: {
        estado: "Atendida"
      }
    });
    
    return NextResponse.json({
      message: "Solicitud de limpieza marcada como atendida correctamente",
      solicitud: solicitudActualizada
    });
  } catch (error) {
    console.error("Error al marcar solicitud de limpieza como atendida:", error);
    return NextResponse.json(
      { error: "Error al marcar solicitud de limpieza como atendida" },
      { status: 500 }
    );
  }
} 