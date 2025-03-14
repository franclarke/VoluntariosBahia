import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/centros-distribucion/[id]
// Obtiene un centro de distribución específico por ID
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

    // Buscar el centro con sus artículos
    const centro = await prisma.centroDistribucion.findUnique({
      where: { id },
      include: {
        articulos: {
          include: {
            tipoArticulo: true
          }
        }
      }
    });

    if (!centro) {
      return NextResponse.json(
        { error: "Centro de distribución no encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(centro);
  } catch (error) {
    console.error("Error al obtener centro de distribución:", error);
    return NextResponse.json(
      { error: "Error al obtener centro de distribución" },
      { status: 500 }
    );
  }
}

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
      console.log("No se encontró token de administrador");
      return NextResponse.json(
        { error: "No autorizado" },
        { status: 401 }
      );
    }

    const id = parseInt(params.id);
    if (isNaN(id)) {
      console.log("ID inválido:", params.id);
      return NextResponse.json(
        { error: "ID inválido" },
        { status: 400 }
      );
    }

    const body = await request.json();
    console.log("Datos recibidos para actualizar centro:", { id, ...body });
    
    // Verificar que el centro existe
    const centroExistente = await prisma.centroDistribucion.findUnique({
      where: { id }
    });
    
    if (!centroExistente) {
      console.log("Centro no encontrado con ID:", id);
      return NextResponse.json(
        { error: "Centro de distribución no encontrado" },
        { status: 404 }
      );
    }
    
    // Actualizar el centro
    try {
      console.log("Intentando actualizar centro con datos:", {
        activo: body.activo !== undefined ? body.activo : centroExistente.activo,
        direccion: body.direccion || centroExistente.direccion,
        responsable: body.responsable || centroExistente.responsable,
        telefono: body.telefono !== undefined ? body.telefono : centroExistente.telefono,
        horarioApertura: body.horarioApertura !== undefined ? body.horarioApertura : centroExistente.horarioApertura,
        horarioCierre: body.horarioCierre !== undefined ? body.horarioCierre : centroExistente.horarioCierre,
        latitud: body.latitud || centroExistente.latitud,
        longitud: body.longitud || centroExistente.longitud,
        nombre: body.nombre !== undefined ? body.nombre : centroExistente.nombre,
        descripcion: body.descripcion !== undefined ? body.descripcion : centroExistente.descripcion
      });
      
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
          longitud: body.longitud || centroExistente.longitud,
          nombre: body.nombre !== undefined ? body.nombre : centroExistente.nombre,
          descripcion: body.descripcion !== undefined ? body.descripcion : centroExistente.descripcion
        }
      });
      
      // Ya no es necesario actualizar el nombre con una consulta SQL directa
      // if (body.nombre !== undefined) {
      //   await prisma.$executeRaw`UPDATE "CentroDistribucion" SET "nombre" = ${body.nombre} WHERE "id" = ${id}`;
      // }
      
      console.log("Centro actualizado correctamente:", centro);
      return NextResponse.json(centro);
    } catch (updateError) {
      console.error("Error específico al actualizar centro en la base de datos:", updateError);
      return NextResponse.json(
        { error: "Error al actualizar centro en la base de datos", details: updateError instanceof Error ? updateError.message : String(updateError) },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error al actualizar centro de distribución:", error);
    return NextResponse.json(
      { error: "Error al actualizar centro de distribución", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

// PUT /api/centros-distribucion/[id]
// Actualiza un centro de distribución (solo para administradores)
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
        direccion: body.direccion,
        responsable: body.responsable,
        telefono: body.telefono,
        horarioApertura: body.horarioApertura,
        horarioCierre: body.horarioCierre,
        latitud: body.latitud,
        longitud: body.longitud,
        descripcion: body.descripcion,
        nombre: body.nombre
      }
    });
    
    // Ya no es necesario actualizar el nombre con una consulta SQL directa
    // if (body.nombre !== undefined) {
    //   await prisma.$executeRaw`UPDATE "CentroDistribucion" SET "nombre" = ${body.nombre} WHERE "id" = ${id}`;
    // }
    
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