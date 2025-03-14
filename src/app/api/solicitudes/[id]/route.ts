import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/solicitudes/[id]
// Obtiene una solicitud específica por ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    if (isNaN(id)) {
      return NextResponse.json(
        { error: "ID inválido" },
        { status: 400 }
      );
    }

    // Buscar la solicitud con sus artículos
    const solicitud = await prisma.solicitud.findUnique({
      where: { id },
      include: {
        articulos: {
          include: {
            tipoArticulo: true
          }
        }
      }
    });

    if (!solicitud) {
      return NextResponse.json(
        { error: "Solicitud no encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(solicitud);
  } catch (error) {
    console.error("Error al obtener solicitud:", error);
    return NextResponse.json(
      { error: "Error al obtener solicitud" },
      { status: 500 }
    );
  }
}

// PUT /api/solicitudes/[id]
// Actualiza una solicitud existente
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

    const id = parseInt(params.id);
    if (isNaN(id)) {
      return NextResponse.json(
        { error: "ID inválido" },
        { status: 400 }
      );
    }

    const body = await request.json();
    
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
    
    // Actualizar la solicitud
    const solicitud = await prisma.solicitud.update({
      where: { id },
      data: {
        direccion: body.direccion,
        contactoNombre: body.contactoNombre,
        contactoTel: body.contactoTel,
        latitud: body.latitud,
        longitud: body.longitud,
        descripcion: body.descripcion
      }
    });
    
    return NextResponse.json(solicitud);
  } catch (error) {
    console.error("Error al actualizar solicitud:", error);
    return NextResponse.json(
      { error: "Error al actualizar solicitud" },
      { status: 500 }
    );
  }
} 