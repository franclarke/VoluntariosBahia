import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hash } from "bcrypt";

// Configuración para evitar que esta ruta se ejecute durante la compilación
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// POST /api/admin/crear
// Crear un nuevo administrador
export async function POST(request: NextRequest) {
  try {
    // Verificar si la solicitud viene de localhost
    const host = request.headers.get("host") || "";
    if (!host.includes("localhost") && !host.includes("127.0.0.1")) {
      return NextResponse.json(
        { error: "Esta operación solo está permitida desde localhost" },
        { status: 403 }
      );
    }

    const body = await request.json();
    
    // Validar campos requeridos
    if (!body.email || !body.password || !body.nombre) {
      return NextResponse.json(
        { error: "Email, contraseña y nombre son requeridos" },
        { status: 400 }
      );
    }
    
    // Verificar si ya existe un administrador con ese email
    const adminExistente = await prisma.administrador.findUnique({
      where: { email: body.email }
    });
    
    if (adminExistente) {
      return NextResponse.json(
        { error: "Ya existe un administrador con ese email" },
        { status: 409 }
      );
    }
    
    // Hashear la contraseña
    const hashedPassword = await hash(body.password, 10);
    
    // Crear el administrador
    const admin = await prisma.administrador.create({
      data: {
        email: body.email,
        password: hashedPassword,
        nombre: body.nombre
      }
    });
    
    return NextResponse.json({
      success: true,
      admin: {
        id: admin.id,
        email: admin.email,
        nombre: admin.nombre
      }
    }, { status: 201 });
  } catch (error) {
    console.error("Error al crear administrador:", error);
    return NextResponse.json(
      { error: "Error al crear administrador" },
      { status: 500 }
    );
  }
} 