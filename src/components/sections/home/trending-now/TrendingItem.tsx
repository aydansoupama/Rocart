"use client";
import { motion } from "framer-motion";
import { itemVariants, mobileImageTap } from "./animation-variants";

const AnimatedImg = motion.img;

interface TrendingItemProps {
  item: {
    name: string;
    image: string;
    price: string;
    priceColor: string;
    backgroundImage: string;
  };
}

export const TrendingItem = ({ item }: TrendingItemProps) => {
  return (
    <motion.div
      variants={itemVariants}
      className="relative flex-1
                h-[180px]
                rounded-2xl
                flex flex-col items-center justify-start
                border-none group/item cursor-pointer select-none
                p-4"
      style={{
        background: item.backgroundImage,
        touchAction: "manipulation",
      }}
      whileHover={{
        scale: 1.08,
        y: -6,
        boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      }}
      onClick={() => {
        if (
          typeof window !== "undefined" &&
          window.navigator &&
          window.navigator.vibrate
        ) {
          window.navigator.vibrate([200]);
        }
      }}
    >
      <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
      <AnimatedImg
        className="mb-4 rounded-xl object-contain z-10 w-20 h-20 select-none"
        alt={item.name}
        src={item.image}
        whileHover={{
          scale: 1.15,
          rotate: -5,
          transition: { type: "spring", stiffness: 300 },
        }}
        whileTap={
          typeof window !== "undefined" &&
          window.innerWidth <= 768
            ? mobileImageTap
            : {
                scale: 1.1,
                rotate: -3,
                transition: {
                  type: "spring",
                  stiffness: 500,
                  duration: 0.15,
                },
              }
        }
        drag={false}
        style={{
          userSelect: "none",
          WebkitUserSelect: "none",
          pointerEvents: "auto",
        }}
      />
      <motion.div
        className="w-full text-left font-semibold text-sm text-white mb-1 select-none"
        style={{ fontFamily: "Poppins, sans-serif" }}
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {item.name}
      </motion.div>
      <motion.div
        className={`w-full text-left font-bold text-base ${item.priceColor} select-none`}
        style={{ fontFamily: "Poppins, sans-serif" }}
        initial={{ opacity: 1, scale: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, type: "spring" }}
      >
        {item.price}
      </motion.div>
      <motion.div
        className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-[#3DFF87] opacity-0 pointer-events-none"
        animate={{ opacity: 0 }}
        whileTap={
          typeof window !== "undefined" &&
          window.innerWidth <= 768
            ? {
                opacity: [0, 0.6, 0],
                scale: [1, 1.02, 1],
                transition: { duration: 0.3 },
              }
            : {}
        }
      />
    </motion.div>
  );
};
