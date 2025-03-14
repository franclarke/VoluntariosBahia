import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Configuración para las rutas de API
export const dynamic = 'force-dynamic';

// DELETE /api/peticiones/[id]
// Elimina una petición de donación (solo para administradores)
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

    // Usar desestructuración para obtener el ID
    const { id } = params;
    const peticionId = parseInt(id);
    
    if (isNaN(peticionId)) {
      return NextResponse.json(
        { error: "ID inválido" },
        { status: 400 }
      );
    }

    // Verificar que la petición existe
    const peticion = await prisma.peticionDonacion.findUnique({
      where: { id: peticionId }
    });
    
    if (!peticion) {
      return NextResponse.json(
        { error: "Petición no encontrada" },
        { status: 404 }
      );
    }

    // Eliminar los artículos asociados a la petición
    await prisma.articuloPeticion.deleteMany({
      where: { peticionDonacionId: peticionId }
    });

    // Eliminar la petición
    await prisma.peticionDonacion.delete({
      where: { id: peticionId }
    });

    return NextResponse.json({
      success: true,
      message: "Petición eliminada correctamente"
    });
  } catch (error) {
    console.error("Error al eliminar petición:", error);
    return NextResponse.json(
      { error: "Error al eliminar la petición" },
      { status: 500 }
    );
  }
} 