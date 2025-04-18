import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Blog | GravityGym",
  description: "Fitness articles, workout guides, and nutrition tips from GravityGym experts",
};

// Blog post data
const blogPosts = [
  {
    id: "beginners-workout-guide",
    title: "Beginner's Guide to Strength Training",
    excerpt: "Starting a strength training routine can be intimidating. This comprehensive guide breaks down everything you need to know to begin your fitness journey with confidence.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop",
    category: "Workout Guide",
    date: "May 12, 2023",
    readTime: "8 min read",
    featured: true,
    author: {
      name: "Mike Johnson",
      role: "Head Trainer",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1480&auto=format&fit=crop"
    }
  },
  {
    id: "protein-myths",
    title: "5 Protein Myths Debunked by Science",
    excerpt: "There's a lot of misinformation about protein consumption. Our nutrition experts separate fact from fiction and reveal what science really says about protein intake.",
    image: "https://images.unsplash.com/photo-1615847838919-133f80341870?q=80&w=1544&auto=format&fit=crop",
    category: "Nutrition",
    date: "April 28, 2023",
    readTime: "6 min read",
    featured: true,
    author: {
      name: "Dr. Sarah Williams",
      role: "Nutrition Specialist",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop"
    }
  },
  {
    id: "hiit-benefits",
    title: "Why HIIT Should Be Part of Your Fitness Routine",
    excerpt: "High-Intensity Interval Training (HIIT) has gained massive popularity for good reason. Discover the science-backed benefits and how to incorporate it effectively.",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1470&auto=format&fit=crop",
    category: "Workout Guide",
    date: "April 15, 2023",
    readTime: "5 min read",
    featured: false,
    author: {
      name: "Lisa Chen",
      role: "HIIT Coach",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=1374&auto=format&fit=crop"
    }
  },
  {
    id: "recovery-strategies",
    title: "Advanced Recovery Strategies for Athletes",
    excerpt: "Recovery is just as important as training. Learn about cutting-edge techniques that professional athletes use to optimize recovery and enhance performance.",
    image: "https://images.unsplash.com/photo-1475052814086-f40e1c960a9f?q=80&w=1470&auto=format&fit=crop",
    category: "Recovery",
    date: "March 30, 2023",
    readTime: "7 min read",
    featured: false,
    author: {
      name: "James Rodriguez",
      role: "Sports Therapist",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop"
    }
  },
  {
    id: "mindful-fitness",
    title: "Mindful Fitness: Merging Mental and Physical Health",
    excerpt: "The mind-body connection is powerful. Explore how incorporating mindfulness into your workouts can lead to better results and improved overall wellbeing.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1520&auto=format&fit=crop",
    category: "Wellness",
    date: "March 18, 2023",
    readTime: "9 min read",
    featured: false,
    author: {
      name: "Amara Patel",
      role: "Wellness Coach",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop"
    }
  },
  {
    id: "meal-prep-guide",
    title: "Complete Meal Prep Guide for Fitness Enthusiasts",
    excerpt: "Proper nutrition doesn't have to be time-consuming. Our comprehensive meal prep guide shows you how to prepare a week's worth of healthy meals in just a few hours.",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=1469&auto=format&fit=crop",
    category: "Nutrition",
    date: "March 5, 2023",
    readTime: "10 min read",
    featured: false,
    author: {
      name: "Chef Marcus Green",
      role: "Nutrition Coach",
      avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1374&auto=format&fit=crop"
    }
  }
];

// Categories for filter
const categories = [
  "All",
  "Workout Guide",
  "Nutrition",
  "Recovery",
  "Wellness",
  "Success Stories"
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);
  
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="relative py-20 md:py-28">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1374&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.4)",
            }}
          />
          <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">FITNESS BLOG</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Expert advice, workout tips, and nutrition guidance to help you achieve your fitness goals.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-zinc-900 sticky top-0 z-10 border-b border-zinc-800">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
              {categories.map((category, index) => (
                <Button 
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 
                    ? "bg-lime-500 hover:bg-lime-600 text-black font-medium"
                    : "border-zinc-700 text-gray-300 hover:bg-zinc-800 hover:text-white"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold mb-12">FEATURED ARTICLES</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <CardContainer key={post.id} className="w-full">
                  <CardBody className="w-full h-full flex flex-col bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700">
                    <CardItem
                      translateZ="100"
                      className="w-full h-60 md:h-72 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                      <Image
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-4 left-4 z-20">
                        <span className="bg-lime-500 text-black text-xs px-2 py-1 rounded-full font-medium">
                          {post.category}
                        </span>
                      </div>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                      <p className="text-gray-300 mb-4">{post.excerpt}</p>
                      
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-700">
                        <div className="flex items-center gap-3">
                          <Image 
                            src={post.author.avatar} 
                            alt={post.author.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div>
                            <div className="text-sm font-medium">{post.author.name}</div>
                            <div className="text-xs text-gray-400">{post.author.role}</div>
                          </div>
                        </div>
                        
                        <Button variant="ghost" className="text-lime-500 hover:text-lime-400 p-0 h-auto">
                          <Link href={`/blog/${post.id}`} className="flex items-center">
                            Read Article <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              ))}
            </div>
          </div>
        </section>

        {/* Regular Posts */}
        <section className="py-16 bg-zinc-900">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold mb-12">ALL ARTICLES</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <div key={post.id} className="bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700 flex flex-col h-full">
                  <div className="w-full h-52 relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-lime-500 text-black text-xs px-2 py-1 rounded-full font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-700">
                      <div className="flex items-center gap-3">
                        <Image 
                          src={post.author.avatar} 
                          alt={post.author.name}
                          className="w-7 h-7 rounded-full object-cover"
                        />
                        <div className="text-xs font-medium">{post.author.name}</div>
                      </div>
                      
                      <Button variant="ghost" size="sm" className="text-lime-500 hover:text-lime-400 p-0 h-auto">
                        <Link href={`/blog/${post.id}`} className="flex items-center text-xs">
                          Read More <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto bg-zinc-800 rounded-xl p-8 border border-zinc-700 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">GET FITNESS TIPS IN YOUR INBOX</h2>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for weekly workout tips, nutrition advice, and motivation from our expert trainers.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow p-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:ring-lime-500 focus:border-lime-500 outline-none"
                />
                <Button className="bg-lime-500 hover:bg-lime-600 text-black font-bold whitespace-nowrap">
                  SUBSCRIBE
                </Button>
              </div>
              <p className="text-xs text-gray-400 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 