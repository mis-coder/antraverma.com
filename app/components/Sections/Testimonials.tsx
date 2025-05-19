"use client";

import { testimonials } from "@/app/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { Button } from "../UI/Button";

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
    <section className="w-full py-14 md:py-24 flex items-center justify-center relative">
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
            <p className="text-lg text-gray-500 leading-relaxed">
              “{testimonial.quote}”
            </p>
            <div>
              <p className="font-semibold text-tertiary">{testimonial.name}</p>
              <p className="text-sm italic text-gray-400">{testimonial.role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

       
          <Button
            onClick={handlePrev}
            className="px-4 py-2 bg-transparent md:absolute left-0 top-1/2 transform md:-translate-y-1/2"
            aria-label="Previous Testimonial"
          >
            <BiLeftArrow className="h-12 w-12 text-tertiary" />
          </Button>
          <Button
            onClick={handleNext}
            className="px-4 py-2 bg-transparent md:absolute right-0 top-1/2 transform md:-translate-y-1/2"
            aria-label="Next Testimonial"
          >
            <BiRightArrow className="h-12 w-12 text-tertiary" />
          </Button>
       
      </div>
    </section>
  );
};

export default TestimonialCarousel;
