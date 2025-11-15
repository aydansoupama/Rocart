"use client";

import { motion } from "framer-motion";
import VertexBackground from "@/components/backgrounds/Vertex";
import { HeroContent } from "./hero/HeroContent";
import { HeroCharacter } from "./hero/HeroCharacter";
import { gameItems } from "./hero/game-items-data";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingGameItem } from "./hero/FloatingGameItem";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[75vh] overflow-hidden">
      {/* Base Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg/ho.png')",
        }}
      />

      {/* Custom Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg/image.png')",
        }}
      />

      {/* Bottom Gradient Line */}
      <div
        className="absolute bottom-0 left-0 w-full h-[0.2vh]"
        style={{
          background: "linear-gradient(to right, #3DFF87, #000000)",
        }}
      />

      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-[2vh] px-[4vw] sm:px-[2vw] py-[4vh] max-w-[95vw] mx-auto h-full">
        <HeroContent onStartBuying={() => console.log("Start Buying")} />
        <div className="hidden lg:flex flex-1 relative aspect-[4/3] w-full max-w-[40vw] mx-auto">
          {/* Main Character */}
          <img
            className="absolute top-[25vh] left-[30%] w-[50%] h-auto object-contain"
            alt="Character"
            src="/logo/char.png"
          />

          {/* Floating Game Items */}
          {gameItems.map((item, index) => (
            <FloatingGameItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 w-full h-[5px]"
        style={{
          background: "linear-gradient(to right, #3DFF87, #000000)",
        }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.8,
          ease: [0.4, 0, 0.2, 1] as const,
        }}
      />
    </section>
  );
};

export default HeroSection;
