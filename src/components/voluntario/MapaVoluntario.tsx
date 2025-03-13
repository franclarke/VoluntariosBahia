"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Corregir el problema de los íconos de Leaflet en Next.js
const iconoAzul = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const iconoRojo = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Componente para centrar el mapa en la ubicación actual
function CentrarMapa({ posicion }: { posicion: [number, number] }) {
  const map = useMap();
  
  useEffect(() => {
    map.setView(posicion, 13);
  }, [map, posicion]);
  
  return null;
}

// Interfaces para los tipos de datos
interface ArticuloOferta {
  id: number;
  tipoArticulo: {
    id: number;
    nombre: string;
  };
}

interface CentroDistribucion {
  id: number;
  direccion: string;
  latitud: number;
  longitud: number;
  horarioApertura: string | null;
  horarioCierre: string | null;
  activo: boolean;
  articulos: ArticuloOferta[];
}

interface ArticuloSolicitud {
  id: number;
  tipoArticulo: {
    id: number;
    nombre: string;
  };
  cantidad: number;
}

interface Solicitud {
  id: number;
  direccion: string;
  contactoNombre: string;
  contactoTel: string;
  estado: string;
  latitud: number;
  longitud: number;
  articulos: ArticuloSolicitud[];
}

interface MapaVoluntarioProps {
  tiposArticulos: string[];
  ubicacionActual: [number, number];
}

export default function MapaVoluntario({ tiposArticulos, ubicacionActual }: MapaVoluntarioProps) {
  const [centrosDistribucion, setCentrosDistribucion] = useState<CentroDistribucion[]>([]);
  const [solicitudes, setSolicitudes] = useState<Solicitud[]>([]);
  const [cargando, setCargando] = useState(true);

  // Cargar datos de centros de distribución y solicitudes
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        // Cargar centros de distribución
        const respCentros = await fetch(`/api/centros-distribucion?tiposArticulos=${encodeURIComponent(JSON.stringify(tiposArticulos))}`);
        const dataCentros = await respCentros.json();
        
        // Cargar solicitudes
        const respSolicitudes = await fetch(`/api/solicitudes?tiposArticulos=${encodeURIComponent(JSON.stringify(tiposArticulos))}&estado=Pendiente`);
        const dataSolicitudes = await respSolicitudes.json();
        
        setCentrosDistribucion(dataCentros);
        setSolicitudes(dataSolicitudes);
      } catch (error) {
        console.error("Error cargando datos:", error);
        toast.error("Error al cargar los puntos en el mapa");
      } finally {
        setCargando(false);
      }
    };

    cargarDatos();
  }, [tiposArticulos]);

  // Función para marcar un centro de distribución como seleccionado para retiro
  const seleccionarParaRetiro = async (centroId: number) => {
    try {
      const response = await fetch(`/api/centros-distribucion/${centroId}/seleccionar`, {
        method: "PUT",
      });
      
      if (!response.ok) {
        throw new Error("Error al seleccionar el centro de distribución");
      }
      
      // Actualizar la lista de centros
      setCentrosDistribucion(prev => prev.filter(centro => centro.id !== centroId));
      toast.success("Centro seleccionado para retiro");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al seleccionar el centro de distribución");
    }
  };

  // Función para marcar una solicitud como entregada
  const marcarComoEntregada = async (solicitudId: number) => {
    try {
      const response = await fetch(`/api/solicitudes/${solicitudId}/entregar`, {
        method: "PUT",
      });
      
      if (!response.ok) {
        throw new Error("Error al marcar la solicitud como entregada");
      }
      
      // Actualizar la lista de solicitudes
      setSolicitudes(prev => prev.filter(solicitud => solicitud.id !== solicitudId));
      toast.success("Solicitud marcada como entregada");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al marcar la solicitud como entregada");
    }
  };

  // Datos de ejemplo para desarrollo
  useEffect(() => {
    if (process.env.NODE_ENV === "development" && centrosDistribucion.length === 0 && solicitudes.length === 0) {
      // Datos de ejemplo para centros de distribución
      setCentrosDistribucion([
        {
          id: 1,
          direccion: "Av. Colón 80, Bahía Blanca",
          latitud: ubicacionActual[0] + 0.01,
          longitud: ubicacionActual[1] + 0.01,
          horarioApertura: "09:00",
          horarioCierre: "18:00",
          activo: true,
          articulos: tiposArticulos.map((tipo, index) => ({
            id: index + 1,
            tipoArticulo: {
              id: index + 1,
              nombre: tipo
            }
          })).slice(0, 3) // Solo algunos tipos para este centro
        },
        {
          id: 2,
          direccion: "Av. Alem 1000, Bahía Blanca",
          latitud: ubicacionActual[0] - 0.01,
          longitud: ubicacionActual[1] + 0.01,
          horarioApertura: "10:00",
          horarioCierre: "17:00",
          activo: true,
          articulos: tiposArticulos.map((tipo, index) => ({
            id: index + 10,
            tipoArticulo: {
              id: index + 1,
              nombre: tipo
            }
          })).slice(2, 5) // Diferentes tipos para este centro
        }
      ]);
      
      // Datos de ejemplo para solicitudes
      setSolicitudes([
        {
          id: 1,
          direccion: "Sarmiento 200, Bahía Blanca",
          contactoNombre: "Juan Pérez",
          contactoTel: "291-4123456",
          estado: "Pendiente",
          latitud: ubicacionActual[0] + 0.02,
          longitud: ubicacionActual[1] - 0.01,
          articulos: tiposArticulos.map((tipo, index) => ({
            id: index + 1,
            tipoArticulo: {
              id: index + 1,
              nombre: tipo
            },
            cantidad: index + 1
          })).slice(0, 2) // Solo algunos tipos para esta solicitud
        },
        {
          id: 2,
          direccion: "Estomba 500, Bahía Blanca",
          contactoNombre: "María López",
          contactoTel: "291-4567890",
          estado: "Pendiente",
          latitud: ubicacionActual[0] - 0.02,
          longitud: ubicacionActual[1] - 0.02,
          articulos: tiposArticulos.map((tipo, index) => ({
            id: index + 10,
            tipoArticulo: {
              id: index + 1,
              nombre: tipo
            },
            cantidad: (index + 1) * 2
          })).slice(1, 4) // Diferentes tipos para esta solicitud
        }
      ]);
      
      setCargando(false);
    }
  }, [tiposArticulos, ubicacionActual, centrosDistribucion.length, solicitudes.length]);

  // Función para formatear el horario
  const formatearHorario = (apertura: string | null, cierre: string | null) => {
    if (!apertura || !cierre) return "Horario no especificado";
    return `${apertura} a ${cierre} hs`;
  };

  if (cargando) {
    return <div className="h-full w-full flex items-center justify-center">Cargando puntos en el mapa...</div>;
  }

  return (
    <MapContainer
      center={ubicacionActual}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      <CentrarMapa posicion={ubicacionActual} />
      
      {/* Marcador de la ubicación actual */}
      <Marker position={ubicacionActual}>
        <Popup>
          Tu ubicación actual
        </Popup>
      </Marker>
      
      {/* Marcadores de centros de distribución (puntos azules) */}
      {centrosDistribucion.filter(centro => centro.activo).map((centro) => (
        <Marker
          key={`centro-${centro.id}`}
          position={[centro.latitud, centro.longitud]}
          icon={iconoAzul}
        >
          <Popup>
            <div className="space-y-2">
              <h3 className="font-bold">Centro de Distribución</h3>
              <p><strong>Dirección:</strong> {centro.direccion}</p>
              <p><strong>Horario:</strong> {formatearHorario(centro.horarioApertura, centro.horarioCierre)}</p>
              
              <div>
                <strong>Artículos disponibles:</strong>
                <ul className="list-disc list-inside mt-1">
                  {centro.articulos
                    .filter(art => tiposArticulos.includes(art.tipoArticulo.nombre))
                    .map(art => (
                      <li key={art.id}>{art.tipoArticulo.nombre}</li>
                    ))
                  }
                </ul>
              </div>
              
              <Button 
                size="sm" 
                className="w-full"
                onClick={() => seleccionarParaRetiro(centro.id)}
              >
                Seleccionar para retiro
              </Button>
            </div>
          </Popup>
        </Marker>
      ))}
      
      {/* Marcadores de solicitudes (puntos rojos) */}
      {solicitudes.map((solicitud) => (
        <Marker
          key={`solicitud-${solicitud.id}`}
          position={[solicitud.latitud, solicitud.longitud]}
          icon={iconoRojo}
        >
          <Popup>
            <div className="space-y-2">
              <h3 className="font-bold">Solicitud de Donación</h3>
              <p><strong>Dirección:</strong> {solicitud.direccion}</p>
              
              <div>
                <strong>Artículos necesarios:</strong>
                <ul className="list-disc list-inside mt-1">
                  {solicitud.articulos
                    .filter(art => tiposArticulos.includes(art.tipoArticulo.nombre))
                    .map(art => (
                      <li key={art.id}>
                        {art.tipoArticulo.nombre} ({art.cantidad})
                      </li>
                    ))
                  }
                </ul>
              </div>
              
              <p><strong>Contacto:</strong> {solicitud.contactoNombre}</p>
              <p><strong>Teléfono:</strong> {solicitud.contactoTel}</p>
              
              <Button 
                size="sm" 
                className="w-full"
                onClick={() => marcarComoEntregada(solicitud.id)}
              >
                Marcar como entregada
              </Button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
} 