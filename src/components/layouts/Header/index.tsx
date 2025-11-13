"use client";
import ChooseGame, { ChooseGameHeaderDropdown } from "./choose-game";
import Logo from "../Logo";
import LanguageEditor from "./language-editor";
import Auth, { AuthMobile } from "./auth";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User } from "better-auth";
import Link from "next/link";

const Header = ({ user }: { user: User | undefined }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<"game" | "language" | null>(
    null
  );

  return (
    <>
      <header
        className={`w-full h-16 md:h-[10vh] flex items-center justify-between px-4 md:px-[2vw] bg-[#06100A] relative`}
      >
        <div className="md:hidden flex items-center justify-between w-full">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-[#3DFF87] p-2 bg-[url('/icon/header.png')] bg-cover bg-center hover:bg-gray-800 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
          <Logo size={10} className="object-cover" />

          <AuthMobile user={user} />
        </div>

        <div className="hidden md:flex items-center justify-between w-full">
          <div className="flex items-center gap-[2vw]">
            <Link href="/">
              <Logo
                size={"[5vh]"}
                className="w-auto object-cover cursor-pointer"
              />
            </Link>

            <ChooseGameHeaderDropdown />
          </div>

          <div className="flex items-center gap-[1.5vw]">
            <LanguageEditor />
            <Auth user={user} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
