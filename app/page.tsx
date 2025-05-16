"use client";

import BookCallSection from "./components/Sections/BookCall";
import HeroSection from "./components/Sections/Hero";
import ServicesSection from "./components/Sections/Services";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full">
      <HeroSection />
      <ServicesSection />
      <BookCallSection />
    </div>
  );
}
