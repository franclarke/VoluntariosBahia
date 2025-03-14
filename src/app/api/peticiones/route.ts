import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import type { PrismaClient, Prisma } from "@prisma/client";

// Configuración para las rutas de API
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

interface ArticuloPeticion {
  tipoArticulo: string;
  cantidad: number;
}

// GET /api/peticiones
// Obtiene todas las peticiones de donación
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const estado = url.searchParams.get("estado");
    
    const peticiones = await prisma.peticionDonacion.findMany({
      where: {
        ...(estado ? { estado } : {})
      },
      include: {
        articulos: {
          include: {
            tipoArticulo: true
          }
        }
      },
      orderBy: {
        creadoEn: "desc"
      }
    });
    
    return NextResponse.json(peticiones);
  } catch (error) {
    console.error("Error al obtener peticiones:", error);
    return NextResponse.json(
      { error: "Error al obtener peticiones" },
      { status: 500 }
    );
  }
}

// POST /api/peticiones
// Crea una nueva petición de donación
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validar campos requeridos
    if (!body.direccion || !body.contactoNombre || !body.contactoTel || !body.articulos) {
      return NextResponse.json(
        { error: "Faltan campos requeridos: direccion, contactoNombre, contactoTel, articulos" },
        { status: 400 }
      );
    }
    
    // Validar que hay al menos un artículo
    if (!Array.isArray(body.articulos) || body.articulos.length === 0) {
      return NextResponse.json(
        { error: "Debe incluir al menos un artículo" },
        { status: 400 }
      );
    }
    
    // Validar cada artículo
    for (const art of body.articulos as ArticuloPeticion[]) {
      if (!art.tipoArticulo || !art.cantidad || art.cantidad <= 0) {
        return NextResponse.json(
          { error: "Cada artículo debe tener un tipo y una cantidad válida" },
          { status: 400 }
        );
      }
    }
    
    // Crear la petición y sus artículos en una transacción
    const peticion = await prisma.$transaction(async (tx) => {
      // Crear la petición
      const nuevaPeticion = await tx.peticionDonacion.create({
        data: {
          direccion: body.direccion,
          contactoNombre: body.contactoNombre,
          contactoTel: body.contactoTel,
          descripcion: body.descripcion || null,
          latitud: body.latitud || null,
          longitud: body.longitud || null,
          estado: "Pendiente"
        }
      });
      
      // Crear los artículos de la petición
      for (const art of body.articulos as ArticuloPeticion[]) {
        // Buscar o crear el tipo de artículo
        let tipoArticulo = await tx.tipoArticulo.findFirst({
          where: { nombre: art.tipoArticulo }
        });
        
        if (!tipoArticulo) {
          tipoArticulo = await tx.tipoArticulo.create({
            data: { nombre: art.tipoArticulo }
          });
        }
        
        // Crear el artículo de la petición
        await tx.articuloPeticion.create({
          data: {
            peticionDonacionId: nuevaPeticion.id,
            tipoArticuloId: tipoArticulo.id,
            cantidad: art.cantidad
          }
        });
      }
      
      // Retornar la petición creada
      return nuevaPeticion;
    });
    
    return NextResponse.json(peticion, { status: 201 });
  } catch (error) {
    console.error("Error al crear petición:", error);
    return NextResponse.json(
      { error: "Error al crear petición" },
      { status: 500 }
    );
  }
}