"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

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

export const TrendingCard = ({
  game,
  onVisitMarket,
}: TrendingCardProps) => {
  return (
    <AnimatedCard className="bg-[#030804] rounded-3xl py-0 backdrop-blur-md overflow-hidden w-fit shadow-2xl group grid grid-rows-[1fr_6rem] grid-flow-col relative border border-[#2A2A2A] hover:border-app-light/30 hover:shadow-[0_0_1rem_0_#3dff880f] transition-all duration-300 flex-shrink-0">
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
            <div
              key={index}
              className="w-36 h-44 relative rounded-t-3xl flex flex-col border-none group/item cursor-pointer select-none bg-gradient-to-b from-green-500/20 to-transparent to-80%"
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
            </div>
          ))}
        </div>
      </div>
      <div
        className="relative bg-cover bg-center bg-no-repeat w-full h-full flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${game.maskGroup})`,
        }}
      >
        <button
          data-slot="button"
          onClick={() => onVisitMarket(game.route || "#")}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:w-4 [&_svg]:w-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer bg-primary hover:bg-primary/90 h-10 px-6 has-[>svg]:px-4 rounded-lg group-hover:scale-105 transition-transform duration-300 font-medium text-white bg-linear-to-r shadow-md"
          style={{
            background: game.buttonGradient,
            borderColor: "#D9D9D9",
            borderWidth: "1px",
          }}
        >
          Visit Market
          <ChevronRight className="lucide lucide-arrow-right" size={24} />
        </button>
      </div>
    </AnimatedCard>
  );
};
