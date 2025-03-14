import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { MapPin, Users, ArrowRight, Home as HomeIcon } from "lucide-react";
import { WhatsappIcon } from "@/components/icons/WhatsappIcon";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-6 px-4 md:py-4">
      {/* Características principales */}
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">¿Cómo funciona?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="flex flex-col h-full border-t-4 border-t-blue-500 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Soy Voluntario</CardTitle>
              </div>
              <CardDescription>
                Quiero ayudar a transportar donaciones en Bahía Blanca
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                Como voluntario, podrás ver en un mapa interactivo:
              </p>
              <ul className="list-disc list-inside mt-2 text-sm text-muted-foreground space-y-1">
                <li>Centros de donación para recoger artículos (puntos azules)</li>
                <li>Solicitudes de personas que necesitan recibir donaciones (puntos rojos)</li>
                <li>Filtrar por tipos de artículos que puedes transportar</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full gap-2">
                <Link href="/voluntario">
                  <span>Acceder como Voluntario</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col h-full border-t-4 border-t-red-500 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-red-100 p-2 rounded-full">
                  <HomeIcon className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Necesito Donaciones</CardTitle>
              </div>
              <CardDescription>
                Solicitar artículos para mi familia o comunidad
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                Puedes solicitar:
              </p>
              <ul className="list-disc list-inside mt-2 text-sm text-muted-foreground space-y-1">
                <li>Diferentes tipos de artículos (ropa, alimentos, etc.)</li>
                <li>Especificar cantidades necesarias</li>
                <li>Proporcionar información de contacto y ubicación</li>
                <li>Un voluntario te llevará lo que necesitas</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full gap-2">
                <Link href="/solicitar">
                  <span>Solicitar Donaciones</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col h-full border-t-4 border-t-green-500 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Centro de Distribución</CardTitle>
              </div>
              <CardDescription>
                Registrar un centro para recibir y distribuir donaciones
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                Solicita el registro de tu centro para:
              </p>
              <ul className="list-disc list-inside mt-2 text-sm text-muted-foreground space-y-1">
                <li>Recibir donaciones de voluntarios</li>
                <li>Especificar qué artículos aceptas</li>
                <li>Indicar horarios de atención</li>
                <li>Aparecer en el mapa para los voluntarios</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-2">
                *Tu solicitud será revisada por un administrador
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="secondary" className="w-full gap-2">
                <Link href="/solicitar-centro">
                  <span>Solicitar Registro</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Sección de información adicional */}
      <div className="w-full max-w-6xl mx-auto mt-8 bg-muted rounded-xl p-6">
        <div className="text-center space-y-3">
          <h2 className="text-xl md:text-2xl font-bold">¿Quieres ayudar en Bahía Blanca?</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Contamos con grupos de whatsapp de voluntarios que se coordinan para transportar donaciones.
          </p>
          <div className="flex flex-col items-center justify-center mt-4">
          <a 
            href="https://linktr.ee/voluntariosbahia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium rounded-full px-4 py-2 transition-colors"
          >
            <WhatsappIcon className="h-5 w-5 mr-2" />
            <span>Contactar por WhatsApp</span>
          </a>
        </div>
        </div>
      </div>
    </div>
  );
}
