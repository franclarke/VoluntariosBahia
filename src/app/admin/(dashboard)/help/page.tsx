import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HelpPage() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Centro de Ayuda</h1>
        <p className="text-muted-foreground">Encuentra respuestas a tus preguntas sobre el panel de administración.</p>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Preguntas Frecuentes</CardTitle>
            <CardDescription>Respuestas a las preguntas más comunes</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>¿Cómo agregar una nueva donación?</AccordionTrigger>
                <AccordionContent>
                  Para agregar una nueva donación, ve a la sección &quot;Donaciones&quot; en el menú lateral y haz clic en el botón &quot;Agregar Donación&quot;. Completa el formulario con los detalles de la donación y haz clic en &quot;Guardar&quot;.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>¿Cómo programar una limpieza?</AccordionTrigger>
                <AccordionContent>
                  Para programar una limpieza, ve a la sección &quot;Limpieza&quot; en el menú lateral y haz clic en el botón &quot;Programar Limpieza&quot;. Selecciona la fecha, hora y ubicación, y haz clic en &quot;Guardar&quot;.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>¿Cómo agregar un punto de donación?</AccordionTrigger>
                <AccordionContent>
                  Para agregar un punto de donación, ve a la sección &quot;Puntos de Donaciones&quot; en el menú lateral y haz clic en el botón &quot;Agregar Punto&quot;. Completa el formulario con la dirección y detalles del punto, y haz clic en &quot;Guardar&quot;.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>¿Cómo responder a los mensajes?</AccordionTrigger>
                <AccordionContent>
                  Para responder a los mensajes, ve a la sección &quot;Mensajes&quot; en el menú lateral. Haz clic en el mensaje al que deseas responder y utiliza el campo de texto en la parte inferior para escribir tu respuesta.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contacto de Soporte</CardTitle>
            <CardDescription>¿Necesitas más ayuda? Contáctanos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Correo Electrónico</h3>
                <p className="text-sm text-muted-foreground">soporte@voluntariosbahia.org</p>
              </div>
              <div>
                <h3 className="font-medium">Teléfono</h3>
                <p className="text-sm text-muted-foreground">+54 291 456-7890</p>
              </div>
              <div>
                <h3 className="font-medium">Horario de Atención</h3>
                <p className="text-sm text-muted-foreground">Lunes a Viernes: 9:00 - 18:00</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Guías y Tutoriales</CardTitle>
          <CardDescription>Aprende a utilizar todas las funciones del panel</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {tutorials.map((tutorial, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">{tutorial.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{tutorial.description}</p>
                <a href={tutorial.link} className="text-sm text-primary hover:underline">
                  Ver tutorial
                </a>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const tutorials = [
  {
    title: "Primeros pasos",
    description: "Aprende lo básico sobre el panel de administración",
    link: "#",
  },
  {
    title: "Gestión de donaciones",
    description: "Cómo administrar donaciones eficientemente",
    link: "#",
  },
  {
    title: "Organización de limpiezas",
    description: "Guía para programar y gestionar limpiezas",
    link: "#",
  },
  {
    title: "Administración de puntos de donación",
    description: "Cómo agregar y gestionar puntos de donación",
    link: "#",
  },
  {
    title: "Comunicación con voluntarios",
    description: "Mejores prácticas para la comunicación",
    link: "#",
  },
  {
    title: "Reportes y estadísticas",
    description: "Cómo interpretar los datos del dashboard",
    link: "#",
  },
] 