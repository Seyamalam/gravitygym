"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, Dumbbell } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Schedule", href: "/schedule" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Dumbbell className="h-7 w-7 text-lime-500 group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-xl font-bold bg-gradient-to-r from-white to-lime-400 bg-clip-text text-transparent">
            GRAVITYGYM
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className="text-white hover:text-lime-400 transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-lime-400 after:transition-all hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-lime-500 hover:bg-lime-600 text-black font-bold">
            JOIN NOW
          </Button>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-zinc-900/95 text-white p-0 backdrop-blur-md border-zinc-800">
              <div className="flex items-center gap-2 p-8">
                <Dumbbell className="h-7 w-7 text-lime-500" />
                <span className="text-xl font-bold bg-gradient-to-r from-white to-lime-400 bg-clip-text text-transparent">
                  GRAVITYGYM
                </span>
              </div>
              <nav className="flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="py-4 px-8 text-xl hover:bg-zinc-800 transition-colors border-b border-zinc-800"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="px-8 py-6">
                  <Button className="w-full bg-lime-500 hover:bg-lime-600 text-black font-bold">
                    JOIN NOW
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
} 