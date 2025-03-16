import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Configuración para las rutas de API
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// POST /api/mensajes/contacto
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

    // Crear el mensaje de contacto en la base de datos
    const nuevoMensaje = await prisma.mensajeContacto.create({
      data: {
        nombre,
        email,
        telefono,
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