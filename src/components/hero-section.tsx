"use client";

import { Button } from "@/components/ui/button";
import { BoxReveal } from "@/components/magicui/box-reveal";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-black">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/70 z-0" aria-hidden="true" />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 z-10 pt-20">
        <div className="max-w-2xl">
          <BoxReveal 
            width="100%" 
            boxColor="#84cc16" 
            duration={0.7}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">
              WORK WITH <span className="text-lime-400">PROFESSIONALS</span>
            </h1>
          </BoxReveal>
          
          <BoxReveal 
            width="100%" 
            boxColor="#84cc16" 
            duration={0.8}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-gray-100 font-medium drop-shadow">
              Transform your body and mind with our <span className="text-lime-400 font-semibold">expert trainers</span> and state-of-the-art facilities.<br />
              <span className="text-lime-400">Join the premier fitness community today.</span>
            </p>
          </BoxReveal>
          
          <BoxReveal 
            width="fit-content" 
            boxColor="#84cc16" 
            duration={0.9}
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-lime-500 hover:bg-lime-600 text-black font-extrabold px-10 py-6 text-xl shadow-lg"
              aria-label="Get Started"
            >
              <Link href="#get-started">GET STARTED</Link>
            </Button>
          </BoxReveal>
        </div>
      </div>
    </section>
  );
} 