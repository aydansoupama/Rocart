import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { games } from "@/datas/games";
import { ChevronDown, Gamepad2 } from "lucide-react";

const ChooseGameModal = () => {
  return (
    <DialogContent className="!p-0 !border-0 !bg-transparent min-w-7xl rounded-[70px] [&>button]:hidden">
      <div
        className="p-[2px] rounded-[70px]"
        style={{
          background:
            "linear-gradient(180deg, #3DFF88 0%, rgba(61, 255, 136, 0.6) 50%, rgba(61, 255, 136, 0.2) 100%)",
        }}
      >
        <div className="flex flex-col gap-8 rounded-[70px] bg-gradient-to-b from-[#06100A] to-[#031C0D] px-24 py-11">
          <DialogTitle className="font-poppins uppercase text-2xl font-bold mx-auto bg-linear-to-r from-white to-secondary bg-clip-text text-transparent">
            Choose a game
          </DialogTitle>

          <div className="flex flex-wrap justify-center gap-8 min-w-full">
            {games.map((game) => (
              <div
                key={game.id}
                className="relative w-[30%] min-w-[280px] max-w-[351px] h-[243px] p-[2px] rounded-[53px] cursor-pointer hover:scale-[1.02] transition-transform"
                style={{
                  background:
                    "linear-gradient(180deg, #3DFF88 0%, rgba(61, 255, 136, 0.6) 50%, rgba(61, 255, 136, 0.2) 100%)",
                }}
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
                    <div className="rounded-3xl overflow-hidden w-[140px] h-[80px] shadow-xl">
                      <img
                        src={game.icon}
                        alt={game.name}
                        className="w-full h-full object-cover"
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
                </div>
              </div>
            ))}
          </div>

          <div>
            {/* Bar */}
            {/* Logo */}
            {/* Bar */}
          </div>
        </div>
      </div>
    </DialogContent>
  );
};

const ChooseGameTrigger = () => {
  return (
    <button className="flex justify-center items-center gap-x-2.5 px-4 py-3 rounded-xl bg-card hover:bg-card/30 cursor-pointer">
      <Gamepad2 className="text-primary" />
      <span className="font-poppins font-semibold">Choose a game</span>
      <ChevronDown className="text-secondary" />
    </button>
  );
};

const ChooseGame = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ChooseGameTrigger />
      </DialogTrigger>
      <ChooseGameModal />
    </Dialog>
  );
};

export default ChooseGame;
