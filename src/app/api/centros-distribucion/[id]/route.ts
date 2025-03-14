import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// PATCH /api/centros-distribucion/[id]
// Actualiza un centro de distribución (solo para administradores)
export async function PATCH(
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

    const body = await request.json();
    
    // Verificar que el centro existe
    const centroExistente = await prisma.centroDistribucion.findUnique({
      where: { id }
    });
    
    if (!centroExistente) {
      return NextResponse.json(
        { error: "Centro de distribución no encontrado" },
        { status: 404 }
      );
    }
    
    // Actualizar el centro
    const centro = await prisma.centroDistribucion.update({
      where: { id },
      data: {
        activo: body.activo !== undefined ? body.activo : centroExistente.activo,
        direccion: body.direccion || centroExistente.direccion,
        responsable: body.responsable || centroExistente.responsable,
        telefono: body.telefono !== undefined ? body.telefono : centroExistente.telefono,
        horarioApertura: body.horarioApertura !== undefined ? body.horarioApertura : centroExistente.horarioApertura,
        horarioCierre: body.horarioCierre !== undefined ? body.horarioCierre : centroExistente.horarioCierre,
        latitud: body.latitud || centroExistente.latitud,
        longitud: body.longitud || centroExistente.longitud
      }
    });
    
    return NextResponse.json(centro);
  } catch (error) {
    console.error("Error al actualizar centro de distribución:", error);
    return NextResponse.json(
      { error: "Error al actualizar centro de distribución" },
      { status: 500 }
    );
  }
}

// DELETE /api/centros-distribucion/[id]
// Elimina un centro de distribución (solo para administradores)
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
    
    // Verificar que el centro existe
    const centroExistente = await prisma.centroDistribucion.findUnique({
      where: { id }
    });
    
    if (!centroExistente) {
      return NextResponse.json(
        { error: "Centro de distribución no encontrado" },
        { status: 404 }
      );
    }
    
    // Eliminar el centro
    await prisma.centroDistribucion.delete({
      where: { id }
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error al eliminar centro de distribución:", error);
    return NextResponse.json(
      { error: "Error al eliminar centro de distribución" },
      { status: 500 }
    );
  }
} 