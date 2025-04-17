"use client";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { MembershipComparison } from "@/components/membership-comparison";
import { Button } from "@/components/ui/button";
import { Check, CheckCircle, ArrowRight } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { useState } from "react";

export default function JoinPage() {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState("");
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthdate: "",
    address: "",
    city: "",
    zipCode: "",
    emergencyContact: "",
    emergencyPhone: "",
    hearAbout: "",
    fitnessGoals: [],
    agreeTerms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
    setStep(2);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", { ...formData, plan: selectedPlan });
    setStep(3);
    window.scrollTo(0, 0);
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
                "url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.4)",
            }}
          />
          <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">JOIN GRAVITYGYM</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Start your fitness journey today and transform your life with our expert trainers and state-of-the-art facilities.
            </p>
          </div>
        </section>

        {/* Step Indicator */}
        <section className="py-8 bg-zinc-900">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= 1 ? "bg-lime-500 text-black" : "bg-zinc-700 text-white"
                  }`}>
                    1
                  </div>
                  <span className="text-sm mt-2">Choose Plan</span>
                </div>
                
                <div className={`flex-1 h-1 mx-2 ${step >= 2 ? "bg-lime-500" : "bg-zinc-700"}`}></div>
                
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= 2 ? "bg-lime-500 text-black" : "bg-zinc-700 text-white"
                  }`}>
                    2
                  </div>
                  <span className="text-sm mt-2">Your Details</span>
                </div>
                
                <div className={`flex-1 h-1 mx-2 ${step >= 3 ? "bg-lime-500" : "bg-zinc-700"}`}></div>
                
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= 3 ? "bg-lime-500 text-black" : "bg-zinc-700 text-white"
                  }`}>
                    3
                  </div>
                  <span className="text-sm mt-2">Confirmation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 1: Select Plan */}
        {step === 1 && (
          <section className="py-16 bg-black">
            <div className="container mx-auto px-4 md:px-8">
              <h2 className="text-3xl font-bold mb-12 text-center">SELECT YOUR MEMBERSHIP</h2>
              <MembershipComparison />
              
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <Button 
                  onClick={() => handlePlanSelect("BASIC")}
                  className="bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 font-bold py-6"
                >
                  SELECT BASIC <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  onClick={() => handlePlanSelect("PREMIUM")}
                  className="bg-lime-500 hover:bg-lime-600 text-black font-bold py-6 relative"
                >
                  <span className="absolute -top-2 -right-2 bg-white text-black text-xs px-2 py-0.5 rounded-full">POPULAR</span>
                  SELECT PREMIUM <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  onClick={() => handlePlanSelect("ELITE")}
                  className="bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 font-bold py-6"
                >
                  SELECT ELITE <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Step 2: Registration Form */}
        {step === 2 && (
          <section className="py-16 bg-black">
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-center">YOUR INFORMATION</h2>
                <p className="text-gray-300 text-center mb-12">
                  You've selected the <span className="font-bold text-lime-500">{selectedPlan}</span> plan. 
                  Please complete your information below to proceed.
                </p>
                
                <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-xl font-bold mb-4 pb-2 border-b border-zinc-700">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block mb-2 text-sm font-medium">
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:ring-lime-500 focus:border-lime-500 outline-none"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block mb-2 text-sm font-medium">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:ring-lime-500 focus:border-lime-500 outline-none"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
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
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:ring-lime-500 focus:border-lime-500 outline-none"
                          />
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <label htmlFor="birthdate" className="block mb-2 text-sm font-medium">
                          Date of Birth *
                        </label>
                        <input
                          type="date"
                          id="birthdate"
                          name="birthdate"
                          value={formData.birthdate}
                          onChange={handleChange}
                          required
                          className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:ring-lime-500 focus:border-lime-500 outline-none"
                        />
                      </div>
                    </div>
                    
                    {/* Address Information */}
                    <div>
                      <h3 className="text-xl font-bold mb-4 pb-2 border-b border-zinc-700">Address Information</h3>
                      <div>
                        <label htmlFor="address" className="block mb-2 text-sm font-medium">
                          Street Address *
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:ring-lime-500 focus:border-lime-500 outline-none"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <label htmlFor="city" className="block mb-2 text-sm font-medium">
                            City *
                          </label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:ring-lime-500 focus:border-lime-500 outline-none"
                          />
                        </div>
                        <div>
                          <label htmlFor="zipCode" className="block mb-2 text-sm font-medium">
                            ZIP Code *
                          </label>
                          <input
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            required
                            className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:ring-lime-500 focus:border-lime-500 outline-none"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Emergency Contact */}
                    <div>
                      <h3 className="text-xl font-bold mb-4 pb-2 border-b border-zinc-700">Emergency Contact</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="emergencyContact" className="block mb-2 text-sm font-medium">
                            Emergency Contact Name *
                          </label>
                          <input
                            type="text"
                            id="emergencyContact"
                            name="emergencyContact"
                            value={formData.emergencyContact}
                            onChange={handleChange}
                            required
                            className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:ring-lime-500 focus:border-lime-500 outline-none"
                          />
                        </div>
                        <div>
                          <label htmlFor="emergencyPhone" className="block mb-2 text-sm font-medium">
                            Emergency Contact Phone *
                          </label>
                          <input
                            type="tel"
                            id="emergencyPhone"
                            name="emergencyPhone"
                            value={formData.emergencyPhone}
                            onChange={handleChange}
                            required
                            className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:ring-lime-500 focus:border-lime-500 outline-none"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Additional Information */}
                    <div>
                      <h3 className="text-xl font-bold mb-4 pb-2 border-b border-zinc-700">Additional Information</h3>
                      <div>
                        <label htmlFor="hearAbout" className="block mb-2 text-sm font-medium">
                          How did you hear about us?
                        </label>
                        <select
                          id="hearAbout"
                          name="hearAbout"
                          value={formData.hearAbout}
                          onChange={handleChange}
                          className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:ring-lime-500 focus:border-lime-500 outline-none"
                        >
                          <option value="">Please select</option>
                          <option value="friend">Friend or Family</option>
                          <option value="internet">Internet Search</option>
                          <option value="social">Social Media</option>
                          <option value="ad">Advertisement</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    {/* Terms & Conditions */}
                    <div className="bg-zinc-900 p-4 rounded-lg">
                      <div className="flex items-start mb-4">
                        <input
                          type="checkbox"
                          id="agreeTerms"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleChange}
                          required
                          className="mt-1 mr-2"
                        />
                        <label htmlFor="agreeTerms" className="text-sm text-gray-300">
                          I agree to the <a href="#" className="text-lime-500 hover:text-lime-400">Terms and Conditions</a> and <a href="#" className="text-lime-500 hover:text-lime-400">Privacy Policy</a>. I understand that my membership is subject to the gym's rules and regulations. *
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button 
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 bg-transparent hover:bg-zinc-900 border border-lime-500 text-lime-500 font-bold py-3"
                      >
                        BACK
                      </Button>
                      <Button 
                        type="submit"
                        className="flex-1 bg-lime-500 hover:bg-lime-600 text-black font-bold py-3"
                      >
                        CONTINUE
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <section className="py-16 bg-black">
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-2xl mx-auto text-center">
                <div className="bg-lime-500/10 p-4 rounded-full inline-block mb-8">
                  <CheckCircle className="h-16 w-16 text-lime-500" />
                </div>
                <h2 className="text-3xl font-bold mb-4">REGISTRATION COMPLETE!</h2>
                <p className="text-gray-300 mb-8">
                  Thank you for joining GravityGym! We're excited to have you as part of our fitness community. 
                  We've sent a confirmation email to <span className="font-bold">{formData.email}</span> with your membership details.
                </p>
                
                <CardContainer className="w-full">
                  <CardBody className="w-full h-full flex flex-col bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden p-8 text-left">
                    <CardItem translateZ="50" className="mb-6">
                      <h3 className="text-2xl font-bold mb-2">Your {selectedPlan} Membership</h3>
                      <p className="text-gray-400">Membership starts: {new Date().toLocaleDateString()}</p>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="mb-6">
                      <h4 className="font-bold text-lime-500 mb-3">NEXT STEPS:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-lime-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>Visit our gym to complete your registration and get your access card</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-lime-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>Schedule your complimentary fitness assessment</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-lime-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>Download our mobile app to book classes and track your progress</span>
                        </li>
                      </ul>
                    </CardItem>
                    
                    <CardItem translateZ="80" className="mt-auto">
                      <p className="text-gray-300 italic">
                        "The journey of a thousand miles begins with a single step. Congratulations on taking that step toward your fitness goals!"
                      </p>
                    </CardItem>
                  </CardBody>
                </CardContainer>
                
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                  <Button
                    className="bg-lime-500 hover:bg-lime-600 text-black font-bold px-8 py-3"
                    asChild
                  >
                    <a href="/schedule">VIEW CLASS SCHEDULE</a>
                  </Button>
                  <Button
                    className="bg-transparent hover:bg-zinc-800 border border-lime-500 text-lime-500 font-bold px-8 py-3"
                    asChild
                  >
                    <a href="/">RETURN TO HOME</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Membership Benefits */}
        {step !== 3 && (
          <section className="py-16 bg-zinc-900">
            <div className="container mx-auto px-4 md:px-8">
              <h2 className="text-3xl font-bold mb-12 text-center">MEMBERSHIP BENEFITS</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 flex flex-col">
                  <div className="bg-lime-500 text-black h-12 w-12 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">State-of-the-Art Facility</h3>
                  <p className="text-gray-300 mb-4">
                    Access to premium equipment, spacious workout areas, and luxury amenities in our modern facility.
                  </p>
                  <ul className="space-y-2 mt-auto">
                    <li className="flex items-center text-sm text-gray-300">
                      <Check className="h-4 w-4 text-lime-500 mr-2" />
                      <span>Latest fitness equipment</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <Check className="h-4 w-4 text-lime-500 mr-2" />
                      <span>Spacious workout areas</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <Check className="h-4 w-4 text-lime-500 mr-2" />
                      <span>Clean and hygienic environment</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 flex flex-col">
                  <div className="bg-lime-500 text-black h-12 w-12 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Expert Guidance</h3>
                  <p className="text-gray-300 mb-4">
                    Professional trainers and staff to guide you through your fitness journey with personalized advice.
                  </p>
                  <ul className="space-y-2 mt-auto">
                    <li className="flex items-center text-sm text-gray-300">
                      <Check className="h-4 w-4 text-lime-500 mr-2" />
                      <span>Certified personal trainers</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <Check className="h-4 w-4 text-lime-500 mr-2" />
                      <span>Fitness assessment</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <Check className="h-4 w-4 text-lime-500 mr-2" />
                      <span>Personalized workout plans</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 flex flex-col">
                  <div className="bg-lime-500 text-black h-12 w-12 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Variety of Classes</h3>
                  <p className="text-gray-300 mb-4">
                    Access to diverse fitness classes for all experience levels, from high-intensity to mind-body workouts.
                  </p>
                  <ul className="space-y-2 mt-auto">
                    <li className="flex items-center text-sm text-gray-300">
                      <Check className="h-4 w-4 text-lime-500 mr-2" />
                      <span>Group fitness classes</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <Check className="h-4 w-4 text-lime-500 mr-2" />
                      <span>Specialized workshops</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <Check className="h-4 w-4 text-lime-500 mr-2" />
                      <span>Virtual training options</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
} 