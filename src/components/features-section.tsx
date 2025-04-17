import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Dumbbell, UserCircle, Target } from "lucide-react";

const features = [
  {
    icon: <Dumbbell className="h-8 w-8" />,
    title: "MUSCULAR BUILDING",
    description: "Our specialized programs focus on progressive resistance training to maximize muscle growth and strength.",
    link: "#muscular-building"
  },
  {
    icon: <UserCircle className="h-8 w-8" />,
    title: "PERSONAL TRAINING",
    description: "Work one-on-one with our certified trainers who will create customized workout plans to match your goals.",
    link: "#personal-training"
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "WORKOUT PLANNING",
    description: "Get a comprehensive fitness plan that includes exercise routines, nutrition guidance, and recovery strategies.",
    link: "#workout-planning"
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-zinc-900" id="features">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">WHY CHOOSE US</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <CardContainer key={index} className="w-full">
              <CardBody className="w-full h-full flex flex-col bg-zinc-800 border border-zinc-700 hover:border-lime-500 transition-colors rounded-xl overflow-hidden p-6">
                <CardItem translateZ="60" className="flex items-center gap-4 mb-4">
                  <CardItem translateZ="100" className="h-12 w-12 rounded-full bg-lime-500 text-black flex items-center justify-center">
                    {feature.icon}
                  </CardItem>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </CardItem>
                
                <CardItem translateZ="50" className="text-gray-300 text-base mb-4">
                  {feature.description}
                </CardItem>
                
                <CardItem translateZ="80" className="mt-auto">
                  <a 
                    href={feature.link} 
                    className="block text-lime-500 hover:text-lime-400 font-semibold"
                  >
                    Learn more →
                  </a>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
} 