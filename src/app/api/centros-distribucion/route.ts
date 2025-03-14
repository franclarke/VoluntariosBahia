import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Configuración para las rutas de API
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// GET /api/centros-distribucion
// Obtiene todos los centros de distribución
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const tiposArticulosParam = url.searchParams.get("tiposArticulos");
    const soloActivos = url.searchParams.get("soloActivos") === "true";
    
    console.log("GET /api/centros-distribucion - Parámetros:", {
      tiposArticulosParam,
      soloActivos
    });
    
    let tiposArticulos: string[] = [];
    if (tiposArticulosParam) {
      try {
        tiposArticulos = JSON.parse(tiposArticulosParam);
        console.log("Tipos de artículos filtrados:", tiposArticulos);
      } catch {
        console.error("Error al parsear tiposArticulos:", tiposArticulosParam);
        return NextResponse.json(
          { error: "Formato inválido para tiposArticulos" },
          { status: 400 }
        );
      }
    }

    // Construir el filtro para la consulta
    const where: any = {};
    if (soloActivos) {
      where.activo = true;
    }
    
    if (tiposArticulos.length > 0) {
      where.articulos = {
        some: {
          tipoArticulo: {
            nombre: {
              in: tiposArticulos
            }
          }
        }
      };
    }
    
    console.log("Filtro de consulta:", JSON.stringify(where, null, 2));

    // Consulta para obtener centros de distribución
    const centros = await prisma.centroDistribucion.findMany({
      where,
      include: {
        articulos: {
          include: {
            tipoArticulo: true
          }
        }
      },
      orderBy: {
        direccion: "asc"
      }
    });

    console.log(`Centros encontrados: ${centros.length}`);
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
    if (!body.direccion || !body.responsable) {
      return NextResponse.json(
        { error: "Faltan campos requeridos: direccion, responsable" },
        { status: 400 }
      );
    }
    
    // Crear el centro de distribución
    const centro = await prisma.centroDistribucion.create({
      data: {
        direccion: body.direccion,
        latitud: body.latitud || null,
        longitud: body.longitud || null,
        responsable: body.responsable,
        telefono: body.telefono || null,
        horarioApertura: body.horarioApertura || null,
        horarioCierre: body.horarioCierre || null,
        descripcion: body.descripcion || null,
        activo: true
      }
    });
    
    // Si el nombre se proporcionó, actualizarlo con una consulta SQL directa
    if (body.nombre) {
      await prisma.$executeRaw`UPDATE "CentroDistribucion" SET "nombre" = ${body.nombre} WHERE "id" = ${centro.id}`;
    }
    
    return NextResponse.json(centro, { status: 201 });
  } catch (error) {
    console.error("Error al crear centro de distribución:", error);
    return NextResponse.json(
      { error: "Error al crear centro de distribución" },
      { status: 500 }
    );
  }
} 