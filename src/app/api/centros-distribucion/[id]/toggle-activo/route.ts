import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Configuración para las rutas de API
export const dynamic = 'force-dynamic';

// PUT /api/centros-distribucion/[id]/toggle-activo
// Activa o desactiva un centro de distribución
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Usar desestructuración para obtener el ID
    const { id } = params;
    
    if (!id) {
      return NextResponse.json(
        { error: "ID de centro no proporcionado" },
        { status: 400 }
      );
    }
    
    const centroId = parseInt(id);
    if (isNaN(centroId)) {
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
    
    console.log(`Cambiando estado de centro ${centroId} a ${activo ? "activo" : "inactivo"}`);
    
    // Verificar que el centro existe
    const centroExistente = await prisma.centroDistribucion.findUnique({
      where: { id: centroId }
    });
    
    if (!centroExistente) {
      return NextResponse.json(
        { error: "Centro no encontrado" },
        { status: 404 }
      );
    }
    
    // Actualizar el estado del centro
    const centro = await prisma.centroDistribucion.update({
      where: { id: centroId },
      data: { activo }
    });
    
    return NextResponse.json({
      message: `Centro ${activo ? "activado" : "desactivado"} correctamente`,
      centro
    });
  } catch (error) {
    console.error("Error al cambiar estado del centro:", error);
    return NextResponse.json(
      { error: "Error al cambiar estado del centro" },
      { status: 500 }
    );
  }
} 