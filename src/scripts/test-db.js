const prisma = new PrismaClient();

async function main() {
  try {
    // Intentar obtener un tipo de artículo
    const tiposArticulos = await prisma.tipoArticulo.findMany({
      take: 1
    });
    
    console.log('Conexión exitosa a la base de datos');
    console.log('Tipos de artículos encontrados:', tiposArticulos.length);
    
    // Crear un tipo de artículo de prueba
    if (tiposArticulos.length === 0) {
      const tipoArticulo = await prisma.tipoArticulo.create({
        data: {
          nombre: 'Artículo de prueba'
        }
      });
      console.log('Tipo de artículo creado:', tipoArticulo);
    }
    
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main(); 