"use client";
import { motion } from "framer-motion";
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
      <Card className="relative top-[15vw] w-full h-full bg-transparent shadow-none border-none">
        <CardContent className="p-0 relative w-full h-full">
          {/* Background gradient */}
          <div className="absolute inset-0 rounded-[2.5vw] opacity-[0.12] -rotate-45" />

          {/* Item Image */}
          <Image
            className={`absolute inset-0 w-full h-full m-auto object-contain ${item.rotation}`}
            style={{
              scale: 2
            }}
            alt={item.name}
            src={item.image}
            fill
          />

          {/* Badge */}
          <div className="absolute bottom-[20%] right-[10%] w-[2.5vw] h-[2.5vw] rounded-[0.8vw] -rotate-45" />
        </CardContent>
      </Card>
    </motion.div>
  );
};
