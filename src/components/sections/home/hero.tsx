"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import VertexBackground from "@/components/backgrounds/Vertex";
import { Card, CardContent } from "@/components/ui/card";

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
  const gameItems = [
    {
      name: "Chroma Evergun",
      image: "/homeico/1.png",
      top: "10%",
      left: "0%",
      rotation: "rotate-[-55deg]",
    },
    {
      name: "Control Fruit",
      image: "/homeico/3.png",
      top: "-25%",
      left: "65%",
      rotation: "rotate-[45.57deg]",
    },
    {
      name: "Gold disco Bee",
      image: "/homeico/2.png",
      top: "-35%",
      left: "20%",
      rotation: "rotate-[-30.90deg]",
    },
  ];

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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.4,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const characterVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

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
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            animate="visible"
          >
            <div className="mb-8 md:mb-16">
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white max-w-2xl leading-tight mb-4 md:mb-6"
                variants={titleVariants}
              >
                Buy Your Favorite Items{" "}
                <span className="text-primary">Fast, Safe, and Easy</span> with
                BloxBeam!
              </motion.h1>

              <motion.div
                className="space-y-2 md:space-y-3 text-secondary text-sm md:text-base mb-6 md:mb-8"
                variants={descriptionVariants}
              >
                <p>
                  Bloxbeam the fastest, safest shop for in-game items with
                  automated delivery.
                </p>
                <p>Get what you need in seconds.</p>
                <p>
                  For items in Murder Mystery 2, Grow a Garden, Blox Fruits,
                  Steal a Brainrot, Blade Ball.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 sm:gap-3"
              variants={buttonVariants}
            >
              <motion.button
                className="relative flex justify-center items-center font-bold gap-x-2.5 px-6 py-3 rounded-xl bg-linear-to-b from-[#3DFF88] to-[#259951] hover:to-[#259951] hover:from-[#169e4a] transition-colors transition-300 shadow-[inset_0px_-2px_0px_0px_rgba(255,255,255,255.1)] active:shadow-none active:translate-y-0.5 cursor-pointer text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingCart
                  fill="white"
                  size={18}
                  className="sm:w-5 sm:h-5 md:w-6 md:h-6"
                />
                Start Buying
              </motion.button>
              <motion.div
                className="hidden lg:block w-16 h-16"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                  ease: [0.4, 0, 0.2, 1] as const,
                }}
              >
                <Image
                  src="/icon/arroww.png"
                  alt="Arrow"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden lg:flex flex-1 relative aspect-4/3 w-full max-w-[40vw] mx-auto"
            variants={characterVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Floating Game Items - Behind */}
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
                    {/* Background gradient */}
                    <div className="absolute inset-0 rounded-[2.5vw] opacity-[0.12] -rotate-45" />

                    {/* Item Image */}
                    <img
                      className={`absolute inset-0 w-[100%] h-[100%] m-auto object-contain scale-150 ${item.rotation}`}
                      alt={item.name}
                      src={item.image}
                    />

                    {/* Badge */}
                    <div className="absolute bottom-[20%] right-[10%] w-[2.5vw] h-[2.5vw] rounded-[0.8vw] -rotate-45" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Main Character - In Front */}
            <motion.div
              className="absolute translate-y-16 z-10 inset-0 flex items-end justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.4, 0, 0.2, 1] as const,
              }}
            >
              <div className="relative w-full mt-16 aspect-square">
                <Image
                  alt="Character"
                  src="/logo/char.png"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-primary to-transparent"
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
