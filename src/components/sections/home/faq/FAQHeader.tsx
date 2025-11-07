"use client";
import { motion } from "framer-motion";

export const FAQHeader = () => {
  return (
    <motion.div
      className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 px-4"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="font-poppins font-bold text-white text-4xl lg:text-5xl tracking-[-0.02em] leading-tight mb-6"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <span className="text-white">Have </span>
        <span className="text-[#3DFF87]">Questions?</span>
        <span className="text-white"> We Got You!</span>
      </motion.h2>
      <motion.p
        className="font-poppins font-medium text-[#999999] text-sm tracking-[0] leading-[normal] max-w-4xl mx-auto"
        style={{ fontFamily: "Poppins, sans-serif" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Got questions? We&apos;ve got answers!
      </motion.p>
    </motion.div>
  );
};
