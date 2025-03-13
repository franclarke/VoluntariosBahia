import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
        createdAt: "desc"
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