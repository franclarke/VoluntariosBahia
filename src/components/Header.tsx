"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { MobileNav } from "@/components/mobile-nav"
import { DesktopNav } from "@/components/desktop-nav"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import Link from "next/link"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  // Detect scroll to apply effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-[1000] w-full transition-all duration-300", // Increased z-index to stay above map
        isScrolled ? "shadow-md" : "",
      )}
    >
      {/* Navigation bar with subtle gray background */}
      <div className={cn("w-full bg-gray-200/75 backdrop-blur-sm transition-colors", isScrolled ? "shadow-sm" : "")}>
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Desktop Navigation with centered logo */}
          <div className="hidden md:flex w-full items-center justify-center">
            <DesktopNav isScrolled={isScrolled} />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden w-full flex items-center justify-between">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 h-12 px-4"
                >
                  <Menu className="h-5 w-5" />
                  <span>Menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[85%] max-w-sm p-0 z-[1001]" // Ensure sheet is above map
              >
                <SheetHeader>
                  <SheetTitle>Menú</SheetTitle>
                </SheetHeader>
                <MobileNav />
              </SheetContent>
            </Sheet>

            {/* Mobile centered logo */}
            <div className="flex justify-center items-center flex-1">
              <Link href="/">
                <div 
                  className="h-20 w-40 bg-contain bg-center bg-no-repeat" 
                  style={{backgroundImage: "url('/logo.png')"}}
                ></div>
              </Link>
            </div>

            {/* Empty div for flex spacing */}
            <div className="w-[73px]"></div>
          </div>
        </div>
      </div>
    </header>
  )
}

