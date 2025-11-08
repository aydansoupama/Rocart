"use client";
import { motion } from "framer-motion";

export const FAQHeader = () => {
  return (
    <motion.div
      className="text-center px-4"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="font-poppins font-bold text-white text-4xl lg:text-5xl tracking-[-0.02em] leading-tight"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <span className="text-white">Frequently </span>
        <span className="text-white">Asked</span>
        <span className="text-[#3DFF87]"> Questions</span>
      </motion.h2>
    </motion.div>
  );
};
