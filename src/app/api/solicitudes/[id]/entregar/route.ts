import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";



// PUT /api/solicitudes/:id/entregar
// Marca una solicitud como entregada
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    if (!id) {
      return NextResponse.json(
        { error: "ID de solicitud no proporcionado" },
        { status: 400 }
      );
    }
    
    // Actualizar el estado de la solicitud
    const solicitud = await prisma.Solicitud.update({
      where: {
        id: parseInt(id)
      },
      data: {
        estado: "Entregada"
      }
    });
    
    return NextResponse.json({
      message: "Solicitud marcada como entregada",
      solicitud
    });
  } catch (error) {
    console.error("Error al marcar solicitud como entregada:", error);
    return NextResponse.json(
      { error: "Error al marcar solicitud como entregada" },
      { status: 500 }
    );
  }
} 