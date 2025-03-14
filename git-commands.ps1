# Script de PowerShell para realizar comandos de Git

# Añadir archivos modificados
git add package.json
git add vercel.json
git add .env.production

# Hacer commit
git commit -m "Configurar Prisma para Vercel: añadir prisma generate al script de build"

# Hacer push
git push origin main 