"use client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { games } from "@/datas/games";
import { ChevronDown, Gamepad2 } from "lucide-react";
import Logo from "../Logo";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ChooseGameModal = () => {
  return (
    <DialogContent className="p-0! border-0! bg-transparent! min-w-7xl rounded-[70px] [&>button]:hidden">
      <motion.div
        className="p-0.5 rounded-[70px]"
        style={{
          background:
            "linear-gradient(180deg, #3DFF88 0%, rgba(61, 255, 136, 0.6) 50%, rgba(61, 255, 136, 0.2) 100%)",
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] as const }}
      >
        <div className="flex flex-col gap-8 rounded-[70px] bg-linear-to-b from-[#06100A] to-[#031C0D] px-24 py-11">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] as const }}
          >
            <DialogTitle className="font-poppins uppercase text-2xl font-bold mx-auto bg-linear-to-r from-white to-secondary bg-clip-text text-transparent">
              Choose a game
            </DialogTitle>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 min-w-full">
            {games.map((game, index) => (
              <motion.div
                key={game.id}
                className="relative w-[30%] min-w-[280px] max-w-[351px] h-[243px] p-0.5 rounded-[53px] cursor-pointer"
                style={{
                  background:
                    "linear-gradient(180deg, #3DFF88 0%, rgba(61, 255, 136, 0.6) 50%, rgba(61, 255, 136, 0.2) 100%)",
                }}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.2 + index * 0.1, 
                  ease: [0.4, 0, 0.2, 1] as const 
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative flex flex-col justify-center items-center gap-6 w-full h-full rounded-[51px] bg-[#030904] overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-[0.24] rounded-[51px]"
                    style={{
                      backgroundImage: `url(${game.icon})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  <div className="relative z-10 flex flex-col justify-center items-center gap-6 px-8 py-10">
                    <Image
                      src={game.icon}
                      alt={game.name}
                      className="object-cover"
                      fill
                    />
                  </div>

                  <div className="flex flex-col justify-center items-center gap-0.5 font-poppins">
                    <h3
                      className="font-bold text-[20px] leading-[30px] bg-clip-text text-transparent"
                      style={{
                        backgroundImage: `linear-gradient(90deg, ${game.color} 0%, #D9EDFF 100%)`,
                      }}
                    >
                      {game.name}
                    </h3>
                    <p className="font-semibold text-[15px] leading-[22px] text-white">
                      Tap to view Items
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="flex justify-center items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
          >
            <hr className="bg-linear-to-r from-transparent to-white w-full h-0.5 rounded-full" />
            <Logo size={10} />
            <hr className="bg-linear-to-l from-transparent to-white w-full h-0.5 rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </DialogContent>
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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Gamepad2 className="text-primary" />
          <span className="font-poppins font-semibold">Choose a game</span>
          <ChevronDown className="text-secondary" />
        </motion.button>
      </DialogTrigger>
      <ChooseGameModal />
    </Dialog>
  );
};

export default ChooseGame;
