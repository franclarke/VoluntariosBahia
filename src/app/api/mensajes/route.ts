import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Configuración para las rutas de API
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// GET /api/mensajes
// Obtiene mensajes públicos (contadores o información básica)
export async function GET() {
  try {
    // Contar mensajes por tipo y estado
    const [totalMensajes, totalMensajesContacto, totalInformacionUtil] = await Promise.all([
      prisma.mensaje.count(),
      prisma.mensajeContacto.count(),
      prisma.informacionUtil.count()
    ]);
    
    // Devolver solo información agregada, no los mensajes individuales
    return NextResponse.json({
      contadores: {
        mensaje: totalMensajes,
        mensajeContacto: totalMensajesContacto,
        informacionUtil: totalInformacionUtil
      }
    });
  } catch (error) {
    console.error("Error al obtener contadores de mensajes:", error);
    return NextResponse.json(
      { error: "Error al obtener información" },
      { status: 500 }
    );
  }
}

// POST /api/mensajes
// Crea un nuevo mensaje desde el formulario de contacto (legado)
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