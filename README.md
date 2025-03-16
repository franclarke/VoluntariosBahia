# VoluntariosBahía

## Descripción

VoluntariosBahía es una plataforma web interactiva diseñada para gestionar eficientemente la distribución de donaciones y el registro de necesidades puntuales en diferentes ubicaciones. Permite a los voluntarios ubicar de forma sencilla tanto puntos de donación como solicitudes cercanas mediante un mapa interactivo, facilitando la coordinación de ayuda en situaciones de emergencia.

## Características Principales

- **Mapa Interactivo**: Visualización geolocalizada de puntos de donación y necesidades.
- **Interfaz para Voluntarios**: Diseñada especialmente para dispositivos móviles, permite a los voluntarios:
  - Ver puntos cercanos donde retirar (azul) y entregar artículos (rojo)
  - Visualizar solicitudes de limpieza (verde)
  - Marcar solicitudes como atendidas
  - Marcar artículos como agotados
- **Formularios de Contacto**: Permiten a los usuarios enviar mensajes y compartir información útil.
- **Actualización en Tiempo Real**: Mantiene la información actualizada para evitar duplicación de esfuerzos.

## Tecnologías Utilizadas

- **Frontend**:
  - Next.js 15
  - React 19
  - Tailwind CSS
  - Leaflet (para mapas interactivos)
  - Radix UI (componentes accesibles)

- **Backend**:
  - Next.js API Routes
  - Prisma ORM v6
  - PostgreSQL

## Requisitos Previos

- Node.js 18 o superior
- npm o yarn
- Base de datos PostgreSQL

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/voluntariosbahia.git
   cd voluntariosbahia
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Configurar variables de entorno:
   - Crear un archivo `.env.local` basado en `.env.example` con las credenciales necesarias.

4. Configurar la base de datos:
   ```bash
   npx prisma migrate dev
   ```

5. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

6. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Estructura del Proyecto

```
voluntariosbahia/
├── prisma/                # Esquemas y migraciones de Prisma
├── public/                # Archivos estáticos
├── src/
│   ├── app/               # Rutas y páginas de Next.js
│   │   ├── api/           # API Routes
│   │   ├── voluntario/    # Interfaz para voluntarios
│   │   ├── donacion/      # Páginas de donación
│   │   ├── limpieza/      # Páginas de solicitudes de limpieza
│   │   └── ...
│   ├── components/        # Componentes reutilizables
│   │   ├── mapa/          # Componentes del mapa interactivo
│   │   ├── ui/            # Componentes de interfaz de usuario
│   │   └── ...
│   ├── lib/               # Utilidades y configuraciones
│   └── ...
├── .env.example           # Ejemplo de variables de entorno
├── vercel.json            # Configuración de despliegue en Vercel
└── ...
```

## Despliegue en Vercel

Este proyecto está optimizado para ser desplegado en Vercel. Para hacerlo:

1. Crear una cuenta en [Vercel](https://vercel.com) si aún no tienes una.

2. Conectar tu repositorio de GitHub desde el dashboard de Vercel.

3. Configurar las variables de entorno necesarias:
   - `DATABASE_URL`: URL de conexión a la base de datos PostgreSQL
   - `DIRECT_URL`: URL directa de conexión a PostgreSQL
   - `JWT_SECRET`: Clave secreta para la generación de tokens

4. Personalizar la configuración de despliegue según sea necesario en el archivo `vercel.json`.

5. Desplegar el proyecto. Vercel automáticamente detectará que es una aplicación Next.js y aplicará la configuración correspondiente.

## Uso

### Para Voluntarios

1. Acceder a la página principal desde cualquier dispositivo.
2. Permitir el acceso a la ubicación cuando se solicite para ver puntos cercanos.
3. Utilizar el mapa para localizar:
   - Puntos de donación (azul): donde se pueden retirar artículos
   - Solicitudes de donación (rojo): donde se requieren artículos específicos
   - Solicitudes de limpieza (verde): donde se necesita ayuda con limpieza
4. Marcar las solicitudes como atendidas una vez completada la entrega.
5. Marcar artículos como agotados si ya no están disponibles en un punto de donación.

### Para Usuarios

1. Acceder a la sección de contacto para enviar mensajes o consultas.
2. Usar el formulario de información útil para compartir contactos relevantes para la comunidad.
3. Ver los puntos de donación disponibles y solicitudes vigentes en el mapa.

## Mantenimiento

El proyecto utiliza Prisma ORM para la gestión de la base de datos. Para actualizar el esquema:

1. Editar el archivo `prisma/schema.prisma`.
2. Ejecutar `npx prisma migrate dev --name nombre-del-cambio`.
3. Si es necesario, actualizar las rutas de API correspondientes.

## Contribución

Si deseas contribuir a este proyecto, por favor:

1. Haz un fork del repositorio
2. Crea una rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`)
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Licencia

Este proyecto está licenciado bajo [MIT License](LICENSE).

## Contacto

Para más información o soporte, contacta a [franclarke00@hotmail.com].

---

Desarrollado con ❤️ para ayudar en situaciones de emergencia. 
