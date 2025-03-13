import { NextRequest, NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "voluntarios-bahia-secret-key";

// Rutas que requieren autenticación de administrador
const ADMIN_ROUTES = [
  "/admin",
  "/api/admin/peticiones",
  "/api/tipos-articulos/crear",
  "/api/centros-distribucion/crear"
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Verificar si la ruta requiere autenticación de administrador
  const requiresAuth = ADMIN_ROUTES.some(route => pathname.startsWith(route));
  
  if (!requiresAuth) {
    return NextResponse.next();
  }
  
  // Obtener token de la cookie
  const token = request.cookies.get("admin_token")?.value;
  
  if (!token) {
    // Si es una ruta de API, devolver error 401
    if (pathname.startsWith("/api/")) {
      return NextResponse.json(
        { error: "No autorizado" },
        { status: 401 }
      );
    }
    
    // Si es una ruta de página, redirigir al login
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
  
  try {
    // Verificar token
    verify(token, JWT_SECRET);
    return NextResponse.next();
  } catch (error) {
    // Token inválido
    if (pathname.startsWith("/api/")) {
      return NextResponse.json(
        { error: "No autorizado" },
        { status: 401 }
      );
    }
    
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/admin/:path*",
    "/api/tipos-articulos/crear",
    "/api/centros-distribucion/crear"
  ]
}; 