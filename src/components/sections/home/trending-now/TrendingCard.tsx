"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const AnimatedCard = motion.create(Card);
const AnimatedImg = motion.img;

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
  onVisitMarket: (route: string) => void;
}

export const TrendingCard = ({ game, onVisitMarket }: TrendingCardProps) => {
  return (
    <AnimatedCard
      className={`bg-[#030804] gap-0 rounded-4xl py-0 backdrop-blur-md overflow-hidden w-fit shadow-2xl group grid grid-rows-[1fr_6rem] grid-flow-col relative border border-[#2A2A2A] hover:border-app-light/30  transition-all duration-300 shrink-0 hover:border-[#3DFF87]/30`}
    >
      <div className="w-full h-full py-8 px-6">
        <div className="mb-8 w-full flex flex-row items-center justify-center gap-4">
          <img
            className="w-auto h-10 rounded-md object-cover"
            alt={game.title}
            src={game.icon}
          />
          <span className="font-bold text-base bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {game.title}
          </span>
        </div>
        <div className="flex gap-4 justify-center">
          {game.items.map((item, index) => (
            <motion.div
              key={index}
              className="w-36 h-44 relative rounded-t-3xl flex flex-col border-none group/item cursor-pointer select-none bg-linear-to-b from-green-500/20 to-transparent to-80%"
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
              style={{
                background: item.backgroundImage,
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
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <div className="flex-[1_1_auto] relative pointer-events-none select-none flex items-center justify-center">
                <AnimatedImg
                  className="object-contain select-none w-[80%] h-[80%]"
                  alt={item.name}
                  src={item.image}
                  style={{ userSelect: "none", pointerEvents: "auto" }}
                  whileHover={{
                    scale: 1.15,
                    rotate: -5,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                />
              </div>
              <div className="p-4 pt-0">
                <p className="text-left font-bold text-lg bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent select-none">
                  {item.name}
                </p>
                <p
                  className={`text-left font-bold text-base ${item.priceColor}`}
                >
                  {item.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div
        className="relative bg-cover bg-center bg-no-repeat w-full h-full flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${game.maskGroup})`,
        }}
      >
        <Button
          onClick={() => onVisitMarket(game.route || "#")}
          className="w-[40vw] sm:w-[20vw] lg:w-[8vw] 
                     h-[6vh] sm:h-[5.5vh] lg:h-[5vh] 
                     rounded-[2vw] sm:rounded-[1.2vw] lg:rounded-[0.8vw] 
                     group-hover:scale-105 transition-transform duration-300 space-x-0.5"
          style={{
            background: game.buttonGradient,
            borderColor: "#9B9B9B",
            borderWidth: "0.5px",
          }}
        >
          <motion.span
            className="font-medium text-white 
                       text-[3.5vw] sm:text-[1.5vw] lg:text-[0.7vw] 
                       opacity-100 tracking-tight leading-none pointer-events-none"
            style={{ fontFamily: "Poppins, sans-serif" }}
            whileHover={{ scale: 1.05 }}
          >
            Visit Market
          </motion.span>
          <ChevronRight
            className="inline text-white
                       w-[4vw] sm:w-[1.5vw] lg:w-[0.8vw] 
                       h-[4vw] sm:h-[1.5vw] lg:h-[0.8vw] 
                       "
            size={24}
          />
        </Button>
      </div>
    </AnimatedCard>
  );
};
