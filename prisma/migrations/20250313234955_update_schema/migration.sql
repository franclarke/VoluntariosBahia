/*
  Warnings:

  - You are about to drop the column `cantidad` on the `Solicitud` table. All the data in the column will be lost.
  - You are about to drop the column `tipoArticulo` on the `Solicitud` table. All the data in the column will be lost.
  - You are about to drop the `Oferta` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `actualizadoEn` to the `Solicitud` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Solicitud" DROP COLUMN "cantidad",
DROP COLUMN "tipoArticulo",
ADD COLUMN     "actualizadoEn" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "Oferta";

-- CreateTable
CREATE TABLE "TipoArticulo" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TipoArticulo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CentroDistribucion" (
    "id" SERIAL NOT NULL,
    "direccion" TEXT NOT NULL,
    "latitud" DOUBLE PRECISION NOT NULL,
    "longitud" DOUBLE PRECISION NOT NULL,
    "horarioApertura" TEXT,
    "horarioCierre" TEXT,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CentroDistribucion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArticuloOferta" (
    "id" SERIAL NOT NULL,
    "centroDistribucionId" INTEGER NOT NULL,
    "tipoArticuloId" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'Disponible',
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ArticuloOferta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArticuloSolicitud" (
    "id" SERIAL NOT NULL,
    "solicitudId" INTEGER NOT NULL,
    "tipoArticuloId" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ArticuloSolicitud_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PeticionDonacion" (
    "id" SERIAL NOT NULL,
    "direccion" TEXT NOT NULL,
    "contactoNombre" TEXT NOT NULL,
    "contactoTel" TEXT NOT NULL,
    "latitud" DOUBLE PRECISION,
    "longitud" DOUBLE PRECISION,
    "estado" TEXT NOT NULL DEFAULT 'Pendiente',
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PeticionDonacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArticuloPeticion" (
    "id" SERIAL NOT NULL,
    "peticionDonacionId" INTEGER NOT NULL,
    "tipoArticuloId" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ArticuloPeticion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Administrador" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nombre" TEXT,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Administrador_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TipoArticulo_nombre_key" ON "TipoArticulo"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "ArticuloOferta_centroDistribucionId_tipoArticuloId_key" ON "ArticuloOferta"("centroDistribucionId", "tipoArticuloId");

-- CreateIndex
CREATE UNIQUE INDEX "ArticuloSolicitud_solicitudId_tipoArticuloId_key" ON "ArticuloSolicitud"("solicitudId", "tipoArticuloId");

-- CreateIndex
CREATE UNIQUE INDEX "ArticuloPeticion_peticionDonacionId_tipoArticuloId_key" ON "ArticuloPeticion"("peticionDonacionId", "tipoArticuloId");

-- CreateIndex
CREATE UNIQUE INDEX "Administrador_email_key" ON "Administrador"("email");

-- AddForeignKey
ALTER TABLE "ArticuloOferta" ADD CONSTRAINT "ArticuloOferta_centroDistribucionId_fkey" FOREIGN KEY ("centroDistribucionId") REFERENCES "CentroDistribucion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticuloOferta" ADD CONSTRAINT "ArticuloOferta_tipoArticuloId_fkey" FOREIGN KEY ("tipoArticuloId") REFERENCES "TipoArticulo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticuloSolicitud" ADD CONSTRAINT "ArticuloSolicitud_solicitudId_fkey" FOREIGN KEY ("solicitudId") REFERENCES "Solicitud"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticuloSolicitud" ADD CONSTRAINT "ArticuloSolicitud_tipoArticuloId_fkey" FOREIGN KEY ("tipoArticuloId") REFERENCES "TipoArticulo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticuloPeticion" ADD CONSTRAINT "ArticuloPeticion_peticionDonacionId_fkey" FOREIGN KEY ("peticionDonacionId") REFERENCES "PeticionDonacion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticuloPeticion" ADD CONSTRAINT "ArticuloPeticion_tipoArticuloId_fkey" FOREIGN KEY ("tipoArticuloId") REFERENCES "TipoArticulo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
