import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

const coaches = [
  {
    name: "John Cooper",
    role: "Strength Trainer",
    image: "https://images.unsplash.com/photo-1534368420009-621bfab424a8?q=80&w=1470&auto=format&fit=crop"
  },
  {
    name: "Brandon Stanley",
    role: "Fitness Specialist",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop"
  },
  {
    name: "Elizabeth Spencer",
    role: "Nutrition Expert",
    image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=1470&auto=format&fit=crop"
  },
  {
    name: "Karina Murphy",
    role: "Yoga Instructor",
    image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?q=80&w=1472&auto=format&fit=crop"
  }
];

export function CoachesSection() {
  return (
    <section className="py-20 bg-zinc-900" id="coaches">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center text-white drop-shadow-lg">
          OUR BEST <span className="text-lime-400">COACHES</span>
        </h2>
        <p className="text-gray-100 text-center mb-12 max-w-2xl mx-auto text-lg font-medium drop-shadow">
          Our team of experienced trainers are dedicated to helping you achieve your fitness goals.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coaches.map((coach, index) => (
            <CardContainer key={index} className="w-full">
              <CardBody className="w-full h-auto flex flex-col items-center bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden shadow-lg">
                <CardItem
                  translateZ="100"
                  className="w-full h-64 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-black/30 z-10" />
                  <img 
                    src={coach.image} 
                    alt={coach.name} 
                    className="w-full h-full object-cover"
                    style={{ filter: "brightness(0.85)" }}
                  />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="w-full text-center py-4"
                >
                  <h3 className="text-xl font-extrabold text-white drop-shadow mb-1">{coach.name}</h3>
                  <p className="text-lime-400 font-semibold">{coach.role}</p>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
} 