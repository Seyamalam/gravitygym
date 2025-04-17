import { Card, CardContent } from "@/components/ui/card";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I've been a member of GravityGym for over a year now, and it has completely transformed my fitness journey. The trainers are incredibly knowledgeable and supportive.",
    name: "Sarah Johnson",
    role: "Member since 2022",
    avatar: "SJ"
  },
  {
    quote: "The CrossFit program at GravityGym is top-notch! The community is supportive, and the coaches really push you to achieve your best while ensuring proper form.",
    name: "Michael Rodriguez",
    role: "CrossFit Enthusiast",
    avatar: "MR"
  },
  {
    quote: "As someone who was intimidated by gyms, the staff at GravityGym made me feel welcome from day one. Now I look forward to my workouts and have seen amazing results!",
    name: "Emily Chen",
    role: "Fitness Beginner",
    avatar: "EC"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-black" id="testimonials">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">REVIEWS FROM CLIENTS</h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Hear what our members have to say about their experience at GravityGym.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <CardContainer key={index} className="w-full">
              <CardBody className="w-full h-full flex flex-col bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden p-6 relative">
                <CardItem 
                  translateZ="50" 
                  className="absolute top-6 right-6"
                >
                  <Quote className="h-10 w-10 text-lime-500/50" />
                </CardItem>
                
                <CardItem translateZ="60" className="mb-6 pt-8 text-gray-300">
                  "{testimonial.quote}"
                </CardItem>
                
                <CardItem translateZ="80" className="mt-auto">
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4 border-2 border-lime-500">
                      <AvatarFallback className="bg-lime-500/20 text-lime-500">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
} 