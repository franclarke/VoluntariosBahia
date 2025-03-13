import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET /api/ofertas - Obtener todas las ofertas o filtrar por tipo de artículo
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const tipoArticulo = searchParams.get("tipoArticulo");
    
    const ofertas = await prisma.oferta.findMany({
      where: tipoArticulo ? {
        tipoArticulo: tipoArticulo
      } : undefined,
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

// POST /api/ofertas - Crear una nueva oferta
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validar datos requeridos
    if (!body.direccion || !body.tipoArticulo || !body.cantidad || !body.latitud || !body.longitud) {
      return NextResponse.json(
        { error: "Faltan datos requeridos" },
        { status: 400 }
      );
    }
    
    const oferta = await prisma.oferta.create({
      data: {
        direccion: body.direccion,
        tipoArticulo: body.tipoArticulo,
        cantidad: body.cantidad,
        latitud: body.latitud,
        longitud: body.longitud
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