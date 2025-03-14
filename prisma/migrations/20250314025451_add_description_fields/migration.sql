/*
  Warnings:

  - Added the required column `responsable` to the `CentroDistribucion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CentroDistribucion" ADD COLUMN     "descripcion" TEXT,
ADD COLUMN     "responsable" TEXT NOT NULL,
ADD COLUMN     "telefono" TEXT;

-- AlterTable
ALTER TABLE "PeticionDonacion" ADD COLUMN     "descripcion" TEXT;

-- AlterTable
ALTER TABLE "Solicitud" ADD COLUMN     "descripcion" TEXT;

-- CreateTable
CREATE TABLE "SolicitudCentro" (
    "id" SERIAL NOT NULL,
    "direccion" TEXT NOT NULL,
    "responsable" TEXT NOT NULL,
    "telefono" TEXT,
    "horarioApertura" TEXT,
    "horarioCierre" TEXT,
    "latitud" DOUBLE PRECISION NOT NULL,
    "longitud" DOUBLE PRECISION NOT NULL,
    "descripcion" TEXT,
    "estado" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SolicitudCentro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArticuloSolicitado" (
    "id" SERIAL NOT NULL,
    "solicitudCentroId" INTEGER NOT NULL,
    "tipoArticuloId" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,

    CONSTRAINT "ArticuloSolicitado_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ArticuloSolicitado" ADD CONSTRAINT "ArticuloSolicitado_solicitudCentroId_fkey" FOREIGN KEY ("solicitudCentroId") REFERENCES "SolicitudCentro"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticuloSolicitado" ADD CONSTRAINT "ArticuloSolicitado_tipoArticuloId_fkey" FOREIGN KEY ("tipoArticuloId") REFERENCES "TipoArticulo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
