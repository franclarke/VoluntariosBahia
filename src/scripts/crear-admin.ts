import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  try {
    // Datos del administrador
    const email = "Francisco";
    const password = "Sportiva34";
    const nombre = "Francisco";

    // Verificar si ya existe un administrador con ese email
    const adminExistente = await prisma.administrador.findUnique({
      where: { email }
    });

    if (adminExistente) {
      console.log(`El administrador con usuario ${email} ya existe.`);
      return;
    }

    // Hashear la contraseña
    const hashedPassword = await hash(password, 10);

    // Crear el administrador
    const admin = await prisma.administrador.create({
      data: {
        email,
        password: hashedPassword,
        nombre
      }
    });

    console.log(`Administrador creado con éxito: ${admin.nombre} (${admin.email})`);
  } catch (error) {
    console.error("Error al crear administrador:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main(); 