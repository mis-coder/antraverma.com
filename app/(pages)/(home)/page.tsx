"use client";

import BookCallSection from "@/app/components/Sections/BookCall";
import HeroSection from "@/app/components/Sections/Hero";
import ServicesSection from "@/app/components/Sections/Services";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full">
      <HeroSection />
      <ServicesSection />
      <BookCallSection />
    </div>
  );
}
