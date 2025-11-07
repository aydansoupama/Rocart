import VertexBackground from "@/components/backgrounds/Vertex";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { trendingGames } from "@/datas/trending-now";

interface TrendingItem {
  name: string;
  price: string;
  image: string;
  borderColor: string;
}

const TrendingMarket = ({
  gameName,
  gameIcon,
  items,
  color,
  backgroundImage,
}: {
  gameName: string;
  gameIcon: string;
  color: string;
  items: TrendingItem[];
  backgroundImage: string;
}) => {
  return (
    <div className="relative rounded-4xl overflow-hidden border border-white/10 shadow-2xl w-full sm:min-w-[350px] md:min-w-[400px] mx-auto">
      <div className="absolute inset-0 bg-black/60 z-1" />
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex justify-center items-center my-auto p-4 sm:p-6 md:p-8 gap-2 sm:gap-3">
          <div className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gray-400 rounded-lg flex items-center justify-center">
            <Image
              src={gameIcon}
              alt="Market Icon"
              fill
              className="object-cover rounded-lg border-none outline-none"
            />
          </div>

          <h2 
            className="text-base sm:text-lg md:text-xl font-bold bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(to right, #ffffff, #999999)"
            }}
          >
            {gameName}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 px-4 sm:px-6 md:px-8 pb-3 sm:pb-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-black/40 p-3 sm:p-4 hover:scale-105 transition-transform cursor-pointer flex flex-col"
              style={{
                borderRadius: "16px",
                border: "2px solid transparent",
                background: `linear-gradient(to bottom, color-mix(in srgb, ${item.color} 20%, black) 0%, rgba(0, 0, 0, 0.8) 30%, #000000 100%) padding-box, linear-gradient(to bottom, ${item.color} 0%, transparent 100%) border-box`,
              }}
            >
              <div className="flex justify-center mb-2 sm:mb-3">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt="Item Avatar"
                    fill
                    className="object-cover rounded-lg border-none outline-none"
                  />
                </div>
              </div>
              <h3 
                className="text-xs sm:text-sm font-bold mb-1 uppercase bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(to right, #ffffff, #999999)"
                }}
              >
                {item.name}
              </h3>
              <p
                className="text-[11px] sm:text-[13px] font-semibold"
                style={{ color: item.color }}
              >
                {item.price}
              </p>
            </div>
          ))}
        </div>

        <div className="relative rounded-2xl rounded-t-none overflow-hidden mt-auto">
          <div className="absolute inset-0 opacity-30">
            <Image
              src={backgroundImage}
              alt="Market banner"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative flex justify-center py-4 sm:py-5 md:py-6">
            <button
              className="text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-2xl font-semibold text-[10px] sm:text-xs flex items-center gap-1 sm:gap-2 transition-all border-secondary border hover:scale-105 cursor-pointer"
              style={{
                background: `linear-gradient(to right, #000000 0%, ${color} 100%)`,
              }}
            >
              Visit Market
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TrendingNowSection = () => {
  return (
    <VertexBackground
      radius={80}
      backgroundLayer={<div className="bg-[#06100a] w-full h-full" />}
    >
      <section className="font-poppins w-full py-16 sm:py-24 md:py-32 px-4">
        <div className="flex flex-col justify-center gap-2 mb-8 sm:mb-12 md:mb-16">
          <div className="flex justify-center items-center gap-3 sm:gap-6 md:gap-8">
            <hr className="bg-linear-to-r from-transparent to-white w-full h-0.5 rounded-full border-0" />
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center w-fit whitespace-nowrap">
              Trending Now
            </h3>
            <hr className="bg-linear-to-l from-transparent to-white w-full h-0.5 rounded-full border-0" />
          </div>
          <p className="text-center mx-auto text-gray-400 text-xs sm:text-sm md:text-base">
            Items gaining popularity right now.
            <br />
            Most users are active on their catalog pages.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {trendingGames.map((game) => (
            <TrendingMarket
              key={game.name}
              gameName={game.name}
              gameIcon={game.icon}
              items={game.items}
              color={game.color}
              backgroundImage={game.image}
            />
          ))}
        </div>
      </section>
    </VertexBackground>
  );
};

export default TrendingNowSection;
