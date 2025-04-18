"use client";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "general",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      interest: "general",
    });
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1571388208497-71bedc66e932?q=80&w=1672&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.4)",
            }}
          />
          <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">CONTACT US</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have questions or need more information? We are here to help you on your fitness journey.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700">
                <h2 className="text-2xl font-bold mb-6">GET IN TOUCH</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:ring-lime-500 focus:border-lime-500 outline-none"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:ring-lime-500 focus:border-lime-500 outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:ring-lime-500 focus:border-lime-500 outline-none"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="interest" className="block mb-2 text-sm font-medium">
                      I am interested in *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:ring-lime-500 focus:border-lime-500 outline-none"
                    >
                      <option value="general">General Information</option>
                      <option value="membership">Membership Options</option>
                      <option value="training">Personal Training</option>
                      <option value="classes">Group Classes</option>
                      <option value="business">Business Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:ring-lime-500 focus:border-lime-500 outline-none"
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-lime-500 hover:bg-lime-600 text-black font-bold py-3"
                  >
                    <Send className="mr-2 h-4 w-4" /> SEND MESSAGE
                  </Button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div className="flex flex-col justify-between">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6">CONTACT INFORMATION</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-lime-500 mr-4 mt-1" />
                      <div>
                        <h3 className="font-bold mb-1">Our Location</h3>
                        <p className="text-gray-300">123 Fitness Street, Gym City, 10001</p>
                        <a 
                          href="https://maps.google.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-lime-500 hover:text-lime-400 text-sm mt-1 inline-block"
                        >
                          Get Directions →
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-lime-500 mr-4 mt-1" />
                      <div>
                        <h3 className="font-bold mb-1">Phone Number</h3>
                        <p className="text-gray-300">(123) 456-7890</p>
                        <p className="text-sm text-gray-400">Customer service available 7AM-9PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-lime-500 mr-4 mt-1" />
                      <div>
                        <h3 className="font-bold mb-1">Email Address</h3>
                        <p className="text-gray-300">info@gravitygym.com</p>
                        <p className="text-sm text-gray-400">We typically respond within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-lime-500 mr-4 mt-1" />
                      <div>
                        <h3 className="font-bold mb-1">Opening Hours</h3>
                        <p className="text-gray-300">Monday - Friday: 6:00 AM - 10:00 PM</p>
                        <p className="text-gray-300">Saturday: 7:00 AM - 8:00 PM</p>
                        <p className="text-gray-300">Sunday: 8:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Map */}
                <div className="w-full h-64 md:h-80 bg-zinc-800 rounded-xl border border-zinc-700 overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941774136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1628909788096!5m2!1sen!2sca" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy"
                    title="GravityGym location map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Preview */}
        <section className="py-16 bg-zinc-900">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">COMMON QUESTIONS</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="bg-zinc-800 rounded-lg p-4 border border-zinc-700">
                <h3 className="font-bold text-lg mb-2">What are your membership options?</h3>
                <p className="text-gray-300">We offer Basic, Premium, and Elite membership plans to fit your fitness goals and budget. Visit our membership page for detailed information.</p>
              </div>
              <div className="bg-zinc-800 rounded-lg p-4 border border-zinc-700">
                <h3 className="font-bold text-lg mb-2">How do I sign up for classes?</h3>
                <p className="text-gray-300">You can book classes through our mobile app, website, or by calling our front desk. Members can book up to 7 days in advance.</p>
              </div>
              <div className="bg-zinc-800 rounded-lg p-4 border border-zinc-700">
                <h3 className="font-bold text-lg mb-2">Do you offer personal training?</h3>
                <p className="text-gray-300">Yes, we have certified personal trainers available for one-on-one sessions. You can book a complimentary fitness assessment to get started.</p>
              </div>
              <div className="text-center mt-8">
                <Button
                  className="bg-transparent hover:bg-zinc-800 border border-lime-500 text-lime-500 font-bold px-6 py-3"
                  asChild
                >
                  <a href="/faq">VIEW ALL FAQs</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 