"use client"
import { ChevronLeft, ChevronRight } from "lucide-react";
import HotRarityIcon from "@/components/catalog/rarity/icons/hot-rarity-icon";
import { type CatalogCategory } from "@/datas/catalog/categories";
import { CatalogItemCard } from "@/components/catalog/CatalogItemCard";

const CatalogCategory = ({ category }: { category: CatalogCategory }) => {
  return (
    <div key={category.id}>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-white flex items-center gap-5 mb-6">
          <div className="w-[30px] h-[30px]">
            {category.icon.type == "hot" ? (
              <HotRarityIcon
                fromColor={category.icon.fromColor}
                toColor={category.icon.toColor}
              />
            ) : null}
          </div>
          <span className="text-[20px] font-bold">{category.name}</span>
        </h2>

        <div className="flex justify-center items-center gap-4">
          <button className="w-[30px] h-[30px] flex justify-center items-center text-center bg-[#030904] hover:bg-[#030904]/80 border border-[#999999]/17 rounded-[8px] cursor-pointer">
            <ChevronLeft size={16} className="text-[#3DFF88]" />
          </button>

          <button className="w-[30px] h-[30px] flex justify-center items-center text-center bg-[#030904] hover:bg-[#030904]/80 border border-[#999999]/17 rounded-[8px] cursor-pointer">
            <ChevronRight size={16} className="text-[#3DFF88]" />
          </button>

          <button className="w-[75px] h-[26px] font-semibold text-xs flex justify-center items-center text-center bg-[#030904] hover:bg-[#030904]/80 border border-[#999999]/17 rounded-[8px] cursor-pointer">
            View All
          </button>
        </div>
      </div>

      <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden gap-4 p-2">
        {category.items.map((item) => (
          <CatalogItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CatalogCategory;
