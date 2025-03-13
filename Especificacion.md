## Especificación técnica y funcional para la plataforma web de distribución y necesidades

### Objetivo General:

Desarrollar una funcionalidad web interactiva que permita gestionar fácilmente la distribución de donaciones (colchones, ropa, frazadas, comida, etc.) y el registro de necesidades puntuales en diferentes ubicaciones, permitiendo a voluntarios ubicar de forma sencilla tanto puntos de donación como solicitudes cercanas mediante un mapa interactivo.

---

### Flujo de Trabajo:

#### Paso 1: Registro Manual por Administrador

El administrador contará con un panel administrativo simple, desde donde manualmente podrá:

- Registrar puntos de distribución (ofertas).
- Registrar puntos con necesidades específicas (solicitudes).

Cada registro incluirá:

- **Dirección exacta** (Geolocalizada)
- **Tipo de artículo**
  - Ropa

  - Colchones

  - Alimentos no perecederos

  - Sabanas / Frazadas

  - Agua

  - Articulos de limpieza

  - Articulos de higiene personal
- **Cantidad requerida** (Para solicitudes)
- **Nombre y teléfono de contacto**
- **Estado de la solicitud** (Pendiente / Atendido)

---

#### Paso 2: Interfaz para Voluntarios

Los voluntarios ingresarán a una página web responsive (especialmente adaptada para celulares).

Al ingresar podrán:

1. Seleccionar **"Ofrezco ayuda (tengo movilidad)"**

   - Automáticamente se detectará (o pedirá permiso para detectar) su ubicación actual.

2. El voluntario deberá seleccionar:

   - Qué tipo de artículos desea repartir (Ropa, Colchones, Alimentos no perecederos, Sabanas,Frazadas, Agua, Articulos de limpieza o Articulos de higiene personal).

Automáticamente el mapa interactivo mostrará:

- En color azul: puntos cercanos donde se encuentran disponibles esos artículos (lugares donde debe retirarlos).
- En color rojo: puntos cercanos donde se requieren esos mismos artículos (direcciones donde deberá entregarlos).

Podrá hacer clic sobre cada marcador para ver detalles:

- Cantidad requerida o disponible.
- Nombre y número de contacto de la persona que necesita ayuda (si aplica).

---

#### Paso 3: Flujo del Repartidor (Voluntario)

Una vez que el voluntario selecciona un punto azul para retirar artículos:

- Podrá marcar "Seleccionado para retiro". Esto actualizará en tiempo real (restando la cantidad de artículos disponibles del punto).

Luego, cuando el voluntario entregue el artículo en un punto rojo:

- Podrá marcar esa solicitud como "Entregada".
- El sistema actualizará automáticamente:
  - Estado de la solicitud a "Atendido".
  - Actualizará o eliminará los marcadores del mapa para evitar duplicación de esfuerzos.

---

### Especificaciones Técnicas:

- Desarrollo Front-end:

  - Next.js&#x20;
  - Librerías de mapas sugeridas: Leaflet o Google Maps API.
  - Geolocalización vía navegador.

- Desarrollo Back-end:

  - Next.js con API routes&#x20;
  - Supabase
  - ORM Prisma para gestión eficiente de datos.

- Consideraciones UX:

  - Diseño móvil primero, con interfaces simples, pocos clics y carga rápida.
  - Uso de colores claros y distintivos (Azul para ofertas, Rojo para solicitudes).
  - Actualización en tiempo real o con refresco automático de página cada 30 segundos.

- Seguridad:

  - Autenticación sencilla para administradores (username/password).
  - Sin autenticación para voluntarios para simplificar su acceso, pero incluyendo confirmación de acciones clave (retiro, entrega).

- Funciones adicionales

  - Integración de WhatsApp directo para facilitar contacto rápido.
  - Registro automático del historial de movimientos para generar reportes posteriores (para transparencia).

---

### Entregables:

- Código fuente organizado y comentado.
- Despliegue funcional del MVP inicial para pruebas rápidas.
- Documentación mínima de uso para administradores.

---

### Conclusión:

Esta funcionalidad busca simplificar significativamente la organización de donaciones y solicitudes, reducir el tiempo de respuesta ante necesidades críticas, y permitir transparencia total en la distribución de recursos ante situaciones de emergencia.

