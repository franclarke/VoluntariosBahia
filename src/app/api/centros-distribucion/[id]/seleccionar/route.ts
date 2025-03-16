import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";



// PUT /api/centros-distribucion/:id/seleccionar
// Marca un centro como seleccionado para retiro (cambia el estado de sus artículos)
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Convertir params a Promises resueltas para evitar errores de Next.js
    const id = await Promise.resolve(params.id);
    
    if (!id) {
      return NextResponse.json(
        { error: "ID de centro no proporcionado" },
        { status: 400 }
      );
    }
    
    // Actualizar el estado de los artículos del centro
    const resultado = await prisma.articuloOferta.updateMany({
      where: {
        centroDistribucionId: parseInt(id),
        estado: "Disponible"
      },
      data: {
        estado: "Seleccionado"
      }
    });
    
    return NextResponse.json({
      message: "Centro seleccionado para retiro",
      articulosActualizados: resultado.count
    });
  } catch (error) {
    console.error("Error al seleccionar centro para retiro:", error);
    return NextResponse.json(
      { error: "Error al seleccionar centro para retiro" },
      { status: 500 }
    );
  }
} 