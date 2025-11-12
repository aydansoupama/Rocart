"use client";
import { hexToRgba } from "@/lib/utils";
import HotRarityIcon from "./rarity/icons/hot-rarity-icon";
import BestSellerRarityIcon from "./rarity/icons/best-sellers-rarity-icon";
import SearchIcon from "./SearchIcon";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CatalogSearch = () => {
  const searchRef = useRef<HTMLDivElement>(null);
  const inView = useInView(searchRef, { once: true, amount: 0.3 });

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <motion.div
      ref={searchRef}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
      className="font-poppins flex flex-col lg:flex-row items-center gap-y-4 lg:gap-y-0 lg:gap-x-[78px] bg-[#030C08] rounded-[13px] w-full px-4 py-4 lg:px-6 lg:py-5"
    >
      <div className="relative w-full max-w-md lg:w-xl h-[50px]">
        <input
          type="search"
          className="relative px-6 outline-none rounded-[13px] w-full h-full placeholder:text-[#5d6662] placeholder:font-semibold text-[13px]"
          placeholder="Search something here"
          style={{
            background: hexToRgba("#1C4127", 0.34),
          }}
        />

        <div className="absolute right-1 top-1/2 -translate-x-1 -translate-y-1/2 bg-[#153022] flex justify-center items-center rounded-[8px] w-10 h-[30px]">
          <SearchIcon />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-y-4 lg:gap-y-0 lg:gap-x-6 w-full lg:w-auto">
        <div className="flex flex-nowrap justify-center gap-2 lg:gap-[18px]">
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
            className="whitespace-nowrap hover:scale-105 active:scale-95 transition-all w-fit h-11 py-2 px-3 bg-[#0a1b11] hover:bg-[#0a1b11]/80 cursor-pointer rounded-[14px] border-2 border-[#04381E] font-bold text-[13px] text-[#C5C5C5]"
          >
            All
          </motion.button>

          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
            className="whitespace-nowrap hover:scale-105 active:scale-95 transition-all flex justify-center items-center gap-2 w-fit h-11 py-2 px-3 bg-[#100f0a] hover:bg-[#100f0a]/80 cursor-pointer rounded-[14px] border-2 border-[#FC8483] font-bold text-[13px] text-[#fc8483]"
          >
            <div className="bg-[#f7a0a1] w-6 h-5 p-0.5 rounded-[6px]">
              <HotRarityIcon fromColor={"#dd6262"} toColor={"#dd6262"} />
            </div>
            Hot Items
          </motion.button>

          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={2}
            className="whitespace-nowrap hover:scale-105 active:scale-95 transition-all flex justify-center items-center gap-2 w-fit h-11 py-2 px-3 bg-[#0a1b11] hover:bg-[#0a1b11]/80 cursor-pointer rounded-[14px] border-2 border-[#8bd673] font-bold text-[13px] text-[#8bd673]"
          >
            <div className="bg-[#a4f7a0] w-6 h-5 p-0.5 rounded-[6px]">
              <BestSellerRarityIcon fromColor={"#82be6f"} toColor={"#82be6f"} />
            </div>
            Best Sellers
          </motion.button>
        </div>

        <div className="border-l border-[#33e070] w-0.5 h-[25px] hidden lg:block" />

        <div className="flex flex-nowrap justify-center gap-2 lg:gap-[18px]">
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={3}
            className="whitespace-nowrap hover:scale-105 active:scale-95 transition-all w-fit h-11 py-2 px-3 bg-[#0a1b11] hover:bg-[#0a1b11]/80 cursor-pointer rounded-[14px] border-2 border-[#04381E] font-bold text-xs text-[#C5C5C5]"
          >
            Bundles
          </motion.button>
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={4}
            className="whitespace-nowrap hover:scale-105 active:scale-95 transition-all w-fit h-11 py-2 px-3 bg-[#0a1b11] hover:bg-[#0a1b11]/80 cursor-pointer rounded-[14px] border-2 border-[#04381E] font-bold text-xs text-[#C5C5C5]"
          >
            Knives
          </motion.button>
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={5}
            className="whitespace-nowrap hover:scale-105 active:scale-95 transition-all w-fit h-11 py-2 px-3 bg-[#0a1b11] hover:bg-[#0a1b11]/80 cursor-pointer rounded-[14px] border-2 border-[#04381E] font-bold text-xs text-[#C5C5C5]"
          >
            Guns
          </motion.button>
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={6}
            className="whitespace-nowrap hover:scale-105 active:scale-95 transition-all w-fit h-11 py-2 px-3 bg-[#0a1b11] hover:bg-[#0a1b11]/80 cursor-pointer rounded-[14px] border-2 border-[#04381E] font-bold text-xs text-[#C5C5C5]"
          >
            Summer Specials
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CatalogSearch;
