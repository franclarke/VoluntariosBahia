import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Configuración para las rutas de API
export const dynamic = 'force-dynamic';

// PUT /api/solicitudes/[id]/articulos/[articuloId]/entregar-parcial
// Marca un artículo específico de una solicitud como entregado parcialmente
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string, articuloId: string } }
) {
  try {
    const id = params.id;
    const articuloId = params.articuloId;
    const body = await request.json();
    const { cantidadEntregada } = body;
    
    if (cantidadEntregada === undefined || cantidadEntregada < 0) {
      return NextResponse.json(
        { error: "La cantidad entregada debe ser un número positivo" },
        { status: 400 }
      );
    }
    
    const solicitudId = parseInt(id);
    const artId = parseInt(articuloId);
    
    if (isNaN(solicitudId) || isNaN(artId)) {
      return NextResponse.json(
        { error: "ID inválido" },
        { status: 400 }
      );
    }
    
    // Verificar que el artículo existe y pertenece a la solicitud
    const articulo = await prisma.articuloSolicitud.findFirst({
      where: { 
        id: artId,
        solicitudId: solicitudId
      }
    });
    
    if (!articulo) {
      return NextResponse.json(
        { error: "Artículo no encontrado en esta solicitud" },
        { status: 404 }
      );
    }
    
    // Calcular la nueva cantidad pendiente
    const nuevaCantidad = Math.max(0, articulo.cantidad - cantidadEntregada);
    
    // Actualizar la cantidad del artículo
    const articuloActualizado = await prisma.articuloSolicitud.update({
      where: { id: artId },
      data: {
        cantidad: nuevaCantidad
      }
    });
    
    // Verificar si todos los artículos de la solicitud tienen cantidad 0
    const articulosPendientes = await prisma.articuloSolicitud.findMany({
      where: {
        solicitudId: solicitudId,
        cantidad: { gt: 0 }
      }
    });
    
    // Si no hay artículos pendientes, marcar la solicitud como entregada
    if (articulosPendientes.length === 0) {
      await prisma.solicitud.update({
        where: { id: solicitudId },
        data: {
          estado: "Entregada"
        }
      });
    }
    
    return NextResponse.json({
      message: nuevaCantidad > 0 
        ? "Artículo actualizado correctamente" 
        : "Artículo completamente entregado",
      articulo: articuloActualizado,
      solicitudCompletada: articulosPendientes.length === 0
    });
  } catch (error) {
    console.error("Error al actualizar artículo:", error);
    return NextResponse.json(
      { error: "Error al actualizar artículo" },
      { status: 500 }
    );
  }
} 