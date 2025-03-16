"use client";

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { iconoAzul, iconoRojo, iconoVerde } from '@/lib/leaflet-config';

const TestMapa = () => {
  // Coordenadas de prueba para los marcadores
  const posiciones = [
    { id: 1, lat: -38.7196, lng: -62.2724, color: 'rojo', nombre: 'Marcador Rojo' },
    { id: 2, lat: -38.7296, lng: -62.2624, color: 'verde', nombre: 'Marcador Verde' },
    { id: 3, lat: -38.7096, lng: -62.2824, color: 'azul', nombre: 'Marcador Azul' },
  ];

  // Función para seleccionar el icono según el color
  const seleccionarIcono = (color: string) => {
    switch (color) {
      case 'rojo':
        return iconoRojo;
      case 'verde':
        return iconoVerde;
      case 'azul':
        return iconoAzul;
      default:
        return iconoAzul;
    }
  };

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <MapContainer
        center={[-38.7196, -62.2724]} // Coordenadas de Bahía Blanca
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        className="leaflet-map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Marcadores de prueba */}
        {posiciones.map((pos) => (
          <Marker 
            key={`marker-${pos.id}`}
            position={[pos.lat, pos.lng]}
            icon={seleccionarIcono(pos.color)}
            zIndexOffset={1000}
          >
            <Popup>
              <div>
                <h3>{pos.nombre}</h3>
                <p>Latitud: {pos.lat}</p>
                <p>Longitud: {pos.lng}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default TestMapa; 