"use client"

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { Button } from "@/components/ui/button";
import { Loader2, MapPin, ZoomIn, ZoomOut } from "lucide-react";
import L from "leaflet";
import {
  iconoAzul,
  iconoRojo,
  iconoVerde,
  iconoAzulHighlighted,
  iconoRojoHighlighted,
  iconoVerdeHighlighted,
} from "@/lib/leaflet-config";
import WhatsAppButton from "./WhatsAppButton";
// Interfaces para los tipos de datos
interface ArticuloOferta {
  id: number
  tipoArticulo: {
    id: number
    nombre: string
  }
  estado: string
}

interface PuntoDonacion {
  id: number
  nombre: string | null
  direccion: string
  latitud: number
  longitud: number
  horarioApertura: string | null
  horarioCierre: string | null
  activo: boolean
  articulos: ArticuloOferta[]
  telefono?: string
  descripcion?: string
}

interface ArticuloSolicitud {
  id: number
  tipoArticulo: {
    id: number
    nombre: string
  }
  cantidad: number
}

interface Solicitud {
  id: number
  direccion: string
  contactoNombre: string
  contactoTel: string
  estado: string
  latitud: number
  longitud: number
  descripcion?: string
  articulos: ArticuloSolicitud[]
}

interface SolicitudLimpieza {
  id: number
  direccion: string
  contactoNombre: string
  contactoTel: string
  descripcion: string | null
  estado: string
  latitud: number
  longitud: number
}

// Props for the wrapper component
interface MapaClienteWrapperProps {
  puntosDonacion: PuntoDonacion[]
  solicitudes: Solicitud[]
  solicitudesLimpieza: SolicitudLimpieza[]
  centroMapa: [number, number]
  mostrarPuntosDonacion: boolean
  mostrarSolicitudesDonacion: boolean
  mostrarSolicitudesLimpieza: boolean
  marcarComoEntregada: (id: number) => void
  marcarLimpiezaComoAtendida: (id: number) => void
  marcarPuntoComoInactivo: (id: number) => void
  marcarArticuloComoAgotado: (puntoId: number, articuloId: number) => void
}

// Component to center the map on a specific location
function CentrarMapa({ posicion }: { posicion: [number, number] }) {
  const map = useMap();

  React.useEffect(() => {
    map.setView(posicion, 13);
  }, [map, posicion]);

  return null;
}

// Component for custom zoom controls
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
    <div className="leaflet-bottom leaflet-right" style={{ zIndex: 1000, margin: "0.75rem" }}>
      <div className="flex flex-col shadow-md rounded-md overflow-hidden">
        <Button
          variant="default"
          size="icon"
          className="h-10 w-10 rounded-none bg-white text-black hover:bg-gray-100 border-b"
          onClick={handleZoomIn}
          aria-label="Zoom in"
        >
          <ZoomIn className="h-5 w-5" />
        </Button>
        <Button
          variant="default"
          size="icon"
          className="h-10 w-10 rounded-none bg-white text-black hover:bg-gray-100"
          onClick={handleZoomOut}
          aria-label="Zoom out"
        >
          <ZoomOut className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}

// Component for current location button
function CurrentLocationButton() {
  const map = useMap();
  const [loading, setLoading] = React.useState(false);

  const handleGetCurrentLocation = () => {
    setLoading(true);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          map.setView([latitude, longitude], 15);
          
          // Añadir un marcador temporal en la ubicación actual
          const currentLocationMarker = L.marker([latitude, longitude], {
            icon: L.divIcon({
              className: 'current-location-marker',
              html: '<div class="ping"></div>',
              iconSize: [20, 20],
              iconAnchor: [10, 10]
            })
          }).addTo(map);
          
          // Eliminar el marcador después de 5 segundos
          setTimeout(() => {
            map.removeLayer(currentLocationMarker);
          }, 5000);
          
          setLoading(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          setLoading(false);
          // Mostrar mensaje de error al usuario
          alert("No pudimos acceder a tu ubicación. Por favor verifica los permisos de tu navegador.");
        }
      );
    } else {
      setLoading(false);
      alert("Tu navegador no soporta geolocalización");
    }
  };

  return (
    <div className="leaflet-top leaflet-right" style={{ zIndex: 1000, margin: "0.75rem" }}>
      <Button
        variant="default"
        size="icon"
        className="h-10 w-10 shadow-md bg-white text-black hover:bg-gray-100"
        onClick={handleGetCurrentLocation}
        disabled={loading}
        aria-label="Ubicación actual"
      >
        {loading ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <MapPin className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
}

// Helper function to format opening hours
function formatearHorario(apertura: string | null, cierre: string | null): string {
  if (!apertura && !cierre) return "Horario no especificado";
  if (apertura && !cierre) return `Abre a las ${apertura}`;
  if (!apertura && cierre) return `Cierra a las ${cierre}`;
  return `${apertura} a ${cierre}`;
}

export default function MapaClienteWrapper({
  puntosDonacion,
  solicitudes,
  solicitudesLimpieza,
  centroMapa,
  mostrarPuntosDonacion,
  mostrarSolicitudesDonacion,
  mostrarSolicitudesLimpieza,
  marcarComoEntregada,
  marcarLimpiezaComoAtendida,
  marcarPuntoComoInactivo,
  marcarArticuloComoAgotado
}: MapaClienteWrapperProps) {
  // Generar una clave única para el MapContainer para evitar errores de inicialización múltiple
  const [mapKey, setMapKey] = useState<string>("");
  
  useEffect(() => {
    // Generar una clave única al montar el componente
    setMapKey(`map-${Date.now()}`);
  }, []);
  
  // Añadir estilos globales para Leaflet - Asegurarse de que solo se ejecute en el cliente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Buscar si ya existe un estilo con id 'leaflet-custom-styles'
      const existingStyle = document.getElementById('leaflet-custom-styles');
      
      if (!existingStyle) {
        const styleElement = document.createElement("style");
        styleElement.id = 'leaflet-custom-styles';
        styleElement.textContent = `
          .leaflet-popup-content-wrapper {
            border-radius: 0.75rem;
            padding: 0;
            overflow: hidden;
          }
          .leaflet-popup-content {
            margin: 0;
            min-width: 250px;
          }
          .custom-popup .leaflet-popup-content-wrapper {
            background-color: white;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }
          .leaflet-popup-tip {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }
          .leaflet-popup-close-button {
            display: none !important;
          }
          @media (max-width: 640px) {
            .leaflet-popup-content {
              min-width: 220px;
            }
          }
          
          /* Estilos para el marcador de ubicación actual */
          .current-location-marker {
            background: transparent;
          }
          
          .ping {
            position: relative;
            width: 20px;
            height: 20px;
            background-color: rgba(0, 122, 255, 0.6);
            border-radius: 50%;
            animation: ping 1.5s ease-in-out infinite;
          }
          
          .ping:before {
            content: '';
            position: absolute;
            top: 5px;
            left: 5px;
            width: 10px;
            height: 10px;
            background-color: rgb(0, 122, 255);
            border-radius: 50%;
          }
          
          @keyframes ping {
            0% {
              transform: scale(0.8);
              opacity: 1;
            }
            70% {
              transform: scale(1.5);
              opacity: 0.3;
            }
            100% {
              transform: scale(0.8);
              opacity: 1;
            }
          }
        `;
        document.head.appendChild(styleElement);
      }
    }
    
    // Limpieza al desmontar el componente
    return () => {
      // No hacemos limpieza de estilos para evitar problemas con componentes compartidos
    };
  }, []);
  
  // Function to handle marker hover effects
  const createMarkerEventHandlers = (defaultIcon: L.Icon | L.DivIcon, highlightedIcon: L.Icon | L.DivIcon) => {
    return {
      mouseover: (e: { target: L.Marker }) => {
        e.target.setIcon(highlightedIcon);
      },
      mouseout: (e: { target: L.Marker }) => {
        e.target.setIcon(defaultIcon);
      },
      focus: (e: { target: L.Marker }) => {
        e.target.setIcon(highlightedIcon);
      },
      blur: (e: { target: L.Marker }) => {
        e.target.setIcon(defaultIcon);
      },
    };
  };

  // Si no tenemos una clave de mapa, mostrar un loader
  if (!mapKey) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-1">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Cargando mapa...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full relative">
      <MapContainer
        key={mapKey}
        center={[-38.7196, -62.2724]} // Bahía Blanca coordinates
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        zoomControl={false} // Disable default zoom controls to place them in another position
        className="leaflet-map z-0 rounded-lg shadow-sm"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Add custom zoom controls */}
        <ControlesZoom />

        {/* Add current location button */}
        <CurrentLocationButton />

        <CentrarMapa posicion={centroMapa} />

        {/* Donation points markers (blue points) */}
        {mostrarPuntosDonacion &&
          puntosDonacion
            .filter((punto) => punto.activo)
            .map((punto) => {
              const eventHandlers = createMarkerEventHandlers(iconoAzul, iconoAzulHighlighted);

              return (
                <Marker
                  key={`punto-${punto.id}`}
                  position={[punto.latitud, punto.longitud]}
                  icon={iconoAzul}
                  zIndexOffset={1000}
                  eventHandlers={eventHandlers}
                >
                  <Popup className="custom-popup">
                    <div className="text-xs sm:text-sm space-y-3 max-w-[280px] sm:max-w-[320px] p-3">
                      <div className="flex items-center gap-2 mb-2 border-b pb-2">
                        <div className="w-4 h-4 rounded-full bg-blue-500 flex-shrink-0"></div>
                        <h3 className="font-semibold text-sm sm:text-base">Punto de donación</h3>
                      </div>

                      <div className="flex items-center gap-2">
                        <p className="text-muted-foreground font-medium">{punto.direccion}</p>
                      </div>

                      <div className="bg-muted/30 p-3 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <p className="font-medium text-sm sm:text-base">{punto.nombre || "Establecimiento"}</p>
                        </div>
                        {punto.telefono && (
                          <div className="flex items-center gap-2">
                            <a href={`tel:${punto.telefono}`} className="text-primary font-medium underline underline-offset-2">
                              {punto.telefono}
                            </a>
                          </div>
                        )}
                      </div>

                      <div className="bg-muted/30 p-3 rounded-lg">
                        <p className="font-medium text-sm mb-2">Artículos disponibles:</p>
                        <ul className="list-disc list-inside text-sm pl-1 space-y-1">
                          {punto.articulos && punto.articulos.length > 0 ? (
                            punto.articulos
                              .filter(articulo => articulo.estado !== "Agotado")
                              .map((articulo) => (
                                <li key={`articulo-${articulo.id}`} className="flex items-center justify-between">
                                  <span>{articulo.tipoArticulo.nombre}</span>
                                  <button 
                                    onClick={() => marcarArticuloComoAgotado(punto.id, articulo.id)}
                                    className="text-xs bg-red-100 hover:bg-red-200 text-red-700 px-2 py-0.5 rounded ml-2"
                                  >
                                    Marcar agotado
                                  </button>
                                </li>
                              ))
                          ) : (
                            <li>No hay artículos específicos</li>
                          )}
                        </ul>
                      </div>

                      {(punto.horarioApertura || punto.horarioCierre) && (
                        <div className="bg-muted/30 p-3 rounded-lg flex items-center gap-2">
                          <p className="text-sm">
                            <span className="font-medium">Horario:</span>{" "}
                            {formatearHorario(punto.horarioApertura, punto.horarioCierre)}
                          </p>
                        </div>
                      )}

                      {punto.descripcion && (
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <p className="font-medium text-sm mb-2">Descripción:</p>
                          <p className="text-sm">{punto.descripcion}</p>
                        </div>
                      )}
                      
                      <div className="flex flex-col gap-2">
                        <WhatsAppButton phoneNumber={punto.telefono || ''} message={'Hola, me gustaría donar artículos'} />
                        <Button
                          size="sm"
                          className="w-full py-2 font-medium"
                          onClick={() => marcarPuntoComoInactivo(punto.id)}
                        >
                          Marcar como inactivo
                        </Button>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              );
            })}

        {/* Request markers (red points) */}
        {mostrarSolicitudesDonacion &&
          solicitudes
            .filter((solicitud) => solicitud.estado === "Pendiente")
            .map((solicitud) => {
              const eventHandlers = createMarkerEventHandlers(iconoRojo, iconoRojoHighlighted);

              return (
                <Marker
                  key={`solicitud-${solicitud.id}`}
                  position={[solicitud.latitud, solicitud.longitud]}
                  icon={iconoRojo}
                  eventHandlers={eventHandlers}
                >
                  <Popup className="custom-popup">
                    <div className="text-xs sm:text-sm space-y-3 max-w-[280px] sm:max-w-[320px] p-3">
                      <div className="flex items-center gap-2 mb-2 border-b pb-2">
                        <div className="w-4 h-4 rounded-full bg-red-500 flex-shrink-0"></div>
                        <h3 className="font-semibold text-sm sm:text-base">Solicitud de donación</h3>
                      </div>

                      <div className="flex items-center gap-2">
                        <p className="text-muted-foreground font-medium">{solicitud.direccion}</p>
                      </div>

                      <div className="bg-muted/30 p-3 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <p className="font-medium text-sm sm:text-base">{solicitud.contactoNombre}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <a href={`tel:${solicitud.contactoTel}`} className="text-primary font-medium underline underline-offset-2">
                            {solicitud.contactoTel}
                          </a>
                        </div>
                      </div>

                      <div className="bg-muted/30 p-3 rounded-lg">
                        <p className="font-medium text-sm mb-2">Artículos solicitados:</p>
                        <ul className="list-disc list-inside text-sm pl-1 space-y-1">
                          {solicitud.articulos
                            .filter(articulo => articulo.cantidad > 0)
                            .map((articulo) => (
                              <li key={`articulo-${articulo.id}`}>
                                {articulo.tipoArticulo.nombre} ({articulo.cantidad})
                              </li>
                            ))}
                        </ul>
                      </div>

                      {solicitud.descripcion && (
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <p className="font-medium text-sm mb-2">Descripción:</p>
                          <p className="text-sm">{solicitud.descripcion}</p>
                        </div>
                      )}
                      
                      <div className="flex flex-col gap-2">
                        <WhatsAppButton phoneNumber={solicitud.contactoTel} message={'Hola, me gustaría entregar los artículos solicitados'} />
                        <Button
                          size="sm"
                          className="w-full py-2 font-medium"
                          onClick={() => marcarComoEntregada(solicitud.id)}
                        >
                          Marcar como entregada
                        </Button>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              );
            })}

        {/* Cleaning request markers (green points) */}
        {mostrarSolicitudesLimpieza &&
          solicitudesLimpieza
            .filter((solicitud) => solicitud.estado === "Pendiente")
            .map((solicitud) => {
              const eventHandlers = createMarkerEventHandlers(iconoVerde, iconoVerdeHighlighted);

              return (
                <Marker
                  key={`limpieza-${solicitud.id}`}
                  position={[solicitud.latitud, solicitud.longitud]}
                  icon={iconoVerde}
                  eventHandlers={eventHandlers}
                >
                  <Popup className="custom-popup">
                    <div className="text-xs sm:text-sm space-y-3 max-w-[280px] sm:max-w-[320px] p-3">
                      <div className="flex items-center gap-2 mb-2 border-b pb-2">
                        <div className="w-4 h-4 rounded-full bg-green-500 flex-shrink-0"></div>
                        <h3 className="font-semibold text-sm sm:text-base">Solicitud de limpieza</h3>
                      </div>

                      <div className="flex items-center gap-2">
                        <p className="text-muted-foreground font-medium">{solicitud.direccion}</p>
                      </div>

                      <div className="bg-muted/30 p-3 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <p className="font-medium text-sm sm:text-base">{solicitud.contactoNombre}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <a href={`tel:${solicitud.contactoTel}`} className="text-primary font-medium underline underline-offset-2">
                            {solicitud.contactoTel}
                          </a>
                        </div>
                      </div>

                      {solicitud.descripcion && (
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <p className="font-medium text-sm mb-2">Descripción:</p>
                          <p className="text-sm">{solicitud.descripcion}</p>
                        </div>
                      )}
                      
                      <div className="flex flex-col gap-2">
                        <WhatsAppButton phoneNumber={solicitud.contactoTel} message={'Hola, me gustaría limpiar el lugar'} />
                        <Button
                          size="sm"
                          className="w-full py-2 font-medium"
                          onClick={() => marcarLimpiezaComoAtendida(solicitud.id)}
                        >
                          Marcar como atendida
                        </Button>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
      </MapContainer>

      {/* Map legend - hidden on mobile as it's now in the filter UI */}
      <div className="hidden sm:flex flex-col sm:flex-row gap-1 text-xs text-muted-foreground mt-1">
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-1"></span>
          <span>Centros de donación: Recoge artículos aquí</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-1"></span>
          <span>Solicitudes: Entrega artículos aquí</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-1"></span>
          <span>Solicitudes de limpieza</span>
        </div>
      </div>
    </div>
  );
} 