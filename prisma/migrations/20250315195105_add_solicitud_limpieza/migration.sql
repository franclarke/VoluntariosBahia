-- CreateTable
CREATE TABLE "SolicitudLimpieza" (
    "id" SERIAL NOT NULL,
    "direccion" TEXT NOT NULL,
    "contactoNombre" TEXT NOT NULL,
    "contactoTel" TEXT NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'Pendiente',
    "latitud" DOUBLE PRECISION NOT NULL,
    "longitud" DOUBLE PRECISION NOT NULL,
    "descripcion" TEXT,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SolicitudLimpieza_pkey" PRIMARY KEY ("id")
);
