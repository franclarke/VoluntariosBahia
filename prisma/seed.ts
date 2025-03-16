import { PrismaClient } from './generated/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando la carga de datos de prueba...');

  // Crear tipos de artículos
  const tiposArticulos = [
    { nombre: 'Agua' },
    { nombre: 'Alimentos no perecederos' },
    { nombre: 'Ropa' },
    { nombre: 'Artículos de limpieza' },
    { nombre: 'Medicamentos' },
    { nombre: 'Pañales' },
    { nombre: 'Colchones' },
    { nombre: 'Frazadas' },
  ];

  for (const tipo of tiposArticulos) {
    await prisma.tipoArticulo.upsert({
      where: { nombre: tipo.nombre },
      update: {},
      create: tipo,
    });
  }
  console.log('Tipos de artículos creados');

  // Crear puntos de donación
  const puntosDonacion = [
    {
      nombre: 'Centro Comunitario Norte',
      direccion: 'Av. Alem 1200, Bahía Blanca',
      responsable: 'Juan Pérez',
      telefono: '291-4567890',
      latitud: -38.7056,
      longitud: -62.2615,
      horarioApertura: '09:00',
      horarioCierre: '18:00',
      descripcion: 'Centro de donaciones en la zona norte de la ciudad',
      activo: true,
    },
    {
      nombre: 'Parroquia San Roque',
      direccion: 'Sarmiento 350, Bahía Blanca',
      responsable: 'María González',
      telefono: '291-4123456',
      latitud: -38.7196,
      longitud: -62.2724,
      horarioApertura: '10:00',
      horarioCierre: '17:00',
      descripcion: 'Parroquia que recibe donaciones para familias necesitadas',
      activo: true,
    },
  ];

  for (const punto of puntosDonacion) {
    await prisma.puntoDonacion.create({
      data: punto,
    });
  }
  console.log('Puntos de donación creados');

  // Crear solicitudes de donación
  const solicitudes = [
    {
      direccion: 'Belgrano 150, Bahía Blanca',
      contactoNombre: 'Carlos Rodríguez',
      contactoTel: '291-5551234',
      estado: 'Pendiente',
      latitud: -38.7156,
      longitud: -62.2654,
      descripcion: 'Familia con 3 niños necesita ayuda urgente',
      articulos: {
        create: [
          {
            tipoArticulo: {
              connect: { nombre: 'Agua' },
            },
            cantidad: 10,
          },
          {
            tipoArticulo: {
              connect: { nombre: 'Alimentos no perecederos' },
            },
            cantidad: 5,
          },
        ],
      },
    },
    {
      direccion: 'Dorrego 500, Bahía Blanca',
      contactoNombre: 'Laura Martínez',
      contactoTel: '291-5559876',
      estado: 'Pendiente',
      latitud: -38.7256,
      longitud: -62.2554,
      descripcion: 'Persona mayor que necesita medicamentos y alimentos',
      articulos: {
        create: [
          {
            tipoArticulo: {
              connect: { nombre: 'Medicamentos' },
            },
            cantidad: 3,
          },
          {
            tipoArticulo: {
              connect: { nombre: 'Alimentos no perecederos' },
            },
            cantidad: 2,
          },
        ],
      },
    },
  ];

  for (const solicitud of solicitudes) {
    await prisma.solicitud.create({
      data: solicitud,
    });
  }
  console.log('Solicitudes de donación creadas');

  // Crear solicitudes de limpieza
  const solicitudesLimpieza = [
    {
      direccion: 'Mitre 800, Bahía Blanca',
      contactoNombre: 'Roberto Gómez',
      contactoTel: '291-5557777',
      estado: 'Pendiente',
      latitud: -38.7186,
      longitud: -62.2684,
      descripcion: 'Casa inundada que necesita limpieza urgente',
    },
    {
      direccion: 'Brown 450, Bahía Blanca',
      contactoNombre: 'Silvia López',
      contactoTel: '291-5558888',
      estado: 'Pendiente',
      latitud: -38.7226,
      longitud: -62.2624,
      descripcion: 'Necesita ayuda para limpiar patio después de la tormenta',
    },
  ];

  for (const solicitud of solicitudesLimpieza) {
    await prisma.solicitudLimpieza.create({
      data: solicitud,
    });
  }
  console.log('Solicitudes de limpieza creadas');

  // Crear mensajes de contacto
  const mensajesContacto = [
    {
      nombre: 'Pedro Sánchez',
      email: 'pedro@ejemplo.com',
      telefono: '291-5551111',
      mensaje: 'Me gustaría ofrecer mi ayuda como voluntario',
      leido: false,
    },
    {
      nombre: 'Ana García',
      email: 'ana@ejemplo.com',
      telefono: '291-5552222',
      mensaje: 'Tengo una consulta sobre cómo donar ropa',
      leido: false,
    },
  ];

  for (const mensaje of mensajesContacto) {
    await prisma.mensajeContacto.create({
      data: mensaje,
    });
  }
  console.log('Mensajes de contacto creados');

  // Crear información útil
  const informacionUtil = [
    {
      nombre: 'Centro de Salud Municipal',
      email: 'salud@bahiablanca.gob.ar',
      telefono: '291-4590000',
      direccion: 'Av. Colón 800, Bahía Blanca',
      horario: 'Lunes a Viernes de 8:00 a 20:00',
      descripcion: 'Centro de atención médica gratuita',
      leido: false,
    },
    {
      nombre: 'Defensa Civil',
      email: 'defensacivil@bahiablanca.gob.ar',
      telefono: '291-4591111',
      direccion: 'Chiclana 375, Bahía Blanca',
      horario: '24 horas',
      descripcion: 'Atención de emergencias y coordinación de operativos de rescate',
      leido: false,
    },
  ];

  for (const info of informacionUtil) {
    await prisma.informacionUtil.create({
      data: info,
    });
  }
  console.log('Información útil creada');

  console.log('Datos de prueba cargados correctamente');
}

main()
  .catch((e) => {
    console.error('Error al cargar datos de prueba:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 