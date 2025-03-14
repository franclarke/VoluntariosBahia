import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Configuración para las rutas de API
export const dynamic = 'force-dynamic';

// POST /api/solicitudes-centro/[id]/aprobar
// Aprueba una solicitud de centro y crea el centro de distribución
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Obtener el ID de los parámetros y convertirlo a un número
    const { id } = params;
    console.log("Aprobando solicitud de centro con ID:", id);
    
    const solicitudId = parseInt(id);
    if (isNaN(solicitudId)) {
      return NextResponse.json(
        { error: "ID inválido" },
        { status: 400 }
      );
    }

    // Buscar la solicitud
    const solicitud = await prisma.solicitudCentro.findUnique({
      where: { id: solicitudId },
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

    console.log("Aprobando solicitud de centro:", solicitud);

    // Actualizar el estado de la solicitud
    await prisma.solicitudCentro.update({
      where: { id: solicitudId },
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
        nombre: solicitud.nombre,
        activo: true
      }
    });
    
    return NextResponse.json({
      success: true,
      message: "Solicitud aprobada y centro creado correctamente",
      centro
    });
  } catch (error) {
    console.error("Error al aprobar solicitud de centro:", error);
    return NextResponse.json(
      { error: "Error al aprobar solicitud de centro" },
      { status: 500 }
    );
  }
} 