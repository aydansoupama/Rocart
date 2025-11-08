"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

interface HeroContentProps {
  onStartBuying: () => void;
}

export const HeroContent = ({ onStartBuying }: HeroContentProps) => {
  return (
    <div className="flex-1 w-full text-center lg:text-left flex flex-col justify-center h-full">
      <div className="mb-[2vh]">
        <h1 className="text-[6vw] sm:text-[5vw] lg:text-[3vw] font-bold text-white mb-[2vh] sm:mb-[1.5vh] leading-tight">
          Buy Your Favorite Items
          <br />
          <span className="text-[#3dff87]">Fast, Safe, and Easy</span>
          <br />
          with Rocart!
        </h1>

        <p className="font-normal text-[#c8c8c8] text-[3.5vw] sm:text-[2.5vw] lg:text-[1.2vw] leading-relaxed mb-[4vh] sm:mb-[3vh] px-[2vw] lg:px-0">
          Rocart the fastest, safest shop for in-game items with automated
          delivery. <br className="hidden sm:block" />
          Get what you need in seconds.
          <br className="hidden sm:block" />
          For items in Murder Mystery 2,&nbsp;Grow a Garden, Blox Fruits, Steal
          a Brainrot, Blade Ball.
        </p>

        <div className="flex justify-center lg:justify-start items-center space-x-3 relative">
          <Button
            onClick={onStartBuying}
            className="relative mt-[2vh] sm:mt-[4vh] lg:mt-[6vh] h-[6vh] w-[40vw] sm:w-[25vw] lg:w-[12vw]
            p-2 flex items-center justify-center gap-x-2
            bg-linear-to-r from-[#3DFF88] to-[#259951]
            hover:to-[#259951] hover:from-[#169e4a]
            rounded-2xl
            transition-colors duration-300 cursor-pointer"
          >
            <div className="relative z-10 flex items-center space-x-2">
              <Image
                className="w-[4vw] sm:w-[3vw] lg:w-[2vw] h-[4vw] sm:h-[3vw] lg:h-[2.5vw] object-contain"
                alt="Cart icon"
                src="/icon/shop.png"
                width={32}
                height={32}
              />
              <span className="font-bold text-white text-[4vw] sm:text-[2.5vw] lg:text-[1vw]">
                Start Buying
              </span>
            </div>
          </Button>

          <Image
            src="/icon/arroww.png"
            alt="Arrow"
            className="hidden sm:block h-auto object-contain 
                    w-[20vw] sm:w-[15vw] lg:w-[10vw]
                    translate-y-[10%] lg:translate-y-[0%]"
            width={200}
            height={50}
            priority
          />
        </div>
      </div>
    </div>
  );
};
