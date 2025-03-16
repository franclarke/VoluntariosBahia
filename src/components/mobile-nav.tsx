"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { navItems } from "@/lib/navigation-data"
import { SheetClose, SheetHeader } from "@/components/ui/sheet"
import Image from "next/image"

export function MobileNav() {
  const pathname = usePathname()

  return (
    <div className="h-full flex flex-col bg-white">
      <SheetHeader className="px-6 py-4 border-b sticky top-0 bg-white z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center h-10">
          <Link href="/" className="h-full w-auto">
                <Image 
                src="/logo.png" 
                alt="Voluntarios Donaciones Bahía" 
                width={100} 
                height={40} 
                className="h-full w-auto object-contain"
                priority
                />
          </Link>
          </div>
          <SheetClose className="rounded-full p-1.5 hover:bg-gray-100">
            <X className="h-5 w-5" />
            <span className="sr-only">Cerrar menú</span>
          </SheetClose>
        </div>
      </SheetHeader>

      <div className="flex-1 overflow-auto py-4 px-6">
        <nav className="space-y-2">
          {navItems.map((item) => (
            <SheetClose asChild key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center px-4 py-4 rounded-md text-sm transition-colors",
                  pathname === item.href
                    ? "bg-gray-100 text-gray-900 font-medium"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50",
                )}
              >
                {item.icon}
                <span className="ml-3 text-base">{item.name}</span>
              </Link>
            </SheetClose>
          ))}
        </nav>
      </div>
    </div>
  )
}

