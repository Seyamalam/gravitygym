import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section 
      className="py-20 bg-black relative" 
      id="get-started"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1470&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white drop-shadow-lg">
            GET YOUR FIRST <span className="text-lime-400">TRIAL VISIT</span>
          </h2>
          <p className="text-gray-100 mb-8 text-lg font-medium drop-shadow">
            Start your fitness journey today with a complimentary trial session. 
            Experience our facility, meet our trainers, and discover how we can 
            help you achieve your fitness goals.
          </p>
          <Button asChild size="lg" className="bg-lime-500 hover:bg-lime-600 text-black font-extrabold px-10 py-6 text-xl shadow-lg" aria-label="Sign Up">
            <Link href="/contact">SIGN UP</Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 