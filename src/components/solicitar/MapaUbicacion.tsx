"use client";

import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { iconoRojo } from "@/lib/leaflet-config";

// Coordenadas por defecto para Bahía Blanca
const BAHIA_BLANCA_COORDS: [number, number] = [-38.7196, -62.2724];

interface MapaUbicacionProps {
  onUbicacionChange: (lat: number, lng: number) => void;
}

function LocationMarker({ onUbicacionChange }: MapaUbicacionProps) {
  const [position, setPosition] = useState<[number, number] | null>(null);
  
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);
      onUbicacionChange(lat, lng);
    }
  });

  return position === null ? null : (
    <Marker position={position} icon={iconoRojo} />
  );
}

// Componente para los controles de zoom personalizados
function ControlesZoom() {
  const map = useMap();
  
  const handleZoomIn = (e: React.MouseEvent) => {
    e.preventDefault();
    map.zoomIn();
  };
  
  const handleZoomOut = (e: React.MouseEvent) => {
    e.preventDefault();
    map.zoomOut();
  };
  
  return (
    <div className="leaflet-bottom leaflet-right" style={{ zIndex: 1000 }}>
      <div className="leaflet-control-zoom leaflet-bar leaflet-control">
        <a 
          className="leaflet-control-zoom-in" 
          href="javascript:void(0)" 
          title="Zoom in" 
          role="button" 
          aria-label="Zoom in"
          onClick={handleZoomIn}
        >+</a>
        <a 
          className="leaflet-control-zoom-out" 
          href="javascript:void(0)" 
          title="Zoom out" 
          role="button" 
          aria-label="Zoom out"
          onClick={handleZoomOut}
        >−</a>
      </div>
    </div>
  );
}

export default function MapaUbicacion({ onUbicacionChange }: MapaUbicacionProps) {
  return (
    <MapContainer
      center={BAHIA_BLANCA_COORDS}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
      zoomControl={false}
      className="leaflet-map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* Añadimos los controles de zoom personalizados */}
      <ControlesZoom />
      
      <LocationMarker onUbicacionChange={onUbicacionChange} />
    </MapContainer>
  );
} 