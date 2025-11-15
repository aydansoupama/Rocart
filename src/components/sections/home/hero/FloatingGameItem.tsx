"use client";
import { easeInOut, motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface FloatingGameItemProps {
  item: {
    name: string;
    image: string;
    top: string;
    left: string;
    rotation: string;
  };
  index: number;
}

export const FloatingGameItem = ({ item, index }: FloatingGameItemProps) => {
  return (
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
      <div className="rounded-xl border text-card-foreground relative top-[15vw] w-full h-full bg-transparent shadow-none border-none">
        <div className="p-0 relative w-full h-full">
          <div className="absolute inset-0 rounded-[2.5vw] opacity-[0.12] -rotate-45"></div>
          <img
            className={`absolute inset-0 w-full h-full m-auto object-contain scale-150 ${item.rotation}`}
            alt={item.name}
            src={item.image}
          />
          <div className="absolute bottom-[20%] right-[10%] w-[2.5vw] h-[2.5vw] rounded-[0.8vw] -rotate-45"></div>
        </div>
      </div>
    </motion.div>
  );
};
