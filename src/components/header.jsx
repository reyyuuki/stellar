import React from 'react'
import { ModeToggle } from './ui/toogle'
import Link from 'next/link'
import { Button } from './ui/button'
import { Sparkles } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-16 items-center justify-between">
      <Link className="flex items-center justify-center space-x-2" href="#">
        <Sparkles className="h-6 w-6 text-primary" />
        <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Stellar</span>
      </Link>
      <nav className="hidden md:flex space-x-6">
        <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">New Arrivals</Link>
        <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">Collections</Link>
        <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">About Us</Link>
        <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">Contact</Link>
      </nav>
      <div className="flex items-center space-x-4">
        <ModeToggle />
        <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">Sign In</Button>
      </div>
    </div>
  </header>
  )
}