/*
  Warnings:

  - A unique constraint covering the columns `[puntoDonacionId,tipoArticuloPersonalizadoOfertaId]` on the table `ArticuloOferta` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "ArticuloOferta" DROP CONSTRAINT "ArticuloOferta_tipoArticuloId_fkey";

-- AlterTable
ALTER TABLE "ArticuloOferta" ADD COLUMN     "tipoArticuloPersonalizadoOfertaId" INTEGER,
ALTER COLUMN "tipoArticuloId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "TipoArticuloPersonalizadoOferta" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "puntoDonacionId" INTEGER NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TipoArticuloPersonalizadoOferta_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TipoArticuloPersonalizadoOferta_nombre_key" ON "TipoArticuloPersonalizadoOferta"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "ArticuloOferta_puntoDonacionId_tipoArticuloPersonalizadoOfe_key" ON "ArticuloOferta"("puntoDonacionId", "tipoArticuloPersonalizadoOfertaId");

-- AddForeignKey
ALTER TABLE "ArticuloOferta" ADD CONSTRAINT "ArticuloOferta_tipoArticuloId_fkey" FOREIGN KEY ("tipoArticuloId") REFERENCES "TipoArticulo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticuloOferta" ADD CONSTRAINT "ArticuloOferta_tipoArticuloPersonalizadoOfertaId_fkey" FOREIGN KEY ("tipoArticuloPersonalizadoOfertaId") REFERENCES "TipoArticuloPersonalizadoOferta"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TipoArticuloPersonalizadoOferta" ADD CONSTRAINT "TipoArticuloPersonalizadoOferta_puntoDonacionId_fkey" FOREIGN KEY ("puntoDonacionId") REFERENCES "PuntoDonacion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
