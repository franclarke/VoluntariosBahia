import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { PrismaClient, Prisma } from "@prisma/client";

// Configuración para las rutas de API
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

interface ArticuloSolicitado {
  tipoArticuloId: number;
  cantidad: number;
  tipoPersonalizado?: string;
}

// GET /api/solicitudes-centro
// Obtiene todas las solicitudes de centros de distribución
export async function GET(request: NextRequest) {
  try {
    console.log("Obteniendo solicitudes de centros...");
    
    // Consulta para obtener solicitudes de centros
    const solicitudes = await prisma.solicitudCentro.findMany({
      include: {
        articulosSolicitados: {
          include: {
            tipoArticulo: true
          }
        }
      },
      orderBy: {
        createdAt: "desc"
      }
    });

    console.log(`Solicitudes de centros encontradas: ${solicitudes.length}`);
    return NextResponse.json(solicitudes);
  } catch (error) {
    console.error("Error al obtener solicitudes de centros:", error);
    return NextResponse.json(
      { error: "Error al obtener solicitudes" },
      { status: 500 }
    );
  }
}

// POST /api/solicitudes-centro
// Crea una nueva solicitud de centro de distribución
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validar campos requeridos
    if (!body.direccion || !body.responsable) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }
    
    // Validar artículos
    if (!body.articulos || !Array.isArray(body.articulos) || body.articulos.length === 0) {
      return NextResponse.json(
        { error: "Debes especificar al menos un artículo" },
        { status: 400 }
      );
    }
    
    console.log("Creando solicitud de centro:", {
      direccion: body.direccion,
      responsable: body.responsable
    });
    
    // Crear la solicitud de centro en una transacción
    const solicitud = await prisma.$transaction(async (tx) => {
      // Crear la solicitud de centro
      const nuevaSolicitud = await tx.solicitudCentro.create({
        data: {
          direccion: body.direccion,
          responsable: body.responsable,
          telefono: body.telefono || null,
          horarioApertura: body.horarioApertura || null,
          horarioCierre: body.horarioCierre || null,
          descripcion: body.descripcion || null,
          nombre: body.nombre || null,
          latitud: body.latitud !== undefined ? body.latitud : -38.7196,
          longitud: body.longitud !== undefined ? body.longitud : -62.2724,
          estado: "Pendiente"
        }
      });
      
      console.log("Solicitud de centro creada:", nuevaSolicitud);
      
      // Crear los artículos solicitados
      for (const articulo of body.articulos as ArticuloSolicitado[]) {
        let tipoArticuloId = articulo.tipoArticuloId;
        
        // Si es un tipo personalizado (-1), crear un nuevo tipo de artículo
        if (articulo.tipoArticuloId === -1 && articulo.tipoPersonalizado) {
          // Verificar si ya existe un tipo con ese nombre
          const tipoExistente = await tx.tipoArticulo.findFirst({
            where: { nombre: articulo.tipoPersonalizado }
          });
          
          if (tipoExistente) {
            tipoArticuloId = tipoExistente.id;
          } else {
            // Crear nuevo tipo de artículo
            const nuevoTipo = await tx.tipoArticulo.create({
              data: { nombre: articulo.tipoPersonalizado }
            });
            tipoArticuloId = nuevoTipo.id;
          }
        }
        
        // Crear el artículo solicitado
        await tx.articuloSolicitado.create({
          data: {
            solicitudCentroId: nuevaSolicitud.id,
            tipoArticuloId: tipoArticuloId,
            cantidad: articulo.cantidad
          }
        });
      }
      
      return nuevaSolicitud;
    });
    
    return NextResponse.json(solicitud, { status: 201 });
  } catch (error) {
    console.error("Error al crear solicitud de centro:", error);
    return NextResponse.json(
      { error: "Error al crear solicitud" },
      { status: 500 }
    );
  }
} 