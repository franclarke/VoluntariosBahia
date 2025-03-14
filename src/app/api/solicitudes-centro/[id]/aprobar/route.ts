import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// POST /api/solicitudes-centro/[id]/aprobar
// Aprueba una solicitud de centro y crea el centro de distribución
export async function POST(
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

    // Buscar la solicitud
    const solicitud = await prisma.solicitudCentro.findUnique({
      where: { id },
      include: {
        articulosSolicitados: true
      }
    });

    if (!solicitud) {
      return NextResponse.json(
        { error: "Solicitud no encontrada" },
        { status: 404 }
      );
    }

    if (solicitud.estado !== "Pendiente") {
      return NextResponse.json(
        { error: "La solicitud ya ha sido procesada" },
        { status: 400 }
      );
    }

    // Actualizar el estado de la solicitud
    await prisma.solicitudCentro.update({
      where: { id },
      data: {
        estado: "Aprobada"
      }
    });

    // Crear el centro de distribución
    const centro = await prisma.centroDistribucion.create({
      data: {
        direccion: solicitud.direccion,
        responsable: solicitud.responsable,
        telefono: solicitud.telefono,
        horarioApertura: solicitud.horarioApertura,
        horarioCierre: solicitud.horarioCierre,
        latitud: solicitud.latitud,
        longitud: solicitud.longitud,
        descripcion: solicitud.descripcion,
        activo: true
      }
    });

    // Si el nombre se proporcionó, actualizarlo con una consulta SQL directa
    if (solicitud.nombre) {
      await prisma.$executeRaw`UPDATE "CentroDistribucion" SET "nombre" = ${solicitud.nombre} WHERE "id" = ${centro.id}`;
    }

    // Crear los artículos disponibles
    for (const articuloSolicitado of solicitud.articulosSolicitados) {
      await prisma.articuloOferta.create({
        data: {
          centroDistribucionId: centro.id,
          tipoArticuloId: articuloSolicitado.tipoArticuloId,
          cantidad: articuloSolicitado.cantidad,
          estado: "Disponible"
        }
      });
    }

    return NextResponse.json({
      success: true,
      message: "Solicitud aprobada y centro creado correctamente"
    });
  } catch (error) {
    console.error("Error al aprobar solicitud:", error);
    return NextResponse.json(
      { error: "Error al aprobar solicitud" },
      { status: 500 }
    );
  }
} 