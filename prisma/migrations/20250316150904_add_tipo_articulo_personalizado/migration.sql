/*
  Warnings:

  - A unique constraint covering the columns `[solicitudId,tipoArticuloPersonalizadoId]` on the table `ArticuloSolicitud` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "ArticuloSolicitud" DROP CONSTRAINT "ArticuloSolicitud_tipoArticuloId_fkey";

-- AlterTable
ALTER TABLE "ArticuloSolicitud" ADD COLUMN     "tipoArticuloPersonalizadoId" INTEGER,
ALTER COLUMN "tipoArticuloId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "TipoArticuloPersonalizado" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "solicitudId" INTEGER NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TipoArticuloPersonalizado_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TipoArticuloPersonalizado_nombre_key" ON "TipoArticuloPersonalizado"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "ArticuloSolicitud_solicitudId_tipoArticuloPersonalizadoId_key" ON "ArticuloSolicitud"("solicitudId", "tipoArticuloPersonalizadoId");

-- AddForeignKey
ALTER TABLE "ArticuloSolicitud" ADD CONSTRAINT "ArticuloSolicitud_tipoArticuloId_fkey" FOREIGN KEY ("tipoArticuloId") REFERENCES "TipoArticulo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticuloSolicitud" ADD CONSTRAINT "ArticuloSolicitud_tipoArticuloPersonalizadoId_fkey" FOREIGN KEY ("tipoArticuloPersonalizadoId") REFERENCES "TipoArticuloPersonalizado"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TipoArticuloPersonalizado" ADD CONSTRAINT "TipoArticuloPersonalizado_solicitudId_fkey" FOREIGN KEY ("solicitudId") REFERENCES "Solicitud"("id") ON DELETE CASCADE ON UPDATE CASCADE;
