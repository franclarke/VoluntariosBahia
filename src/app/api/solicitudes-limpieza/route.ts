import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Configuración para las rutas de API
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// GET /api/solicitudes-limpieza
// Obtiene todas las solicitudes de limpieza
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const estado = url.searchParams.get("estado");
    
    // Construir el filtro para la consulta
    const where: any = {};
    if (estado) {
      where.estado = estado;
    }
    
    // Consulta para obtener solicitudes de limpieza
    const solicitudes = await prisma.solicitudLimpieza.findMany({
      where,
      orderBy: {
        creadoEn: "desc"
      }
    });
    
    return NextResponse.json(solicitudes);
  } catch (error) {
    console.error("Error al obtener solicitudes de limpieza:", error);
    return NextResponse.json(
      { error: "Error al obtener solicitudes de limpieza" },
      { status: 500 }
    );
  }
}

// POST /api/solicitudes-limpieza
// Crea una nueva solicitud de limpieza
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validar campos requeridos
    if (!body.direccion || !body.contactoNombre || !body.contactoTel || !body.latitud || !body.longitud) {
      return NextResponse.json(
        { error: "Faltan campos requeridos: direccion, contactoNombre, contactoTel, latitud, longitud" },
        { status: 400 }
      );
    }
    
    // Crear la solicitud de limpieza
    const solicitud = await prisma.solicitudLimpieza.create({
      data: {
        direccion: body.direccion,
        contactoNombre: body.contactoNombre,
        contactoTel: body.contactoTel,
        latitud: parseFloat(body.latitud),
        longitud: parseFloat(body.longitud),
        descripcion: body.descripcion || null,
        estado: "Pendiente"
      }
    });
    
    return NextResponse.json(solicitud, { status: 201 });
  } catch (error) {
    console.error("Error al crear solicitud de limpieza:", error);
    return NextResponse.json(
      { error: "Error al crear solicitud de limpieza" },
      { status: 500 }
    );
  }
} 