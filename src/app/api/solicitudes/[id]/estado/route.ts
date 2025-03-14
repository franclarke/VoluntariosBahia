import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// PUT /api/solicitudes/:id/estado
// Actualiza el estado de una solicitud
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Usar desestructuración para obtener el ID
    const { id } = params;
    
    // Obtener el nuevo estado del cuerpo de la solicitud
    const body = await request.json();
    const { estado } = body;
    
    console.log(`Actualizando solicitud ${id} a estado: ${estado}`);
    
    if (!id) {
      return NextResponse.json(
        { error: "ID de solicitud no proporcionado" },
        { status: 400 }
      );
    }
    
    if (!estado || !["Pendiente", "Entregada", "Cancelada", "Registrada", "Completada"].includes(estado)) {
      return NextResponse.json(
        { error: "Estado no válido" },
        { status: 400 }
      );
    }
    
    // Actualizar el estado de la solicitud
    const solicitud = await prisma.solicitud.update({
      where: {
        id: parseInt(id)
      },
      data: {
        estado
      }
    });
    
    return NextResponse.json({
      message: `Solicitud marcada como ${estado}`,
      solicitud
    });
  } catch (error) {
    console.error("Error al actualizar estado de solicitud:", error);
    return NextResponse.json(
      { error: "Error al actualizar estado de solicitud" },
      { status: 500 }
    );
  }
} 