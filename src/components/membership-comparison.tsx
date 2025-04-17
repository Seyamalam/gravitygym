"use client";

import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

const membershipPlans = [
  {
    name: "BASIC",
    price: "$59",
    popular: false,
    description: "Essential access for beginners",
    features: [
      { feature: "Gym Access (6 AM - 8 PM)", included: true },
      { feature: "Standard Equipment Access", included: true },
      { feature: "Locker Room Access", included: true },
      { feature: "2 Group Classes / Month", included: true },
      { feature: "Fitness Assessment", included: false },
      { feature: "Personal Training Sessions", included: false },
      { feature: "Nutrition Consultation", included: false },
      { feature: "Access to Premium Areas", included: false },
      { feature: "Guest Passes", included: false },
    ],
  },
  {
    name: "PREMIUM",
    price: "$89",
    popular: true,
    description: "Complete fitness experience",
    features: [
      { feature: "24/7 Gym Access", included: true },
      { feature: "Full Equipment Access", included: true },
      { feature: "Locker Room Access", included: true },
      { feature: "Unlimited Group Classes", included: true },
      { feature: "Monthly Fitness Assessment", included: true },
      { feature: "2 Personal Training Sessions / Month", included: true },
      { feature: "Nutrition Consultation", included: true },
      { feature: "Access to Premium Areas", included: true },
      { feature: "2 Guest Passes / Month", included: true },
    ],
    promotion: "First month 50% off + Free gym bag",
  },
  {
    name: "ELITE",
    price: "$129",
    popular: false,
    description: "VIP treatment for serious athletes",
    features: [
      { feature: "24/7 Gym Access", included: true },
      { feature: "Full Equipment Access", included: true },
      { feature: "Luxury Locker Room Access", included: true },
      { feature: "Unlimited Group Classes", included: true },
      { feature: "Weekly Fitness Assessment", included: true },
      { feature: "4 Personal Training Sessions / Month", included: true },
      { feature: "Advanced Nutrition Planning", included: true },
      { feature: "Priority Access to Premium Areas", included: true },
      { feature: "Unlimited Guest Passes", included: true },
    ],
  },
];

export function MembershipComparison() {
  return (
    <section className="py-20 bg-black" id="membership-comparison">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">MEMBERSHIP PLANS</h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Choose the perfect membership plan that fits your fitness journey and goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {membershipPlans.map((plan, index) => (
            <CardContainer key={index} className="w-full">
              <CardBody className="w-full h-full flex flex-col bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden">
                <CardItem
                  translateZ="50"
                  className={`w-full text-center px-6 pt-8 pb-4 ${
                    plan.popular ? "bg-lime-500/10" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-lime-500 text-black text-sm font-bold py-1 px-4 rounded-full mb-4 inline-block">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-4 mb-2">
                    <CardItem translateZ="80" className="inline-block">
                      <span className="text-4xl font-bold text-lime-500">{plan.price}</span>
                      <span className="text-gray-400 ml-1">/month</span>
                    </CardItem>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>

                  {plan.promotion && (
                    <div className="mt-4 bg-lime-500/20 text-lime-400 p-2 rounded-lg text-sm">
                      <span className="font-bold">SPECIAL OFFER:</span> {plan.promotion}
                    </div>
                  )}
                </CardItem>

                <CardItem translateZ="60" className="px-6 py-6 flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-lime-500 mr-3 mt-0.5 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-zinc-500 mr-3 mt-0.5 flex-shrink-0" />
                        )}
                        <span className={feature.included ? "" : "text-zinc-500"}>
                          {feature.feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardItem>

                <CardItem translateZ="100" className="px-6 pb-8 pt-2">
                  <Button className={`w-full ${
                    plan.popular 
                      ? "bg-lime-500 hover:bg-lime-600" 
                      : "bg-zinc-700 hover:bg-zinc-600"
                    } text-black font-bold`}
                  >
                    SELECT PLAN
                  </Button>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        <div className="mt-12 bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-center">ALL MEMBERSHIPS INCLUDE</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <Check className="h-5 w-5 text-lime-500 mr-3" />
              <span>Free WiFi</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-lime-500 mr-3" />
              <span>Shower Facilities</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-lime-500 mr-3" />
              <span>Free Parking</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-lime-500 mr-3" />
              <span>Towel Service</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-lime-500 mr-3" />
              <span>Fitness App Access</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-lime-500 mr-3" />
              <span>No Contract</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 