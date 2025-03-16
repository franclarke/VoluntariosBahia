import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Configuración para las rutas de API
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// GET /api/contacto
// Obtiene todos los mensajes de contacto
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
    
    // Consulta para obtener mensajes de contacto
    const mensajes = await prisma.mensajeContacto.findMany({
      where,
      orderBy: {
        creadoEn: "desc"
      }
    });
    
    return NextResponse.json(mensajes);
  } catch (error) {
    console.error("Error al obtener mensajes de contacto:", error);
    return NextResponse.json(
      { error: "Error al obtener mensajes de contacto" },
      { status: 500 }
    );
  }
}

// POST /api/contacto
// Crea un nuevo mensaje de contacto
export async function POST(request: NextRequest) {
  try {
    const { nombre, email, telefono, mensaje } = await request.json();

    // Validar campos obligatorios
    if (!nombre || !mensaje) {
      return NextResponse.json({ 
        error: 'Faltan campos obligatorios (nombre y mensaje son requeridos)' 
      }, { status: 400 });
    }

    // Crear el mensaje en la base de datos
    const nuevoMensaje = await prisma.mensajeContacto.create({
      data: {
        nombre,
        email: email || null,
        telefono: telefono || null,
        mensaje,
        leido: false
      }
    });

    return NextResponse.json({ 
      mensaje: 'Mensaje enviado correctamente', 
      mensajeId: nuevoMensaje.id 
    });
  } catch (error) {
    console.error('Error al crear mensaje de contacto:', error);
    return NextResponse.json({ 
      error: 'Error al procesar el mensaje. Inténtalo de nuevo más tarde.' 
    }, { status: 500 });
  }
}

// PUT /api/contacto/:id
// Marca un mensaje como leído o no leído
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = parseInt(params.id);
    const { leido } = await request.json();
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: "ID de mensaje inválido" },
        { status: 400 }
      );
    }
    
    const mensaje = await prisma.mensajeContacto.update({
      where: { id },
      data: { leido }
    });
    
    return NextResponse.json(mensaje);
  } catch (error) {
    console.error("Error al actualizar mensaje de contacto:", error);
    return NextResponse.json(
      { error: "Error al actualizar mensaje de contacto" },
      { status: 500 }
    );
  }
} 