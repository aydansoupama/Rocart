"use client";
import { User } from "better-auth";
import ChooseGame, { ChooseGameDropdown, ChooseGameHeaderDropdown } from "./choose-game";
import Logo from "../Logo";
import LanguageEditor from "./language-editor";
import Auth from "./auth";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { games } from "@/datas/games";

const Header = ({ user }: { user: User | undefined }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<"game" | "language" | null>(
    null
  );

  const [isGameDropdownOpen, setIsGameDropdownOpen] = useState(false);

  return (
    <header className="w-full h-20 flex items-center justify-between py-2 px-4 md:px-[2vw] relative">
      <div className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8">
        {/* Menu hamburger - mobile only */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-[#1a1a1a] hover:bg-[#252525] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6 text-white" />
        </button>

        <div>
          <Logo size={10} />
        </div>

        {/* Choose Game - desktop only */}
        <div className="hidden lg:block">
          <ChooseGameHeaderDropdown />
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8">
        {/* Language Editor - desktop only */}
        <div className="hidden lg:block">
          <LanguageEditor />
        </div>

        <Auth user={user} />
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-[280px] bg-[#0a0f0a] overflow-y-auto shadow-2xl"
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-white text-xl font-bold">Menu</h2>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-[#1a1a1a] transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>
                <div className="flex flex-col gap-4">
                  <ChooseGame
                    isMobile
                    isOpen={openSection === "game"}
                    onToggle={() =>
                      setOpenSection(openSection === "game" ? null : "game")
                    }
                  />
                  <LanguageEditor
                    isMobile
                    isOpen={openSection === "language"}
                    onToggle={() =>
                      setOpenSection(
                        openSection === "language" ? null : "language"
                      )
                    }
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
