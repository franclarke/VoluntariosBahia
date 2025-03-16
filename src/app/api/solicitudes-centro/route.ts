import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Configuración para las rutas de API
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

interface ArticuloSolicitado {
  tipoArticuloId: number;
  cantidad: number;
  tipoPersonalizado?: string;
}

// GET /api/solicitudes-centro
// Obtiene todos los puntos de donación pendientes de aprobación (inactivos)
export async function GET() {
  try {
    console.log("Obteniendo puntos de donación pendientes de aprobación...");
    
    // Consulta para obtener puntos de donación inactivos
    const puntosPendientes = await prisma.puntoDonacion.findMany({
      where: {
        activo: false
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

    console.log(`Puntos de donación pendientes encontrados: ${puntosPendientes.length}`);
    return NextResponse.json(puntosPendientes);
  } catch (error) {
    console.error("Error al obtener puntos de donación pendientes:", error);
    return NextResponse.json(
      { error: "Error al obtener solicitudes pendientes" },
      { status: 500 }
    );
  }
}

// POST /api/solicitudes-centro
// Crea una nueva solicitud de punto de donación directamente en la tabla PuntoDonacion
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
    
    console.log("Creando solicitud de punto de donación:", {
      direccion: body.direccion,
      responsable: body.responsable
    });
    
    const puntoDonacion = await prisma.$transaction(async (tx) => {
      const nuevoPunto = await tx.puntoDonacion.create({
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
          activo: true
        }
      });
      
      console.log("Punto de donación creado (pendiente de aprobación):", nuevoPunto);
      
      // Crear los artículos para el punto de donación
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
        
        // Crear el artículo oferta
        await tx.articuloOferta.create({
          data: {
            puntoDonacionId: nuevoPunto.id,
            tipoArticuloId: tipoArticuloId,
            cantidad: articulo.cantidad,
            estado: "Pendiente" // Estado pendiente hasta que sea aprobado
          }
        });
      }
      
      return nuevoPunto;
    });
    
    return NextResponse.json(puntoDonacion, { status: 201 });
  } catch (error) {
    console.error("Error al crear solicitud de punto de donación:", error);
    return NextResponse.json(
      { error: "Error al crear solicitud" },
      { status: 500 }
    );
  }
} 