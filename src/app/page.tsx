import { AboutSection } from "@/components/about-section";
import { BlogSection } from "@/components/blog-section";
import { CoachesSection } from "@/components/coaches-section";
import { CTASection } from "@/components/cta-section";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { PricingSection } from "@/components/pricing-section";
import { ScheduleSection } from "@/components/schedule-section";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <CoachesSection />
        <ScheduleSection />
        <PricingSection />
        <TestimonialsSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
