import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Configuración para las rutas de API
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// GET /api/puntos-donacion
// Obtiene todos los puntos de donación
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const soloActivos = url.searchParams.get("soloActivos") === "true";
    const incluirPendientes = url.searchParams.get("incluirPendientes") === "true";
    
    console.log("GET /api/puntos-donacion - Parámetros:", {
      soloActivos,
      incluirPendientes
    });
    
    // Construir el filtro para la consulta
    const where: {
      activo?: boolean;
    } = {};
    
    if (soloActivos) {
      where.activo = true;
    } else if (incluirPendientes) {
      // No aplicar filtro de activo para incluir todos
    } else {
      // Por defecto, solo mostrar puntos activos
      where.activo = true;
    }
    
    console.log("Filtro de consulta:", JSON.stringify(where, null, 2));

    // Consulta para obtener puntos de donación
    const puntos = await prisma.puntoDonacion.findMany({
      where,
      include: {
        articulos: {
          include: {
            tipoArticulo: true,
            tipoArticuloPersonalizadoOferta: true
          }
        }
      },
      orderBy: {
        direccion: "asc"
      }
    });

    // Formatear los puntos para incluir información de artículos personalizados
    const puntosFormateados = puntos.map(punto => {
      const articulosFormateados = punto.articulos.map(articulo => {
        // Determinar el nombre y el ID del tipo de artículo (estándar o personalizado)
        const tipoArticuloNombre = articulo.tipoArticulo?.nombre ?? 
                                  articulo.tipoArticuloPersonalizadoOferta?.nombre ?? 
                                  "Desconocido";
        
        const tipoArticuloId = articulo.tipoArticulo?.id ?? 
                              articulo.tipoArticuloPersonalizadoOferta?.id ?? 
                              0;
        
        // Crear un objeto con la estructura esperada por el frontend
        return {
          ...articulo,
          tipoArticulo: {
            id: tipoArticuloId,
            nombre: tipoArticuloNombre
          }
        };
      });
      
      return {
        ...punto,
        articulos: articulosFormateados
      };
    });

    console.log(`Puntos de donación encontrados: ${puntos.length}`);
    return NextResponse.json(puntosFormateados);
  } catch (error) {
    console.error("Error al obtener puntos de donación:", error);
    return NextResponse.json(
      { error: "Error al obtener puntos de donación" },
      { status: 500 }
    );
  }
}

// POST /api/puntos-donacion
// Crea un nuevo punto de donación (solo para administradores)
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
    
    // Crear el punto de donación
    const punto = await prisma.puntoDonacion.create({
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
    
    // Si el nombre se proporcionó, actualizarlo
    if (body.nombre) {
      await prisma.puntoDonacion.update({
        where: { id: punto.id },
        data: { nombre: body.nombre }
      });
    }
    
    return NextResponse.json(punto, { status: 201 });
  } catch (error) {
    console.error("Error al crear punto de donación:", error);
    return NextResponse.json(
      { error: "Error al crear punto de donación" },
      { status: 500 }
    );
  }
} 