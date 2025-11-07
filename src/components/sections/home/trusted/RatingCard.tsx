"use client";
import { motion } from "framer-motion";

export const RatingCard = () => {
  return (
    <motion.div
      className="bg-[#0A1A0F] rounded-2xl px-6 py-4 border border-[#2A2A2A] inline-block md:min-w-[200px]"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="flex gap-1 mb-2 justify-center md:justify-start">
        <img
          src="/icon/fourstart.png"
          alt="star"
          className=" h-4 object-contain"
        />
      </div>
      <div className="flex items-baseline gap-2 justify-center md:justify-start">
        <span
          className="text-[#3DFF87] font-semibold text-sm"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Amazing 4.5
        </span>
        <span
          className="text-[#999999] text-xs"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          out of 5.0
        </span>
      </div>
    </motion.div>
  );
};
