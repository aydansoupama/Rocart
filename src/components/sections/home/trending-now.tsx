"use client";
import VertexBackground from "@/components/backgrounds/Vertex";
import { trendingGames } from "@/datas/trending-now";
import { TrendingHeader } from "./trending-now/TrendingHeader";
import { TrendingCard } from "./trending-now/TrendingCard";

const TrendingNowSection = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <VertexBackground
      radius={80}
      backgroundLayer={<div className="bg-[#06100a] w-full h-full" />}
    >
      <section className="font-poppins w-full py-16 sm:py-24 md:py-32 px-4">
        <TrendingHeader />
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {trendingGames.map((game, index) => (
            <TrendingCard
              game={game}
              gameIndex={game.id}
              key={index}
              onVisitMarket={() => console.log("market")}
            />
          ))}
        </div>
      </section>
    </VertexBackground>
  );
};

export default TrendingNowSection;
