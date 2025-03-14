import { PrismaClient } from '@prisma/client';

// Declarar una variable global para el cliente de Prisma
declare global {
  var prisma: PrismaClient | undefined;
}

// Crear una instancia del cliente de Prisma
export const prisma = global.prisma || new PrismaClient();

// En desarrollo, guardar la instancia en la variable global para evitar múltiples instancias
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
} 