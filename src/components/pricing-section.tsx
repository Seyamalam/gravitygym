import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "STANDARD",
    price: "120$",
    description: "Perfect for individuals looking to start their fitness journey.",
    features: [
      "Access to all basic equipment",
      "Group fitness classes",
      "Locker room access",
      "Fitness assessment",
      "Nutrition guidance"
    ]
  },
  {
    name: "CROSSFIT",
    price: "109$",
    description: "Ideal for those focused on CrossFit training and community.",
    features: [
      "All Standard features",
      "CrossFit classes",
      "Performance tracking",
      "Nutrition coaching",
      "Community events"
    ]
  }
];

export function PricingSection() {
  return (
    <section className="py-20 bg-zinc-900" id="pricing">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">OUR GYM PASSES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <CardContainer key={index} className="w-full">
              <CardBody className="w-full h-auto flex flex-col bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden">
                <CardItem translateZ="50" className="text-center px-6 pt-8">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-4 mb-2">
                    <CardItem translateZ="80" className="inline-block">
                      <span className="text-4xl font-bold text-lime-500">{plan.price}</span>
                      <span className="text-gray-400 ml-1">/month</span>
                    </CardItem>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </CardItem>
                
                <CardItem translateZ="60" className="px-6 py-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-lime-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardItem>
                
                <CardItem translateZ="100" className="px-6 pb-8 pt-2">
                  <Button className="w-full bg-lime-500 hover:bg-lime-600 text-black font-bold">
                    CHOOSE PLAN
                  </Button>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
} 