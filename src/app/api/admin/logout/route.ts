import { NextResponse } from "next/server";

// POST /api/admin/logout
// Cerrar sesión de administrador
export async function POST() {
  try {
    // Crear respuesta
    const response = NextResponse.json({
      success: true,
      message: "Sesión cerrada correctamente"
    });
    
    // Eliminar cookie de token
    response.cookies.set({
      name: "admin_token",
      value: "",
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 0, // Expirar inmediatamente
      sameSite: "strict"
    });
    
    return response;
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    return NextResponse.json(
      { error: "Error al cerrar sesión" },
      { status: 500 }
    );
  }
} 