import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET /api/tipos-articulos - Obtener todos los tipos de artículos
export async function GET() {
  try {
    const tiposArticulos = await prisma.tipoArticulo.findMany({
      orderBy: {
        nombre: "asc"
      }
    });
    
    return NextResponse.json(tiposArticulos);
  } catch (error) {
    console.error("Error al obtener tipos de artículos:", error);
    return NextResponse.json(
      { error: "Error al obtener tipos de artículos" },
      { status: 500 }
    );
  }
}

// POST /api/tipos-articulos - Crear un nuevo tipo de artículo (solo para administradores)
export async function POST(request: NextRequest) {
  try {
    // Aquí debería ir la verificación de autenticación del administrador
    // Por ahora, omitimos esta verificación para simplificar

    const body = await request.json();
    
    // Validar datos requeridos
    if (!body.nombre) {
      return NextResponse.json(
        { error: "Falta el nombre del tipo de artículo" },
        { status: 400 }
      );
    }
    
    // Verificar si ya existe un tipo de artículo con ese nombre
    const tipoExistente = await prisma.tipoArticulo.findUnique({
      where: { nombre: body.nombre }
    });
    
    if (tipoExistente) {
      return NextResponse.json(
        { error: "Ya existe un tipo de artículo con ese nombre" },
        { status: 400 }
      );
    }
    
    // Crear el tipo de artículo
    const tipoArticulo = await prisma.tipoArticulo.create({
      data: {
        nombre: body.nombre
      }
    });
    
    return NextResponse.json(tipoArticulo, { status: 201 });
  } catch (error) {
    console.error("Error al crear tipo de artículo:", error);
    return NextResponse.json(
      { error: "Error al crear tipo de artículo" },
      { status: 500 }
    );
  }
} 