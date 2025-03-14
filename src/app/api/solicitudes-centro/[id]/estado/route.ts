import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Configuración para las rutas de API
export const dynamic = 'force-dynamic';

// PUT /api/solicitudes-centro/[id]/estado
// Actualiza el estado de una solicitud de centro
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
    
    // Usar desestructuración para obtener el ID
    const { id } = params;
    const { estado } = await request.json();
    
    if (!id) {
      return NextResponse.json(
        { error: "ID de solicitud no proporcionado" },
        { status: 400 }
      );
    }
    
    if (!estado || !["Pendiente", "Aprobada", "Rechazada", "Atendida"].includes(estado)) {
      return NextResponse.json(
        { error: "Estado no válido" },
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
    const solicitud = await prisma.solicitudCentro.findUnique({
      where: { id: solicitudId }
    });
    
    if (!solicitud) {
      return NextResponse.json(
        { error: "Solicitud no encontrada" },
        { status: 404 }
      );
    }
    
    // Actualizar el estado de la solicitud
    const solicitudActualizada = await prisma.solicitudCentro.update({
      where: { id: solicitudId },
      data: { estado }
    });
    
    console.log(`Solicitud de centro ${id} marcada como ${estado}`);
    
    return NextResponse.json({
      success: true,
      message: `Solicitud marcada como ${estado}`,
      solicitud: solicitudActualizada
    });
  } catch (error) {
    console.error("Error al actualizar estado de solicitud:", error);
    return NextResponse.json(
      { error: "Error al actualizar estado de solicitud" },
      { status: 500 }
    );
  }
} 