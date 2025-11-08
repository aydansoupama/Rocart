"use client";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

export const FAQItem = ({ question, answer, index }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[#030804] border border-[#2A2A2A] rounded-lg
                  px-4 sm:px-5 md:px-6 py-3 sm:py-4
                  flex items-center justify-between
                  hover:bg-[#0a1a0f] hover:border-[#3DFF87]/30 
                  transition-all duration-300
                  group"
        whileTap={{ scale: 0.99 }}
      >
        <span
          className="text-white text-left font-normal text-sm sm:text-base"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 ml-4"
        >
          <ChevronDown
            size={20}
            className="text-[#999999] group-hover:text-[#3DFF87] transition-colors"
          />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: easeInOut }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 bg-[#030804]/50 border-x border-b border-[#2A2A2A] rounded-b-lg">
              <p
                className="text-[#d9d9d9] text-sm sm:text-base leading-relaxed"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
