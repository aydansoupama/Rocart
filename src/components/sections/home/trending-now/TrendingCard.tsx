"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import {
  containerVariants,
  cardVariants,
  itemVariants,
} from "./animation-variants";

const AnimatedCard = motion.create(Card);
const AnimatedImg = motion.img;

const mobileImageTap = {
  scale: 1.08,
  rotate: -3,
  transition: { type: "spring", stiffness: 500, damping: 20, duration: 0.15 },
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
        className="w-[70vw] sm:w-[22vw] py-0 lg:w-[18vw] h-[44vh] sm:h-[43vh] lg:h-[45vh] 
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
              className="w-full text-center font-bold text-[3vw] sm:text-[0.5vw] lg:text-[0.8vw] bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-[1vh]"
              style={{ fontFamily: "Poppins, sans-serif" }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {game.title}
            </motion.div>
          </motion.div>

          {/* Items Grid with Enhanced Mobile Click Animation */}
          <motion.div
            className="flex gap-[3vw] sm:gap-[1.2vw] justify-center w-[75vw] sm:w-[20vw] mb-[4vh]"
            variants={containerVariants}
            initial="visible"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {game.items.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative w-[30vw] sm:w-[7vw] h-[22vh] sm:h-[22vh] lg:h-[18vh] rounded-[3vw] sm:rounded-[1.2vw] flex flex-col items-center backdrop-blur-sm border-none group/item cursor-pointer select-none"
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
                <motion.div className="absolute inset-0 rounded-[3vw] sm:rounded-[1.2vw] bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
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

          {/* Visit Market Button - Mobile */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: gameIndex * 0.1 + 0.6, duration: 0.5 }}
            viewport={{ once: true }}
            className="block sm:hidden"
          >
            <Button
              className="mt-[2vh] 
                                w-[30vw] 
                                h-[4.5vh] 
                                z-100 rounded-[3vw] 
                                group-hover:scale-105 transition-transform duration-300 border-[0.5px] border-[#D9D9D9]"
              style={{
                background: game.buttonGradient,
              }}
            >
              <motion.span
                className="font-medium text-white 
                                  text-[3vw] 
                                  opacity-100 tracking-tight leading-none pointer-events-none"
                style={{ fontFamily: "Poppins, sans-serif" }}
                whileHover={{ scale: 1.05 }}
              >
                Visit Market
                <img
                  src="/icon/icon2.png"
                  alt="arrow right"
                  className="inline 
                                    w-[2.2vw] h-[2.2vw] 
                                    ml-[0.8vw] object-contain"
                />
              </motion.span>
            </Button>
          </motion.div>

          {/* Visit Market Button - Desktop */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: gameIndex * 0.1 + 0.6, duration: 0.5 }}
            viewport={{ once: true }}
            className="hidden sm:block"
          >
            <Button
              className="mt-[6vh] 
                                sm:mt-[5vh] 
                                w-[12vw] lg:w-[8vw] 
                                h-[5vh] lg:h-[5vh] 
                                z-100 rounded-[1.2vw] lg:rounded-[0.8vw] 
                                group-hover:scale-105 transition-transform duration-300 border-[0.5px] border-[#D9D9D9]"
              style={{
                background: game.buttonGradient,
              }}
            >
              <motion.span
                className="font-medium text-white 
                                  text-[1vw] lg:text-[0.7vw] 
                                  opacity-100 tracking-tight leading-none pointer-events-none"
                style={{ fontFamily: "Poppins, sans-serif" }}
                whileHover={{ scale: 1.05 }}
              >
                Visit Market
                <img
                  src="/icon/icon2.png"
                  alt="arrow right"
                  className="inline 
                                    w-[1vw] lg:w-[0.8vw] 
                                    h-[1vw] lg:h-[0.8vw] 
                                    ml-[0.3vw] object-contain"
                />
              </motion.span>
            </Button>
          </motion.div>

          {/* Desktop Mask Group Image */}
          <motion.img
            className="hidden lg:block absolute bottom-0 left-0 
                              w-[55vw] h-auto max-h-[20vh] 
                              z-[-1] opacity-50 object-contain"
            alt="Mask group desktop"
            src={game.maskGroup}
            initial={{ opacity: 0, y: 20, scale: 1 }}
            whileInView={{ opacity: 0.5, y: 0, scale: 1 }}
            transition={{ delay: gameIndex * 0.1 + 0.8, duration: 0.8 }}
            viewport={{ once: true }}
          />

          {/* Mobile Mask Group Image */}
          <motion.img
            className="block lg:hidden absolute bottom-0 left-0 
                              w-[70vw] h-auto max-h-[10vh] 
                              z-[-1] opacity-50 "
            alt="Mask group mobile"
            src={game.maskGroup}
            initial={{ opacity: 0, y: 20, scale: 1 }}
            whileInView={{ opacity: 0.5, y: 0, scale: 1 }}
            transition={{ delay: gameIndex * 0.1 + 0.8, duration: 0.8 }}
            viewport={{ once: true }}
          />
        </CardContent>
      </AnimatedCard>
    </motion.div>
  );
};
