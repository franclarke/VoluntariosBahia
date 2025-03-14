# VoluntariosBahía

## Descripción

VoluntariosBahía es una plataforma web interactiva diseñada para gestionar eficientemente la distribución de donaciones y el registro de necesidades puntuales en diferentes ubicaciones. Permite a los voluntarios ubicar de forma sencilla tanto puntos de donación como solicitudes cercanas mediante un mapa interactivo, facilitando la coordinación de ayuda en situaciones de emergencia.

## Características Principales

- **Panel de Administración**: Permite registrar puntos de distribución (ofertas) y puntos con necesidades específicas (solicitudes).
- **Mapa Interactivo**: Visualización geolocalizada de puntos de donación y necesidades.
- **Interfaz para Voluntarios**: Diseñada especialmente para dispositivos móviles, permite a los voluntarios:
  - Seleccionar qué tipo de artículos desean repartir
  - Ver puntos cercanos donde retirar y entregar artículos
  - Marcar solicitudes como atendidas
- **Actualización en Tiempo Real**: Mantiene la información actualizada para evitar duplicación de esfuerzos.

## Tecnologías Utilizadas

- **Frontend**:
  - Next.js 14
  - React 18
  - Tailwind CSS
  - Leaflet (para mapas interactivos)
  - Radix UI (componentes accesibles)

- **Backend**:
  - Next.js API Routes
  - Prisma ORM
  - Supabase

- **Autenticación**:
  - JWT (JSON Web Tokens)
  - bcrypt (para encriptación de contraseñas)

## Requisitos Previos

- Node.js 18 o superior
- npm o yarn
- Base de datos PostgreSQL (o acceso a Supabase)

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/voluntariosbahia.git
   cd voluntariosbahia
   ```

2. Instalar dependencias:
   ```bash
   npm install
   # o
   yarn install
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
   # o
   yarn dev
   ```

6. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Estructura del Proyecto

```
voluntariosbahia/
├── prisma/               # Esquemas y migraciones de Prisma
├── public/               # Archivos estáticos
├── src/
│   ├── app/              # Rutas y páginas de Next.js
│   │   ├── admin/        # Panel de administración
│   │   ├── api/          # API Routes
│   │   ├── voluntario/   # Interfaz para voluntarios
│   │   └── ...
│   ├── components/       # Componentes reutilizables
│   ├── lib/              # Utilidades y configuraciones
│   └── middleware.ts     # Middleware de Next.js
├── .env                  # Variables de entorno (ejemplo)
└── ...
```

## Uso

### Para Administradores

1. Acceder a `/admin` e iniciar sesión con las credenciales proporcionadas.
2. Utilizar el panel para registrar nuevos puntos de distribución o necesidades.
3. Gestionar el estado de las solicitudes y monitorear la actividad.

### Para Voluntarios

1. Acceder a la página principal desde cualquier dispositivo.
2. Permitir el acceso a la ubicación cuando se solicite.
3. Seleccionar el tipo de artículos que se desea repartir.
4. Utilizar el mapa para localizar puntos de retiro (azul) y entrega (rojo).
5. Marcar las solicitudes como atendidas una vez completada la entrega.

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
