-- CreateTable
CREATE TABLE "Solicitud" (
    "id" SERIAL NOT NULL,
    "direccion" TEXT NOT NULL,
    "tipoArticulo" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "contactoNombre" TEXT NOT NULL,
    "contactoTel" TEXT NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'Pendiente',
    "latitud" DOUBLE PRECISION NOT NULL,
    "longitud" DOUBLE PRECISION NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Solicitud_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Oferta" (
    "id" SERIAL NOT NULL,
    "direccion" TEXT NOT NULL,
    "tipoArticulo" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "latitud" DOUBLE PRECISION NOT NULL,
    "longitud" DOUBLE PRECISION NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Oferta_pkey" PRIMARY KEY ("id")
);
