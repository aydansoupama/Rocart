"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { games } from "@/datas/games";
import { ChevronDown, X } from "lucide-react";
import Logo from "../Logo";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Game } from "@/types/game";
import { Button } from "@/components/ui/Button";

const ChooseGameModal = () => {
  return (
    <DialogContent
      className="
        p-0 border-0 bg-transparent 
        sm:min-w-[90vw] md:min-w-[80vw] lg:min-w-[70vw]
        max-h-[90vh] overflow-hidden
        rounded-[40px] sm:rounded-[50px] md:rounded-[70px]
        [&>button]:hidden
      "
    >
      <motion.div
        className="p-0.5 rounded-[40px] sm:rounded-[50px] md:rounded-[70px]"
        style={{
          background:
            "linear-gradient(180deg, #3DFF88 0%, rgba(61, 255, 136, 0.6) 50%, rgba(61, 255, 136, 0.2) 100%)",
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] as const }}
      >
        <div
          className="
            flex flex-col w-full 
            gap-6 sm:gap-8 md:gap-10 
            rounded-[40px] sm:rounded-[50px] md:rounded-[70px]
            bg-linear-to-b from-[#06100A] to-[#031C0D]
            px-4 lg:px-24
            py-6 sm:py-8 md:py-11
            overflow-hidden
          "
        >
          {/* Title */}
          <motion.div
          className="flex items-center justify-between"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: [0.4, 0, 0.2, 1] as const,
            }}
          >
            <div></div>
            <DialogTitle
              className="
                font-poppins uppercase 
                text-xl sm:text-2xl md:text-3xl 
                font-bold text-center 
                bg-linear-to-r from-white to-secondary 
                bg-clip-text text-transparent
              "
            >
              Choose a game
            </DialogTitle>

            <DialogClose asChild>
              <X className="text-secondary hover:text-secondary/30 cursor-pointer" />
            </DialogClose>
          </motion.div>

          {/* Games grid */}
          <div
            className="
              grid 
              grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 
              gap-4 sm:gap-6 lg:gap-8 
              w-full max-w-[1200px]
              mx-auto 
              p-2 sm:p-4 md:p-6 
              overflow-y-auto
            "
            style={{
              maxHeight: "60vh",
            }}
          >
            {games.map((game, index) => (
              <motion.div
                key={index}
                className="
                  relative 
                  w-full
                  min-w-[240px] max-w-[351px] 
                  h-[200px] sm:h-[220px] md:h-[243px]
                  p-0.5 rounded-[40px] sm:rounded-[48px] md:rounded-[53px]
                  cursor-pointer transition-all mx-auto
                "
                style={{
                  background:
                    "linear-gradient(180deg, #3DFF88 0%, rgba(61, 255, 136, 0.6) 50%, rgba(61, 255, 136, 0.2) 100%)",
                }}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.05,
                  ease: [0.4, 0, 0.2, 1] as const,
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className="
                    relative flex flex-col justify-center items-center
                    gap-4 sm:gap-6 
                    w-full h-full 
                    rounded-[36px] sm:rounded-[46px] md:rounded-[51px] 
                    bg-[#030904] overflow-hidden
                  "
                >
                  {/* Background image */}
                  <div className="absolute inset-0 opacity-[0.24] rounded-[inherit]">
                    <Image
                      src={game.icon}
                      alt={game.name}
                      className="object-cover scale-110 rounded-[inherit]"
                      fill
                    />
                  </div>

                  {/* Icon */}
                  <div
                    className="
                      relative z-10 flex justify-center items-center
                      rounded-2xl
                      w-[60px] sm:w-[80px] md:w-[100px]
                      h-[60px] sm:h-[80px] md:h-[100px]
                    "
                  >
                    <Image
                      src={game.icon}
                      alt={game.name}
                      className="object-cover rounded-2xl"
                      fill
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col justify-center items-center gap-0.5 font-poppins text-center px-2">
                    <h3
                      className="
                        font-bold 
                        text-[16px] sm:text-[18px] md:text-[20px] 
                        leading-tight 
                        bg-clip-text text-transparent
                      "
                      style={{
                        backgroundImage: `linear-gradient(90deg, ${game.color} 0%, #D9EDFF 100%)`,
                      }}
                    >
                      {game.name}
                    </h3>
                    <p className="font-semibold text-[13px] sm:text-[14px] md:text-[15px] text-white">
                      Tap to view Items
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <motion.div
            className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
              ease: [0.4, 0, 0.2, 1] as const,
            }}
          >
            <hr className="bg-gradient-to-r from-transparent to-white w-full h-0.5 rounded-full" />
            <Logo size={8} className="scale-75 sm:scale-90 md:scale-100" />
            <hr className="bg-gradient-to-l from-transparent to-white w-full h-0.5 rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </DialogContent>
  );
};

const ChooseGameHeaderDropdown = ({
  isMobile = false,
  isOpen: isOpenProp,
  onToggle,
}: {
  isMobile?: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
} = {}) => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [isOpenInternal, setIsOpenInternal] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isOpen = isMobile ? isOpenProp ?? false : isOpenInternal;
  const toggle =
    isMobile && onToggle ? onToggle : () => setIsOpenInternal(!isOpenInternal);

  useEffect(() => {
    if (isMobile) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpenInternal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile]);

  return (
    <div ref={dropdownRef} className={isMobile ? "flex flex-col" : "relative"}>
      {selectedGame ? (
        <button
          onClick={toggle}
          className={`flex items-center gap-x-2.5 px-4 py-3 rounded-xl cursor-pointer transition-colors ${
            isMobile
              ? "justify-between bg-[#0a1f0d] hover:bg-[#0f2912]"
              : "justify-center bg-card hover:bg-card/30"
          }`}
        >
          <div className="flex items-center gap-x-2.5">
            <div className="relative aspect-square rounded-md w-6 h-6">
              <Image
                src={selectedGame.icon}
                alt={selectedGame.name}
                fill
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <span className="font-poppins font-semibold">
              {isMobile ? "Select Game" : selectedGame.name}
            </span>
          </div>
          <ChevronDown
            className={`${
              isMobile ? "text-primary" : "text-secondary"
            } transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      ) : (
        <motion.button
          className="flex justify-center items-center gap-x-2.5 px-4 py-3 rounded-xl bg-card hover:bg-card/30 cursor-pointer"
          whileTap={{ scale: 0.95 }}
          onClick={toggle}
        >
          <span className="font-poppins font-semibold flex items-center gap-x-2">
            <Image
              src="/icon/gamepad.png"
              alt="Gamepad"
              width={24}
              height={24}
              className="object-contain"
            />
            Choose a game
          </span>
          <ChevronDown
            className={`${
              isMobile ? "text-primary" : "text-secondary"
            } transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={
              isMobile
                ? "flex flex-col gap-2 mt-2 pl-2 overflow-hidden"
                : "absolute top-full mt-2 right-0 min-w-full bg-card rounded-xl shadow-lg border border-border overflow-hidden z-50"
            }
            initial={
              isMobile ? { height: 0, opacity: 0 } : { opacity: 0, y: -10 }
            }
            animate={
              isMobile ? { height: "auto", opacity: 1 } : { opacity: 1, y: 0 }
            }
            exit={isMobile ? { height: 0, opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
          >
            {games.map((game, index) => (
              <motion.button
                key={game.id}
                onClick={() => {
                  setSelectedGame(game);
                  if (isMobile && onToggle) {
                    onToggle();
                  } else {
                    setIsOpenInternal(false);
                  }
                }}
                className={`flex items-center gap-x-2.5 px-4 py-3 font-poppins font-semibold transition-colors ${
                  isMobile
                    ? "rounded-xl bg-[#0a1f0d] hover:bg-[#0f2912]"
                    : "w-full hover:bg-card/50 text-left"
                }`}
                initial={isMobile ? { opacity: 0, x: -10 } : { opacity: 0 }}
                animate={isMobile ? { opacity: 1, x: 0 } : { opacity: 1 }}
                transition={
                  isMobile ? { duration: 0.2, delay: index * 0.05 } : {}
                }
              >
                <div className="relative aspect-square rounded-md w-6 h-6">
                  <Image
                    src={game.icon}
                    alt={game.name}
                    fill
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
                <span>{game.name}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ChooseGameDropdown = ({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="flex flex-col">
      <button
        onClick={onToggle}
        className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#0a1f0d] hover:bg-[#0f2912] transition-colors cursor-pointer"
      >
        <span className="text-white font-poppins font-semibold text-base">
          Select Game
        </span>
        <ChevronDown
          className={`text-primary transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col gap-2 mt-2 pl-2 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
          >
            {games.map((game, index) => (
              <motion.button
                key={game.id}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#0a1f0d] hover:bg-[#0f2912] transition-colors cursor-pointer"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <div className="relative w-8 h-8 shrink-0">
                  <Image
                    src={game.icon}
                    alt={game.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-white font-poppins font-medium text-sm">
                  {game.name}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ChooseGame = ({
  isMobile = false,
  isOpen = false,
  onToggle,
}: {
  isMobile?: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
}) => {
  if (isMobile && onToggle) {
    return <ChooseGameDropdown isOpen={isOpen} onToggle={onToggle} />;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          className="flex justify-center items-center gap-x-2.5 px-4 py-3 rounded-xl bg-card hover:bg-card/30 cursor-pointer"
          whileTap={{ scale: 0.95 }}
        >
          <span className="font-poppins font-semibold flex items-center gap-x-2">
            <Image
              src="/icon/gamepad.png"
              alt="Gamepad"
              width={24}
              height={24}
              className="object-contain"
            />
            Choose a game
          </span>
          <ChevronDown className="text-secondary" />
        </motion.button>
      </DialogTrigger>
      <ChooseGameModal />
    </Dialog>
  );
};

export { ChooseGameModal, ChooseGameDropdown, ChooseGameHeaderDropdown };
export default ChooseGame;
