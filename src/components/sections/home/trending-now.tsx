"use client";
import { trendingGames } from "@/datas/trending-now";
import { TrendingHeader } from "./trending-now/TrendingHeader";
import { TrendingCard } from "./trending-now/TrendingCard";

const TrendingNowSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#06100A] pt-[2vh] pb-[5vh] scrollbar-none">
    

      <div className="max-w-[95vw] mx-auto px-[3vw] z-10">
        <TrendingHeader />
        <div className="flex flex-wrap gap-[4vw] sm:gap-[1.5vw] justify-center items-end">
          {trendingGames.map((game, index) => (
            <TrendingCard
              game={game}
              gameIndex={game.id}
              key={index}
              onVisitMarket={() => console.log("market")}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingNowSection;
