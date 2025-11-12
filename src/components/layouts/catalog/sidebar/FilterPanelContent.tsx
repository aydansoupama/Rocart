"use client";
import { RarityFilter } from "./RarityFilter";
import { FilterHeader } from "./FilterHeader";
import { PriceFilter } from "./PriceFilter";
import { ActionButtons } from "./ActionButtons";
import { FilterFooter } from "./FilterFooter";
import { Rarity } from "@/types/rarity";
import { SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/Button";
import { ChevronLeft } from "lucide-react";

interface FilterPanelContentProps {
  minPrice: number;
  maxPrice: number;
  setMinPrice: (value: number) => void;
  setMaxPrice: (value: number) => void;
  selectedRarities: Set<string>;
  rarities: Rarity[];
  handleReset: () => void;
  handleClearAll: () => void;
  handlePriceInputChange: (
    setter: (value: number) => void
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSliderChange: (newValues: [number, number]) => void;
  toggleRarity: (name: string) => void;
}

export function FilterPanelContent({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  selectedRarities,
  rarities,
  handleReset,
  handleClearAll,
  handleSliderChange,
  toggleRarity,
  handlePriceInputChange,
}: FilterPanelContentProps) {
  return (
    <div className="font-poppins bg-[#030c08] border-none text-white p-4 md:p-6 h-full overflow-y-auto scrollbar-hide">
       <SheetClose asChild>
         <Button variant={"outline"} className="absolute right-0 translate-x-3.5 top-1/2 w-8 h-8 rounded-full cursor-pointer text-[#2ADF84] bg-[#112118] hover:bg-[#112118]/80">
          <ChevronLeft size={20} />
        </Button>
      </SheetClose>
      <div className="w-full lg:max-w-sm mx-auto">
        <FilterHeader onReset={handleReset} />
        <PriceFilter
          minPrice={minPrice}
          maxPrice={maxPrice}
          onMinPriceChange={handlePriceInputChange(setMinPrice)}
          onMaxPriceChange={handlePriceInputChange(setMaxPrice)}
          onSliderChange={handleSliderChange}
        />
        <div className="mb-8">
          <RarityFilter
            rarities={rarities}
            selectedRarities={selectedRarities}
            toggleRarity={toggleRarity}
          />
        </div>
        <ActionButtons onClearAll={handleClearAll} />
        <FilterFooter />
      </div>
    </div>
  );
}
