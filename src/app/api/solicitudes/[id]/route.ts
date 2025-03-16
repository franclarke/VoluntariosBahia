import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/solicitudes/[id]
// Obtiene una solicitud específica por ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Convertir params a Promises resueltas para evitar errores de Next.js
    const paramId = await Promise.resolve(params.id);
    
    const id = parseInt(paramId);
    
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
            tipoArticulo: true,
            tipoArticuloPersonalizado: true
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

    // Transformar los datos para mantener la compatibilidad con el frontend
    const articulosFormateados = solicitud.articulos.map(articulo => {
      // Determinar el nombre del tipo de artículo (estándar o personalizado)
      const tipoArticuloNombre = articulo.tipoArticulo?.nombre ?? 
                               articulo.tipoArticuloPersonalizado?.nombre ?? 
                               "Desconocido";
      
      // Determinar el ID del tipo de artículo (estándar o personalizado)
      const tipoArticuloId = articulo.tipoArticulo?.id ?? 
                            articulo.tipoArticuloPersonalizado?.id ?? 
                            0;
      
      return {
        ...articulo,
        tipoArticulo: {
          id: tipoArticuloId,
          nombre: tipoArticuloNombre
        }
      };
    });
    
    const solicitudFormateada = {
      ...solicitud,
      articulos: articulosFormateados
    };

    return NextResponse.json(solicitudFormateada);
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

    // Convertir params a Promises resueltas para evitar errores de Next.js
    const paramId = await Promise.resolve(params.id);
    const id = parseInt(paramId);
    
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

// DELETE /api/solicitudes/[id]
// Elimina una solicitud
export async function DELETE(
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
    
    // Eliminar la solicitud
    const solicitud = await prisma.solicitud.delete({
      where: { id }
    });
    
    return NextResponse.json(solicitud);
  } catch (error) {
    console.error("Error al eliminar solicitud:", error);
    return NextResponse.json(
      { error: "Error al eliminar solicitud" },
      { status: 500 }
    );
  }
} 