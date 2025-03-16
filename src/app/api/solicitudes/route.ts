import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Configuración para las rutas de API
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

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
            tipoArticulo: true,
            tipoArticuloPersonalizado: true
          }
        }
      },
      orderBy: {
        creadoEn: "desc"
      }
    });

    // Transformar los datos para mantener la compatibilidad con el frontend
    const solicitudesFormateadas = solicitudes.map(solicitud => {
      const articulosFormateados = solicitud.articulos.map(articulo => {
        // Determinar el nombre del tipo de artículo (estándar o personalizado)
        const tipoArticuloNombre = articulo.tipoArticulo?.nombre ?? 
                                 articulo.tipoArticuloPersonalizado?.nombre ?? 
                                 "Desconocido";
        
        // Determinar el ID del tipo de artículo (estándar o personalizado)
        const tipoArticuloId = articulo.tipoArticulo?.id ?? 
                              articulo.tipoArticuloPersonalizado?.id ?? 
                              0;
        
        return {
          ...articulo,
          tipoArticulo: {
            id: tipoArticuloId,
            nombre: tipoArticuloNombre
          }
        };
      });
      
      return {
        ...solicitud,
        articulos: articulosFormateados
      };
    });

    console.log(`Solicitudes encontradas (estado=${estado || 'todas'}):`, solicitudesFormateadas.length);
    return NextResponse.json(solicitudesFormateadas);
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
    const { 
      direccion, 
      contactoNombre, 
      contactoTel, 
      latitud, 
      longitud, 
      descripcion, 
      articulos 
    } = await request.json();

    // Validar campos obligatorios
    if (!direccion || !contactoNombre || !contactoTel || !articulos || !Array.isArray(articulos)) {
      return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
    }

    // Validar coordenadas
    if (typeof latitud !== 'number' || typeof longitud !== 'number') {
      return NextResponse.json({ error: 'Coordenadas inválidas' }, { status: 400 });
    }

    // Validar artículos
    for (const articulo of articulos) {
      // Si el tipo es "Otro", verificar que tenga tipoPersonalizado
      if (articulo.tipoArticulo === "Otro") {
        if (!articulo.tipoPersonalizado || articulo.tipoPersonalizado.trim() === "") {
          return NextResponse.json({ 
            error: 'Todos los artículos deben tener tipo y cantidad válida' 
          }, { status: 400 });
        }
      } else if (!articulo.tipoArticulo) {
        return NextResponse.json({ 
          error: 'Todos los artículos deben tener tipo y cantidad válida' 
        }, { status: 400 });
      }

      if (!articulo.cantidad || isNaN(articulo.cantidad) || articulo.cantidad < 1) {
        return NextResponse.json({ 
          error: 'Todos los artículos deben tener tipo y cantidad válida' 
        }, { status: 400 });
      }
    }

    // Crear solicitud en la base de datos
    const nuevaSolicitud = await prisma.solicitud.create({
      data: {
        direccion,
        contactoNombre,
        contactoTel,
        latitud,
        longitud,
        descripcion,
        estado: 'Pendiente'
      }
    });

    // Procesar artículos
    for (const articulo of articulos) {
      // Si el tipo es "Otro", crear un tipo de artículo personalizado
      if (articulo.tipoArticulo === "Otro" && articulo.tipoPersonalizado) {
        try {
          // Crear el tipo de artículo personalizado
          const tipoArticuloPersonalizado = await prisma.tipoArticuloPersonalizado.create({
            data: {
              nombre: articulo.tipoPersonalizado,
              solicitudId: nuevaSolicitud.id
            }
          });

          // Asociar el artículo a la solicitud con el tipo personalizado
          await prisma.articuloSolicitud.create({
            data: {
              solicitudId: nuevaSolicitud.id,
              tipoArticuloPersonalizadoId: tipoArticuloPersonalizado.id,
              cantidad: articulo.cantidad
            }
          });
        } catch (error) {
          console.error('Error al crear tipo de artículo personalizado:', error);
          // Continuar con el siguiente artículo si hay un error
          continue;
        }
      } else {
        // Buscar el tipo de artículo estándar por nombre
        const tipoArticulo = await prisma.tipoArticulo.findUnique({
          where: { nombre: articulo.tipoArticulo }
        });

        if (!tipoArticulo) {
          // Manejar el caso donde no existe el tipo (raro pero podría pasar)
          continue; 
        }

        // Asociar el artículo a la solicitud con el tipo estándar
        await prisma.articuloSolicitud.create({
          data: {
            solicitudId: nuevaSolicitud.id,
            tipoArticuloId: tipoArticulo.id,
            cantidad: articulo.cantidad
          }
        });
      }
    }

    return NextResponse.json({ 
      mensaje: 'Solicitud creada exitosamente', 
      solicitudId: nuevaSolicitud.id 
    });
  } catch (error) {
    console.error('Error al crear solicitud:', error);
    return NextResponse.json({ 
      error: 'Error al procesar la solicitud. Inténtalo de nuevo más tarde.' 
    }, { status: 500 });
  }
}