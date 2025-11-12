"use client";
import { trendingGames } from "@/datas/trending-now";
import { TrendingHeader } from "./trending-now/TrendingHeader";
import { TrendingCard } from "./trending-now/TrendingCard";

const TrendingNowSection = () => {
  return (
    <section className="relative w-full  bg-[#06100A] pt-[11.11vh] pb-[5vh] scrollbar-none">
      <div
        className="
          absolute inset-0 
          bg-[url('/bg/mesh.png')] 
          bg-no-repeat bg-center 
          sm:bg-repeat
          opacity-90 pointer-events-none 
          from-[#06100A] via-transparent to-[#2A2A2A]
        "
        style={{
          backgroundSize: "100% 100%",
          backgroundBlendMode: "overlay",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <TrendingHeader />

        <div className="flex flex-nowrap w-fit max-w-full mx-auto gap-8 pb-6 justify-start items-center overflow-x-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-secondary lg:scrollbar-thumb-gray-500">
          {trendingGames.map((game, index) => (
            <TrendingCard
              game={game}
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
