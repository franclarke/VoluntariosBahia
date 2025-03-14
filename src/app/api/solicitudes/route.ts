import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Configuración para las rutas de API
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

interface ArticuloSolicitud {
  tipoArticuloId: number;
  cantidad: number;
}

// GET /api/solicitudes
// Obtiene todas las solicitudes con el estado especificado
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const estado = url.searchParams.get("estado");
    
    // Consulta para obtener solicitudes
    const solicitudes = await prisma.solicitud.findMany({
      where: estado ? { estado } : {},
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

    console.log(`Solicitudes encontradas (estado=${estado || 'todas'}):`, solicitudes.length);
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
    
    // Verificar si se está basando en una petición
    let peticionReferencia = null;
    if (body.peticionReferenciaId) {
      peticionReferencia = await prisma.peticionDonacion.findUnique({
        where: { id: parseInt(body.peticionReferenciaId) },
        include: {
          articulos: {
            include: {
              tipoArticulo: true
            }
          }
        }
      });
      
      if (!peticionReferencia) {
        return NextResponse.json(
          { error: "La petición de referencia no existe" },
          { status: 404 }
        );
      }
      
      console.log(`Creando solicitud basada en la petición #${body.peticionReferenciaId}`);
    }
    
    // Crear la solicitud con sus artículos
    const solicitud = await prisma.solicitud.create({
      data: {
        direccion: body.direccion,
        contactoNombre: body.contactoNombre,
        contactoTel: body.contactoTel,
        latitud: body.latitud || 0,
        longitud: body.longitud || 0,
        descripcion: body.descripcion || null,
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
    
    const response = {
      ...solicitud,
      peticionReferencia: peticionReferencia ? {
        id: peticionReferencia.id,
        direccion: peticionReferencia.direccion,
        contactoNombre: peticionReferencia.contactoNombre,
        contactoTel: peticionReferencia.contactoTel
      } : null
    };
    
    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error("Error al crear solicitud:", error);
    return NextResponse.json(
      { error: "Error al crear la solicitud" },
      { status: 500 }
    );
  }
}