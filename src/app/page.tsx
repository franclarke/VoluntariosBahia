import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-8 md:py-12">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Voluntarios Bahía
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Plataforma para conectar voluntarios con personas necesitadas en situaciones de emergencia
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        <Card className="flex flex-col h-full">
          <CardHeader>
            <CardTitle>Soy Voluntario</CardTitle>
            <CardDescription>
              Quiero ayudar a distribuir donaciones a quienes lo necesitan
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-sm text-muted-foreground">
              Como voluntario, podrás ver en un mapa interactivo los puntos donde:
            </p>
            <ul className="list-disc list-inside mt-2 text-sm text-muted-foreground">
              <li>Retirar artículos para donar (puntos azules)</li>
              <li>Entregar donaciones a quienes lo necesitan (puntos rojos)</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/voluntario">
                Acceder como Voluntario
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col h-full">
          <CardHeader>
            <CardTitle>Requerir Donaciones</CardTitle>
            <CardDescription>
              Necesito solicitar artículos para mi familia o comunidad
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-sm text-muted-foreground">
              Puedes solicitar:
            </p>
            <ul className="list-disc list-inside mt-2 text-sm text-muted-foreground">
              <li>Diferentes tipos de artículos (ropa, colchones, etc.)</li>
              <li>Especificar cantidades necesarias</li>
              <li>Proporcionar información de contacto y ubicación</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/solicitar">
                Solicitar Donaciones
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
