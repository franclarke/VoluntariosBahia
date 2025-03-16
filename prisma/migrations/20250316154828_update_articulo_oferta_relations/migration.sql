-- This is an empty migration.

-- Primero eliminamos las restricciones de clave externa existentes
ALTER TABLE "ArticuloOferta" DROP CONSTRAINT IF EXISTS "ArticuloOferta_tipoArticuloId_fkey";
ALTER TABLE "ArticuloOferta" DROP CONSTRAINT IF EXISTS "ArticuloOferta_tipoArticuloPersonalizadoOfertaId_fkey";

-- Luego volvemos a crear las restricciones con onDelete: SetNull
ALTER TABLE "ArticuloOferta" ADD CONSTRAINT "ArticuloOferta_tipoArticuloId_fkey" 
FOREIGN KEY ("tipoArticuloId") REFERENCES "TipoArticulo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "ArticuloOferta" ADD CONSTRAINT "ArticuloOferta_tipoArticuloPersonalizadoOfertaId_fkey" 
FOREIGN KEY ("tipoArticuloPersonalizadoOfertaId") REFERENCES "TipoArticuloPersonalizadoOferta"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Modificar la columna tipoArticuloId para permitir valores NULL
ALTER TABLE "ArticuloOferta" ALTER COLUMN "tipoArticuloId" DROP NOT NULL;