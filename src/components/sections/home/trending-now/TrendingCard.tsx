"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import {
  containerVariants,
  cardVariants,
  itemVariants,
} from "./animation-variants";
import { ChevronRight } from "lucide-react";

const AnimatedCard = motion.create(Card);
const AnimatedImg = motion.img;

const mobileImageTap = {
  scale: 1.08,
  rotate: -3,
  transition: {
    type: "spring" as const,
    stiffness: 500,
    damping: 20,
    duration: 0.15,
  },
};

interface TrendingCardProps {
  game: {
    id: number;
    title: string;
    icon: string;
    items: Array<{
      name: string;
      image: string;
      price: string;
      priceColor: string;
      strokeColor: string;
      backgroundImage: string;
    }>;
    route?: string;
    buttonGradient: string;
    buttonBorderColor: string;
    maskGroup: string;
  };
  gameIndex: number;
  onVisitMarket: (route: string) => void;
}

export const TrendingCard = ({ game, gameIndex }: TrendingCardProps) => {
  return (
    <motion.div
      key={game.id}
      variants={cardVariants}
      className={`group ${gameIndex >= 2 ? "hidden sm:block" : ""}`}
    >
      <AnimatedCard
        className="py-0 w-full aspect-3/4 sm:h-[35vh]  lg:h-[45vh] 
                bg-[#030804] border border-[#2A2A2A] 
                rounded-[10vw] sm:rounded-[2.5vw] lg:rounded-[2vw] 
                shadow-2xl flex flex-col items-center relative overflow-hidden 
                group-hover:border-[#3DFF87]/30 transition-colors duration-300"
      >
        <CardContent className="flex flex-col items-center justify-start w-full h-full p-0 relative z-10">
          {/* Game Header */}
          <motion.div
            className="w-auto gap-[2vw] sm:gap-[1vw] flex flex-row items-center pt-[3vh] pb-[2vh]"
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: gameIndex * 0.1 + 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.img
              className="w-[4vw] sm:w-[1.8vw] h-[4vw] sm:h-[1.8vw] rounded-[0.8vw] sm:rounded-[0.4vw] object-cover mb-[1.5vh] shadow-lg"
              alt={game.title}
              src={game.icon}
            />
            <motion.div
              className="w-full text-center font-bold text-[3vw] sm:text-[0.5vw] lg:text-[0.8vw] bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent mb-[1vh]"
              style={{ fontFamily: "Poppins, sans-serif" }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {game.title}
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-8 w-full px-8"
            variants={containerVariants}
            initial="visible"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {game.items.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative w-full rounded-[3vw] sm:rounded-[1.2vw] flex flex-col items-center backdrop-blur-sm border-none group/item cursor-pointer select-none"
                style={{
                  background: item.backgroundImage,
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
                        (window.navigator as Navigator).userAgent.includes(
                          "iPhone"
                        )
                      ) {
                        console.log(
                          "iPhone detected — basic haptic feedback triggered"
                        );
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
                      id={`stroke-gradient-${item.name.replace(
                        /\s+/g,
                        "-"
                      )}-${index}`}
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        stopColor={item.strokeColor}
                        stopOpacity="0.7"
                      />
                      <stop
                        offset="100%"
                        stopColor="transparent"
                        stopOpacity="0"
                      />
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
                    strokeWidth="1"
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
            ))}
          </motion.div>

          <div className="absolute bottom-0 w-full">
            <div
              className="relative w-full h-20 flex items-center justify-center"
              style={{
                background: `url(${game.maskGroup})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <button
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:w-4 [&_svg]:w-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer bg-primary hover:bg-primary/90 h-10 px-6 has-[>svg]:px-4 rounded-lg group-hover:scale-105 transition-transform duration-300 font-medium text-white bg-linear-to-r shadow-md "
                style={{
                  background: game.buttonGradient,
                  borderColor: "#D9D9D9",
                  borderWidth: "1px",
                }}
              >
                Visit Market
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </CardContent>
      </AnimatedCard>
    </motion.div>
  );
};
