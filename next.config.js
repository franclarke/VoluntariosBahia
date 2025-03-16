/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para transpilación de paquetes externos
  transpilePackages: ["bcrypt", "jsonwebtoken"],
  
  // Ignorar las advertencias de ESLint durante la compilación
  eslint: {
    ignoreDuringBuilds: true
  },
  
  // Ignorar los errores de TypeScript durante la compilación
  typescript: {
    ignoreBuildErrors: true
  },
  
  // Habilitar la minificación para mejorar el rendimiento
  swcMinify: true,
  
  // Opciones para optimizar imágenes
  images: {
    domains: ["unpkg.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  
  // Configuración para la compilación en producción
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = nextConfig; 