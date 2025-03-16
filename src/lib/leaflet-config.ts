import L from "leaflet"

// Fix Leaflet icons issue in Next.js
// This is necessary because Next.js doesn't handle Leaflet assets well during SSR

// Configure default Leaflet icons
function fixLeafletIcons() {
  // Only run on the client
  if (typeof window !== "undefined") {
    // Remove default icons
    // @ts-expect-error - _getIconUrl exists in the prototype but isn't properly typed
    delete L.Icon.Default.prototype._getIconUrl

    // Configure icons manually
    L.Icon.Default.mergeOptions({
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    })
  }
}

// Create custom icon factory function for consistent styling
const createCustomIcon = (color: string, size = 1) => {
  return new L.Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="24" height="36">
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
        <path fill="${color}" d="M12 0C5.383 0 0 5.383 0 12c0 3.912 1.865 7.532 5.037 9.82L12 36l6.963-14.18C22.135 19.532 24 15.912 24 12c0-6.617-5.383-12-12-12z" filter="url(#shadow)"/>
        <circle fill="white" cx="12" cy="12" r="4.5"/>
      </svg>
    `)}`,
    shadowUrl: "",
    iconSize: [24 * size, 36 * size],
    iconAnchor: [12 * size, 36 * size],
    popupAnchor: [0, -34 * size],
  })
}

// Create custom icons with modern design
const iconoAzul = createCustomIcon("#3b82f6") // Blue marker for donation centers
const iconoRojo = createCustomIcon("#ef4444") // Red marker for donation requests
const iconoVerde = createCustomIcon("#22c55e") // Green marker for cleaning requests

// Create highlighted versions for hover/selected state
const iconoAzulHighlighted = createCustomIcon("#3b82f6", 1.2)
const iconoRojoHighlighted = createCustomIcon("#ef4444", 1.2)
const iconoVerdeHighlighted = createCustomIcon("#22c55e", 1.2)

// Initialize configuration
fixLeafletIcons()

export { iconoAzul, iconoRojo, iconoVerde, iconoAzulHighlighted, iconoRojoHighlighted, iconoVerdeHighlighted }

