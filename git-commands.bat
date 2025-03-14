@echo off
REM Archivo batch para realizar comandos de Git

REM Añadir archivos modificados
git add package.json
git add vercel.json
git add .env.production

REM Hacer commit
git commit -m "Configurar Prisma para Vercel: añadir prisma generate al script de build"

REM Hacer push
git push origin main 