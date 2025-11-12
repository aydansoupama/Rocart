"use client";
import { Card, CardContent } from "@/components/ui/card";
import { gameItems } from "./game-items-data";
import {motion} from "framer-motion"
import Image from "next/image";

export const HeroCharacter = () => {
  return (
    <div className="hidden lg:flex flex-1 relative aspect-[4/3] w-full max-w-[40vw] mx-auto">
      <img
        className="absolute top-[25vh] left-[30%] w-[50%] h-auto object-contain"
        alt="Character"
        src="/logo/char.png"
      />

      {/* Floating Game Items */}
      {gameItems.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            top: item.top,
            left: item.left,
            width: "30%",
            height: "30%",
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Card className="relative top-[15vw] w-full h-full bg-transparent shadow-none border-none">
            <CardContent className="p-0 relative w-full h-full">
              <div className="absolute inset-0 rounded-[2.5vw] opacity-[0.12] -rotate-45" />

              <Image
                className={`absolute inset-0 w-full h-full m-auto object-contain scale-150 ${item.rotation}`}
                alt={item.name}
                src={item.image}
                fill
              />

              {/* Badge */}
              <div className="absolute bottom-[20%] right-[10%] w-[2.5vw] h-[2.5vw] rounded-[0.8vw] -rotate-45" />
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
