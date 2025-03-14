// Configuración global para rutas de API que utilizan Prisma
// Esto evita problemas durante la compilación en Vercel

// Forzar que las rutas sean dinámicas (no se generan estáticamente durante la compilación)
export const dynamic = 'force-dynamic';

// Usar el runtime de Node.js para acceder a características como bcrypt y prisma
export const runtime = 'nodejs'; 