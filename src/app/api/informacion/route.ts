import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Configuración para las rutas de API
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// GET /api/informacion
// Obtiene toda la información útil
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const leido = url.searchParams.get("leido");
    
    // Construir el filtro para la consulta
    const where: Record<string, boolean | undefined> = {};
    if (leido === "true") {
      where.leido = true;
    } else if (leido === "false") {
      where.leido = false;
    }
    
    // Consulta para obtener información útil
    const informacion = await prisma.informacionUtil.findMany({
      where,
      orderBy: {
        creadoEn: "desc"
      }
    });
    
    return NextResponse.json(informacion);
  } catch (error) {
    console.error("Error al obtener información útil:", error);
    return NextResponse.json(
      { error: "Error al obtener información útil" },
      { status: 500 }
    );
  }
}

// POST /api/informacion
// Crea una nueva entrada de información útil
export async function POST(request: NextRequest) {
  try {
    const { nombre, email, telefono, direccion, horario, descripcion } = await request.json();

    // Validar campos obligatorios
    if (!nombre || !telefono) {
      return NextResponse.json({ 
        error: 'Faltan campos obligatorios (nombre y teléfono son requeridos)' 
      }, { status: 400 });
    }

    // Crear la información en la base de datos
    const nuevaInformacion = await prisma.informacionUtil.create({
      data: {
        nombre,
        email: email || null,
        telefono,
        direccion: direccion || null,
        horario: horario || null,
        descripcion: descripcion || null,
        leido: false
      }
    });

    return NextResponse.json({ 
      mensaje: 'Información enviada correctamente', 
      informacionId: nuevaInformacion.id 
    });
  } catch (error) {
    console.error('Error al crear información útil:', error);
    return NextResponse.json({ 
      error: 'Error al procesar la información. Inténtalo de nuevo más tarde.' 
    }, { status: 500 });
  }
}

// PUT /api/informacion/:id
// Marca una información como leída o no leída
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = parseInt(params.id);
    const { leido } = await request.json();
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: "ID de información inválido" },
        { status: 400 }
      );
    }
    
    const informacion = await prisma.informacionUtil.update({
      where: { id },
      data: { leido }
    });
    
    return NextResponse.json(informacion);
  } catch (error) {
    console.error("Error al actualizar información útil:", error);
    return NextResponse.json(
      { error: "Error al actualizar información útil" },
      { status: 500 }
    );
  }
} 