import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Configuración para las rutas de API
export const dynamic = 'force-dynamic';

// GET /api/mensajes/[id]
// Obtiene un mensaje específico (solo para administradores)
export async function GET(
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

    const { id } = params;
    
    if (!id) {
      return NextResponse.json(
        { error: "ID de mensaje no proporcionado" },
        { status: 400 }
      );
    }
    
    const mensajeId = parseInt(id);
    if (isNaN(mensajeId)) {
      return NextResponse.json(
        { error: "ID inválido" },
        { status: 400 }
      );
    }
    
    // Obtener el mensaje
    const mensaje = await prisma.mensaje.findUnique({
      where: { id: mensajeId }
    });
    
    if (!mensaje) {
      return NextResponse.json(
        { error: "Mensaje no encontrado" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(mensaje);
  } catch (error) {
    console.error("Error al obtener mensaje:", error);
    return NextResponse.json(
      { error: "Error al obtener mensaje" },
      { status: 500 }
    );
  }
}

// PUT /api/mensajes/[id]
// Actualiza un mensaje (marcar como leído/no leído) (solo para administradores)
export async function PUT(
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

    const { id } = params;
    
    if (!id) {
      return NextResponse.json(
        { error: "ID de mensaje no proporcionado" },
        { status: 400 }
      );
    }
    
    const mensajeId = parseInt(id);
    if (isNaN(mensajeId)) {
      return NextResponse.json(
        { error: "ID inválido" },
        { status: 400 }
      );
    }
    
    // Verificar que el mensaje existe
    const mensajeExistente = await prisma.mensaje.findUnique({
      where: { id: mensajeId }
    });
    
    if (!mensajeExistente) {
      return NextResponse.json(
        { error: "Mensaje no encontrado" },
        { status: 404 }
      );
    }
    
    // Obtener los datos a actualizar
    const body = await request.json();
    
    // Actualizar el mensaje
    const mensaje = await prisma.mensaje.update({
      where: { id: mensajeId },
      data: {
        leido: body.leido !== undefined ? body.leido : mensajeExistente.leido
      }
    });
    
    return NextResponse.json(mensaje);
  } catch (error) {
    console.error("Error al actualizar mensaje:", error);
    return NextResponse.json(
      { error: "Error al actualizar mensaje" },
      { status: 500 }
    );
  }
}

// DELETE /api/mensajes/[id]
// Elimina un mensaje (solo para administradores)
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

    const { id } = params;
    
    if (!id) {
      return NextResponse.json(
        { error: "ID de mensaje no proporcionado" },
        { status: 400 }
      );
    }
    
    const mensajeId = parseInt(id);
    if (isNaN(mensajeId)) {
      return NextResponse.json(
        { error: "ID inválido" },
        { status: 400 }
      );
    }
    
    // Verificar que el mensaje existe
    const mensajeExistente = await prisma.mensaje.findUnique({
      where: { id: mensajeId }
    });
    
    if (!mensajeExistente) {
      return NextResponse.json(
        { error: "Mensaje no encontrado" },
        { status: 404 }
      );
    }
    
    // Eliminar el mensaje
    await prisma.mensaje.delete({
      where: { id: mensajeId }
    });
    
    return NextResponse.json({
      message: "Mensaje eliminado correctamente"
    });
  } catch (error) {
    console.error("Error al eliminar mensaje:", error);
    return NextResponse.json(
      { error: "Error al eliminar mensaje" },
      { status: 500 }
    );
  }
} 