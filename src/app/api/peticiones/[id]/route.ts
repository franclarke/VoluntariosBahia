import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// DELETE /api/peticiones/[id]
// Elimina una petición de donación
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 });
    }

    // Verificar que la petición existe
    const peticion = await prisma.peticionDonacion.findUnique({
      where: { id }
    });
    
    if (!peticion) {
      return NextResponse.json({ error: "Petición no encontrada" }, { status: 404 });
    }

    // Eliminar los artículos asociados a la petición
    await prisma.articuloPeticion.deleteMany({
      where: { peticionDonacionId: id }
    });

    // Eliminar la petición
    await prisma.peticionDonacion.delete({
      where: { id }
    });

    return NextResponse.json({ message: "Petición eliminada correctamente" });
  } catch (error) {
    console.error("Error al eliminar petición:", error);
    return NextResponse.json({ error: "Error al eliminar la petición" }, { status: 500 });
  }
} 