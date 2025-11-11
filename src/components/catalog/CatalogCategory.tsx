"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HotRarityIcon from "@/components/catalog/rarity/icons/hot-rarity-icon";
import { type CatalogCategory } from "@/datas/catalog/categories";
import { CatalogItemCard } from "@/components/catalog/CatalogItemCard";
import { useRef, useCallback, useEffect } from "react";
import { motion, animate, useInView } from "framer-motion";
import BestSellerRarityIcon from "./rarity/icons/best-sellers-rarity-icon";
import PetsRarityIcon from "./rarity/icons/pets-rarity-icon";
import ShecklesRarityIcon from "./rarity/icons/sheckles-rarity-icon";
import FruitsRarityIcon from "./rarity/icons/fruits-rarity-icon";
import MutatedPetsRarityIcon from "./rarity/icons/mutated-pets-rarity-icon";
import MegaPetsRarityIcon from "./rarity/icons/mega-pets-rarity-icon";
import BundlesRarityIcon from "./rarity/icons/bundles-rarity-icon";

const CatalogCategory = ({ category }: { category: CatalogCategory }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollStep = 256; // Card width + gap

  const categoryRef = useRef<HTMLDivElement>(null);
  const inView = useInView(categoryRef, { once: true, amount: 0.3 }); // Trigger when 30% of the component is in view

  const scrollLeft = useCallback(() => {
    if (containerRef.current) {
      const currentScroll = containerRef.current.scrollLeft;
      const targetScroll = Math.max(0, currentScroll - scrollStep);
      animate(currentScroll, targetScroll, {
        type: "spring",
        damping: 20,
        stiffness: 100,
        onUpdate: (value) => {
          if (containerRef.current) {
            containerRef.current.scrollLeft = value;
          }
        },
      });
    }
  }, [scrollStep]);

  const scrollRight = useCallback(() => {
    if (containerRef.current) {
      const currentScroll = containerRef.current.scrollLeft;
      const containerWidth = containerRef.current.clientWidth;
      const contentWidth = containerRef.current.scrollWidth;
      const maxScroll = contentWidth - containerWidth;
      const targetScroll = Math.min(maxScroll, currentScroll + scrollStep);
      animate(currentScroll, targetScroll, {
        type: "spring",
        damping: 20,
        stiffness: 100,
        onUpdate: (value) => {
          if (containerRef.current) {
            containerRef.current.scrollLeft = value;
          }
        },
      });
    }
  }, [scrollStep]);

  // Reset scroll position if category changes or component mounts
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = 0;
    }
  }, [category.id]);

  return (
    <motion.div
      ref={categoryRef}
      key={category.id}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
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
            <ChevronLeft size={20} className="text-[#3DFF88]" />
          </button>

          <button
            className="w-[30px] h-[30px] flex justify-center items-center text-center bg-[#030904] hover:bg-[#030904]/80 border border-[#999999]/17 rounded-[8px] cursor-pointer"
            onClick={scrollRight}
          >
            <ChevronRight size={20} className="text-[#3DFF88]" />
          </button>

          <button className="w-[75px] h-[26px] font-semibold text-[11px] flex justify-center items-center text-center bg-[#030904] hover:bg-[#030904]/80 border border-[#999999]/17 rounded-[8px] cursor-pointer">
            View All
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative flex flex-nowrap overflow-x-scroll gap-4 p-2 pb-10 catalog-scrollbar"
      >
        <div className="flex flex-nowrap gap-4">
          {category.items.map((item, index) => (
            <CatalogItemCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CatalogCategory;