import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="py-20 bg-black" id="about">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-white drop-shadow-lg">
          ABOUT <span className="text-lime-400">OUR GYM</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-100 mb-6 text-lg font-medium drop-shadow">
              At <span className="text-lime-400 font-semibold">GravityGym</span>, we are dedicated to helping you achieve your fitness goals in a supportive and motivating environment. 
              Our state-of-the-art facility is equipped with the latest fitness technology and equipment to ensure you get the most 
              effective workout possible.
            </p>
            <p className="text-gray-100 mb-8 text-lg font-medium drop-shadow">
              Our team of certified trainers are passionate about fitness and committed to your success. Whether you are just starting 
              your fitness journey or looking to take your training to the next level, we have the expertise and resources to help you 
              get there.
            </p>
            <Button asChild className="bg-lime-500 hover:bg-lime-600 text-black font-extrabold px-8 py-4 text-lg shadow-lg">
              <Link href="#learn-more">READ MORE</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-lg overflow-hidden h-52">
              <Image
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop"
                alt="Gym equipment"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.85)" }}
              />
              <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
            </div>
            <div className="relative rounded-lg overflow-hidden h-52">
              <Image
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop"
                alt="Weight training"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.85)" }}
              />
              <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 