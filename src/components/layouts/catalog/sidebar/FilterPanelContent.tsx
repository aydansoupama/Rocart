"use client";
import { RarityFilter } from "./RarityFilter";
import { FilterHeader } from "./FilterHeader";
import { PriceFilter } from "./PriceFilter";
import { ActionButtons } from "./ActionButtons";
import { FilterFooter } from "./FilterFooter";
import { Rarity } from "@/types/rarity";

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
    <div className="font-poppins bg-[#030c08] border-none text-white p-4 md:p-6 h-full">
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
