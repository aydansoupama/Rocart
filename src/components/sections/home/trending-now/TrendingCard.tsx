"use client";
import { motion, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { TrendingItem } from "./TrendingItem";

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
  index: number;
  onVisitMarket: (route: string) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.8,
    rotateY: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      duration: 0.8,
      bounce: 0.4,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
};

const mobileImageTap = {
  scale: 1.2,
  rotateZ: 5,
  transition: {
    type: "spring",
    stiffness: 500,
    damping: 20,
    duration: 0.2,
  },
} as const;

export const TrendingCard = ({ game, index }: TrendingCardProps) => {
  return (
    <div className={`group ${index >= 2 ? "hidden sm:block" : ""}`}>
      <AnimatedCard
        className="w-[70vw] sm:w-[22vw] lg:w-[18vw] h-[44vh] sm:h-[43vh] lg:h-[45vh] 
                bg-[#030804] border border-[#2A2A2A] 
                rounded-[10vw] sm:rounded-[2.5vw] lg:rounded-[2vw] 
                shadow-2xl flex flex-col items-center relative overflow-hidden 
                group-hover:border-[#3DFF87]/30 transition-colors duration-300 p-0"
      >
        <CardContent className="flex flex-col items-center justify-start w-full h-full p-0 relative z-10">
          {/* Game Header */}
          <motion.div
            className="w-auto gap-[2vw] sm:gap-[1vw] flex flex-row items-center pt-[3vh] pb-[2vh]"
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: game.id * 0.1 + 0.4, duration: 0.5 }}
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
              <TrendingItem item={item} index={index} key={index} />
            ))}
          </motion.div>

          {/* Visit Market Button - Mobile */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: game.id * 0.1 + 0.6, duration: 0.5 }}
            viewport={{ once: true }}
            className="block sm:hidden"
          >
            <Button
              onClick={() => console.log(`Visit market ${game.title}`)}
              className="mt-[2vh] 
                                w-[30vw] 
                                h-[4.5vh] 
                                z-100 rounded-[3vw] 
                                group-hover:scale-105 transition-transform duration-300"
              style={{
                background: game.buttonGradient,
                opacity: 1,
                border: "none",
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
            transition={{ delay: game.id * 0.1 + 0.6, duration: 0.5 }}
            viewport={{ once: true }}
            className="hidden sm:block"
          >
            <Button
              onClick={() => console.log(`Visit market ${game.title}`)}
              className="mt-[6vh] 
                                sm:mt-[5vh] 
                                w-[12vw] lg:w-[8vw] 
                                h-[5vh] lg:h-[5vh] 
                                z-100 rounded-[1.2vw] lg:rounded-[0.8vw] 
                                group-hover:scale-105 transition-transform duration-300"
              style={{
                background: game.buttonGradient,
                borderColor: "#9B9B9B",
                borderWidth: "0.5px",
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

          <motion.img
            className="hidden lg:block absolute bottom-0 left-0 
                              w-[55vw] h-auto max-h-[20vh] 
                              z-[-1] opacity-50 object-contain"
            alt="Mask group desktop"
            src={game.maskGroup}
            initial={{ opacity: 0, y: 20, scale: 1 }}
            whileInView={{ opacity: 0.5, y: 0, scale: 1 }}
            transition={{ delay: game.id * 0.1 + 0.8, duration: 0.8 }}
            viewport={{ once: true }}
          />

          <motion.img
            className="block lg:hidden absolute bottom-0 left-0 
                              w-[70vw] h-auto max-h-[10vh] 
                              z-[-1] opacity-50 "
            alt="Mask group mobile"
            src={game.maskGroup}
            initial={{ opacity: 0, y: 20, scale: 1 }}
            whileInView={{ opacity: 0.5, y: 0, scale: 1 }}
            transition={{ delay: game.id * 0.1 + 0.8, duration: 0.8 }}
            viewport={{ once: true }}
          />
        </CardContent>
      </AnimatedCard>
    </div>
  );
};
