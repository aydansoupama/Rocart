"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import FilterPanel from ".";
import { Button } from "@/components/ui/Button";
import { Funnel } from "lucide-react";

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Funnel />
          Filter
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-[#030c08] border-none">
        <FilterPanel />
      </SheetContent>
    </Sheet>
  );
}
