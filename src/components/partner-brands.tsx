"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const partners = [
  { name: "Nike", logo: "https://cdn.iconscout.com/icon/free/png-256/free-nike-8-202235.png" },
  { name: "Under Armour", logo: "https://cdn.iconscout.com/icon/free/png-256/free-under-armour-282153.png" },
  { name: "Adidas", logo: "https://cdn.iconscout.com/icon/free/png-256/free-adidas-282415.png" },
  { name: "Reebok", logo: "https://cdn.iconscout.com/icon/free/png-256/free-reebok-283121.png" },
  { name: "Puma", logo: "https://cdn.iconscout.com/icon/free/png-256/free-puma-282639.png" },
  { name: "New Balance", logo: "https://cdn.iconscout.com/icon/free/png-256/free-new-balance-283094.png" },
  { name: "Asics", logo: "https://cdn.iconscout.com/icon/free/png-256/free-asics-283044.png" },
  { name: "MyProtein", logo: "https://cdn.iconscout.com/icon/free/png-256/free-myprotein-3521562-2944975.png" },
  { name: "Optimum Nutrition", logo: "https://cdn.iconscout.com/icon/free/png-256/free-on-3717517-3100772.png" },
  { name: "Garmin", logo: "https://cdn.iconscout.com/icon/free/png-256/free-garmin-283119.png" },
  { name: "Fitbit", logo: "https://cdn.iconscout.com/icon/free/png-256/free-fitbit-282436.png" },
  { name: "Polar", logo: "https://cdn.iconscout.com/icon/free/png-256/free-polar-283117.png" }
];

export function PartnerBrands() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const scrollWidth = containerRef.current.scrollWidth;
    const viewportWidth = containerRef.current.offsetWidth;
    
    if (scrollWidth <= viewportWidth) return;
    
    const animateScroll = async () => {
      // Reset to beginning if we've scrolled too far
      if (x.get() <= -(scrollWidth - viewportWidth)) {
        x.set(0);
      }
      
      x.set(x.get() - 1);
      requestAnimationFrame(animateScroll);
    };
    
    const animationId = requestAnimationFrame(animateScroll);
    
    return () => cancelAnimationFrame(animationId);
  }, [x]);

  return (
    <section className="py-16 bg-zinc-800" id="partners">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">OUR PARTNERS</h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          We collaborate with the best brands in fitness to provide our members with premium equipment and exclusive deals.
        </p>

        <div className="relative overflow-hidden">
          {/* Gradient Mask */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-zinc-800 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-zinc-800 to-transparent z-10"></div>

          {/* Logo Carousel */}
          <div ref={containerRef} className="py-8 overflow-hidden">
            <motion.div 
              style={{ x: springX }} 
              className="flex items-center whitespace-nowrap gap-16"
            >
              {/* First Set of Logos */}
              {partners.map((partner, index) => (
                <div key={`partner-${index}`} className="flex flex-col items-center group cursor-pointer">
                  <div className="w-24 h-24 flex items-center justify-center bg-zinc-700 rounded-2xl p-4 hover:bg-zinc-600 transition-colors duration-300">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`} 
                      className="w-16 h-16 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-400 group-hover:text-white transition-colors duration-300">{partner.name}</p>
                </div>
              ))}
              
              {/* Duplicated set for infinite scroll effect */}
              {partners.map((partner, index) => (
                <div key={`partner-dup-${index}`} className="flex flex-col items-center group cursor-pointer">
                  <div className="w-24 h-24 flex items-center justify-center bg-zinc-700 rounded-2xl p-4 hover:bg-zinc-600 transition-colors duration-300">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`} 
                      className="w-16 h-16 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-400 group-hover:text-white transition-colors duration-300">{partner.name}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Gravity Gym members receive exclusive discounts and special offers from our partners.
            Check our member portal for current promotions.
          </p>
        </div>
      </div>
    </section>
  );
} 