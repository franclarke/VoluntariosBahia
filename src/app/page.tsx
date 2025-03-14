import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { MapPin, Users, ArrowRight, Home as HomeIcon } from "lucide-react";
import { WhatsappIcon } from "@/components/icons/WhatsappIcon";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 py-4 sm:py-6 px-3 sm:px-4">
      {/* Características principales */}
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-8">¿Cómo funciona?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <Card className="flex flex-col h-full border-t-4 border-t-blue-500 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2 sm:pb-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                <CardTitle className="text-base sm:text-lg">Soy Voluntario</CardTitle>
              </div>
              <CardDescription className="text-sm">
                Quiero ayudar a transportar donaciones en Bahía Blanca
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow pb-2 sm:pb-4">
              <p className="text-xs sm:text-sm text-muted-foreground">
                Como voluntario, podrás ver en un mapa interactivo:
              </p>
              <ul className="list-disc list-inside mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground space-y-1">
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
            <CardHeader className="pb-2 sm:pb-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-red-100 p-2 rounded-full">
                  <HomeIcon className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
                </div>
                <CardTitle className="text-base sm:text-lg">Necesito Donaciones</CardTitle>
              </div>
              <CardDescription className="text-sm">
                Solicitar artículos para mi familia o comunidad
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow pb-2 sm:pb-4">
              <p className="text-xs sm:text-sm text-muted-foreground">
                Puedes solicitar:
              </p>
              <ul className="list-disc list-inside mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground space-y-1">
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

          <Card className="flex flex-col h-full border-t-4 border-t-green-500 shadow-sm hover:shadow-md transition-shadow sm:col-span-2 md:col-span-1 sm:max-w-md sm:mx-auto md:max-w-none md:mx-0 w-full">
            <CardHeader className="pb-2 sm:pb-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                </div>
                <CardTitle className="text-base sm:text-lg">Centro de Distribución</CardTitle>
              </div>
              <CardDescription className="text-sm">
                Registrar un centro para recibir y distribuir donaciones
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow pb-2 sm:pb-4">
              <p className="text-xs sm:text-sm text-muted-foreground">
                Solicita el registro de tu centro para:
              </p>
              <ul className="list-disc list-inside mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground space-y-1">
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
      <div className="w-full max-w-6xl mx-auto mt-4 sm:mt-8 bg-muted rounded-xl p-4 sm:p-6">
        <div className="text-center space-y-2 sm:space-y-3">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">¿Quieres ayudar en Bahía Blanca?</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-[700px] mx-auto">
            Contamos con grupos de whatsapp de voluntarios que se coordinan para transportar donaciones.
          </p>
          <div className="flex flex-col items-center justify-center mt-3 sm:mt-4">
          <a 
            href="https://linktr.ee/voluntariosbahia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium rounded-full px-3 py-1.5 sm:px-4 sm:py-2 transition-colors text-sm sm:text-base"
          >
            <WhatsappIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2" />
            <span>Contactar por WhatsApp</span>
          </a>
        </div>
        </div>
      </div>
    </div>
  );
}
