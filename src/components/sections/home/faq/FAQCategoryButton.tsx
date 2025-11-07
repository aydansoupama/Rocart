"use client";
import { motion } from "framer-motion";

interface FAQCategoryButtonProps {
  name: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

export const FAQCategoryButton = ({
  name,
  icon,
  isActive,
  onClick,
  index,
}: FAQCategoryButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      viewport={{ once: true }}
      className={`
        w-full flex items-center gap-3 sm:gap-4 
        px-4 sm:px-6 py-3 sm:py-4 
        rounded-xl sm:rounded-2xl
        transition-all duration-300
        group
        ${
          isActive
            ? "bg-[#0a1a0f] border-2 border-[#3DFF87]"
            : "bg-[#030804] border-2 border-[#2A2A2A] hover:border-[#3DFF87]/30"
        }
      `}
      whileHover={{ scale: 1.02, x: 4 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className={`
        w-10 h-10 sm:w-12 sm:h-12 
        rounded-lg sm:rounded-xl 
        flex items-center justify-center
        transition-all duration-300
        ${isActive ? "bg-[#3DFF87]/20" : "bg-[#0a1a0f]"}
      `}
      >
        <img
          src={icon}
          alt={name}
          className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
        />
      </div>
      <span
        className={`
        text-sm sm:text-base md:text-lg font-medium
        transition-colors duration-300
        ${isActive ? "text-white" : "text-gray-400 group-hover:text-gray-200"}
      `}
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {name}
      </span>
    </motion.button>
  );
};
