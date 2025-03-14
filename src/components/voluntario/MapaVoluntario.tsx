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

// Componente para centrar el mapa en una ubicación específica
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
  nombre: string | null;
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
}

// Coordenadas por defecto para Bahía Blanca
const BAHIA_BLANCA_COORDS: [number, number] = [-38.7196, -62.2724];

export default function MapaVoluntario({ tiposArticulos }: MapaVoluntarioProps) {
  const [centrosDistribucion, setCentrosDistribucion] = useState<CentroDistribucion[]>([]);
  const [solicitudes, setSolicitudes] = useState<Solicitud[]>([]);
  const [cargando, setCargando] = useState(true);
  const [centroMapa, setCentroMapa] = useState<[number, number]>(BAHIA_BLANCA_COORDS);

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
        
        // Ajustar el centro del mapa si hay datos
        if (dataCentros.length > 0) {
          // Usar el primer centro de distribución como centro del mapa
          setCentroMapa([dataCentros[0].latitud, dataCentros[0].longitud]);
        } else if (dataSolicitudes.length > 0) {
          // Si no hay centros pero hay solicitudes, usar la primera solicitud
          setCentroMapa([dataSolicitudes[0].latitud, dataSolicitudes[0].longitud]);
        }
      } catch (error) {
        console.error("Error cargando datos:", error);
        toast.error("Error al cargar los puntos en el mapa");
      } finally {
        setCargando(false);
      }
    };

    cargarDatos();
  }, [tiposArticulos]);

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

  // Función para formatear el horario
  const formatearHorario = (apertura: string | null, cierre: string | null) => {
    if (!apertura || !cierre) return "Horario no especificado";
    return `${apertura} a ${cierre} hs`;
  };

  if (cargando) {
    return <div className="h-full w-full flex items-center justify-center">Cargando puntos en el mapa...</div>;
  }

  if (centrosDistribucion.length === 0 && solicitudes.length === 0) {
    return (
      <div className="h-full w-full flex items-center justify-center flex-col p-4 text-center">
        <p className="text-muted-foreground">No se encontraron centros de distribución ni solicitudes para los tipos de artículos seleccionados.</p>
      </div>
    );
  }

  return (
    <>
      <MapContainer
        center={[-38.7196, -62.2724]} // Coordenadas de Bahía Blanca
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        zoomControl={false} // Desactivamos los controles de zoom predeterminados para colocarlos en otra posición
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Añadimos los controles de zoom en la esquina inferior derecha para mejor acceso en móviles */}
        <div className="leaflet-bottom leaflet-right" style={{ zIndex: 1000 }}>
          <div className="leaflet-control-zoom leaflet-bar leaflet-control">
            <a className="leaflet-control-zoom-in" href="#" title="Zoom in" role="button" aria-label="Zoom in">+</a>
            <a className="leaflet-control-zoom-out" href="#" title="Zoom out" role="button" aria-label="Zoom out">−</a>
          </div>
        </div>

        <CentrarMapa posicion={[-38.7196, -62.2724]} />

        {/* Marcadores de centros de distribución (puntos azules) */}
        {centrosDistribucion
          .filter(centro => centro.activo)
          .filter(centro => centro.articulos.some(art => tiposArticulos.includes(art.tipoArticulo.nombre)))
          .map((centro) => (
            <Marker 
              key={`centro-${centro.id}`}
              position={[centro.latitud, centro.longitud]}
              icon={iconoAzul}
            >
              <Popup className="custom-popup">
                <div className="text-xs sm:text-sm space-y-1 sm:space-y-2 max-w-[250px] sm:max-w-[300px]">
                  <h3 className="font-semibold text-sm sm:text-base">{centro.nombre || "Centro de donaciones"}</h3>
                  <p className="text-muted-foreground">{centro.direccion}</p>
                  
                  {(centro.horarioApertura || centro.horarioCierre) && (
                    <p className="text-muted-foreground">
                      Horario: {formatearHorario(centro.horarioApertura, centro.horarioCierre)}
                    </p>
                  )}
                  
                  <div>
                    <p className="font-medium text-xs sm:text-sm">Artículos que reciben:</p>
                    <ul className="list-disc list-inside text-xs sm:text-sm">
                      {centro.articulos
                        .filter(art => tiposArticulos.includes(art.tipoArticulo.nombre))
                        .map((articulo) => (
                          <li key={`articulo-${articulo.id}`}>{articulo.tipoArticulo.nombre}</li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))
        }
        
        {/* Marcadores de solicitudes (puntos rojos) */}
        {solicitudes
          .filter(solicitud => solicitud.estado === "Pendiente")
          .filter(solicitud => solicitud.articulos.some(art => tiposArticulos.includes(art.tipoArticulo.nombre)))
          .map((solicitud) => (
            <Marker 
              key={`solicitud-${solicitud.id}`}
              position={[solicitud.latitud, solicitud.longitud]}
              icon={iconoRojo}
            >
              <Popup className="custom-popup">
                <div className="text-xs sm:text-sm space-y-1 sm:space-y-2 max-w-[250px] sm:max-w-[300px]">
                  <h3 className="font-semibold text-sm sm:text-base">Solicitud de donación</h3>
                  <p className="text-muted-foreground">{solicitud.direccion}</p>
                  
                  <div>
                    <p className="font-medium text-xs sm:text-sm">Artículos solicitados:</p>
                    <ul className="list-disc list-inside text-xs sm:text-sm">
                      {solicitud.articulos
                        .filter(art => tiposArticulos.includes(art.tipoArticulo.nombre))
                        .map((articulo) => (
                          <li key={`articulo-${articulo.id}`}>
                            {articulo.tipoArticulo.nombre} ({articulo.cantidad})
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-medium text-xs sm:text-sm">Contacto:</p>
                    <p className="text-xs sm:text-sm">{solicitud.contactoNombre}</p>
                    <p className="text-xs sm:text-sm">Tel: {solicitud.contactoTel}</p>
                  </div>
                  
                  <Button 
                    size="sm" 
                    className="w-full mt-2"
                    onClick={() => marcarComoEntregada(solicitud.id)}
                  >
                    Marcar como entregada
                  </Button>
                </div>
              </Popup>
            </Marker>
          ))
        }
      </MapContainer>
    </>
  );
} 