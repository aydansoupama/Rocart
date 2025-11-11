"use client";
import Image from "next/image";
import { CatalogItem } from "@/datas/catalog";
import { applyDiscountedPrice, hexToRgba } from "@/lib/utils";
import HotRarityIcon from "./rarity/icons/hot-rarity-icon";
import { motion } from "framer-motion";

interface CatalogItemCardProps {
  item: CatalogItem;
  index: number; // Add index prop for staggered animation
}

export const CatalogItemCard = ({ item, index }: CatalogItemCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 300 }} // Staggered delay
      className="relative shrink-0 font-poppins w-60 h-72 pt-8 pb-6 px-4 rounded-2xl shadow-lg hover:scale-105 active:scale-95 transform transition-transform duration-300"
      style={{
        background: `linear-gradient(to top, ${hexToRgba(
          item.color,
          0.34
        )} 0%, ${hexToRgba("#030C08", 0)} 100%)`,
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-20"
        style={{
          borderRadius: "1px",
          overflow: "visible",
        }}
      >
        <defs>
          <linearGradient
            id={`stroke-gradient-${item.name.replace(/\s+/g, "-")}-${item.id}`}
            x1="0%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop offset="0%" stopColor={"#666464"} stopOpacity="0.7" />
            <stop offset="28%" stopColor="#CCC9C9" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          rx="15" // ✅ Changé de 24 à 15
          fill="none"
          stroke={`url(#stroke-gradient-${item.name.replace(/\s+/g, "-")}-${
            item.id
          })`}
        />
      </svg>

      <div className="relative w-[120px] h-[120px] mx-auto">
        <Image
          src={item.image}
          alt={item.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="pt-6 space-y-[9px]">
        <div className="space-y-[5px]">
          <h3 className="font-bold text-sm w-fit">{item.name}</h3>
          <div
            className="flex justify-center items-center w-fit px-1 max-w-1/2 h-5 gap-1.5 rounded-[6px]"
            style={{
              background: hexToRgba(item.rarity.color, 0.1),
            }}
          >
            <div className="w-4 h-4">
              {item.rarity.icon.type === "hot" ? (
                <HotRarityIcon
                  fromColor={item.rarity.icon.fromColor}
                  toColor={item.rarity.icon.toColor}
                />
              ) : null}
            </div>
            <p
              className="font-semibold text-[9px]"
              style={{
                backgroundImage: `linear-gradient(to bottom, ${item.rarity.icon.fromColor} 0%, ${item.rarity.icon.toColor} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {item.rarity.name}
            </p>
          </div>
        </div>

        <div className="flex justify-between w-full">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <p className="text-[16px] font-bold bg-clip-text text-transparent bg-linear-to-t from-[#EA9A49] to-[#FFC68D]">
                ${" "}
                <span>
                  {applyDiscountedPrice(
                    item.price.originalPrice,
                    item.price.discountPercentage
                  )}
                </span>
              </p>
              <p className="text-[10px] font-semibold text-[#BABABA] line-through">
                ${" "}
                <span>
                  {applyDiscountedPrice(
                    item.price.originalPrice,
                    item.price.discountPercentage
                  )}
                </span>
              </p>
            </div>
            <div
              className="flex justify-center items-center w-10 h-5 px-1 rounded-[6px] text-xs font-semibold text-[#ff4232]"
              style={{
                background: hexToRgba(item.rarity.color, 0.1),
              }}
            >
              <p>-{item.price.discountPercentage}%</p>
            </div>
          </div>

          <div className="p-2 bg-linear-to-b from-[#13E97D] to-[#00AE56] w-8 h-8 rounded-[4px]">
            <Image
              className="w-4 h-4 object-contain"
              alt="Cart icon"
              src="/icon/shop.png"
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
