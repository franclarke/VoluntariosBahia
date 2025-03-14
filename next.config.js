/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurar paquetes externos para componentes del servidor
  experimental: {
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
  // Deshabilitar la minificación para evitar problemas con caracteres Unicode
  swcMinify: false
};

module.exports = nextConfig; 