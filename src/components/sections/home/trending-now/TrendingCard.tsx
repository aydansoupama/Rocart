"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import {
  containerVariants,
  cardVariants,
  itemVariants,
} from "./animation-variants";

const AnimatedCard = motion(Card);
const AnimatedImg = motion(Image);

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
      className={`group w-full sm:w-[48%] lg:w-[31%] xl:w-[23.5%] ${
        gameIndex >= 2 ? "hidden sm:block" : ""
      }`}
    >
      <AnimatedCard
        className="h-auto 
                bg-[#030804] border border-[#2A2A2A] 
                p-0
                rounded-2xl
                shadow-2xl flex flex-col items-center relative overflow-hidden 
                group-hover:border-[#3DFF87]/30 transition-colors duration-300"
      >
        <CardContent className="flex flex-col items-center justify-start w-full h-full relative px-0 z-10">
          {/* Game Header */}
          <motion.div
            className="w-auto gap-2 flex flex-row items-center pt-4 pb-2"
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: gameIndex * 0.1 + 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <AnimatedImg
              className="w-8 h-8 rounded-md object-cover mb-2 shadow-lg"
              alt={game.title}
              src={game.icon}
              width={32}
              height={32}
              unoptimized
            />{" "}
            <motion.div
              className="w-full text-center font-bold text-lg bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {game.title}
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4 justify-center w-full mb-6 px-4"
            variants={containerVariants}
            initial="visible"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {game.items.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative w-full h-auto rounded-lg flex flex-col items-center backdrop-blur-sm border-none group/item cursor-pointer select-none p-2"
                style={{
                  background: item.backgroundImage,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  },
                }}
                onClick={() => {
                  if (typeof window !== "undefined" && window.navigator) {
                    if (window.navigator.vibrate) {
                      window.navigator.vibrate([100]);
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
                    rx="8"
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
                <motion.div className="absolute inset-0 rounded-lg bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                <AnimatedImg
                  className="mt-2 rounded-md object-cover shadow-xl z-10 w-20 h-20 select-none"
                  alt={item.name}
                  src={item.image}
                  width={80}
                  height={80}
                  unoptimized
                  whileHover={{
                    scale: 1.1,
                    rotate: -3,
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
                  className="w-full text-left font-bold text-sm md:text-base mt-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent px-2 select-none"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {item.name}
                </motion.div>
                <motion.div
                  className={`w-full text-left font-bold text-xs md:text-sm mt-1 px-2 ${item.priceColor} drop-shadow-lg select-none`}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {item.price}
                </motion.div>
                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-[#3DFF87] opacity-0 pointer-events-none"
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

          {/* Visit Market Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: gameIndex * 0.1 + 0.6, duration: 0.5 }}
            viewport={{ once: true }}
            className="relative py-4 w-full flex justify-center items-center"
          >
            <Button
              className="h-12 z-10 rounded-lg group-hover:scale-105 transition-transform duration-300"
              style={{
                background: game.buttonGradient,
                boxShadow: `inset 0px 0px 0px 0.5px #D9D9D9`,
              }}
            >
              <motion.span
                className="font-medium text-white text-sm md:text-base opacity-100 tracking-tight leading-none pointer-events-none"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Visit Market
                <Image
                  src="/icon/icon2.png"
                  alt="arrow right"
                  className="inline w-4 h-4 ml-2 object-contain"
                  width={16}
                  height={16}
                  unoptimized
                />
              </motion.span>
            </Button>

            {/* Mask Group Image */}
            <AnimatedImg
              className="absolute bottom-0 left-0 bg-red-600 z-[-1] opacity-50"
              alt="Mask group"
              src={game.maskGroup}
              fill
              unoptimized
              initial={{ opacity: 0, y: 20, scale: 1 }}
              whileInView={{ opacity: 0.5, y: 0, scale: 1 }}
              transition={{ delay: gameIndex * 0.1 + 0.8, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </CardContent>
      </AnimatedCard>
    </motion.div>
  );
};
