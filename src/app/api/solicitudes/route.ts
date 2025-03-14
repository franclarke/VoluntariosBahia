import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { dynamic, runtime } from "../config";

// Exportar la configuración
export { dynamic, runtime };

interface ArticuloSolicitud {
  tipoArticuloId: number;
  cantidad: number;
}

// GET /api/solicitudes
// Obtiene todas las solicitudes pendientes con los tipos de artículos especificados
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const tiposArticulosParam = url.searchParams.get("tiposArticulos");
    const estado = url.searchParams.get("estado") || "Pendiente";
    
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

    // Consulta para obtener solicitudes con los tipos de artículos especificados
    const solicitudes = await prisma.solicitud.findMany({
      where: {
        estado,
        articulos: {
          some: tiposArticulos.length > 0 
            ? {
                tipoArticulo: {
                  nombre: {
                    in: tiposArticulos
                  }
                }
              }
            : {}
        }
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

    return NextResponse.json(solicitudes);
  } catch (error) {
    console.error("Error al obtener solicitudes:", error);
    return NextResponse.json(
      { error: "Error al obtener solicitudes" },
      { status: 500 }
    );
  }
}

// POST /api/solicitudes
// Crea una nueva solicitud de donación
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validar campos requeridos
    if (!body.direccion || !body.contactoNombre || !body.contactoTel || !body.articulos || !Array.isArray(body.articulos)) {
      return NextResponse.json(
        { error: "Faltan campos requeridos o el formato es incorrecto" },
        { status: 400 }
      );
    }
    
    // Validar que haya al menos un artículo
    if (body.articulos.length === 0) {
      return NextResponse.json(
        { error: "Debe incluir al menos un artículo" },
        { status: 400 }
      );
    }
    
    // Validar que todos los artículos tengan tipoArticuloId y cantidad
    const articulosInvalidos = body.articulos.some((art: ArticuloSolicitud) => 
      !art.tipoArticuloId || !art.cantidad || art.cantidad < 1
    );
    
    if (articulosInvalidos) {
      return NextResponse.json(
        { error: "Todos los artículos deben tener tipo y cantidad válida" },
        { status: 400 }
      );
    }
    
    // Crear la solicitud con sus artículos
    const solicitud = await prisma.solicitud.create({
      data: {
        direccion: body.direccion,
        contactoNombre: body.contactoNombre,
        contactoTel: body.contactoTel,
        latitud: body.latitud,
        longitud: body.longitud,
        descripcion: body.descripcion,
        estado: body.estado || "Pendiente",
        articulos: {
          create: body.articulos.map((art: ArticuloSolicitud) => ({
            tipoArticuloId: art.tipoArticuloId,
            cantidad: art.cantidad
          }))
        }
      },
      include: {
        articulos: {
          include: {
            tipoArticulo: true
          }
        }
      }
    });
    
    return NextResponse.json(solicitud, { status: 201 });
  } catch (error) {
    console.error("Error al crear solicitud:", error);
    return NextResponse.json(
      { error: "Error al crear la solicitud" },
      { status: 500 }
    );
  }
}