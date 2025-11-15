"use client";

import { motion } from "framer-motion";
import VertexBackground from "@/components/backgrounds/Vertex";
import { HeroContent } from "./hero/HeroContent";
import { HeroCharacter } from "./hero/HeroCharacter";

const HeroSection = () => {
  return (
    <VertexBackground
      backgroundLayer={
        <div className="w-full h-full bg-[#06100a] relative">
          <div
            className="absolute inset-0 bg-cover bg-center w-full h-full"
            style={{ backgroundImage: "url('/bg/ho.png')" }}
          ></div>
          <div
            className="
                    absolute inset-0 
                    bg-[url('/bg/mesh.png')] 
                    bg-no-repeat bg-center 
                    sm:bg-repeat
                    opacity-40 pointer-events-none 
                    from-[#06100A] via-transparent to-[#2A2A2A]
                  "
            style={{
              backgroundSize: "100% 100%",
              backgroundBlendMode: "overlay",
              backgroundAttachment: "fixed",
            }}
          ></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("/bg/image.png")' }}
          ></div>
        </div>
      }
      radius={80}
    >
      <section className="relative w-full h-[75vh] overflow-hidden">
        <div
          className="absolute bottom-0 left-0 w-full h-[0.2vh]"
          style={{
            background: "linear-gradient(to right, #3DFF88, #259951)",
          }}
        />

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-[2vh] px-[4vw] sm:px-[2vw] py-[4vh] max-w-[95vw] mx-auto h-full">
          <HeroContent onStartBuying={() => console.log("Start Buying")} />
          <HeroCharacter />
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
    </VertexBackground>
  );
};

export default HeroSection;
