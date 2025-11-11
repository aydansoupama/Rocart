"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RarityIcon } from "./RarityIcon"; // Import RocartIcon

interface Rarity {
  name: string;
  count: number;
  fromColor: string;
  toColor: string;
}

interface RarityFilterProps {
  rarities: Rarity[];
  selectedRarities: Set<string>;
  toggleRarity: (name: string) => void;
}

export function RarityFilter({
  rarities,
  selectedRarities,
  toggleRarity,
}: RarityFilterProps) {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div>
      <div
        className="flex items-center justify-between cursor-pointer mb-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <ChevronDown
            size={20}
            className={`text-[#336239] ml-3 hover:text-[#336239]/80 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
          <h3 className="text-white text-xs font-semibold">Rarity</h3>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden overflow-y-auto max-h-[500px]"
          >
            <div className="space-y-2 pt-2">
              {rarities.map((rarity) => (
                <button
                  key={rarity.name}
                  onClick={() => toggleRarity(rarity.name)}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-800/50 transition-colors group"
                >
                  <div className="flex items-center space-x-4">
                    <RarityIcon
                      fromColor={rarity.fromColor}
                      toColor={rarity.toColor}
                    />
                    <div className="space-x-2">
                      <span className="text-white text-xs font-semibold">
                        {rarity.name}
                      </span>
                      <span className="text-gray-500 text-[8px] font-semibold">
                        ({rarity.count})
                      </span>
                    </div>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-[5px] transition-all ${
                      selectedRarities.has(rarity.name)
                        ? "bg-[#3dff88]"
                        : "bg-[#141d15]/50"
                    }`}
                  >
                    {selectedRarities.has(rarity.name) && (
                      <svg
                        className="w-full h-full text-[#141d15]/50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
