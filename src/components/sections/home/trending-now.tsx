import VertexBackground from "@/components/backgrounds/Vertex";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

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
  backgroundImage,
}: {
  gameName: string;
  gameIcon: string;
  items: TrendingItem[];
  backgroundImage: string;
}) => {
  return (
    <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl w-[400px] h-[450px] mx-auto">
      <div className="absolute inset-0 bg-black/60 z-[1]" />
      <div className="relative z-10  h-full flex flex-col">
        <div className="flex items-center p-6 gap-3 mb-6">
          <div className="w-10 h-10 bg-gray-400 rounded-lg flex items-center justify-center">
            <span className="text-xl">🎮</span>
          </div>
          <h2 className="text-2xl font-bold text-white">{gameName}</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 px-6 mb-6 flex-1">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 border-2 hover:scale-105 transition-transform cursor-pointer flex flex-col"
              style={{ borderColor: item.borderColor }}
            >
              <div className="flex justify-center mb-3 flex-1">
                <div className="w-24 h-24 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-3xl">📦</span>
                </div>
              </div>
              <h3 className="text-white text-lg font-bold mb-1 uppercase">
                {item.name}
              </h3>
              <p className="text-xl font-bold" style={{ color: item.borderColor }}>
                {item.price}
              </p>
            </div>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <Image
              src={backgroundImage}
              alt="Market banner"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative flex justify-center bg-red-600 py-6">
            <button className="bg-[#1a3a2e] hover:bg-[#214435] text-white px-6 py-3 rounded-2xl font-bold text-base flex items-center gap-2 transition-colors border border-white/20">
              Visit Market
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TrendingNowSection = () => {
  const growAGardenItems: TrendingItem[] = [
    {
      name: "Raccoon",
      price: "$15",
      image: "/placeholder-raccoon.png",
      borderColor: "#00ff66",
    },
    {
      name: "Queen Bee",
      price: "$10",
      image: "/placeholder-bee.png",
      borderColor: "#ffcc00",
    },
  ];

  return (
    <VertexBackground
      radius={80}
      backgroundLayer={<div className="bg-[#06100a] w-full h-full" />}
    >
      <section className="font-poppins w-full py-32 px-4">
        <div className="flex flex-col justify-center gap-2 mb-16">
          <div className="flex justify-center items-center gap-8">
            <hr className="bg-linear-to-r from-transparent to-white w-full h-0.5 rounded-full border-0" />
            <h3 className="text-4xl font-bold text-center w-fit whitespace-nowrap">
              Trending Now
            </h3>
            <hr className="bg-linear-to-l from-transparent to-white w-full h-0.5 rounded-full border-0" />
          </div>
          <p className="text-center mx-auto text-gray-400">
            Items gaining popularity right now.
            <br />
            Most users are active on their catalog pages.
          </p>
        </div>

        <TrendingMarket
          gameName="Grow A Garden"
          gameIcon="/placeholder-game-icon.png"
          items={growAGardenItems}
          backgroundImage="/placeholder-garden-bg.jpg"
        />
      </section>
    </VertexBackground>
  );
};

export default TrendingNowSection;
