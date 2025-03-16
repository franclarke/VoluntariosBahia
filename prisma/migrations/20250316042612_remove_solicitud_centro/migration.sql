/*
  Warnings:

  - You are about to drop the `ArticuloSolicitado` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SolicitudCentro` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ArticuloSolicitado" DROP CONSTRAINT "ArticuloSolicitado_solicitudCentroId_fkey";

-- DropForeignKey
ALTER TABLE "ArticuloSolicitado" DROP CONSTRAINT "ArticuloSolicitado_tipoArticuloId_fkey";

-- DropTable
DROP TABLE "ArticuloSolicitado";

-- DropTable
DROP TABLE "SolicitudCentro";
