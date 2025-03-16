import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Configuración para las rutas de API
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// GET /api/mensajes
// Obtiene todos los mensajes (solo para administradores)
export async function GET(request: NextRequest) {
  try {
    // Verificar si el usuario está autenticado como administrador
    const token = request.cookies.get("admin_token")?.value;
    
    if (!token) {
      return NextResponse.json(
        { error: "No autorizado" },
        { status: 401 }
      );
    }

    const url = new URL(request.url);
    const leido = url.searchParams.get("leido");
    // Construir el filtro para la consulta
    const where: Record<string, boolean | undefined> = {};
    if (leido === "true") {
      where.leido = true;
    } else if (leido === "false") {
      where.leido = false;
    }
    
    // Consulta para obtener mensajes
    const mensajes = await prisma.mensaje.findMany({
      where,
      orderBy: {
        creadoEn: "desc"
      }
    });
    
    return NextResponse.json(mensajes);
  } catch (error) {
    console.error("Error al obtener mensajes:", error);
    return NextResponse.json(
      { error: "Error al obtener mensajes" },
      { status: 500 }
    );
  }
}

// POST /api/mensajes
// Crea un nuevo mensaje desde el formulario de información útil
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
    const nuevoMensaje = await prisma.mensaje.create({
      data: {
        nombre,
        email: email || "no-email@ejemplo.com", // Valor por defecto si no se proporciona email
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
    console.error('Error al crear mensaje:', error);
    return NextResponse.json({ 
      error: 'Error al procesar el mensaje. Inténtalo de nuevo más tarde.' 
    }, { status: 500 });
  }
} 