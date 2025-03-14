import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/db";

// DELETE /api/peticiones/[id]
// Elimina una petición de donación (solo para administradores)
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Verificar autenticación como administrador
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email || !session?.user?.role || session.user.role !== "admin") {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 });
    }

    // Verificar que la petición existe
    const peticion = await prisma.peticion.findUnique({
      where: { id }
    });
    
    if (!peticion) {
      return NextResponse.json({ error: "Petición no encontrada" }, { status: 404 });
    }

    // Eliminar los artículos asociados a la petición
    await prisma.articuloPeticion.deleteMany({
      where: { peticionId: id }
    });

    // Eliminar la petición
    await prisma.peticion.delete({
      where: { id }
    });

    return NextResponse.json({ message: "Petición eliminada correctamente" });
  } catch (error) {
    console.error("Error al eliminar petición:", error);
    return NextResponse.json({ error: "Error al eliminar la petición" }, { status: 500 });
  }
} 