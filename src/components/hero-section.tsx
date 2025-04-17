import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.6)"
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 z-10 pt-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            WORK WITH PROFESSIONALS
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Transform your body and mind with our expert trainers and state-of-the-art facilities.
            Join the premier fitness community today.
          </p>
          <Button asChild size="lg" className="bg-lime-500 hover:bg-lime-600 text-black font-bold px-8 py-6 text-lg">
            <Link href="#get-started">GET STARTED</Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 