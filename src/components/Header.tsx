import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-4 shadow-md">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <Link href="/" className="text-2xl font-bold">
          Voluntarios Bahía
        </Link>
        <nav className="flex gap-2">
          <Button variant="secondary" size="sm" asChild>
            <Link href="/voluntario">Voluntario</Link>
          </Button>
          <Button variant="secondary" size="sm" asChild>
            <Link href="/admin">Administrador</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
} 