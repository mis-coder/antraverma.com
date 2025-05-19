import BookCallSection from "@/app/components/Sections/BookCall";
import CareerPathSection from "@/app/components/Sections/CareerPath";
import IntroSection from "@/app/components/Sections/Intro";
import TestimonialsSection from "@/app/components/Sections/Testimonials";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full">
      <IntroSection />
      <CareerPathSection />
      <TestimonialsSection />
      <BookCallSection />
    </div>
  );
}
