"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, Dumbbell } from "lucide-react";
import React, { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Schedule", href: "/schedule" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY < 40) {
            setShow(true);
          } else if (currentScrollY > lastScrollY) {
            setShow(false); // scrolling down
          } else {
            setShow(true); // scrolling up
          }
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8 bg-black/90 backdrop-blur-md shadow-lg transition-transform duration-300 ${show ? '' : '-translate-y-full'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Dumbbell className="h-7 w-7 text-lime-500 group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-xl font-extrabold bg-gradient-to-r from-white to-lime-400 bg-clip-text text-transparent drop-shadow">
            GRAVITYGYM
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className="text-white hover:text-lime-400 transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-lime-400 after:transition-all hover:after:w-full font-semibold text-lg drop-shadow"
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-lime-500 hover:bg-lime-600 text-black font-extrabold shadow-lg px-6 py-2 text-lg">
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
                <span className="text-xl font-extrabold bg-gradient-to-r from-white to-lime-400 bg-clip-text text-transparent drop-shadow">
                  GRAVITYGYM
                </span>
              </div>
              <nav className="flex flex-col w-full">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="py-4 px-8 text-base md:text-xl hover:bg-zinc-800 transition-colors border-b border-zinc-800 font-semibold drop-shadow w-full min-h-[44px] flex items-center"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="px-8 py-6">
                  <Button className="w-full bg-lime-500 hover:bg-lime-600 text-black font-extrabold shadow-lg text-base md:text-lg py-4 min-h-[44px]">
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