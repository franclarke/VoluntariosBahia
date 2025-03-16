import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// DELETE /api/solicitudes/[id]/articulos
// Elimina todos los artículos de una solicitud (solo para administradores)
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
    const solicitudExistente = await prisma.solicitud.findUnique({
      where: { id }
    });
    
    if (!solicitudExistente) {
      return NextResponse.json(
        { error: "Solicitud no encontrada" },
        { status: 404 }
      );
    }
    
    // Eliminar todos los artículos de la solicitud
    await prisma.articuloSolicitud.deleteMany({
      where: {
        solicitudId: id
      }
    });
    
    return NextResponse.json({ 
      success: true,
      message: "Artículos eliminados correctamente"
    });
  } catch (error) {
    console.error("Error al eliminar artículos de la solicitud:", error);
    return NextResponse.json(
      { error: "Error al eliminar artículos de la solicitud" },
      { status: 500 }
    );
  }
}

// GET /api/solicitudes/[id]/articulos
// Obtiene todos los artículos de una solicitud específica
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Convertir params a Promises resueltas para evitar errores de Next.js
    const paramId = await Promise.resolve(params.id);
    const id = parseInt(paramId);

    // Verificar si el usuario está autenticado como administrador
    const token = request.cookies.get("admin_token")?.value;
    
    if (!token) {
      return NextResponse.json(
        { error: "No autorizado" },
        { status: 401 }
      );
    }
    
    // Verificar que la solicitud existe
    const solicitudExistente = await prisma.solicitud.findUnique({
      where: { id }
    });
    
    if (!solicitudExistente) {
      return NextResponse.json(
        { error: "Solicitud no encontrada" },
        { status: 404 }
      );
    }
    
    // Obtener todos los artículos de la solicitud
    const articulos = await prisma.articuloSolicitud.findMany({
      where: {
        solicitudId: id
      },
      include: {
        tipoArticulo: true
      }
    });
    
    return NextResponse.json(articulos);
  } catch (error) {
    console.error("Error al obtener artículos de la solicitud:", error);
    return NextResponse.json(
      { error: "Error al obtener artículos de la solicitud" },
      { status: 500 }
    );
  }
}

// POST /api/solicitudes/[id]/articulos
// Agrega un nuevo artículo a una solicitud existente
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Convertir params a Promises resueltas para evitar errores de Next.js
    const paramId = await Promise.resolve(params.id);
    const id = parseInt(paramId);

    // Verificar si el usuario está autenticado como administrador
    const token = request.cookies.get("admin_token")?.value;
    
    if (!token) {
      return NextResponse.json(
        { error: "No autorizado" },
        { status: 401 }
      );
    }

    if (isNaN(id)) {
      return NextResponse.json(
        { error: "ID inválido" },
        { status: 400 }
      );
    }
    
    const body = await request.json();
    
    // Validar campos requeridos
    if (!body.tipoArticuloId || !body.cantidad || body.cantidad < 1) {
      return NextResponse.json(
        { error: "Tipo de artículo y cantidad son requeridos" },
        { status: 400 }
      );
    }
    
    // Verificar que la solicitud existe
    const solicitudExistente = await prisma.solicitud.findUnique({
      where: { id }
    });
    
    if (!solicitudExistente) {
      return NextResponse.json(
        { error: "Solicitud no encontrada" },
        { status: 404 }
      );
    }
    
    // Crear el artículo
    const articulo = await prisma.articuloSolicitud.create({
      data: {
        solicitudId: id,
        tipoArticuloId: body.tipoArticuloId,
        cantidad: body.cantidad
      },
      include: {
        tipoArticulo: true
      }
    });
    
    return NextResponse.json(articulo, { status: 201 });
  } catch (error) {
    console.error("Error al agregar artículo a la solicitud:", error);
    return NextResponse.json(
      { error: "Error al agregar artículo a la solicitud" },
      { status: 500 }
    );
  }
} 