"use client";
import { gameItems } from "./game-items-data";
import { FloatingGameItem } from "./FloatingGameItem";

export const HeroCharacter = () => {
  return (
    <div className="hidden lg:flex flex-1 relative aspect-4/3 w-full max-w-[40vw] mx-auto">
      {/* Main Character */}
      <img
        className="absolute top-[25vh] left-[30%] w-[50%] h-auto object-contain"
        alt="Character"
        src="/logo/char.png"
      />

      {/* Floating Game Items */}
      {gameItems.map((item, index) => (
        <FloatingGameItem item={item} index={index} key={index} />
      ))}
    </div>
  );
};
