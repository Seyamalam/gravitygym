import { Button } from "@/components/ui/button";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { ArrowRight } from "lucide-react";

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
    story: "Sarah joined after struggling with postpartum weight for 3 years. With a combination of HIIT training and nutrition guidance, she achieved her goals while balancing family life."
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
    story: "David came to us after a health warning from his doctor. His transformation focused on cardiac health first, with strength training added gradually as his condition improved."
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
    story: "Maria transformed from a casual exerciser to a fitness competitor through our Elite program. Her dedicated training regimen and precise nutrition planning led to her first competitive win."
  }
];

export function SuccessStories() {
  return (
    <section className="py-20 bg-zinc-900" id="success-stories">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">SUCCESS STORIES</h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Real results from real members. See how GravityGym has transformed lives through dedicated training and support.
        </p>

        <div className="space-y-16">
          {successStories.map((story, index) => (
            <CardContainer key={index} className="w-full">
              <CardBody className={`w-full flex flex-col md:flex-row gap-8 bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden p-6 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Before/After Images */}
                <CardItem translateZ="80" className="w-full md:w-1/2">
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-2 h-full">
                      <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
                        <span className="absolute top-2 left-2 z-10 bg-black/70 text-white text-xs px-2 py-1 rounded">BEFORE</span>
                        <img 
                          src={story.beforeImage} 
                          alt={`${story.name} before`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
                        <span className="absolute top-2 left-2 z-10 bg-lime-500 text-black text-xs px-2 py-1 rounded">AFTER</span>
                        <img 
                          src={story.afterImage} 
                          alt={`${story.name} after`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-zinc-900 text-white px-4 py-1 rounded-full border border-lime-500/50 whitespace-nowrap">
                      <span className="text-lime-500 font-bold">{story.timeframe}</span> transformation
                    </div>
                  </div>
                </CardItem>

                {/* Content */}
                <CardItem translateZ="60" className="w-full md:w-1/2 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold">{story.name}, {story.age}</h3>
                    <p className="text-gray-400">Member since {new Date().getFullYear() - Math.floor(Math.random() * 3) - 1}</p>
                  </div>

                  <div className="bg-zinc-900/50 rounded-lg p-4 mb-4">
                    <h4 className="text-sm font-semibold text-lime-500 mb-3">ACHIEVEMENT METRICS</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {story.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="text-xl font-bold text-white">{metric.value}</div>
                          <div className="text-xs text-gray-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <CardItem translateZ="100" className="mb-4 italic text-gray-300 border-l-2 border-lime-500 pl-4">
                    "{story.quote}"
                  </CardItem>

                  <p className="text-gray-300 mb-6">{story.story}</p>

                  <div className="mt-auto">
                    <Button variant="link" className="text-lime-500 hover:text-lime-400 p-0 h-auto font-semibold">
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
            Ready to write your own success story? Join GravityGym today and start your transformation journey.
          </p>
          <Button className="bg-lime-500 hover:bg-lime-600 text-black font-bold px-8 py-6 text-lg">
            START YOUR JOURNEY
          </Button>
        </div>
      </div>
    </section>
  );
} 