"use client";

import { AboutSection } from "@/components/about-section";
import { BlogSection } from "@/components/blog-section";
import { CoachesSection } from "@/components/coaches-section";
import { CTASection } from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { MembershipComparison } from "@/components/membership-comparison";
import { Navbar } from "@/components/navbar";
import { NutritionTips } from "@/components/nutrition-tips";
import { PartnerBrands } from "@/components/partner-brands";
import { PricingSection } from "@/components/pricing-section";
import { ScheduleSection } from "@/components/schedule-section";
import { SuccessStories } from "@/components/success-stories";
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
        <MembershipComparison />
        <PricingSection />
        <NutritionTips />
        <SuccessStories />
        <TestimonialsSection />
        <PartnerBrands />
        <FAQSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
