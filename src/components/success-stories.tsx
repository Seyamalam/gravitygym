"use client";

import { Button } from "@/components/ui/button";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
const successStories = [
  {
    name: "Sarah Johnson",
    age: 34,
    timeframe: "12 months",
    beforeImage: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=1374&auto=format&fit=crop",
    metrics: [
      { label: "Weight Loss", value: "65 lbs" },
      { label: "Body Fat", value: "-18%" },
      { label: "Muscle Mass", value: "+8 lbs" }
    ],
    quote: "After having two kids, I never thought I'd get back in shape. GravityGym's trainers designed a program that fit my busy schedule, and the results have been life-changing.",
    story: "Sarah joined after struggling with postpartum weight for 3 years. With a combination of HIIT training and nutrition guidance, she achieved her goals while balancing family life.",
    src: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=1374&auto=format&fit=crop",
    designation: "Weight Loss Journey"
  },
  {
    name: "David Chen",
    age: 42,
    timeframe: "8 months",
    beforeImage: "https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?q=80&w=1009&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1534368420009-621bfab424a8?q=80&w=1000&auto=format&fit=crop",
    metrics: [
      { label: "Strength Gain", value: "+140%" },
      { label: "Resting HR", value: "-15 bpm" },
      { label: "Blood Pressure", value: "Normalized" }
    ],
    quote: "After my heart scare, I knew I needed to make a change. The team at GravityGym didn't just help me lose weight—they helped me save my life.",
    story: "David came to us after a health warning from his doctor. His transformation focused on cardiac health first, with strength training added gradually as his condition improved.",
    src: "https://images.unsplash.com/photo-1534368420009-621bfab424a8?q=80&w=1000&auto=format&fit=crop",
    designation: "Health Transformation"
  },
  {
    name: "Maria Torres",
    age: 28,
    timeframe: "6 months",
    beforeImage: "https://images.unsplash.com/photo-1517343985841-f8b2d66e010b?q=80&w=1469&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=1470&auto=format&fit=crop",
    metrics: [
      { label: "Competition", value: "1st Place" },
      { label: "Deadlift", value: "+85 lbs" },
      { label: "Mile Time", value: "-1:45" }
    ],
    quote: "I came to GravityGym looking to get in better shape, but ended up discovering my passion for competitive fitness. Now I'm training for my second competition!",
    story: "Maria transformed from a casual exerciser to a fitness competitor through our Elite program. Her dedicated training regimen and precise nutrition planning led to her first competitive win.",
    src: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=1470&auto=format&fit=crop",
    designation: "Fitness Competitor"
  }
];

export function SuccessStories() {
  return (
    <section className="py-20 bg-black" id="success-stories">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-white drop-shadow-lg tracking-tight">
          SUCCESS <span className="text-lime-400">STORIES</span>
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto text-lg font-medium drop-shadow">
          Real results from real members. See how <span className="text-lime-400 font-semibold">GravityGym</span> has transformed lives through dedicated training and support.
        </p>

        {/* Animated Testimonials Section */}
        <div className="mb-16">
          <AnimatedTestimonials testimonials={successStories} autoplay={true} />
        </div>

        {/* Success Stories Details */}
        <div className="space-y-16">
          {successStories.map((story, index) => (
            <CardContainer key={index} className="w-full">
              <CardBody className={`w-full flex flex-col md:flex-row gap-4 md:gap-8 bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden p-2 sm:p-4 md:p-6 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Before/After Images */}
                <CardItem translateZ="80" className="w-full md:w-1/2 mb-4 md:mb-0">
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-1 sm:gap-2 h-full">
                      <div className="relative h-40 sm:h-64 md:h-80 overflow-hidden rounded-lg">
                        <span className="absolute top-2 left-2 z-10 bg-black/70 text-white text-xs px-2 py-1 rounded">BEFORE</span>
                        <Image 
                          src={story.beforeImage} 
                          alt={`${story.name} before`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-40 sm:h-64 md:h-80 overflow-hidden rounded-lg">
                        <span className="absolute top-2 left-2 z-10 bg-lime-500 text-black text-xs px-2 py-1 rounded font-bold">AFTER</span>
                        <Image 
                          src={story.afterImage} 
                          alt={`${story.name} after`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-zinc-900 text-lime-400 px-4 py-1 rounded-full border border-lime-500/50 whitespace-nowrap font-semibold shadow-lg">
                      <span className="text-lime-400 font-bold">{story.timeframe}</span> transformation
                    </div>
                  </div>
                </CardItem>

                {/* Content */}
                <CardItem translateZ="60" className="w-full md:w-1/2 flex flex-col">
                  <div className="mb-2 sm:mb-4">
                    <h3 className="text-lg sm:text-2xl font-bold text-lime-400">
                      {story.name}, {story.age}
                    </h3>
                    <p className="text-lime-400 font-semibold text-sm sm:text-base">Member since {new Date().getFullYear() - Math.floor(Math.random() * 3) - 1}</p>
                  </div>

                  <div className="bg-zinc-900/50 rounded-lg p-2 sm:p-4 mb-2 sm:mb-4 border border-lime-500/30">
                    <h4 className="text-xs sm:text-sm font-semibold text-lime-400 mb-2 sm:mb-3">ACHIEVEMENT METRICS</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {story.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="text-base sm:text-xl font-bold text-lime-400">{metric.value}</div>
                          <div className="text-xs text-gray-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <CardItem translateZ="100" className="mb-2 sm:mb-4 italic text-lime-300 border-l-2 border-lime-500 pl-2 sm:pl-4 text-sm sm:text-base">
                    &quot;{story.quote}&quot;
                  </CardItem>

                  <p className="text-gray-200 mb-4 sm:mb-6 text-sm sm:text-base">{story.story}</p>

                  <div className="mt-auto">
                    <Button variant="link" className="text-lime-400 hover:text-lime-300 p-0 h-auto font-semibold w-full sm:w-auto">
                      Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Ready to write your own <span className="text-lime-400 font-semibold">success story</span>? Join <span className="text-lime-400 font-semibold">GravityGym</span> today and start your transformation journey.
          </p>
          <Button className="bg-lime-500 hover:bg-lime-600 text-black font-bold px-4 py-4 sm:px-8 sm:py-6 text-base sm:text-lg shadow-lg w-full sm:w-auto">
            START YOUR JOURNEY
          </Button>
        </div>
      </div>
    </section>
  );
} 