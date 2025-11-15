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
    strokeColor: string;
  };

  index: number;
}

export const TrendingItem = ({ item, index }: TrendingItemProps) => {
  return (
    <motion.div
      key={index}
      variants={itemVariants}
      className="relative w-[30vw] sm:w-[7vw] h-[22vh] sm:h-[22vh] lg:h-[18vh] rounded-[3vw] sm:rounded-[1.2vw] flex flex-col items-center backdrop-blur-sm border-none group/item cursor-pointer select-none"
      style={{
        backgroundImage: `url(${item.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        touchAction: "manipulation",
      }}
      whileHover={{
        scale: 1.1,
        y: -8,
        boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      }}
      onClick={() => {
        if (typeof window !== "undefined" && window.navigator) {
          if (window.navigator.vibrate) {
            window.navigator.vibrate([200]);
          }
          if ("vibrate" in window.navigator === false) {
            if (
              window.navigator &&
              (window.navigator as Navigator).userAgent.includes("iPhone")
            ) {
              console.log("iPhone detected — basic haptic feedback triggered");
            }
          }
        }
        console.log(`Clicked on ${item.name}`);
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-20"
        style={{
          borderRadius: "inherit",
          overflow: "visible",
        }}
      >
        <defs>
          <linearGradient
            id={`stroke-gradient-${item.name.replace(/\s+/g, "-")}-${index}`}
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor={item.strokeColor} stopOpacity="0.7" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          rx="24"
          fill="none"
          stroke={`url(#stroke-gradient-${item.name.replace(
            /\s+/g,
            "-"
          )}-${index})`}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <motion.div className="absolute inset-0 rounded-[3vw] sm:rounded-[1.2vw] bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
      <AnimatedImg
        className="mt-[2vh] rounded-[2vw] sm:rounded-[0.8vw] object-cover shadow-xl z-10 w-[20vw] h-[20vw] sm:w-[5vw] sm:h-[5vw] select-none"
        alt={item.name}
        src={item.image}
        whileHover={{
          scale: 1.15,
          rotate: -5,
          transition: { type: "spring", stiffness: 300 },
        }}
        whileTap={
          typeof window !== "undefined" && window.innerWidth <= 768
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
        className="w-full text-left font-bold text-[3.5vw] sm:text-[1.3vw] lg:text-[0.9vw] mt-[3vh] bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent px-[2vw] sm:px-[0.8vw] select-none"
        style={{ fontFamily: "Poppins, sans-serif" }}
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        animate={{
          scale: 1,
          transition: { type: "spring", stiffness: 200 },
        }}
      >
        {item.name}
      </motion.div>
      <motion.div
        className={`w-full text-left font-bold text-[3vw] sm:text-[1.1vw] lg:text-[0.8vw] mt-0 px-[2vw] sm:px-[0.8vw] ${item.priceColor} drop-shadow-lg select-none`}
        style={{ fontFamily: "Poppins, sans-serif" }}
        initial={{ opacity: 1, scale: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, type: "spring" }}
        whileTap={
          typeof window !== "undefined" && window.innerWidth <= 768
            ? {
                scale: 1.05,
                transition: { duration: 0.1 },
              }
            : {}
        }
      >
        {item.price}
      </motion.div>
      <motion.div
        className="absolute inset-0 rounded-[3vw] sm:rounded-[1.2vw] border-2 border-[#3DFF87] opacity-0 pointer-events-none"
        animate={{ opacity: 0 }}
        whileTap={
          typeof window !== "undefined" && window.innerWidth <= 768
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
