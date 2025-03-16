"use client";

import React from 'react';
import dynamic from 'next/dynamic';

// Importar el componente de mapa de forma dinámica para evitar errores de SSR
const TestMapa = dynamic(() => import('@/components/test/TestMapa'), {
  ssr: false,
  loading: () => <div className="w-full h-[500px] bg-gray-100 animate-pulse rounded-lg"></div>
});

export default function TestMapaPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Prueba de Mapa con Marcadores</h1>
      <p className="mb-4">Esta página muestra un mapa de prueba con tres marcadores de diferentes colores para verificar que los iconos se muestran correctamente.</p>
      <div className="border rounded-lg overflow-hidden">
        <TestMapa />
      </div>
    </div>
  );
} 