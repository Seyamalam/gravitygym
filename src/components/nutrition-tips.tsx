"use client";

import { Button } from "@/components/ui/button";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const nutritionCategories = [
  {
    id: "pre-workout",
    label: "Pre-Workout",
    content: [
      {
        title: "Protein Oatmeal Bowl",
        description: "Quick-digesting carbs with protein for sustained energy",
        image: "https://images.unsplash.com/photo-1620807773206-91cac59902d1?q=80&w=1000&auto=format&fit=crop",
        items: ["Rolled oats", "Protein powder", "Banana", "Almond butter", "Cinnamon"]
      },
      {
        title: "Energy Smoothie",
        description: "Perfect blend of carbs and protein for pre-workout fuel",
        image: "https://images.unsplash.com/photo-1626222627180-9e5ca7b7b390?q=80&w=1000&auto=format&fit=crop",
        items: ["Frozen berries", "Banana", "Greek yogurt", "Honey", "Spinach"]
      },
      {
        title: "Whole Grain Toast & Eggs",
        description: "Complete protein with complex carbs for steady energy",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1000&auto=format&fit=crop",
        items: ["Whole grain bread", "Eggs", "Avocado", "Cherry tomatoes", "Salt & pepper"]
      }
    ]
  },
  {
    id: "post-workout",
    label: "Post-Workout",
    content: [
      {
        title: "Recovery Protein Shake",
        description: "Fast-absorbing protein to support muscle recovery",
        image: "https://images.unsplash.com/photo-1563410344629-5bcc6e05a016?q=80&w=1000&auto=format&fit=crop",
        items: ["Whey protein", "Banana", "Almond milk", "Ice", "Cinnamon"]
      },
      {
        title: "Chicken & Sweet Potato Bowl",
        description: "Perfect balance of protein and complex carbs to refuel",
        image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1000&auto=format&fit=crop",
        items: ["Grilled chicken", "Sweet potato", "Broccoli", "Olive oil", "Herbs"]
      },
      {
        title: "Salmon & Quinoa Plate",
        description: "Omega-3 rich protein with complete amino acids",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1000&auto=format&fit=crop",
        items: ["Salmon fillet", "Quinoa", "Asparagus", "Lemon", "Dill"]
      }
    ]
  },
  {
    id: "meal-planning",
    label: "Meal Planning",
    content: [
      {
        title: "Muscle Building Plan",
        description: "High protein meals to support muscle growth",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1000&auto=format&fit=crop",
        items: ["40% protein", "30% carbs", "30% fats", "4-6 meals per day", "High calorie surplus"]
      },
      {
        title: "Fat Loss Strategy",
        description: "Nutrient-dense, lower calorie options for lean physique",
        image: "https://images.unsplash.com/photo-1511909525232-61113c912358?q=80&w=1000&auto=format&fit=crop",
        items: ["High protein", "Moderate carbs", "Lower fats", "Calorie deficit", "High fiber foods"]
      },
      {
        title: "Performance Optimization",
        description: "Balanced nutrients to maximize workout performance",
        image: "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?q=80&w=1000&auto=format&fit=crop",
        items: ["Complex carbs", "Lean proteins", "Healthy fats", "Nutrient timing", "Hydration focus"]
      }
    ]
  }
];

export function NutritionTips() {
  return (
    <section className="py-20 bg-zinc-900" id="nutrition">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">NUTRITION & DIET TIPS</h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Fuel your workouts and recovery with our expert nutrition guidance. Proper nutrition is 80% of your fitness success.
        </p>

        <Tabs defaultValue="pre-workout" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-xl mx-auto mb-8">
            {nutritionCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="data-[state=active]:bg-lime-500 data-[state=active]:text-black"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {nutritionCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.content.map((item, index) => (
                  <CardContainer key={index} className="w-full">
                    <CardBody className="w-full h-full flex flex-col bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden">
                      <CardItem 
                        translateZ="100" 
                        className="w-full h-52 relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 left-4 z-20">
                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        </div>
                      </CardItem>
                      
                      <CardItem translateZ="60" className="p-6">
                        <p className="text-gray-300 mb-4">{item.description}</p>
                        <div>
                          <h4 className="text-sm font-semibold text-lime-500 mb-2">INGREDIENTS/FOCUS:</h4>
                          <ul className="space-y-1">
                            {item.items.map((ingredient, idx) => (
                              <li key={idx} className="text-sm text-gray-300 flex items-center">
                                <span className="h-1.5 w-1.5 bg-lime-500 rounded-full mr-2"></span>
                                {ingredient}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Want a personalized nutrition plan tailored to your specific fitness goals?
          </p>
          <Button className="bg-lime-500 hover:bg-lime-600 text-black font-bold px-8 py-6 text-lg">
            CONSULT OUR NUTRITIONIST
          </Button>
        </div>
      </div>
    </section>
  );
} 