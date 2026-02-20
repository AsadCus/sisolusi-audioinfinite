'use client'

import { useState } from 'react'
import { Menu, X, AudioWaveform } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#categories', label: 'Categories' },
    { href: '#products', label: 'Products' },
    { href: '#about', label: 'About Us' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-none border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-14">

          <div className="flex items-center gap-2">
            <AudioWaveform className="w-8 h-8 text-zinc-800" />
            <span className="text-xl font-bold text-zinc-800">Audio Infinite</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-zinc-600 hover:text-zinc-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Contact Us
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-75 sm:w-100">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-zinc-00 hover:text-zinc-800 transition-colors py-2"
                  >
                    {link.label}
                  </a>
                ))} 
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-4">
                  Contact Us
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}