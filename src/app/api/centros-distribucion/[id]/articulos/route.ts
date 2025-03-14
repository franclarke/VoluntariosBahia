import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Configuración para las rutas de API
export const dynamic = 'force-dynamic';

// GET /api/centros-distribucion/[id]/articulos
// Obtiene los artículos de un centro de distribución
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Usar desestructuración para obtener el ID
    const { id } = params;
    
    const centroId = parseInt(id);
    if (isNaN(centroId)) {
      console.log("ID inválido en GET artículos:", id);
      return NextResponse.json(
        { error: "ID inválido" },
        { status: 400 }
      );
    }

    // Buscar los artículos del centro
    const articulos = await prisma.articuloOferta.findMany({
      where: { centroDistribucionId: centroId },
      include: {
        tipoArticulo: true
      }
    });

    return NextResponse.json(articulos);
  } catch (error) {
    console.error("Error al obtener artículos del centro:", error);
    return NextResponse.json(
      { error: "Error al obtener artículos del centro" },
      { status: 500 }
    );
  }
}

// DELETE /api/centros-distribucion/[id]/articulos
// Elimina todos los artículos de un centro de distribución (solo para administradores)
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Verificar si el usuario está autenticado como administrador
    const token = request.cookies.get("admin_token")?.value;
    
    if (!token) {
      console.log("No se encontró token de administrador en DELETE artículos");
      return NextResponse.json(
        { error: "No autorizado" },
        { status: 401 }
      );
    }

    // Usar desestructuración para obtener el ID
    const { id } = params;
    
    const centroId = parseInt(id);
    if (isNaN(centroId)) {
      console.log("ID inválido en DELETE artículos:", id);
      return NextResponse.json(
        { error: "ID inválido" },
        { status: 400 }
      );
    }
    
    // Verificar que el centro existe
    const centroExistente = await prisma.centroDistribucion.findUnique({
      where: { id: centroId }
    });
    
    if (!centroExistente) {
      console.log("Centro no encontrado con ID:", centroId);
      return NextResponse.json(
        { error: "Centro de distribución no encontrado" },
        { status: 404 }
      );
    }
    
    try {
      // Eliminar todos los artículos del centro
      const resultado = await prisma.articuloOferta.deleteMany({
        where: {
          centroDistribucionId: centroId
        }
      });
      
      console.log("Artículos eliminados:", resultado.count);
      return NextResponse.json({ 
        success: true,
        message: "Artículos eliminados correctamente",
        count: resultado.count
      });
    } catch (deleteError) {
      console.error("Error específico al eliminar artículos:", deleteError);
      return NextResponse.json(
        { error: "Error al eliminar artículos", details: deleteError instanceof Error ? deleteError.message : String(deleteError) },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error general al eliminar artículos del centro:", error);
    return NextResponse.json(
      { error: "Error al eliminar artículos del centro", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

// POST /api/centros-distribucion/[id]/articulos
// Agrega artículos a un centro de distribución (solo para administradores)
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Verificar si el usuario está autenticado como administrador
    const token = request.cookies.get("admin_token")?.value;
    
    if (!token) {
      console.log("No se encontró token de administrador en POST artículos");
      return NextResponse.json(
        { error: "No autorizado" },
        { status: 401 }
      );
    }

    // Usar desestructuración para obtener el ID
    const { id } = params;
    
    const centroId = parseInt(id);
    if (isNaN(centroId)) {
      console.log("ID inválido en POST artículos:", id);
      return NextResponse.json(
        { error: "ID inválido" },
        { status: 400 }
      );
    }
    
    const body = await request.json();
    console.log("Datos recibidos para agregar artículos:", { centroId, body });
    
    // Validar que el cuerpo tenga un array de artículos
    if (!body.articulos || !Array.isArray(body.articulos) || body.articulos.length === 0) {
      console.log("Array de artículos inválido:", body);
      return NextResponse.json(
        { error: "Se requiere un array de artículos" },
        { status: 400 }
      );
    }
    
    // Verificar que el centro existe
    const centroExistente = await prisma.centroDistribucion.findUnique({
      where: { id: centroId }
    });
    
    if (!centroExistente) {
      console.log("Centro no encontrado con ID:", centroId);
      return NextResponse.json(
        { error: "Centro de distribución no encontrado" },
        { status: 404 }
      );
    }
    
    // Crear los artículos en una transacción
    try {
      // Usar una función sin tipo explícito
      const articulosCreados = await prisma.$transaction(async (tx) => {
        const resultados = [];
        
        for (const articulo of body.articulos) {
          // Validar campos requeridos para cada artículo
          if (!articulo.tipoArticuloId || !articulo.cantidad || articulo.cantidad < 1) {
            console.log("Artículo inválido:", articulo);
            throw new Error("Todos los artículos deben tener tipoArticuloId y cantidad válida");
          }
          
          // Verificar que el tipo de artículo existe
          const tipoArticulo = await tx.tipoArticulo.findUnique({
            where: { id: articulo.tipoArticuloId }
          });
          
          if (!tipoArticulo) {
            console.log("Tipo de artículo no encontrado:", articulo.tipoArticuloId);
            throw new Error(`El tipo de artículo con ID ${articulo.tipoArticuloId} no existe`);
          }
          
          // Crear el artículo
          const articuloCreado = await tx.articuloOferta.create({
            data: {
              centroDistribucionId: centroId,
              tipoArticuloId: articulo.tipoArticuloId,
              cantidad: articulo.cantidad,
              estado: "Disponible"
            }
          });
          
          resultados.push(articuloCreado);
        }
        
        return resultados;
      });
      
      console.log("Artículos creados correctamente:", articulosCreados.length);
      return NextResponse.json({
        success: true,
        message: "Artículos agregados correctamente",
        articulos: articulosCreados
      }, { status: 201 });
    } catch (txError) {
      console.error("Error en la transacción de artículos:", txError);
      return NextResponse.json(
        { error: txError instanceof Error ? txError.message : "Error al agregar artículos al centro" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error general al agregar artículos al centro:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Error al agregar artículos al centro", details: String(error) },
      { status: 500 }
    );
  }
} 