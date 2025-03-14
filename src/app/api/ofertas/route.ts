import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Configuración para las rutas de API
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// GET /api/ofertas
// Obtiene todas las ofertas de artículos disponibles
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const centroId = url.searchParams.get("centroId");
    
    const where = centroId 
      ? { centroDistribucionId: parseInt(centroId) } 
      : {};
    
    const ofertas = await prisma.articuloOferta.findMany({
      where: {
        ...where,
        estado: "Disponible"
      },
      include: {
        tipoArticulo: true,
        centroDistribucion: true
      },
      orderBy: {
        creadoEn: "desc"
      }
    });

    return NextResponse.json(ofertas);
  } catch (error) {
    console.error("Error al obtener ofertas:", error);
    return NextResponse.json(
      { error: "Error al obtener ofertas" },
      { status: 500 }
    );
  }
}

// POST /api/ofertas
// Crea una nueva oferta de artículo (solo para administradores)
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
    
    // Validar campos requeridos
    if (!body.centroDistribucionId || !body.tipoArticuloId || !body.cantidad) {
      return NextResponse.json(
        { error: "Faltan campos requeridos: centroDistribucionId, tipoArticuloId, cantidad" },
        { status: 400 }
      );
    }
    
    // Verificar que el centro de distribución existe
    const centro = await prisma.centroDistribucion.findUnique({
      where: { id: body.centroDistribucionId }
    });
    
    if (!centro) {
      return NextResponse.json(
        { error: "El centro de distribución no existe" },
        { status: 404 }
      );
    }
    
    // Verificar que el tipo de artículo existe
    const tipoArticulo = await prisma.tipoArticulo.findUnique({
      where: { id: body.tipoArticuloId }
    });
    
    if (!tipoArticulo) {
      return NextResponse.json(
        { error: "El tipo de artículo no existe" },
        { status: 404 }
      );
    }
    
    // Crear la oferta de artículo
    const oferta = await prisma.articuloOferta.create({
      data: {
        centroDistribucionId: body.centroDistribucionId,
        tipoArticuloId: body.tipoArticuloId,
        cantidad: body.cantidad,
        estado: "Disponible"
      }
    });
    
    return NextResponse.json(oferta, { status: 201 });
  } catch (error) {
    console.error("Error al crear oferta:", error);
    return NextResponse.json(
      { error: "Error al crear oferta" },
      { status: 500 }
    );
  }
} 