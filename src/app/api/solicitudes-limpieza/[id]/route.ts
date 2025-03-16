import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Configuración para las rutas de API
export const dynamic = 'force-dynamic';

// GET /api/solicitudes-limpieza/[id]
// Obtiene una solicitud de limpieza específica por ID
export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    // Convertir params a Promises resueltas para evitar errores de Next.js
    const paramId = await Promise.resolve(context.params.id);
    
    if (!paramId) {
      return NextResponse.json(
        { error: "ID de solicitud no proporcionado" },
        { status: 400 }
      );
    }
    
    const solicitudId = parseInt(paramId);
    if (isNaN(solicitudId)) {
      return NextResponse.json(
        { error: "ID inválido" },
        { status: 400 }
      );
    }
    
    // Buscar la solicitud de limpieza
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
// Actualiza una solicitud de limpieza existente
export async function PUT(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    // Convertir params a Promises resueltas para evitar errores de Next.js
    const paramId = await Promise.resolve(context.params.id);
    
    if (!paramId) {
      return NextResponse.json(
        { error: "ID de solicitud no proporcionado" },
        { status: 400 }
      );
    }
    
    const solicitudId = parseInt(paramId);
    if (isNaN(solicitudId)) {
      return NextResponse.json(
        { error: "ID inválido" },
        { status: 400 }
      );
    }
    
    // Verificar si el usuario está autenticado como administrador
    const token = request.cookies.get("admin_token")?.value;
    
    if (!token) {
      return NextResponse.json(
        { error: "No autorizado" },
        { status: 401 }
      );
    }
    
    const body = await request.json();
    
    // Verificar que la solicitud de limpieza existe
    const solicitudExistente = await prisma.solicitudLimpieza.findUnique({
      where: { id: solicitudId }
    });
    
    if (!solicitudExistente) {
      return NextResponse.json(
        { error: "Solicitud de limpieza no encontrada" },
        { status: 404 }
      );
    }
    
    // Actualizar la solicitud de limpieza
    const solicitud = await prisma.solicitudLimpieza.update({
      where: { id: solicitudId },
      data: {
        direccion: body.direccion,
        latitud: body.latitud,
        longitud: body.longitud,
        descripcion: body.descripcion
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
    // Convertir params a Promises resueltas para evitar errores de Next.js
    const paramId = await Promise.resolve(context.params.id);
    
    if (!paramId) {
      return NextResponse.json(
        { error: "ID de solicitud no proporcionado" },
        { status: 400 }
      );
    }
    
    const solicitudId = parseInt(paramId);
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