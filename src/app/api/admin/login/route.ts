import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "voluntarios-bahia-secret-key";

// POST /api/admin/login
// Autenticar un administrador
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validar campos requeridos
    if (!body.email || !body.password) {
      return NextResponse.json(
        { error: "Usuario y contraseña son requeridos" },
        { status: 400 }
      );
    }
    
    // Buscar el administrador por email (ahora usado como nombre de usuario)
    const admin = await prisma.administrador.findUnique({
      where: { email: body.email }
    });
    
    // Si no existe o la contraseña no coincide
    if (!admin) {
      return NextResponse.json(
        { error: "Credenciales inválidas" },
        { status: 401 }
      );
    }
    
    // Verificar la contraseña
    const passwordMatch = await compare(body.password, admin.password);
    if (!passwordMatch) {
      return NextResponse.json(
        { error: "Credenciales inválidas" },
        { status: 401 }
      );
    }
    
    // Generar token JWT
    const token = sign(
      { 
        id: admin.id,
        email: admin.email,
        role: "admin"
      },
      JWT_SECRET,
      { expiresIn: "8h" }
    );
    
    // Crear respuesta con token
    const response = NextResponse.json({
      success: true,
      admin: {
        id: admin.id,
        email: admin.email,
        nombre: admin.nombre
      }
    });
    
    // Guardar token en cookie
    response.cookies.set({
      name: "admin_token",
      value: token,
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 8, // 8 horas
      sameSite: "strict"
    });
    
    return response;
  } catch (error) {
    console.error("Error en login de administrador:", error);
    return NextResponse.json(
      { error: "Error en autenticación" },
      { status: 500 }
    );
  }
}