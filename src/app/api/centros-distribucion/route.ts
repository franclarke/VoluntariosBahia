import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/centros-distribucion
// Obtiene todos los centros de distribución activos con artículos disponibles
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const tiposArticulosParam = url.searchParams.get("tiposArticulos");
    
    let tiposArticulos: string[] = [];
    if (tiposArticulosParam) {
      try {
        tiposArticulos = JSON.parse(tiposArticulosParam);
      } catch {
        return NextResponse.json(
          { error: "Formato inválido para tiposArticulos" },
          { status: 400 }
        );
      }
    }

    // Consulta para obtener centros de distribución con artículos disponibles
    const centros = await prisma.centroDistribucion.findMany({
      where: {
        activo: true,
        articulos: {
          some: tiposArticulos.length > 0 
            ? {
                tipoArticulo: {
                  nombre: {
                    in: tiposArticulos
                  }
                },
                estado: "Disponible"
              }
            : {
                estado: "Disponible"
              }
        }
      },
      include: {
        articulos: {
          where: {
            estado: "Disponible"
          },
          include: {
            tipoArticulo: true
          }
        }
      },
      orderBy: {
        direccion: "asc"
      }
    });

    return NextResponse.json(centros);
  } catch (error) {
    console.error("Error al obtener centros de distribución:", error);
    return NextResponse.json(
      { error: "Error al obtener centros de distribución" },
      { status: 500 }
    );
  }
}

// POST /api/centros-distribucion
// Crea un nuevo centro de distribución (solo para administradores)
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
    if (!body.direccion || !body.latitud || !body.longitud || !body.responsable) {
      return NextResponse.json(
        { error: "Faltan campos requeridos: direccion, latitud, longitud, responsable" },
        { status: 400 }
      );
    }
    
    // Crear el centro de distribución
    const centro = await prisma.centroDistribucion.create({
      data: {
        direccion: body.direccion,
        latitud: body.latitud,
        longitud: body.longitud,
        responsable: body.responsable,
        telefono: body.telefono || null,
        horarioApertura: body.horarioApertura || null,
        horarioCierre: body.horarioCierre || null,
        descripcion: body.descripcion || null,
        activo: true
      }
    });
    
    return NextResponse.json(centro, { status: 201 });
  } catch (error) {
    console.error("Error al crear centro de distribución:", error);
    return NextResponse.json(
      { error: "Error al crear centro de distribución" },
      { status: 500 }
    );
  }
} 