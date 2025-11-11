"use client";

import * as React from "react";
import { Slider } from "@/components/ui/slider";

interface PriceSliderProps {
  value: [number, number];
  onValueChange: (newValues: [number, number]) => void;
  min: number;
  max: number;
  step: number;
}

export function PriceSlider({
  value,
  onValueChange,
  min,
  max,
  step,
}: PriceSliderProps) {
  const [localValues, setLocalValues] = React.useState(value);

  React.useEffect(() => {
    setLocalValues(value);
  }, [value]);

  const handleValueChange = (newValues: number[]) => {
    const newPriceRange: [number, number] = [newValues[0], newValues[1]];
    setLocalValues(newPriceRange);
    onValueChange(newPriceRange);
  };

  return (
    <div className="relative px-2">
      <Slider
        value={localValues}
        onValueChange={handleValueChange}
        min={min}
        max={max}
        step={step}
        minStepsBetweenThumbs={1}
        className="w-full h-[5px]"
      />
    </div>
  );
}
