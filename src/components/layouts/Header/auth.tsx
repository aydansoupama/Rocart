"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { RegisterForm } from "@/components/modals/forms/auth/register";
import { LoginForm } from "@/components/modals/forms/auth/login";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Logo from "../Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogIn, LogOut, UserPlus, X } from "lucide-react";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { authClient } from "@/lib/auth-client";
import { User } from "better-auth";
import { Button } from "@/components/ui/Button";

const AuthModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={`
    /* Mobile (par défaut) */
    flex items-center justify-between w-fit p-4 
    rounded-lg transition-colors

    /* Version md+ */
    md:w-full md:max-w-[8vw] h-[5vh] 
    bg-[linear-gradient(180deg,rgba(61,255,136,1)_0%,rgba(37,153,81,1)_100%)]
    hover:bg-[linear-gradient(180deg,rgba(61,255,136,0.9)_0%,rgba(37,153,81,0.9)_100%)]
    md:rounded-[0.7vw] md:border-0 md:p-0 md:flex md:items-center md:justify-center md:gap-[0.5vw]
  `}
        >
          <div className="flex items-center gap-2 md:gap-[0.5vw]">
            <div
              className="
      /* Mobile */
      w-6 h-6 bg-[url(/icon/person.png)] bg-cover
      /* md+ */
      md:w-[1.2vw] md:h-[1.2vw]
    "
            />

            <span
              className="
      /* Mobile */
      font-poppins font-semibold text-white text-base
      /* md+ */
      md:text-[0.9vw] md:leading-tight
      whitespace-nowrap
    "
            >
              Log In
            </span>
          </div>
        </Button>
      </DialogTrigger>

      <DialogContent
        className="flex bg-[#06100a] border-none w-[95vw] sm:w-[90vw] md:w-[80vw] lg:min-w-[960px] max-w-[960px] max-h-[95vh] p-0 overflow-y-auto"
        showCloseButton={false}
      >
        <DialogTitle className="sr-only" />

        <div className="hidden md:flex w-[55%] relative overflow-hidden flex-col justify-between bg-[url('/loginbg/logbg.png')] bg-cover bg-center">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "url('/images/auth_banner.png')",
              backgroundSize: "cover",
            }}
          />
          <div className="relative z-10 text-center pt-[8vh]">
            <Logo size={"auto"} className="w-[12vw] mx-auto" />
          </div>

          <div className="relative z-10 text-center px-[2vw] pb-[2vh]">
            <span className="text-[0.9vw] text-white leading-tight">
              By accessing the site, I attest that I am at least 18 years old
              and have read the Terms and Conditions
            </span>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-[55%] p-4 md:p-[2vw] flex flex-col relative">
          <DialogClose asChild>
            <button
              type="button"
              className="absolute top-4 right-4 md:top-[1vw] md:right-[1vw] text-gray-400 hover:text-white text-2xl md:text-[1vw] p-3 md:p-[0.5vw] rounded-full hover:bg-gray-800 transition-colors z-10"
            >
              <X className="w-8 h-8 md:w-[1.5vw] md:h-[1.5vw]" />
            </button>
          </DialogClose>

          <div className="md:hidden text-center mb-6 mt-2">
            <Logo size={"auto"} className="w-32 mx-auto" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: [0.4, 0, 0.2, 1] as const,
            }}
            className="flex-1 flex flex-col"
          >
            <Tabs
              defaultValue="register"
              className="w-full flex-1 flex flex-col"
            >
              <TabsList className="w-full grid grid-cols-2 mb-0">
                <TabsTrigger value="register" className="text-sm sm:text-base">
                  <UserPlus className="w-4 h-4 inline mr-2" />
                  Register
                </TabsTrigger>
                <TabsTrigger value="login" className="text-sm sm:text-base">
                  <LogIn className="w-4 h-4 inline mr-2" />
                  Login
                </TabsTrigger>
              </TabsList>

              <TabsContent value="register">
                <RegisterForm />
              </TabsContent>

              <TabsContent
                value="login"
                className="mt-6 sm:mt-8 flex-1 overflow-y-auto"
              >
                <LoginForm />
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const AccountDropdown = ({ user }: { user: User }) => {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.refresh();
        },
      },
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={`flex items-center rounded-xl cursor-pointer transition-colors 
          justify-center bg-card hover:bg-card/30 outline-none scroll active:scale-95 hover:scale-105 p-1`}
        >
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage
              src={
                user.image
                  ? user.image
                  : `https://ui-avatars.com/api/?name=${user.name}`
              }
              alt={user.name}
            />
            <AvatarFallback className="rounded-lg">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-(--radix-dropdown-menu-trigger-width) min-w-48 rounded-lg"
        side="bottom"
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage
                src={
                  user.image
                    ? user.image
                    : `https://ui-avatars.com/api/?name=${user.name}`
                }
                alt={user.name}
              />
              <AvatarFallback className="rounded-lg">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user.name}</span>
              <span className="truncate text-xs">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={handleLogout}>
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Auth = ({ user }: { user: User | undefined }) => {
  return <>{user ? <AccountDropdown user={user} /> : <AuthModal />}</>;
};

export default Auth;
