import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";



// PUT /api/ofertas/[id]/seleccionar - Marcar una oferta como seleccionada para retiro
export async function PUT(
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
    
    // Verificar si la oferta existe
    const oferta = await prisma.articuloOferta.findUnique({
      where: { id }
    });
    
    if (!oferta) {
      return NextResponse.json(
        { error: "Oferta no encontrada" },
        { status: 404 }
      );
    }
    
    // Actualizar el estado de la oferta
    await prisma.articuloOferta.update({
      where: { id },
      data: {
        estado: "Seleccionado"
      }
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error al seleccionar oferta:", error);
    return NextResponse.json(
      { error: "Error al seleccionar oferta" },
      { status: 500 }
    );
  }
} 