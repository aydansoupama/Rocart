"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import VertexBackground from "@/components/backgrounds/Vertex";

const FloatingItem = ({
  image,
  name,
  category,
  primary,
  gradient,
  rotation,
}: {
  image: string;
  name: string;
  category: string;
  primary: string;
  gradient: string;
  rotation: number;
}) => {
  return (
    <div
      className="relative rounded-[32px] w-[160px] h-[160px] font-poppins font-semibold p-4 backdrop-blur-sm border-2 shadow-2xl flex flex-col justify-between"
      style={{
        background: gradient,
        rotate: `${rotation}deg`,
      }}
    >
      {/* Image */}
      <div className="flex justify-center items-center">
        <div className="relative w-16 h-16 flex items-center justify-center">
          <Image
            src={image}
            alt={name}
            width={60}
            height={60}
            className="object-cover drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Texte */}
      <div className="flex flex-col gap-0.5">
        <h3 className="text-white text-xs font-semibold font-poppins leading-tight">
          {name}
        </h3>
        <p className="text-white/80 text-xs font-semibold font-poppins leading-tight">
          {category}
        </p>
      </div>

      {/* Bouton panier */}
      <button
        className="absolute bottom-3 right-3 w-8 h-8 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        style={{ backgroundColor: primary }}
      >
        <ShoppingCart size={14} fill="white" />
      </button>
    </div>
  );
};

const HeroSection = () => {
  return (
    <VertexBackground
      backgroundLayer={
        <Image
          src="/images/homepage/hero_banner.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      }
      radius={80}
    >
      <div className="absolute inset-0 z-1 bg-linear-to-t from-primary/20 to-[#06100a] pointer-events-none" />
      
      <section className="w-full py-8 md:py-12 px-4 md:px-6 font-poppins relative z-10">
        <div className="px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full lg:w-1/2">
            <div className="mb-8 md:mb-16">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white max-w-2xl leading-tight mb-4 md:mb-6">
                Buy Your Favorite Items{" "}
                <span className="text-primary">Fast, Safe, and Easy</span>{" "}
                with BloxBeam!
              </h1>

              <div className="space-y-2 md:space-y-3 text-secondary text-sm md:text-base mb-6 md:mb-8">
                <p>
                  Bloxbeam the fastest, safest shop for in-game items with
                  automated delivery.
                </p>
                <p>Get what you need in seconds.</p>
                <p>
                  For items in Murder Mystery 2, Grow a Garden, Blox Fruits,
                  Steal a Brainrot, Blade Ball.
                </p>
              </div>
            </div>

            <button className="flex justify-center items-center font-bold gap-x-2.5 px-4 py-3 rounded-xl bg-linear-to-b from-[#3DFF88] to-[#259951] hover:to-[#259951] hover:from-[#169e4a] transition-colors transition-300 shadow-[inset_0px_-2px_0px_0px_rgba(255,255,255,255.1)] active:shadow-none active:translate-y-0.5 cursor-pointer">
              <ShoppingCart fill="white" size={20} className="md:w-6 md:h-6" />
              Start Buying
            </button>
          </div>

          <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center">
            <motion.div
              className="absolute top-0 left-4 sm:left-8 lg:left-12 z-20 scale-75 sm:scale-90 lg:scale-100"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "loop",
              }}
            >
              <FloatingItem
                image="/images/homepage/red_hero.png"
                name="Gold disco"
                category="Bee"
                primary="#FF1744"
                gradient="linear-gradient(135deg, rgba(139, 0, 0, 0.8), rgba(69, 0, 0, 0.6))"
                rotation={-24}
              />
            </motion.div>

            <motion.div
              className="absolute top-4 sm:top-8 right-0 z-20 scale-75 sm:scale-90 lg:scale-100"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
                repeatType: "loop",
              }}
            >
              <FloatingItem
                image="/images/homepage/blue_hero.png"
                name="Control"
                category="Fruit"
                primary="#448AFF"
                gradient="linear-gradient(135deg, rgba(25, 118, 210, 0.8), rgba(13, 71, 161, 0.6))"
                rotation={45}
              />
            </motion.div>

            <motion.div
              className="absolute bottom-8 sm:bottom-12 left-0 z-20 scale-75 sm:scale-90 lg:scale-100"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
                repeatType: "loop",
              }}
            >
              <FloatingItem
                image="/images/homepage/green_hero.png"
                name="Chroma"
                category="Evergun"
                primary="#00E676"
                gradient="linear-gradient(135deg, rgba(27, 94, 32, 0.8), rgba(46, 125, 50, 0.6))"
                rotation={-55}
              />
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-primary to-transparent" />
      </section>
    </VertexBackground>
  );
};

export default HeroSection;
