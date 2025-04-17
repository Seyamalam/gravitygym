import { Button } from "@/components/ui/button";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    title: "10 Effective Strength Training Tips",
    excerpt: "Discover the most effective tips for building strength and muscle mass for all fitness levels.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop",
    date: "Jun 12, 2023",
    slug: "/blog/strength-training-tips"
  },
  {
    title: "Nutrition Guide for Muscle Building",
    excerpt: "Learn about the essential nutrients and eating patterns to support muscle growth and recovery.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1470&auto=format&fit=crop",
    date: "May 28, 2023",
    slug: "/blog/nutrition-guide"
  },
  {
    title: "The Benefits of Group Fitness Classes",
    excerpt: "Explore how group fitness classes can improve your motivation, form, and overall results.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop",
    date: "Apr 15, 2023",
    slug: "/blog/group-fitness-benefits"
  }
];

export function BlogSection() {
  return (
    <section className="py-20 bg-zinc-900" id="blog">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center text-white drop-shadow-lg">
          BLOG <span className="text-lime-400">& NEWS</span>
        </h2>
        <p className="text-gray-100 text-center mb-12 max-w-2xl mx-auto text-lg font-medium drop-shadow">
          Stay updated with the latest fitness tips, nutrition advice, and gym news.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <CardContainer key={index} className="w-full">
              <CardBody className="w-full h-full flex flex-col bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden shadow-lg">
                <CardItem 
                  translateZ="100" 
                  className="w-full h-48 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-black/30 z-10" />
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    style={{ filter: "brightness(0.85)" }}
                  />
                </CardItem>
                <CardItem translateZ="60" className="p-6">
                  <div className="text-sm text-lime-400 mb-2 font-semibold">{post.date}</div>
                  <h3 className="text-xl font-bold mb-3 text-white drop-shadow">{post.title}</h3>
                  <p className="text-gray-100 font-medium">{post.excerpt}</p>
                </CardItem>
                <CardItem translateZ="80" className="px-6 pb-6 mt-auto">
                  <Button 
                    variant="link" 
                    asChild 
                    className="text-lime-500 hover:text-lime-400 p-0 h-auto font-semibold text-lg"
                  >
                    <Link href={post.slug} className="flex items-center">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
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