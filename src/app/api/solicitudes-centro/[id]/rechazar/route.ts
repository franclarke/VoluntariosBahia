import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// POST /api/solicitudes-centro/[id]/rechazar
// Rechaza un punto de donación pendiente eliminándolo
export async function POST(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    console.log("Rechazando punto de donación con ID:", context.params.id);
    
    const id = parseInt(context.params.id);
    if (isNaN(id)) {
      return NextResponse.json(
        { error: "ID inválido" },
        { status: 400 }
      );
    }

    // Buscar el punto de donación
    const puntoDonacion = await prisma.puntoDonacion.findUnique({
      where: { id }
    });

    if (!puntoDonacion) {
      return NextResponse.json(
        { error: "Punto de donación no encontrado" },
        { status: 404 }
      );
    }

    if (puntoDonacion.activo) {
      return NextResponse.json(
        { error: "No se puede rechazar un punto de donación ya activo" },
        { status: 400 }
      );
    }

    console.log("Rechazando punto de donación:", puntoDonacion);

    // Eliminar los artículos asociados al punto de donación
    await prisma.articuloOferta.deleteMany({
      where: { puntoDonacionId: id }
    });

    // Eliminar el punto de donación
    await prisma.puntoDonacion.delete({
      where: { id }
    });

    return NextResponse.json({
      success: true,
      message: "Punto de donación rechazado y eliminado correctamente"
    });
  } catch (error) {
    console.error("Error al rechazar punto de donación:", error);
    return NextResponse.json(
      { error: "Error al rechazar punto de donación" },
      { status: 500 }
    );
  }
} 