"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { navItems } from "@/lib/navigation-data"
import Image from "next/image"

interface DesktopNavProps {
  isScrolled: boolean
}

export function DesktopNav({ isScrolled }: DesktopNavProps) {
  const pathname = usePathname()

  // Split navigation items into two groups
  const firstHalf = navItems.slice(0, 3)
  const secondHalf = navItems.slice(3)

  return (
    <nav className={cn(
      "flex items-center justify-center w-full h-full",
      isScrolled && "shadow-sm"
    )}>
      {/* First half of menu items */}
      <div className="flex items-center justify-end space-x-4 flex-1">
        {firstHalf.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center h-12",
              pathname === item.href
                ? "bg-gray-300/80 text-gray-900"
                : "text-gray-700 hover:text-gray-900 hover:bg-gray-300/50",
            )}
          >
            {item.icon}
            <span className="ml-2">{item.name}</span>
          </Link>
        ))}
      </div>

      {/* Centered logo */}
      <div className="mx-6 flex items-center justify-center h-14">
        <Link href="/" className="h-full w-auto">
          <Image 
            src="/logo.png" 
            alt="Voluntarios Bahía" 
            width={120} 
            height={56} 
            className="h-full w-auto object-contain" 
          />
        </Link>
      </div>

      {/* Second half of menu items */}
      <div className="flex items-center justify-start space-x-4 flex-1">
        {secondHalf.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center h-12",
              pathname === item.href
                ? "bg-gray-300/80 text-gray-900"
                : "text-gray-700 hover:text-gray-900 hover:bg-gray-300/50",
            )}
          >
            {item.icon}
            <span className="ml-2">{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

