import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    // Verificar si el usuario está autenticado como administrador
    const token = request.cookies.get("admin_token")?.value;
    
    if (!token) {
      return NextResponse.json(
        { error: "No autorizado" },
        { status: 401 }
      );
    }
    
    const id = parseInt(context.params.id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: "ID inválido" },
        { status: 400 }
      );
    }

    // Verificar que la solicitud existe
    const solicitud = await prisma.solicitudCentro.findUnique({
      where: { id }
    });
    
    if (!solicitud) {
      return NextResponse.json(
        { error: "Solicitud no encontrada" },
        { status: 404 }
      );
    }

    // Actualizar estado de la solicitud a Atendida
    const solicitudActualizada = await prisma.solicitudCentro.update({
      where: { id },
      data: { estado: "Atendida" }
    });

    return NextResponse.json({
      success: true,
      message: "Solicitud marcada como atendida correctamente",
      solicitud: solicitudActualizada
    });
  } catch (error) {
    console.error("Error al marcar solicitud como atendida:", error);
    return NextResponse.json(
      { error: "Error al actualizar la solicitud" },
      { status: 500 }
    );
  }
} 