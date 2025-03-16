import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Configuración para las rutas de API
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// POST /api/solicitudes-centro
// Registra una nueva solicitud de punto de donación
export async function POST(request: NextRequest) {
  try {
    const { 
      nombre, 
      direccion, 
      responsable, 
      telefono, 
      horarioApertura, 
      horarioCierre, 
      descripcion, 
      latitud, 
      longitud,
      articulos 
    } = await request.json();

    // Validar campos obligatorios
    if (!direccion || !responsable || !telefono || !latitud || !longitud) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    // Crear el punto de donación en la base de datos (como ACTIVO)
    const nuevoPunto = await prisma.puntoDonacion.create({
      data: {
        nombre: nombre || null,
        direccion,
        responsable,
        telefono,
        latitud,
        longitud,
        horarioApertura: horarioApertura || null,
        horarioCierre: horarioCierre || null,
        descripcion: descripcion || null,
        activo: true // El punto se crea como ACTIVO para que aparezca inmediatamente en el mapa
      }
    });

    // Si hay artículos para agregar al punto de donación
    if (articulos && articulos.length > 0) {
      for (const articulo of articulos) {
        if (articulo.tipoArticuloId && articulo.cantidad) {
          await prisma.articuloOferta.create({
            data: {
              puntoDonacionId: nuevoPunto.id,
              tipoArticuloId: articulo.tipoArticuloId,
              cantidad: articulo.cantidad,
              estado: "Disponible"
            }
          });
        }
      }
    }

    console.log("Punto de donación registrado:", nuevoPunto);

    return NextResponse.json(
      { 
        mensaje: "Solicitud de punto de donación registrada correctamente", 
        id: nuevoPunto.id 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error al registrar punto de donación:", error);
    return NextResponse.json(
      { error: "Error al procesar la solicitud de punto de donación" },
      { status: 500 }
    );
  }
} 