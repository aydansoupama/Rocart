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
import { hexToRgba } from "@/lib/utils";
import DropdownOpenIcon from "./DropdownOpenIcon";

const ChooseGameModal = () => {
  return (
    <DialogContent
      className="
      flex justify-center items-center w-fit
        p-0 border-0 bg-transparent 
        sm:min-w-[90%]
        max-w-[1300px]
        rounded-[40px] sm:rounded-[50px] md:rounded-[70px]
        [&>button]:hidden
        font-poppins
      "
    >
      <motion.div
        className="relative rounded-[3vw] p-[4vw] sm:p-[2vw] 
                  w-[90vw] sm:w-[80vw] lg:w-[70vw] 
                  max-h-[85vh] overflow-y-auto
                  bg-[url('/bg/modalbg.png')] bg-cover bg-center bg-no-repeat
                  scrollbar-thin lg:scrollbar-none
                  scrollbar-thumb-[#3dff87]/70 scrollbar-track-transparent scrollbar-thumb-rounded-full
                  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Header */}
        <div className="flex justify-center relative mb-[3vh] sm:mb-[1.5vh]">
          <DialogTitle className="text-[5vw] sm:text-[3vw] lg:text-[2vw] font-extrabold tracking-tight text-[#FFFFFF]">
            CHOOSE A GAME
          </DialogTitle>

          <DialogClose asChild>
            <button
              className="absolute right-0 -top-2.5 text-white hover:text-[#3dff87] 
                        text-[8vw] sm:text-[2.5vw] lg:text-[1.8vw]"
            >
              ✕
            </button>
          </DialogClose>
        </div>

        {/* Grid of Games - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3vw] sm:gap-[1.5vw]">
          {games.map((game, index) => (
            <motion.div
              key={index}
              className="
                  relative rounded-[25px] w-full h-[25vh] sm:h-[20vh] overflow-hidden hover:scale-[1.03] duration-300  bg-transparent shadow-none border-none
                  p-0.5 sm:rounded-[48px] md:rounded-[53px]
                  cursor-pointer transition-all mx-auto hover:scale-105 active:scale-95
                "
              // style={{
              //   background: `linear-gradient(to bottom, #3DFF88 0%, transparent 100%)`,
              // }}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.05,
                ease: [0.4, 0, 0.2, 1] as const,
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div
                className="relative z-10 flex flex-col items-center justify-center p-[2vw] sm:p-[1vw] text-center h-full overflow-hidden rounded-[25px] sm:rounded-[48px] md:rounded-[53px]"
                style={{
                  background: `linear-gradient(to top, ${hexToRgba(
                    game.color,
                    0.24
                  )} 0%, transparent 24%), #030904`,
                }}
              >
                {/* Background image */}
                <div className="absolute inset-0 rounded-[inherit]">
                  <Image
                    src={game.bgImage}
                    alt={game.name}
                    className="object-cover scale-110 rounded-[inherit]"
                    fill
                  />
                </div>

                <div
                  className="
                      relative z-10 flex justify-center items-center
                      rounded-2xl
                      w-[80px]
                      h-[58px]
                    "
                >
                  <Image
                    src={game.icon}
                    alt={game.name}
                    className="object-cover rounded-2xl"
                    fill
                  />
                </div>

                <p
                  className="font-bold text-[3vw] sm:text-[2vw] lg:text-[1.2vw] bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${game.color} 0%, #D9EDFF 100%)`,
                  }}
                >
                  {game.name}
                </p>
                <p className="text-[#FFFFFF] font-extrabold text-[2.5vw] sm:text-[1.5vw] lg:text-[0.9vw] mt-[0.5vh] sm:mt-[0.3vh]">
                  Tap to view Items
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Rocart Logo */}
        <motion.div
          className="flex justify-center items-center "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.6,
            ease: [0.4, 0, 0.2, 1] as const,
          }}
        >
          <hr className="w-full h-0.5 rounded-full border-none bg-linear-to-r from-transparent to-white" />
          <Logo size={24} />
          <hr className="w-full h-0.5 rounded-full border-none bg-linear-to-l from-transparent to-white" />
        </motion.div>
      </motion.div>
    </DialogContent>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0 },
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
          className={`flex items-center gap-x-1.5 px-[18px] py-3 rounded-xl cursor-pointer transition-colors ${
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
          <div className="flex justify-center items-center w-4 h-2.5">
            <div className="relative w-4 h-2.5">
              <DropdownOpenIcon />
            </div>
          </div>
        </button>
      ) : (
        <motion.button
          className="flex items-center w-fit w-[210px] gap-x-[12.5px] px-4 py-3 rounded-xl bg-card hover:bg-card/80 cursor-pointer"
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
            Select Game
          </span>
          <div className="flex justify-center items-center w-4 h-2.5">
            <div className="relative ">
              <DropdownOpenIcon />
            </div>
          </div>
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={containerVariants}
            className="absolute  left-0 w-[210px] rounded-xl shadow-lg z-50 bg-[#0C1610] p-2 h-auto overflow-y-auto scrollbar-hide"
          >
            <div className="flex flex-col">
              {games.map((game) => (
                <motion.button
                  key={game.id}
                  onClick={() => setSelectedGame(game)}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="relative flex items-center gap-2 w-full px-3 py-2.5 text-left bg-cover bg-center rounded-lg"
                >
                  <div className="absolute inset-0 rounded-lg" />
                  <div className="w-6 h-6 rounded-md overflow-hidden shrink-0 relative z-10">
                    <Image
                      src={game.icon}
                      alt={game.name}
                      fill
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <span className="flex flex-col text-white font-medium text-sm relative z-10 leading-tight">
                    <span className="truncate">{game.name}</span>
                  </span>
                </motion.button>
              ))}
            </div>
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
