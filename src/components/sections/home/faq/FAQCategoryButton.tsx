"use client";
import { motion } from "framer-motion";
import Image from "next/image";

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
      flex flex-col items-center gap-2 sm:gap-3 w-full p-2 sm:p-3 rounded-lg transition-colors text-xs sm:text-sm text-white-0
        ${
          isActive
            ? "bg-[#0a1a0f] border-2 border-[#3DFF87]"
            : "bg-[#030804] border-2 border-[#2A2A2A] hover:border-[#3DFF87]/30"
        }
      `}
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
        <Image
          src={icon}
          alt={name}
          width={24}
          height={24}
          className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
        />
      </div>
      <span
        className={`
        font-poppins
        font-medium
        transition-colors
        duration-300
        ${isActive ? "text-white" : "text-gray-400 group-hover:text-gray-200"}
      `}
      >
        {name}
      </span>
    </motion.button>
  );
};
