import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Configuración para las rutas de API
export const dynamic = 'force-dynamic';

// PUT /api/solicitudes/[id]/entregar
// Marca una solicitud como entregada
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Convertir params a Promises resueltas para evitar errores de Next.js
    const id = await Promise.resolve(params.id);
    
    const solicitudId = parseInt(id);
    if (isNaN(solicitudId)) {
      return NextResponse.json(
        { error: "ID inválido" },
        { status: 400 }
      );
    }
    
    // Verificar que la solicitud existe
    const solicitud = await prisma.solicitud.findUnique({
      where: { id: solicitudId },
      include: {
        articulos: {
          include: {
            tipoArticulo: true,
            tipoArticuloPersonalizado: true
          }
        }
      }
    });
    
    if (!solicitud) {
      return NextResponse.json(
        { error: "Solicitud no encontrada" },
        { status: 404 }
      );
    }
    
    if (solicitud.estado === "Entregada") {
      return NextResponse.json(
        { error: "La solicitud ya está marcada como entregada" },
        { status: 400 }
      );
    }
    
    // Actualizar todos los artículos a cantidad 0
    await prisma.articuloSolicitud.updateMany({
      where: { solicitudId: solicitudId },
      data: { cantidad: 0 }
    });
    
    // Actualizar el estado de la solicitud
    const solicitudActualizada = await prisma.solicitud.update({
      where: { id: solicitudId },
      data: {
        estado: "Entregada"
      }
    });
    
    return NextResponse.json({
      message: "Solicitud marcada como entregada correctamente",
      solicitud: solicitudActualizada
    });
  } catch (error) {
    console.error("Error al marcar solicitud como entregada:", error);
    return NextResponse.json(
      { error: "Error al marcar solicitud como entregada" },
      { status: 500 }
    );
  }
} 