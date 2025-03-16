import { NextRequest, NextResponse } from "next/server";
// Eliminamos la importación de jsonwebtoken
// import { verify } from "jsonwebtoken";

// Rutas que requieren autenticación de administrador
const ADMIN_ROUTES = ['/admin'];

// Rutas excluidas de la autenticación
const EXCLUDED_ROUTES = [
  "/admin/login"
];

// Rutas antiguas que deben redirigirse a las nuevas
const REDIRECT_ROUTES = [
  { from: '/voluntario', to: '/' },
  { from: '/solicitar', to: '/donacion' },
  { from: '/solicitar-limpieza', to: '/limpieza' },
  { from: '/solicitar-centro', to: '/punto-donacion' }
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Verificar si es una ruta que debe redirigirse
  const redirectRoute = REDIRECT_ROUTES.find(route => pathname === route.from);
  if (redirectRoute) {
    const url = request.nextUrl.clone();
    url.pathname = redirectRoute.to;
    return NextResponse.redirect(url);
  }
  
  // Verificar si la ruta está excluida de la autenticación
  if (EXCLUDED_ROUTES.some(route => pathname === route)) {
    return NextResponse.next();
  }
  
  // Verificar si es una ruta de administrador
  if (ADMIN_ROUTES.some(route => pathname.startsWith(route))) {
    const token = request.cookies.get('admin_token')?.value;
    
    // Si no hay token, redirigir al login
    if (!token) {
      const url = request.nextUrl.clone();
      url.pathname = '/admin/login';
      return NextResponse.redirect(url);
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/voluntario",
    "/solicitar",
    "/solicitar-limpieza",
    "/solicitar-centro",
    "/donacion/:path*",
    "/limpieza/:path*",
    "/punto-donacion/:path*",
    "/"
  ]
}; 