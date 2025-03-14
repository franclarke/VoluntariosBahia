import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// POST /api/admin/marcar-peticion-registrada
// Marca una petición como "Registrada" después de crear una solicitud basada en ella
export async function POST(request: NextRequest) {
  try {
    // Verificar si el usuario está autenticado como administrador
    const token = request.cookies.get("admin_token")?.value;
    
    if (!token) {
      return NextResponse.json(
        { error: "No autorizado" },
        { status: 401 }
      );
    }

    const body = await request.json();
    
    if (!body.peticionId || !body.solicitudId) {
      return NextResponse.json(
        { error: "Se requiere el ID de la petición y de la solicitud" },
        { status: 400 }
      );
    }
    
    const peticionId = parseInt(body.peticionId);
    const solicitudId = parseInt(body.solicitudId);
    
    if (isNaN(peticionId) || isNaN(solicitudId)) {
      return NextResponse.json(
        { error: "Los IDs deben ser números válidos" },
        { status: 400 }
      );
    }
    
    // Verificar que ambos recursos existan
    const peticion = await prisma.peticionDonacion.findUnique({
      where: { id: peticionId }
    });
    
    const solicitud = await prisma.solicitud.findUnique({
      where: { id: solicitudId }
    });
    
    if (!peticion) {
      return NextResponse.json(
        { error: "La petición no existe" },
        { status: 404 }
      );
    }
    
    if (!solicitud) {
      return NextResponse.json(
        { error: "La solicitud no existe" },
        { status: 404 }
      );
    }
    
    // Actualizar el estado de la petición a "Registrada"
    const peticionActualizada = await prisma.peticionDonacion.update({
      where: { id: peticionId },
      data: {
        estado: "Registrada"
      }
    });
    
    console.log(`Petición ${peticionId} marcada como Registrada, vinculada a solicitud ${solicitudId}`);
    
    return NextResponse.json({
      success: true,
      message: `Petición ${peticionId} marcada como Registrada`,
      peticion: peticionActualizada,
      solicitudId
    });
  } catch (error) {
    console.error("Error al marcar petición como registrada:", error);
    return NextResponse.json(
      { error: "Error al marcar petición como registrada" },
      { status: 500 }
    );
  }
} 