import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";



// GET /api/admin/peticiones
// Obtiene todas las peticiones de donación para administradores
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

// Interfaz para los artículos de petición
interface ArticuloPeticion {
  tipoArticuloId: number;
  cantidad: number;
}

// PUT /api/admin/peticiones
// Actualiza el estado de una petición de donación
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validar campos requeridos
    if (!body.id || !body.estado) {
      return NextResponse.json(
        { error: "ID y estado son requeridos" },
        { status: 400 }
      );
    }
    
    // Verificar que el estado sea válido
    if (!["Pendiente", "Aprobado", "Rechazado"].includes(body.estado)) {
      return NextResponse.json(
        { error: "Estado inválido. Debe ser: Pendiente, Aprobado o Rechazado" },
        { status: 400 }
      );
    }
    
    // Actualizar la petición
    const peticion = await prisma.peticionDonacion.update({
      where: {
        id: body.id
      },
      data: {
        estado: body.estado
      }
    });
    
    // Si la petición fue aprobada, crear una solicitud a partir de ella
    if (body.estado === "Aprobado") {
      // Obtener la petición con sus artículos
      const peticionCompleta = await prisma.peticionDonacion.findUnique({
        where: { id: body.id },
        include: {
          articulos: {
            include: {
              tipoArticulo: true
            }
          }
        }
      });
      
      if (peticionCompleta) {
        // Crear la solicitud
        await prisma.solicitud.create({
          data: {
            direccion: peticionCompleta.direccion,
            contactoNombre: peticionCompleta.contactoNombre,
            contactoTel: peticionCompleta.contactoTel,
            latitud: peticionCompleta.latitud || 0,
            longitud: peticionCompleta.longitud || 0,
            estado: "Pendiente",
            articulos: {
              create: peticionCompleta.articulos.map((art: ArticuloPeticion) => ({
                tipoArticuloId: art.tipoArticuloId,
                cantidad: art.cantidad
              }))
            }
          }
        });
      }
    }
    
    return NextResponse.json({
      message: `Petición marcada como ${body.estado}`,
      peticion
    });
  } catch (error) {
    console.error("Error al actualizar petición:", error);
    return NextResponse.json(
      { error: "Error al actualizar petición" },
      { status: 500 }
    );
  }
} 