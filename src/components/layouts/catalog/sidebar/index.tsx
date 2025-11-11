"use client";
import { useState } from "react";
import { RarityFilter } from "./RarityFilter";
import { FilterHeader } from "./FilterHeader";
import { PriceFilter } from "./PriceFilter";
import { ActionButtons } from "./ActionButtons";
import { FilterFooter } from "./FilterFooter";
import { CloseButton } from "./CloseButton";

export default function FilterPanel() {
  const [minPrice, setMinPrice] = useState(0.25);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [selectedRarities, setSelectedRarities] = useState<Set<string>>(
    new Set()
  );

  const rarities = [
    { name: "Secret", count: 0, fromColor: "#FF1B1B", toColor: "#FF9797" },
    { name: "Ultimate", count: 0, fromColor: "#FF8D1B", toColor: "#FFCE97" },
    { name: "Prismatic", count: 0, fromColor: "#E4FF1B", toColor: "#FFFC97" },
    { name: "Godly", count: 0, fromColor: "#49FF1B", toColor: "#AFFF97" },
    { name: "Exclusive", count: 0, fromColor: "#1BF7FF", toColor: "#97F8FF" },
    { name: "Mythic", count: 0, fromColor: "#1B41FF", toColor: "#A197FF" },
    { name: "Legendary", count: 0, fromColor: "#C61BFF", toColor: "#F197FF" },
    { name: "Ultra rare", count: 0, fromColor: "#FF1B54", toColor: "#FF97B4" },
    { name: "Rare", count: 0, fromColor: "#FFFFFF", toColor: "#9A9A9A" },
    { name: "Uncommon", count: 0, fromColor: "#FF1B1B", toColor: "#FF9797" },
    { name: "Common", count: 0, fromColor: "#FFFFFF", toColor: "#E9E9E9" },
  ];

  const toggleRarity = (name: string) => {
    const newSet = new Set(selectedRarities);
    if (newSet.has(name)) {
      newSet.delete(name);
    } else {
      newSet.add(name);
    }
    setSelectedRarities(newSet);
  };

  const handleReset = () => {
    setMinPrice(0.25);
    setMaxPrice(2000);
    setSelectedRarities(new Set());
  };

  const handleClearAll = () => {
    setSelectedRarities(new Set());
  };

  const handlePriceInputChange =
    (setter: (value: number) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (value === "") {
        setter(0);
      } else {
        const numValue = parseFloat(value);
        if (!isNaN(numValue)) {
          setter(numValue);
        }
      }
    };

  const handleSliderChange = (newValues: [number, number]) => {
    setMinPrice(newValues[0]);
    setMaxPrice(newValues[1]);
  };

  return (
    <div className="font-poppins bg-[#030c08] mt-16 lg:mt-[11vh] border-none text-white p-6">
      <div className="max-w-[330px] mx-auto">
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
        <CloseButton />
      </div>
    </div>
  );
}
