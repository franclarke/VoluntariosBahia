import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// PUT /api/peticiones/:id/estado
// Actualiza el estado de una petición
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Usar desestructuración para obtener el ID
    const { id } = params;
    const { estado } = await request.json();
    
    if (!id) {
      return NextResponse.json(
        { error: "ID de petición no proporcionado" },
        { status: 400 }
      );
    }
    
    if (!estado || !["Pendiente", "Entregada", "Cancelada", "Registrada", "Archivada", "Atendida"].includes(estado)) {
      return NextResponse.json(
        { error: "Estado no válido" },
        { status: 400 }
      );
    }
    
    // Actualizar el estado de la petición
    const peticion = await prisma.peticionDonacion.update({
      where: {
        id: parseInt(id)
      },
      data: {
        estado
      }
    });
    
    // Obtener la petición completa para incluirla en la respuesta
    const peticionCompleta = await prisma.peticionDonacion.findUnique({
      where: { id: parseInt(id) },
      include: {
        articulos: {
          include: {
            tipoArticulo: true
          }
        }
      }
    });
    
    console.log(`Petición ${id} marcada como ${estado}`);
    
    return NextResponse.json({
      message: `Petición marcada como ${estado}`,
      peticion: peticionCompleta
    });
  } catch (error) {
    console.error("Error al actualizar estado de petición:", error);
    return NextResponse.json(
      { error: "Error al actualizar estado de petición" },
      { status: 500 }
    );
  }
} 