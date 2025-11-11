"use client";

import { PriceSlider } from "./PriceSlider";

interface PriceFilterProps {
  minPrice: number;
  maxPrice: number;
  onMinPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMaxPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSliderChange: (newValues: [number, number]) => void;
}

export function PriceFilter({
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
  onSliderChange,
}: PriceFilterProps) {
  return (
    <div className="mb-8">
      <h3 className="text-[#878c89] text-xs mb-4 font-medium">
        Item price
      </h3>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-[#878c89] text-xs mb-2">From</label>
          <input
            type="number"
            placeholder={`min $ ${0.25}`}
            value={minPrice}
            onChange={onMinPriceChange}
            min={0.25}
            max={2000}
            className="w-full bg-[#141D15] hover:bg-[#141D15]/80 placeholder:text-[#88918C]/60 outline-none py-4 px-6 font-semibold placeholder:text-sm rounded-[13px]"
          />
        </div>
        <div>
          <label className="text-[#878c89] text-xs mb-2">To</label>
          <input
            type="number"
            placeholder={`max $ ${2000}`}
            value={maxPrice}
            onChange={onMaxPriceChange}
            min={0.25}
            max={2000}
            className="w-full bg-[#141D15] hover:bg-[#141D15]/80 placeholder:text-[#88918C]/60 outline-none py-4 px-6 font-semibold placeholder:text-sm rounded-[13px]"
          />
        </div>
      </div>

      <PriceSlider
        value={[minPrice, maxPrice]}
        onValueChange={onSliderChange}
        min={0.25}
        max={2000}
        step={1}
      />
    </div>
  );
}
