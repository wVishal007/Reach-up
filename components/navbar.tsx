"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Flame, BarChart3, Sparkles, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const routes = [
    { href: "/", label: "Create", icon: <Flame className="mr-2 h-4 w-4" /> },
    { href: "/analytics", label: "Analytics", icon: <BarChart3 className="mr-2 h-4 w-4" /> },
    { href: "/trends", label: "Trends", icon: <Sparkles className="mr-2 h-4 w-4" /> },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Flame className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">ShitpostAI</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {routes.map((route) => (
            <Link key={route.href} href={route.href}>
              <Button variant={pathname === route.href ? "default" : "ghost"} className="flex items-center">
                {route.icon}
                {route.label}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ModeToggle />

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t p-4 bg-background">
          <nav className="flex flex-col gap-2">
            {routes.map((route) => (
              <Link key={route.href} href={route.href} onClick={() => setIsMenuOpen(false)}>
                <Button variant={pathname === route.href ? "default" : "ghost"} className="w-full justify-start">
                  {route.icon}
                  {route.label}
                </Button>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

