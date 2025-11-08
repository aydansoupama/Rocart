"use client";
import VertexBackground from "@/components/backgrounds/Vertex";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { trendingGames } from "@/datas/trending-now";
import { motion } from "framer-motion";
import { TrendingHeader } from "./trending-now/TrendingHeader";
import { TrendingCard } from "./trending-now/TrendingCard";

interface TrendingItem {
  name: string;
  price: string;
  image: string;
  priceColor: string;
  backgroundImage: string;
}

// const TrendingMarket = ({
//   gameName,
//   gameIcon,
//   items,
//   buttonGradient,
//   buttonBorderColor,
//   maskGroup,
//   index,
// }: {
//   gameName: string;
//   gameIcon: string;
//   buttonGradient: string;
//   buttonBorderColor: string;
//   maskGroup: string;
//   items: TrendingItem[];
//   index: number;
// }) => {
//   return (
//     <motion.div
//       className="relative rounded-4xl overflow-hidden border border-white/10 shadow-2xl w-full sm:min-w-[350px] md:min-w-[400px] mx-auto"
//       initial={{ opacity: 0, y: 50, scale: 0.9 }}
//       whileInView={{ opacity: 1, y: 0, scale: 1 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{
//         duration: 0.6,
//         delay: index * 0.2,
//         ease: [0.4, 0, 0.2, 1] as const,
//       }}
//       whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.3 } }}
//     >
//       <div className="absolute inset-0 bg-black/60 z-1" />
//       <div className="relative z-10 h-full flex flex-col">
//         <div className="flex justify-center items-center my-auto p-4 sm:p-6 md:p-8 gap-2 sm:gap-3">
//           <div className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gray-400 rounded-lg flex items-center justify-center">
//             <Image
//               src={gameIcon}
//               alt="Market Icon"
//               fill
//               className="object-cover rounded-lg border-none outline-none"
//             />
//           </div>

//           <h2
//             className="text-base sm:text-lg md:text-xl font-bold bg-clip-text text-transparent"
//             style={{
//               backgroundImage: "linear-gradient(to right, #ffffff, #999999)",
//             }}
//           >
//             {gameName}
//           </h2>
//         </div>

//         <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 px-4 sm:px-6 md:px-8 pb-3 sm:pb-4">
//           {items.map((item, index) => (
//             <div
//               key={index}
//               className="bg-black/40 p-3 sm:p-4 hover:scale-105 transition-transform cursor-pointer flex flex-col"
//               style={{
//                 borderRadius: "16px",
//                 border: "2px solid transparent",
//                 background: `${item.backgroundImage} padding-box, linear-gradient(to bottom, ${item.priceColor} 0%, transparent 100%) border-box`,
//               }}
//             >
//               <div className="flex justify-center mb-2 sm:mb-3">
//                 <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg flex items-center justify-center">
//                   <Image
//                     src={item.image}
//                     alt="Item Avatar"
//                     fill
//                     className="object-cover rounded-lg border-none outline-none"
//                   />
//                 </div>
//               </div>
//               <h3
//                 className="text-xs sm:text-sm font-bold mb-1 uppercase bg-clip-text text-transparent"
//                 style={{
//                   backgroundImage:
//                     "linear-gradient(to right, #ffffff, #999999)",
//                 }}
//               >
//                 {item.name}
//               </h3>
//               <p
//                 className={`text-[11px] sm:text-[13px] font-semibold ${item.priceColor}`}
//               >
//                 {item.price}
//               </p>
//             </div>
//           ))}
//         </div>

//         <div className="relative rounded-2xl rounded-t-none overflow-hidden mt-auto">
//           <div className="absolute inset-0 opacity-30">
//             <Image
//               src={maskGroup}
//               alt="Market banner"
//               fill
//               className="object-cover"
//             />
//           </div>

//           <div className="absolute inset-0 bg-black/40" />

//           <div className="relative flex justify-center py-4 sm:py-5 md:py-6">
//             <button
//               className="text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-2xl font-semibold text-[10px] sm:text-xs flex items-center gap-1 sm:gap-2 transition-all border hover:scale-105 cursor-pointer"
//               style={{
//                 background: buttonGradient,
//                 borderColor: buttonBorderColor,
//               }}
//             >
//               Visit Market
//               <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

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
