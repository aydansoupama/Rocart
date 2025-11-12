"use client";
import { useState } from "react";
import { FilterPanelContent } from "./FilterPanelContent";
import { Rarity } from "@/types/rarity";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";
import { DialogTitle } from "@/components/ui/Dialog";

export default function FilterPanel() {
  const [minPrice, setMinPrice] = useState(0.25);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [selectedRarities, setSelectedRarities] = useState<Set<string>>(
    new Set()
  );

  const rarities: Rarity[] = [
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

  const handleSliderChange = (newValues: [number, number]) => {
    setMinPrice(newValues[0]);
    setMaxPrice(newValues[1]);
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

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={"outline"}
          className="w-8 h-8 rounded-full cursor-pointer text-[#2ADF84] bg-[#112118] hover:bg-[#112118]/80"
        >
          <ChevronRight />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" showClose={false}>
        <DialogTitle className="sr-only">Filter Panel</DialogTitle>

        <FilterPanelContent
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          selectedRarities={selectedRarities}
          rarities={rarities}
          handleReset={handleReset}
          handleClearAll={handleClearAll}
          handleSliderChange={handleSliderChange}
          toggleRarity={toggleRarity}
          handlePriceInputChange={handlePriceInputChange}
        />
      </SheetContent>
    </Sheet>
  );
}
