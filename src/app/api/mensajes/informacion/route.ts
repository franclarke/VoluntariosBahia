import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Configuración para las rutas de API
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// POST /api/mensajes/informacion
// Guarda nueva información útil
export async function POST(request: NextRequest) {
  try {
    const { nombre, email, telefono, direccion, horario, descripcion } = await request.json();

    // Validar campos obligatorios
    if (!nombre || !telefono) {
      return NextResponse.json({ 
        error: 'Faltan campos obligatorios (nombre y teléfono son requeridos)' 
      }, { status: 400 });
    }

    // Crear la información útil en la base de datos
    const nuevaInfo = await prisma.informacionUtil.create({
      data: {
        nombre,
        email,
        telefono,
        direccion,
        horario,
        descripcion,
        leido: false
      }
    });

    return NextResponse.json({ 
      mensaje: 'Información enviada correctamente', 
      infoId: nuevaInfo.id 
    });
  } catch (error) {
    console.error('Error al guardar información útil:', error);
    return NextResponse.json({ 
      error: 'Error al procesar la información. Inténtalo de nuevo más tarde.' 
    }, { status: 500 });
  }
} 