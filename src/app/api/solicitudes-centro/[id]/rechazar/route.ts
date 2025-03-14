import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// POST /api/solicitudes-centro/[id]/rechazar
// Rechaza una solicitud de centro
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
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

    const id = parseInt(params.id);
    if (isNaN(id)) {
      return NextResponse.json(
        { error: "ID inválido" },
        { status: 400 }
      );
    }

    // Buscar la solicitud
    const solicitud = await prisma.solicitudCentro.findUnique({
      where: { id }
    });

    if (!solicitud) {
      return NextResponse.json(
        { error: "Solicitud no encontrada" },
        { status: 404 }
      );
    }

    if (solicitud.estado !== "Pendiente") {
      return NextResponse.json(
        { error: "La solicitud ya ha sido procesada" },
        { status: 400 }
      );
    }

    // Actualizar el estado de la solicitud
    await prisma.solicitudCentro.update({
      where: { id },
      data: {
        estado: "Rechazada"
      }
    });

    return NextResponse.json({
      success: true,
      message: "Solicitud rechazada correctamente"
    });
  } catch (error) {
    console.error("Error al rechazar solicitud:", error);
    return NextResponse.json(
      { error: "Error al rechazar solicitud" },
      { status: 500 }
    );
  }
} 