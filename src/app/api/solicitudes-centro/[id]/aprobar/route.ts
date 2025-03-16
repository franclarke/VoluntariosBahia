import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Configuración para las rutas de API
export const dynamic = 'force-dynamic';

// POST /api/solicitudes-centro/[id]/aprobar
// Aprueba un punto de donación pendiente activándolo
export async function POST(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    // Obtener el ID de los parámetros y convertirlo a un número
    const id = context.params.id;
    console.log("Aprobando punto de donación con ID:", id);
    
    const puntoId = parseInt(id);
    if (isNaN(puntoId)) {
      return NextResponse.json(
        { error: "ID inválido" },
        { status: 400 }
      );
    }

    // Buscar el punto de donación
    const puntoDonacion = await prisma.puntoDonacion.findUnique({
      where: { id: puntoId },
      include: {
        articulos: {
          include: {
            tipoArticulo: true
          }
        }
      }
    });

    if (!puntoDonacion) {
      return NextResponse.json(
        { error: "Punto de donación no encontrado" },
        { status: 404 }
      );
    }

    if (puntoDonacion.activo) {
      return NextResponse.json(
        { error: "El punto de donación ya está activo" },
        { status: 400 }
      );
    }

    console.log("Aprobando punto de donación:", puntoDonacion);

    // Activar el punto de donación
    const puntoActualizado = await prisma.puntoDonacion.update({
      where: { id: puntoId },
      data: {
        activo: true
      }
    });
    
    // Actualizar el estado de los artículos a "Disponible"
    if (puntoDonacion.articulos.length > 0) {
      console.log("Actualizando estado de artículos a Disponible");
      
      for (const articulo of puntoDonacion.articulos) {
        await prisma.articuloOferta.update({
          where: { id: articulo.id },
          data: {
            estado: "Disponible"
          }
        });
      }
    }
    
    return NextResponse.json({
      success: true,
      message: "Punto de donación activado correctamente",
      puntoDonacion: puntoActualizado
    });
  } catch (error) {
    console.error("Error al aprobar punto de donación:", error);
    return NextResponse.json(
      { error: "Error al aprobar punto de donación" },
      { status: 500 }
    );
  }
} 