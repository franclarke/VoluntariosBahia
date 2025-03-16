/*
  Warnings:

  - You are about to drop the column `centroDistribucionId` on the `ArticuloOferta` table. All the data in the column will be lost.
  - You are about to drop the `CentroDistribucion` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[puntoDonacionId,tipoArticuloId]` on the table `ArticuloOferta` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `puntoDonacionId` to the `ArticuloOferta` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ArticuloOferta" DROP CONSTRAINT "ArticuloOferta_centroDistribucionId_fkey";

-- DropIndex
DROP INDEX "ArticuloOferta_centroDistribucionId_tipoArticuloId_key";

-- AlterTable
ALTER TABLE "ArticuloOferta" DROP COLUMN "centroDistribucionId",
ADD COLUMN     "puntoDonacionId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "CentroDistribucion";

-- CreateTable
CREATE TABLE "PuntoDonacion" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "direccion" TEXT NOT NULL,
    "responsable" TEXT NOT NULL,
    "telefono" TEXT,
    "latitud" DOUBLE PRECISION NOT NULL,
    "longitud" DOUBLE PRECISION NOT NULL,
    "horarioApertura" TEXT,
    "horarioCierre" TEXT,
    "descripcion" TEXT,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PuntoDonacion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ArticuloOferta_puntoDonacionId_tipoArticuloId_key" ON "ArticuloOferta"("puntoDonacionId", "tipoArticuloId");

-- AddForeignKey
ALTER TABLE "ArticuloOferta" ADD CONSTRAINT "ArticuloOferta_puntoDonacionId_fkey" FOREIGN KEY ("puntoDonacionId") REFERENCES "PuntoDonacion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
