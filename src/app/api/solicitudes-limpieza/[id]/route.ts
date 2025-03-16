import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Configuración para las rutas de API
export const dynamic = 'force-dynamic';

// GET /api/solicitudes-limpieza/[id]
// Obtiene una solicitud de limpieza específica
export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const id = context.params.id;
    
    if (!id) {
      return NextResponse.json(
        { error: "ID de solicitud no proporcionado" },
        { status: 400 }
      );
    }
    
    const solicitudId = parseInt(id);
    if (isNaN(solicitudId)) {
      return NextResponse.json(
        { error: "ID inválido" },
        { status: 400 }
      );
    }
    
    // Obtener la solicitud de limpieza
    const solicitud = await prisma.solicitudLimpieza.findUnique({
      where: { id: solicitudId }
    });
    
    if (!solicitud) {
      return NextResponse.json(
        { error: "Solicitud de limpieza no encontrada" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(solicitud);
  } catch (error) {
    console.error("Error al obtener solicitud de limpieza:", error);
    return NextResponse.json(
      { error: "Error al obtener solicitud de limpieza" },
      { status: 500 }
    );
  }
}

// PUT /api/solicitudes-limpieza/[id]
// Actualiza una solicitud de limpieza
export async function PUT(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const id = context.params.id;
    
    if (!id) {
      return NextResponse.json(
        { error: "ID de solicitud no proporcionado" },
        { status: 400 }
      );
    }
    
    const solicitudId = parseInt(id);
    if (isNaN(solicitudId)) {
      return NextResponse.json(
        { error: "ID inválido" },
        { status: 400 }
      );
    }
    
    // Verificar que la solicitud existe
    const solicitudExistente = await prisma.solicitudLimpieza.findUnique({
      where: { id: solicitudId }
    });
    
    if (!solicitudExistente) {
      return NextResponse.json(
        { error: "Solicitud de limpieza no encontrada" },
        { status: 404 }
      );
    }
    
    // Obtener los datos a actualizar
    const body = await request.json();
    
    // Actualizar la solicitud
    const solicitud = await prisma.solicitudLimpieza.update({
      where: { id: solicitudId },
      data: {
        estado: body.estado || solicitudExistente.estado,
        direccion: body.direccion || solicitudExistente.direccion,
        contactoNombre: body.contactoNombre || solicitudExistente.contactoNombre,
        contactoTel: body.contactoTel || solicitudExistente.contactoTel,
        latitud: body.latitud ? parseFloat(body.latitud) : solicitudExistente.latitud,
        longitud: body.longitud ? parseFloat(body.longitud) : solicitudExistente.longitud,
        descripcion: body.descripcion !== undefined ? body.descripcion : solicitudExistente.descripcion
      }
    });
    
    return NextResponse.json(solicitud);
  } catch (error) {
    console.error("Error al actualizar solicitud de limpieza:", error);
    return NextResponse.json(
      { error: "Error al actualizar solicitud de limpieza" },
      { status: 500 }
    );
  }
}

// DELETE /api/solicitudes-limpieza/[id]
// Elimina una solicitud de limpieza
export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const id = context.params.id;
    
    if (!id) {
      return NextResponse.json(
        { error: "ID de solicitud no proporcionado" },
        { status: 400 }
      );
    }
    
    const solicitudId = parseInt(id);
    if (isNaN(solicitudId)) {
      return NextResponse.json(
        { error: "ID inválido" },
        { status: 400 }
      );
    }
    
    // Verificar que la solicitud existe
    const solicitudExistente = await prisma.solicitudLimpieza.findUnique({
      where: { id: solicitudId }
    });
    
    if (!solicitudExistente) {
      return NextResponse.json(
        { error: "Solicitud de limpieza no encontrada" },
        { status: 404 }
      );
    }
    
    // Eliminar la solicitud
    await prisma.solicitudLimpieza.delete({
      where: { id: solicitudId }
    });
    
    return NextResponse.json({
      message: "Solicitud de limpieza eliminada correctamente"
    });
  } catch (error) {
    console.error("Error al eliminar solicitud de limpieza:", error);
    return NextResponse.json(
      { error: "Error al eliminar solicitud de limpieza" },
      { status: 500 }
    );
  }
} 