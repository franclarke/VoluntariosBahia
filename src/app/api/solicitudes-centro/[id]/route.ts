import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// DELETE /api/solicitudes-centro/[id]
// Elimina una solicitud de centro (solo para administradores)
export async function DELETE(
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
    
    // Eliminar los artículos asociados a la solicitud
    await prisma.articuloSolicitado.deleteMany({
      where: { solicitudCentroId: id }
    });
    
    // Eliminar la solicitud
    await prisma.solicitudCentro.delete({
      where: { id }
    });
    
    console.log(`Solicitud de centro ${id} eliminada completamente`);
    
    return NextResponse.json({
      success: true,
      message: "Solicitud eliminada correctamente"
    });
  } catch (error) {
    console.error("Error al eliminar solicitud:", error);
    return NextResponse.json(
      { error: "Error al eliminar la solicitud" },
      { status: 500 }
    );
  }
} 