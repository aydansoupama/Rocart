"use client";
import { ChooseGameHeaderDropdown, ChooseGameMobile } from "./choose-game";
import Logo from "../Logo";
import LanguageEditor, { LanguageEditorMobile } from "./language-editor";
import Auth from "./auth";
import { Menu, X } from "lucide-react";
import { User } from "better-auth";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileHeader = ({ user }: { user: User | undefined }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="text-[#3DFF87] p-2 bg-[url('/icon/header.png')] bg-cover bg-center hover:bg-gray-800 rounded-lg transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </SheetTrigger>

      <SheetContent
        className="bg-[#0C1610] w-80 h-full shadow-xl p-6 overflow-y-auto"
        side="left"
        showClose={false}
      >
        <SheetTitle className="sr-only">Menu</SheetTitle>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-xl font-semibold">Menu</h2>
          <SheetClose asChild>
            <button className="text-gray-400 hover:text-white p-2">
              <X className="w-6 h-6" />
            </button>
          </SheetClose>
        </div>

        <div className="mb-6">
          <ChooseGameMobile />
        </div>

        <div className="mb-6">
          <LanguageEditorMobile />
        </div>

        <div className="flex justify-center items-center w-full">
          <Auth user={user} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

const Header = ({ user }: { user: User | undefined }) => {
  return (
    <>
      <header
        className={`w-full h-16 md:h-[10vh] flex items-center justify-between px-4 md:px-[2vw] bg-[#06100A] relative`}
      >
        <div className="md:hidden flex items-center justify-between w-full">
          <MobileHeader user={user} />
          <Logo size={10} className="object-cover" />
          <Auth user={user} />
        </div>

        <div className="hidden md:flex items-center justify-between w-full max-w-[95%]">
          <div className="flex items-center gap-[2vw]">
            <Logo
              size={"[5vh]"}
              className="w-auto object-cover cursor-pointer"
            />

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
