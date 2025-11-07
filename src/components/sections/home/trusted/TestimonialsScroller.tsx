"use client";
import { motion } from "framer-motion";
import { TestimonialCard } from "./TestimonialCard";

interface TestimonialsScrollerProps {
  testimonials: Array<{
    id: number;
    name: string;
    testimonial: string;
    verified: boolean;
    avatar: string;
  }>;
}

export const TestimonialsScroller = ({ testimonials }: TestimonialsScrollerProps) => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-[#030804] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-[#030804] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-6"
        animate={{
          x: [0, -(testimonials.length * (280 + 24))],
        }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
          repeatType: "loop",
        }}
        style={{ willChange: "transform" }}
      >
        {[...testimonials, ...testimonials, ...testimonials].map(
          (testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          )
        )}
      </motion.div>
    </div>
  );
};
