"use client";

import { Button } from "@/components/ui/Button";
import { SheetClose } from "@/components/ui/sheet";
import { ChevronLeft, Filter } from "lucide-react";

interface FilterHeaderProps {
  onReset: () => void;
}

export function FilterHeader({ onReset }: FilterHeaderProps) {
  return (
    <div className="flex sm:flex-row items-center justify-between mb-6 bg-inherit">
      <div className="flex items-center gap-3">
        <h2 className="text-sm font-semibold text-white">Filter items</h2>
        <span className="bg-linear-to-br from-[#13E97D] to-[#0B8346] font-bold text-sm w-7 h-6 flex items-center justify-center rounded-lg">
          43
        </span>
      </div>
      
      <button
        onClick={onReset}
        className="text-[#13E97D] hover:text-[#13E97D]/80 font-medium text-xs cursor-pointer hover:underline transition-colors"
      >
        Reset
      </button>

      <SheetClose asChild>
         <Button variant={"outline"} className="absolute right-0 translate-x-3.5 top-20 w-8 h-8 rounded-full cursor-pointer text-[#2ADF84] bg-[#112118] hover:bg-[#112118]/80">
          <ChevronLeft size={20} />
        </Button>
      </SheetClose>
    </div>
  );
}
