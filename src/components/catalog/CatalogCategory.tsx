"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HotRarityIcon from "@/components/catalog/rarity/icons/hot-rarity-icon";
import { type CatalogCategory } from "@/datas/catalog/categories";
import { CatalogItemCard } from "@/components/catalog/CatalogItemCard";
import { useRef, useCallback, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import BestSellerRarityIcon from "./rarity/icons/best-sellers-rarity-icon";
import PetsRarityIcon from "./rarity/icons/pets-rarity-icon";
import { M_PLUS_1 } from "next/font/google";
import ShecklesRarityIcon from "./rarity/icons/sheckles-rarity-icon";
import FruitsRarityIcon from "./rarity/icons/fruits-rarity-icon";
import MutatedPetsRarityIcon from "./rarity/icons/mutated-pets-rarity-icon";
import MegaPetsRarityIcon from "./rarity/icons/mega-pets-rarity-icon";
import BundlesRarityIcon from "./rarity/icons/bundles-rarity-icon";

const CatalogCategory = ({ category }: { category: CatalogCategory }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollX = useMotionValue(0);
  const scrollStep = 256; // Card width + gap

  const scrollLeft = useCallback(() => {
    if (containerRef.current) {
      const currentX = scrollX.get();
      const targetX = Math.min(0, currentX + scrollStep); // Move content right (positive x)
      animate(scrollX, targetX, {
        type: "spring",
        damping: 20,
        stiffness: 100,
      });
    }
  }, [scrollX, scrollStep]);

  const scrollRight = useCallback(() => {
    if (containerRef.current) {
      const currentX = scrollX.get();
      const containerWidth = containerRef.current.clientWidth;
      const contentWidth = containerRef.current.scrollWidth;
      const maxScrollX = -(contentWidth - containerWidth); // Max negative x to show end of content

      const targetX = Math.max(maxScrollX, currentX - scrollStep); // Move content left (negative x)
      animate(scrollX, targetX, {
        type: "spring",
        damping: 20,
        stiffness: 100,
      });
    }
  }, [scrollX, scrollStep]);

  // Reset scroll position if category changes or component mounts
  useEffect(() => {
    scrollX.set(0);
  }, [category.id, scrollX]);

  return (
    <motion.div
      key={category.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-white flex items-center gap-5">
          <div className="w-[30px] h-[30px]">
            {category.icon.type == "hot" ? (
              <HotRarityIcon
                fromColor={category.icon.fromColor}
                toColor={category.icon.toColor}
              />
            ) : category.icon.type == "best-sellers" ? (
              <BestSellerRarityIcon
                fromColor={category.icon.fromColor}
                toColor={category.icon.toColor}
              />
            ) : category.icon.type == "pets" ? (
              <PetsRarityIcon
                fromColor={category.icon.fromColor}
                toColor={category.icon.toColor}
              />
            ) : category.icon.type == "sheckles" ? (
              <ShecklesRarityIcon
                fromColor={category.icon.fromColor}
                toColor={category.icon.toColor}
              />
            ) : category.icon.type == "fruits" ? (
              <FruitsRarityIcon
                fromColor={category.icon.fromColor}
                toColor={category.icon.toColor}
              />
            ) : category.icon.type == "mutated-pets" ? (
              <MutatedPetsRarityIcon
                fromColor={category.icon.fromColor}
                toColor={category.icon.toColor}
              />
            ) : category.icon.type == "mega-pets" ? (
              <MegaPetsRarityIcon
                fromColor={category.icon.fromColor}
                toColor={category.icon.toColor}
              />
            ) : category.icon.type == "bundles" ? (
              <BundlesRarityIcon
                fromColor={category.icon.fromColor}
                toColor={category.icon.toColor}
              />
            ) : null}
          </div>
          <span className="text-[20px] font-bold">{category.name}</span>
        </h2>

        <div className="flex justify-center items-center gap-4">
          <button
            className="w-[30px] h-[30px] flex justify-center items-center text-center bg-[#030904] hover:bg-[#030904]/80 border border-[#999999]/17 rounded-[8px] cursor-pointer"
            onClick={scrollLeft}
          >
            <ChevronLeft size={16} className="text-[#3DFF88]" />
          </button>

          <button
            className="w-[30px] h-[30px] flex justify-center items-center text-center bg-[#030904] hover:bg-[#030904]/80 border border-[#999999]/17 rounded-[8px] cursor-pointer"
            onClick={scrollRight}
          >
            <ChevronRight size={16} className="text-[#3DFF88]" />
          </button>

          <button className="w-[75px] h-[26px] font-semibold text-xs flex justify-center items-center text-center bg-[#030904] hover:bg-[#030904]/80 border border-[#999999]/17 rounded-[8px] cursor-pointer">
            View All
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative flex flex-nowrap overflow-x-hidden overflow-y-hidden gap-4 p-2" // Changed to overflow-x-hidden
      >
        <motion.div
          className="flex flex-nowrap gap-4" // Inner div to be animated
          style={{ x: scrollX }}
        >
          {category.items.map((item) => (
            <CatalogItemCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CatalogCategory;
