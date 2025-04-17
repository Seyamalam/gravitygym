import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Dumbbell } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-12 shadow-lg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Dumbbell className="h-6 w-6 text-lime-500" />
              <h3 className="text-xl font-extrabold bg-gradient-to-r from-white to-lime-400 bg-clip-text text-transparent drop-shadow">
                GRAVITYGYM
              </h3>
            </div>
            <p className="text-gray-300 mb-4 text-base font-medium drop-shadow">
              Professional fitness training and gym services to help you achieve your fitness goals.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-lime-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-lime-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-lime-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-extrabold mb-4 text-white drop-shadow">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-lime-500 transition-colors flex items-center font-medium">
                  <span className="h-1 w-1 bg-lime-500 rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-lime-500 transition-colors flex items-center font-medium">
                  <span className="h-1 w-1 bg-lime-500 rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-lime-500 transition-colors flex items-center font-medium">
                  <span className="h-1 w-1 bg-lime-500 rounded-full mr-2"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-lime-500 transition-colors flex items-center font-medium">
                  <span className="h-1 w-1 bg-lime-500 rounded-full mr-2"></span>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-lime-500 transition-colors flex items-center font-medium">
                  <span className="h-1 w-1 bg-lime-500 rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-extrabold mb-4 text-white drop-shadow">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-lime-500 mr-3 mt-0.5" />
                <span className="text-gray-300 font-medium">
                  123 Fitness Street, Gym City, 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-lime-500 mr-3" />
                <span className="text-gray-300 font-medium">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-lime-500 mr-3" />
                <span className="text-gray-300 font-medium">info@gravitygym.com</span>
              </li>
            </ul>
          </div>
          
          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-extrabold mb-4 text-white drop-shadow">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-300 font-medium">Monday - Friday:</span>
                <span className="text-white font-bold">6:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300 font-medium">Saturday:</span>
                <span className="text-white font-bold">7:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300 font-medium">Sunday:</span>
                <span className="text-white font-bold">8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-zinc-800" />
        
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} GravityGym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 