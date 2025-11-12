"use client";
import { FloatingGameItem } from "./FloatingGameItem";
import { gameItems } from "./game-items-data";

export const HeroCharacter = () => {
  return (
    <div className="hidden lg:flex flex-1 relative aspect-[4/3] w-full max-w-[40vw] mx-auto">
      <img
        className="absolute top-[25vh] left-[30%] object-contain"
        alt="Character"
        src="/logo/char.png"
      />

      {gameItems.map((item, index) => (
        <FloatingGameItem key={index} item={item} index={index} />
      ))}
    </div>
  );
};
