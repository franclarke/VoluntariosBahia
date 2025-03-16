"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Map, Trash, Info, MessageSquare, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  {
    name: "Mapa",
    href: "/",
    icon: <Map className="h-4 w-4 mr-2" />
  },
  {
    name: "Solicitar Donación",
    href: "/donacion",
    icon: <MapPin className="h-4 w-4 mr-2" />
  },
  {
    name: "Solicitar Limpieza",
    href: "/limpieza",
    icon: <Trash className="h-4 w-4 mr-2" />
  },
  {
    name: "Solicitar Punto de Donación",
    href: "/punto-donacion",
    icon: <MapPin className="h-4 w-4 mr-2" />
  },
  {
    name: "Información Útil",
    href: "/informacion",
    icon: <Info className="h-4 w-4 mr-2" />
  },
  {
    name: "Contacto",
    href: "/contacto",
    icon: <MessageSquare className="h-4 w-4 mr-2" />
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-background py-1">
      <div className="container mx-auto px-4">
        {/* Navegación escritorio - centrada */}
        <div className="hidden md:flex justify-center w-full space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-4 py-2.5 text-sm rounded-md flex items-center transition-colors font-medium",
                pathname === item.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* Menú móvil - solo visible en móvil */}
        <div className="md:hidden">
          <div className="flex justify-between items-center">
            <Button variant="ghost" size="sm" onClick={toggleMenu} className="flex items-center text-sm font-medium text-muted-foreground">
              <Menu className="h-4 w-4 mr-2" />
              <span>Menú</span>
            </Button>
          </div>
          
          {/* Drawer lateral con overlay */}
          {isOpen && (
            <div className="fixed inset-0 z-50">
              {/* Overlay oscuro con efecto de desenfoque */}
              <div 
                className="fixed inset-0 bg-black/40 backdrop-blur-sm" 
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
              />
              
              {/* Panel lateral con animación */}
              <div className="fixed inset-y-0 left-0 w-3/4 max-w-sm bg-background shadow-xl p-5 overflow-y-auto animate-in slide-in-from-left">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-medium">Menú</h2>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "block px-3 py-3 text-sm rounded-md flex items-center",
                        pathname === item.href
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
} 