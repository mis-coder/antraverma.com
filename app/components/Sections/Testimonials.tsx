"use client";

import { testimonials } from "@/app/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full py-14 md:py-24 flex items-center justify-center">
      <div className="container-wrapper text-center">
        <h1 className="section-title-sm no-underline text-center">
          See what people I’ve worked with say about me.
        </h1>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              “{testimonial.quote}”
            </p>
            <div>
              <p className="font-semibold text-lime-400">{testimonial.name}</p>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex justify-center gap-6">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg"
            aria-label="Previous Testimonial"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg"
            aria-label="Next Testimonial"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
