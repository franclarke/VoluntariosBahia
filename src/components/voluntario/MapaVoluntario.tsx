"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import {
  iconoAzul,
  iconoRojo,
  iconoVerde,
  iconoAzulHighlighted,
  iconoRojoHighlighted,
  iconoVerdeHighlighted,
} from "@/lib/leaflet-config"
import { Loader2, MapPin, ZoomIn, ZoomOut, Minus, Plus } from "lucide-react"
import L from "leaflet"

// Component to center the map on a specific location
function CentrarMapa({ posicion }: { posicion: [number, number] }) {
  const map = useMap()

  useEffect(() => {
    map.setView(posicion, 13)
  }, [map, posicion])

  return null
}

// Component for custom zoom controls
function ControlesZoom() {
  const map = useMap()

  const handleZoomIn = (e: React.MouseEvent) => {
    e.preventDefault()
    map.zoomIn()
  }

  const handleZoomOut = (e: React.MouseEvent) => {
    e.preventDefault()
    map.zoomOut()
  }

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
  )
}

// Component for current location button
function CurrentLocationButton() {
  const map = useMap()
  const [loading, setLoading] = useState(false)

  const handleGetCurrentLocation = () => {
    setLoading(true)

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          map.setView([latitude, longitude], 15)
          
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
          
          setLoading(false)
        },
        (error) => {
          console.error("Error getting location:", error)
          let errorMessage = "No se pudo obtener tu ubicación";
          
          // Mensajes de error más específicos según el código de error
          switch(error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = "Permiso de ubicación denegado. Verifica la configuración de tu dispositivo.";
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = "La información de ubicación no está disponible.";
              break;
            case error.TIMEOUT:
              errorMessage = "La solicitud de ubicación expiró.";
              break;
          }
          
          toast.error(errorMessage)
          setLoading(false)
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0
        }
      )
    } else {
      toast.error("Tu navegador no soporta geolocalización")
      setLoading(false)
    }
  }

  return (
    <div className="leaflet-top leaflet-right" style={{ zIndex: 1000, margin: "0.75rem" }}>
      <Button
        variant="default"
        size="icon"
        className="h-10 w-10 bg-white text-black hover:bg-gray-100 shadow-md"
        onClick={handleGetCurrentLocation}
        disabled={loading}
        aria-label="Mi ubicación"
      >
        {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <MapPin className="h-5 w-5" />}
      </Button>
    </div>
  )
}

// Interfaces for data types
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

interface MapaVoluntarioProps {
  mostrarPuntosDonacion: boolean
  mostrarSolicitudesDonacion: boolean
  mostrarSolicitudesLimpieza: boolean
}

// Default coordinates for Bahía Blanca
const BAHIA_BLANCA_COORDS: [number, number] = [-38.7196, -62.2724]

export default function MapaVoluntario({
  mostrarPuntosDonacion,
  mostrarSolicitudesDonacion,
  mostrarSolicitudesLimpieza,
}: MapaVoluntarioProps) {
  const [puntosDonacion, setPuntosDonacion] = useState<PuntoDonacion[]>([])
  const [solicitudes, setSolicitudes] = useState<Solicitud[]>([])
  const [solicitudesLimpieza, setSolicitudesLimpieza] = useState<SolicitudLimpieza[]>([])
  const [cargando, setCargando] = useState(true)
  const [centroMapa, setCentroMapa] = useState<[number, number]>(BAHIA_BLANCA_COORDS)

  // Load donation points and requests data
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        // Load donation points
        const respPuntos = await fetch(`/api/puntos-donacion`)

        if (!respPuntos.ok) {
          throw new Error("Error al cargar puntos de donación")
        }

        const dataPuntos = await respPuntos.json()

        // Load requests
        const respSolicitudes = await fetch(`/api/solicitudes`)

        if (!respSolicitudes.ok) {
          throw new Error("Error al cargar solicitudes")
        }

        const dataSolicitudes = await respSolicitudes.json()

        // Load cleaning requests
        const respSolicitudesLimpieza = await fetch(`/api/solicitudes-limpieza?estado=Pendiente`)

        if (!respSolicitudesLimpieza.ok) {
          throw new Error("Error al cargar solicitudes de limpieza")
        }

        const dataSolicitudesLimpieza = await respSolicitudesLimpieza.json()

        setPuntosDonacion(Array.isArray(dataPuntos) ? dataPuntos : [])
        setSolicitudes(Array.isArray(dataSolicitudes) ? dataSolicitudes : [])
        setSolicitudesLimpieza(Array.isArray(dataSolicitudesLimpieza) ? dataSolicitudesLimpieza : [])

        // Adjust map center if there's data
        if (dataPuntos.length > 0) {
          // Use the first donation point as map center
          setCentroMapa([dataPuntos[0].latitud, dataPuntos[0].longitud])
        } else if (dataSolicitudes.length > 0) {
          // If no points but there are requests, use the first request
          setCentroMapa([dataSolicitudes[0].latitud, dataSolicitudes[0].longitud])
        } else if (dataSolicitudesLimpieza.length > 0) {
          // If no points or requests but there are cleaning requests, use the first one
          setCentroMapa([dataSolicitudesLimpieza[0].latitud, dataSolicitudesLimpieza[0].longitud])
        }
      } catch (error) {
        console.error("Error cargando datos:", error)
        toast.error("Error al cargar los puntos en el mapa")
      } finally {
        setCargando(false)
      }
    }

    cargarDatos()
  }, []) // Empty dependency array to run only once

  // Function to mark a request as delivered
  const marcarComoEntregada = async (solicitudId: number) => {
    try {
      const response = await fetch(`/api/solicitudes/${solicitudId}/entregar`, {
        method: "PUT",
      })

      if (!response.ok) {
        throw new Error("Error al marcar la solicitud como entregada")
      }

      // Update the requests list
      setSolicitudes((prev) => prev.filter((solicitud) => solicitud.id !== solicitudId))
      toast.success("Solicitud marcada como entregada")
    } catch (error) {
      console.error("Error:", error)
      toast.error("Error al marcar la solicitud como entregada")
    }
  }

  // Function to mark a cleaning request as attended
  const marcarLimpiezaComoAtendida = async (solicitudId: number) => {
    try {
      const response = await fetch(`/api/solicitudes-limpieza/${solicitudId}/atender`, {
        method: "PUT",
      })

      if (!response.ok) {
        throw new Error("Error al marcar la solicitud como atendida")
      }

      // Update the requests list
      setSolicitudesLimpieza((prev) => prev.filter((solicitud) => solicitud.id !== solicitudId))
      toast.success("Solicitud marcada como atendida")
    } catch (error) {
      console.error("Error:", error)
      toast.error("Error al marcar la solicitud como atendida")
    }
  }

  // Función para marcar un punto de donación como inactivo
  const marcarPuntoComoInactivo = async (puntoId: number) => {
    try {
      const response = await fetch(`/api/puntos-donacion/${puntoId}/inactivar`, {
        method: "PUT",
      })

      if (!response.ok) {
        throw new Error("Error al marcar el punto de donación como inactivo")
      }

      // Actualizar la lista de puntos de donación
      setPuntosDonacion(prev => prev.filter(punto => punto.id !== puntoId))
      toast.success("Punto de donación marcado como inactivo")
    } catch (error) {
      console.error("Error:", error)
      toast.error("Error al marcar el punto de donación como inactivo")
    }
  }

  // Función para marcar un artículo como agotado
  const marcarArticuloComoAgotado = async (puntoId: number, articuloId: number) => {
    try {
      const response = await fetch(`/api/puntos-donacion/${puntoId}/articulos/${articuloId}/agotar`, {
        method: "PUT",
      })

      if (!response.ok) {
        throw new Error("Error al marcar el artículo como agotado")
      }

      const data = await response.json();

      // Actualizar la lista de puntos de donación
      setPuntosDonacion(prev => 
        prev.map(punto => {
          if (punto.id === puntoId) {
            // Si el punto fue inactivado, actualizar su estado
            if (data.puntoInactivado) {
              return {
                ...punto,
                activo: false,
                articulos: punto.articulos.map(art => {
                  if (art.id === articuloId) {
                    return { ...art, estado: "Agotado" };
                  }
                  return art;
                })
              };
            }
            
            return {
              ...punto,
              articulos: punto.articulos.map(art => {
                if (art.id === articuloId) {
                  return { ...art, estado: "Agotado" };
                }
                return art;
              })
            };
          }
          return punto;
        })
      );
      
      toast.success(data.puntoInactivado 
        ? "Artículo marcado como agotado y punto de donación inactivado" 
        : "Artículo marcado como agotado")
    } catch (error) {
      console.error("Error:", error)
      toast.error("Error al marcar el artículo como agotado")
    }
  }

  // Componente para seleccionar cantidad a entregar
  const EntregaSelector = ({ 
    solicitudId, 
    articuloId, 
    cantidadActual, 
    onClose 
  }: { 
    solicitudId: number, 
    articuloId: number, 
    cantidadActual: number, 
    onClose: () => void 
  }) => {
    const [cantidad, setCantidad] = useState(1);
    const [loading, setLoading] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Cerrar al hacer clic fuera del componente
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
          onClose();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [onClose]);

    const handleSubmit = async () => {
      if (cantidad <= 0) {
        toast.error("La cantidad debe ser mayor a 0");
        return;
      }
      
      if (cantidad > cantidadActual) {
        toast.error(`No puedes entregar más de ${cantidadActual} unidades`);
        return;
      }
      
      setLoading(true);
      
      try {
        const response = await fetch(`/api/solicitudes/${solicitudId}/articulos/${articuloId}/entregar-parcial`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cantidadEntregada: cantidad }),
        });

        if (!response.ok) {
          throw new Error("Error al actualizar el artículo");
        }

        const data = await response.json();

        // Actualizar la lista de solicitudes
        setSolicitudes(prev => 
          prev.map(solicitud => {
            if (solicitud.id === solicitudId) {
              // Si la solicitud fue completada, actualizarla
              if (data.solicitudCompletada) {
                return {
                  ...solicitud,
                  estado: "Entregada",
                  articulos: solicitud.articulos.map(art => {
                    if (art.id === articuloId) {
                      return { ...art, cantidad: 0 };
                    }
                    return art;
                  })
                };
              }
              
              return {
                ...solicitud,
                articulos: solicitud.articulos.map(art => {
                  if (art.id === articuloId) {
                    return { ...art, cantidad: Math.max(0, art.cantidad - cantidad) };
                  }
                  return art;
                })
              };
            }
            return solicitud;
          }).filter(solicitud => solicitud.estado !== "Entregada")
        );
        
        toast.success(data.solicitudCompletada 
          ? "Artículo entregado y solicitud completada" 
          : "Artículo actualizado correctamente");
        
        onClose();
      } catch (error) {
        console.error("Error:", error);
        toast.error("Error al actualizar el artículo");
      } finally {
        setLoading(false);
      }
    };

    return (
      <div 
        ref={wrapperRef}
        className="absolute z-50 bg-white rounded-lg shadow-lg p-1 border border-gray-200 w-[200px] top-0 left-0 transform -translate-x-1/2 -translate-y-full mb-1"
        style={{ marginBottom: "10px" }}
      >
        <div className="text-sm font-medium mb-1">¿Cuántas unidades entregaste?</div>
        <div className="flex items-center justify-between mb-2">
          <button 
            onClick={() => setCantidad(prev => Math.max(1, prev - 1))}
            className="bg-gray-100 hover:bg-gray-200 rounded-full p-1"
            disabled={cantidad <= 1}
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="font-medium text-lg">{cantidad}</span>
          <button 
            onClick={() => setCantidad(prev => Math.min(cantidadActual, prev + 1))}
            className="bg-gray-100 hover:bg-gray-200 rounded-full p-1"
            disabled={cantidad >= cantidadActual}
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <div className="text-xs text-gray-500 mb-1 text-center">
          {cantidad} de {cantidadActual} unidades
        </div>
        <div className="flex gap-1">
          <Button 
            size="sm" 
            variant="outline" 
            className="w-1/2" 
            onClick={onClose}
          >
            Cancelar
          </Button>
          <Button 
            size="sm" 
            className="w-1/2" 
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? <Loader2 className="h-3 w-3 animate-spin" /> : "Confirmar"}
          </Button>
        </div>
      </div>
    );
  };

  // Componente para mostrar un artículo solicitado con su botón de entrega
  const ArticuloSolicitadoItem = ({ 
    articulo, 
    solicitudId 
  }: { 
    articulo: ArticuloSolicitud, 
    solicitudId: number 
  }) => {
    const [showEntregaSelector, setShowEntregaSelector] = useState(false);
    
    return (
      <li className="flex items-start justify-between relative">
        <span className="mr-1">{articulo.tipoArticulo.nombre}</span>
        <div className="flex items-center gap-1">
          <span className="text-muted-foreground">({articulo.cantidad})</span>
          <button 
            onClick={() => setShowEntregaSelector(true)}
            className="text-xs bg-green-100 hover:bg-green-200 text-green-700 px-2 py-0.5 rounded ml-2"
          >
            Entregar
          </button>
          {showEntregaSelector && (
            <EntregaSelector 
              solicitudId={solicitudId}
              articuloId={articulo.id}
              cantidadActual={articulo.cantidad}
              onClose={() => setShowEntregaSelector(false)}
            />
          )}
        </div>
      </li>
    );
  };

  // Function to format schedule
  const formatearHorario = (apertura: string | null, cierre: string | null) => {
    if (!apertura || !cierre) return "Horario no especificado"
    return `${apertura} a ${cierre} hs`
  }

  if (cargando) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-1">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Cargando puntos en el mapa...</p>
        </div>
      </div>
    )
  }

  if (puntosDonacion.length === 0 && solicitudes.length === 0 && solicitudesLimpieza.length === 0) {
    return (
      <div className="h-full w-full flex items-center justify-center flex-col p-4 text-center">
        <p className="text-muted-foreground">
          No se encontraron puntos de donación, solicitudes ni solicitudes de limpieza.
        </p>
      </div>
    )
  }

  // Function to handle marker hover effects
  const createMarkerEventHandlers = (defaultIcon: L.Icon, highlightedIcon: L.Icon) => {
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

  return (
    <>
      <MapContainer
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
              const eventHandlers = createMarkerEventHandlers(iconoAzul, iconoAzulHighlighted)

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
                        <button 
                          className="ml-auto text-gray-400 hover:text-gray-600 transition-colors" 
                          onClick={(e) => {
                            e.stopPropagation();
                            const leafletPopup = e.currentTarget.closest('.leaflet-popup');
                            if (leafletPopup) {
                              const closeButton = leafletPopup.querySelector('.leaflet-popup-close-button') as HTMLElement;
                              if (closeButton) closeButton.click();
                            }
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 flex-shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        <p className="text-muted-foreground font-medium">{punto.direccion}</p>
                      </div>

                      <div className="bg-muted/30 p-3 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 flex-shrink-0"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path><path d="M12 3v6"></path></svg>
                          <p className="font-medium text-sm sm:text-base">{punto.nombre || "Establecimiento"}</p>
                        </div>
                        {punto.telefono && (
                          <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 flex-shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
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
                          {punto.articulos && 
                            punto.articulos.filter(articulo => articulo.estado === "Agotado").length > 0 && (
                              <div className="mt-2 pt-2 border-t border-gray-200">
                                <p className="font-medium text-sm mb-2 text-gray-500">Artículos agotados:</p>
                                <ul className="list-disc list-inside text-sm pl-1 space-y-1 text-gray-500">
                                  {punto.articulos
                                    .filter(articulo => articulo.estado === "Agotado")
                                    .map((articulo) => (
                                      <li key={`articulo-agotado-${articulo.id}`}>
                                        {articulo.tipoArticulo.nombre}
                                      </li>
                                    ))
                                  }
                                </ul>
                              </div>
                            )
                          }
                        </ul>
                      </div>

                      {(punto.horarioApertura || punto.horarioCierre) && (
                        <div className="bg-muted/30 p-3 rounded-lg flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 flex-shrink-0"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
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

                      <Button
                        size="sm"
                        className="w-full mt-2 py-2 font-medium"
                        onClick={() => marcarPuntoComoInactivo(punto.id)}
                      >
                        Marcar como inactivo
                      </Button>
                    </div>
                  </Popup>
                </Marker>
              )
            })}

        {/* Request markers (red points) */}
        {mostrarSolicitudesDonacion &&
          solicitudes
            .filter((solicitud) => solicitud.estado === "Pendiente")
            .map((solicitud) => {
              const eventHandlers = createMarkerEventHandlers(iconoRojo, iconoRojoHighlighted)

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
                        <button 
                          className="ml-auto text-gray-400 hover:text-gray-600 transition-colors" 
                          onClick={(e) => {
                            e.stopPropagation();
                            const leafletPopup = e.currentTarget.closest('.leaflet-popup');
                            if (leafletPopup) {
                              const closeButton = leafletPopup.querySelector('.leaflet-popup-close-button') as HTMLElement;
                              if (closeButton) closeButton.click();
                            }
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 flex-shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        <p className="text-muted-foreground font-medium">{solicitud.direccion}</p>
                      </div>

                      <div className="bg-muted/30 p-3 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 flex-shrink-0"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                          <p className="font-medium text-sm sm:text-base">{solicitud.contactoNombre}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 flex-shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
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
                              <ArticuloSolicitadoItem 
                                key={`articulo-${articulo.id}`}
                                articulo={articulo}
                                solicitudId={solicitud.id}
                              />
                            ))}
                          {solicitud.articulos
                            .filter(articulo => articulo.cantidad === 0)
                            .map((articulo) => (
                              <li key={`articulo-entregado-${articulo.id}`} className="text-gray-500">
                                <span className="line-through">{articulo.tipoArticulo.nombre}</span>
                                <span className="ml-2 text-xs text-green-600">(Entregado)</span>
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

                      <Button
                        size="sm"
                        className="w-full mt-2 py-2 font-medium"
                        onClick={() => marcarComoEntregada(solicitud.id)}
                      >
                        Marcar como entregada
                      </Button>
                    </div>
                  </Popup>
                </Marker>
              )
            })}

        {/* Cleaning request markers (green points) */}
        {mostrarSolicitudesLimpieza &&
          solicitudesLimpieza
            .filter((solicitud) => solicitud.estado === "Pendiente")
            .map((solicitud) => {
              const eventHandlers = createMarkerEventHandlers(iconoVerde, iconoVerdeHighlighted)

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
                        <button 
                          className="ml-auto text-gray-400 hover:text-gray-600 transition-colors" 
                          onClick={(e) => {
                            e.stopPropagation();
                            const leafletPopup = e.currentTarget.closest('.leaflet-popup');
                            if (leafletPopup) {
                              const closeButton = leafletPopup.querySelector('.leaflet-popup-close-button') as HTMLElement;
                              if (closeButton) closeButton.click();
                            }
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 flex-shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        <p className="text-muted-foreground font-medium">{solicitud.direccion}</p>
                      </div>

                      <div className="bg-muted/30 p-3 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 flex-shrink-0"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                          <p className="font-medium text-sm sm:text-base">{solicitud.contactoNombre}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 flex-shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
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

                      <Button
                        size="sm"
                        className="w-full mt-2 py-2 font-medium"
                        onClick={() => marcarLimpiezaComoAtendida(solicitud.id)}
                      >
                        Marcar como atendida
                      </Button>
                    </div>
                  </Popup>
                </Marker>
              )
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
    </>
  )
}

// Add global styles for Leaflet popups
const styleElement = document.createElement("style")
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
`
document.head.appendChild(styleElement)

