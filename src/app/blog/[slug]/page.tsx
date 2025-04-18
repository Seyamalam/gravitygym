"use client";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// Blog post data
type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
  author: {
    name: string;
    role: string;
    avatar: string;
    bio?: string;
  };
  relatedPosts?: string[];
};
const blogPosts: BlogPost[] = [
  {
    id: "beginners-workout-guide",
    title: "Beginner's Guide to Strength Training",
    excerpt: "Starting a strength training routine can be intimidating. This comprehensive guide breaks down everything you need to know to begin your fitness journey with confidence.",
    content: `
      <p>Starting a strength training routine can feel overwhelming, especially if you're new to fitness or have primarily focused on cardio in the past. However, strength training is one of the most beneficial forms of exercise for overall health, longevity, and body composition.</p>
      
      <h2>Why Strength Training Matters</h2>
      
      <p>Strength training offers numerous benefits beyond just building muscle:</p>
      
      <ul>
        <li><strong>Increased metabolic rate:</strong> Muscle burns more calories at rest than fat tissue, helping with weight management.</li>
        <li><strong>Improved bone density:</strong> Resistance exercises help prevent osteoporosis and bone loss as you age.</li>
        <li><strong>Better functional strength:</strong> Daily activities become easier when your muscles are stronger.</li>
        <li><strong>Enhanced mood and mental health:</strong> Strength training releases endorphins that boost your mood and reduce stress.</li>
        <li><strong>Reduced risk of injury:</strong> Stronger muscles provide better support for your joints.</li>
      </ul>
      
      <h2>Essential Equipment for Beginners</h2>
      
      <p>You don't need a fully equipped home gym to start strength training. Here's what we recommend for beginners:</p>
      
      <ul>
        <li><strong>Dumbbells:</strong> A few pairs of different weights or adjustable dumbbells.</li>
        <li><strong>Resistance bands:</strong> Great for adding variety and can be used anywhere.</li>
        <li><strong>Exercise mat:</strong> For comfort during floor exercises.</li>
        <li><strong>Bench (optional):</strong> Useful for a wider range of exercises but not essential when starting out.</li>
      </ul>
      
      <h2>Beginner's Workout Routine</h2>
      
      <p>Here's a simple full-body routine that targets all major muscle groups. Perform this workout 2-3 times per week with at least one rest day between sessions:</p>
      
      <ol>
        <li><strong>Squats:</strong> 3 sets of 10-12 reps</li>
        <li><strong>Push-ups (or modified push-ups):</strong> 3 sets of 8-10 reps</li>
        <li><strong>Dumbbell rows:</strong> 3 sets of 10-12 reps per arm</li>
        <li><strong>Glute bridges:</strong> 3 sets of 12-15 reps</li>
        <li><strong>Dumbbell shoulder press:</strong> 3 sets of 8-10 reps</li>
        <li><strong>Plank:</strong> 3 sets, hold for 20-30 seconds</li>
      </ol>
      
      <h2>Form Is Everything</h2>
      
      <p>The most important aspect of strength training, especially for beginners, is maintaining proper form. Here are some key principles:</p>
      
      <ul>
        <li>Start with lighter weights to master the movement patterns.</li>
        <li>Focus on controlled movements rather than rushing through reps.</li>
        <li>Breathe out during the exertion phase (lifting) and in during the relaxation phase.</li>
        <li>Consider working with a personal trainer for a few sessions to ensure proper form.</li>
        <li>Use mirrors or record yourself to check your form.</li>
      </ul>
      
      <h2>Progressive Overload: The Key to Progress</h2>
      
      <p>To continue seeing results, you need to progressively challenge your muscles. This concept is called "progressive overload" and can be achieved by:</p>
      
      <ul>
        <li>Increasing the weight</li>
        <li>Adding more repetitions</li>
        <li>Increasing the number of sets</li>
        <li>Reducing rest time between sets</li>
        <li>Increasing exercise difficulty (e.g., moving from regular push-ups to decline push-ups)</li>
      </ul>
      
      <h2>Recovery and Nutrition</h2>
      
      <p>Muscles don't grow during workouts—they grow during recovery. Make sure to:</p>
      
      <ul>
        <li>Get adequate sleep (7-9 hours per night)</li>
        <li>Stay hydrated before, during, and after workouts</li>
        <li>Consume sufficient protein (aim for 0.7-1g per pound of bodyweight)</li>
        <li>Fuel your body with complex carbohydrates and healthy fats</li>
        <li>Consider post-workout nutrition within 30-60 minutes of training</li>
      </ul>
      
      <h2>Common Beginner Mistakes to Avoid</h2>
      
      <ul>
        <li><strong>Lifting too heavy, too soon:</strong> This compromises form and increases injury risk.</li>
        <li><strong>Skipping warm-ups:</strong> Always prepare your body with 5-10 minutes of dynamic stretching and light cardio.</li>
        <li><strong>Inconsistency:</strong> Strength training requires consistency to see results.</li>
        <li><strong>Neglecting certain muscle groups:</strong> Ensure you're working all major muscle groups for balanced development.</li>
        <li><strong>Not resting enough:</strong> Muscles need time to recover and grow stronger.</li>
      </ul>
      
      <h2>When to Expect Results</h2>
      
      <p>Be patient with your progress. Generally, you can expect:</p>
      
      <ul>
        <li><strong>Weeks 1-4:</strong> Improved strength due to neurological adaptations, but minimal visible changes.</li>
        <li><strong>Weeks 4-8:</strong> Beginning to notice some muscle definition and increased stamina.</li>
        <li><strong>Weeks 8-12:</strong> More noticeable physical changes and significant strength improvements.</li>
        <li><strong>Beyond 12 weeks:</strong> Continued progress with proper training and nutrition.</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Strength training doesn't have to be intimidating. Start simple, focus on form, be consistent, and progressively challenge yourself. Remember that everyone starts somewhere, and the most important step is simply beginning. Your future self will thank you for the strength, confidence, and health benefits you'll gain from making strength training a regular part of your fitness routine.</p>
    `,
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop",
    category: "Workout Guide",
    date: "May 12, 2023",
    readTime: "8 min read",
    featured: true,
    author: {
      name: "Mike Johnson",
      role: "Head Trainer",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1480&auto=format&fit=crop",
      bio: "Mike has been a certified personal trainer for over 10 years, specializing in strength training and functional fitness. He holds certifications from NASM and ACE."
    },
    relatedPosts: ["hiit-benefits", "recovery-strategies", "mindful-fitness"]
  },
  {
    id: "protein-myths",
    title: "5 Protein Myths Debunked by Science",
    excerpt: "There's a lot of misinformation about protein consumption. Our nutrition experts separate fact from fiction and reveal what science really says about protein intake.",
    content: `<p>Protein is essential for muscle growth and repair, but there are many myths about how much you need and when to consume it. In this article, we debunk the top 5 protein myths with science-backed facts.</p>`,
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
    content: `<p>HIIT is a powerful training method that alternates short bursts of intense activity with periods of rest or lower-intensity exercise. Learn why HIIT is so effective and how to add it to your routine.</p>`,
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
    content: `<p>Discover advanced recovery strategies used by elite athletes, including cryotherapy, massage, and active recovery techniques to maximize your performance and reduce injury risk.</p>`,
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
    content: `<p>Mindful fitness is about being present during your workouts and connecting your mind and body. Learn techniques to incorporate mindfulness into your exercise routine for better results.</p>`,
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
    content: `<p>Meal prepping can save you time and help you stay on track with your nutrition goals. This guide covers everything you need to know to meal prep like a pro.</p>`,
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

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  
  useEffect(() => {
    // Find the current post based on the slug
    const currentPost = blogPosts.find(p => p.id === slug);
    setPost(currentPost ?? null);
    
    // Find related posts if the current post exists and has related posts
    if (currentPost?.relatedPosts) {
      const related = blogPosts.filter(p => 
        currentPost.relatedPosts?.includes(p.id)
      );
      setRelatedPosts(related);
    }
  }, [slug]);

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="py-20">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
            <p className="text-gray-300 mb-8">The article you are looking for does not exist or has been moved.</p>
            <Button asChild>
              <Link href="/blog">Return to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="relative py-20">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${post.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.3)",
            }}
          />
          <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-4xl">
            <span className="bg-lime-500 text-black text-sm px-3 py-1 rounded-full font-medium inline-block mb-6">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <Image 
                src={post.author.avatar} 
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="text-sm font-medium">{post.author.name}</div>
                <div className="text-xs text-gray-400">{post.author.role}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
              <div className="lg:col-span-8">
                {/* Back to blog link */}
                <div className="mb-8">
                  <Link 
                    href="/blog" 
                    className="flex items-center text-lime-500 hover:text-lime-400 text-sm font-medium"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
                  </Link>
                </div>
                
                {/* Article */}
                <article className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-gray-300 prose-a:text-lime-500 prose-strong:text-lime-500 prose-li:text-gray-300 prose-li:my-2">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-10">
                  <span className="bg-zinc-800 text-gray-300 text-xs px-3 py-1 rounded-full">Strength Training</span>
                  <span className="bg-zinc-800 text-gray-300 text-xs px-3 py-1 rounded-full">Beginners</span>
                  <span className="bg-zinc-800 text-gray-300 text-xs px-3 py-1 rounded-full">Workout Routine</span>
                  <span className="bg-zinc-800 text-gray-300 text-xs px-3 py-1 rounded-full">Fitness Tips</span>
                </div>
                
                {/* Share */}
                <div className="border-t border-zinc-800 mt-10 pt-10">
                  <h3 className="text-lg font-bold mb-4">Share This Article</h3>
                  <div className="flex gap-3">
                    <Button size="icon" variant="outline" className="rounded-full h-10 w-10 border-zinc-700">
                      <Facebook className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="outline" className="rounded-full h-10 w-10 border-zinc-700">
                      <Twitter className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="outline" className="rounded-full h-10 w-10 border-zinc-700">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-4">
                {/* Author Box */}
                <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 mb-8">
                  <h3 className="text-lg font-bold mb-4">About the Author</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <Image 
                      src={post.author.avatar} 
                      alt={post.author.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium">{post.author.name}</div>
                      <div className="text-sm text-gray-400">{post.author.role}</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">
                    {post.author.bio || "Fitness expert and contributor at GravityGym, specializing in helping people achieve their fitness goals through evidence-based practices."}
                  </p>
                </div>
                
                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
                    <h3 className="text-lg font-bold mb-4">Related Articles</h3>
                    <div className="space-y-6">
                      {relatedPosts.map((related) => (
                        <div key={related.id} className="flex gap-4">
                          <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                            <Image 
                              src={related.image} 
                              alt={related.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <Link 
                              href={`/blog/${related.id}`}
                              className="font-medium hover:text-lime-500 transition-colors"
                            >
                              {related.title}
                            </Link>
                            <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                              <Calendar className="h-3 w-3" />
                              <span>{related.date}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-zinc-900">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto bg-zinc-800 rounded-xl p-8 border border-zinc-700 text-center">
              <h2 className="text-2xl font-bold mb-4">NEVER MISS AN UPDATE</h2>
              <p className="text-gray-300 mb-6">
                Get the latest fitness tips, workout guides, and nutrition advice delivered straight to your inbox.
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 