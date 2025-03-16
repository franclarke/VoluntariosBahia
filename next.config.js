/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurar paquetes externos para componentes del servidor
  experimental: {
    // Usar la nueva configuración para Next.js 15
    serverActions: {
      allowedOrigins: ["localhost:3000"],
    },
    // Mantener los paquetes externos necesarios
    serverComponentsExternalPackages: ["bcrypt", "jsonwebtoken"]
  },
  
  // Ignorar las advertencias de ESLint durante la compilación
  eslint: {
    ignoreDuringBuilds: true
  },
  // Ignorar los errores de TypeScript durante la compilación
  typescript: {
    ignoreBuildErrors: true
  },
  // Habilitar la minificación para mejorar el rendimiento
  swcMinify: true
};

module.exports = nextConfig; 