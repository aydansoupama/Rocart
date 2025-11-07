"use client";
import { motion } from "framer-motion";
import { JSX } from "react";
import { TrustedHeader } from "./trusted/TrustedHeader";
import { TestimonialsScroller } from "./trusted/TestimonialsScroller";
import { testimonials } from "./trusted/testimonials-data";

const TrustedBySection = (): JSX.Element => {

  return (
    <section className="relative w-full bg-[#030804] bg-[url('/bg/pattern.png')] bg-repeat py-16 scrollbar-none">
      <div className="max-w-7xl mx-auto px-6">
        <TrustedHeader />
        <TestimonialsScroller testimonials={testimonials} />
        <motion.div
          className="text-center mt-8 block sm:hidden" // 👈 only visible on mobile
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3
            className="text-[#3DFF87] text-xl font-semibold"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            THANK YOU
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;
