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
        <Button className="w-[8vw] h-[5vh] bg-[linear-gradient(180deg,rgba(61,255,136,1)_0%,rgba(37,153,81,1)_100%)] hover:bg-[linear-gradient(180deg,rgba(61,255,136,0.9)_0%,rgba(37,153,81,0.9)_100%)] rounded-[0.7vw] border-0 p-0 flex items-center justify-center gap-[0.5vw]">
          <div className="w-[1.2vw] h-[1.2vw] bg-[url(/icon/person.png)] bg-cover" />
          <span className="font-poppins font-semibold text-white text-[0.9vw] leading-tight whitespace-nowrap">
            Log In
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent
        className="bg-[#06100a] border-none w-[95vw] sm:w-[90vw] md:w-[80vw] lg:min-w-[960px] max-w-[960px] max-h-[95vh] p-0 overflow-y-auto"
        showCloseButton={false}
      >
        <DialogTitle className="sr-only" />
        <div className="flex flex-col lg:flex-row w-full h-full">
          <motion.div
            className="hidden lg:flex lg:w-[55%] relative flex-col justify-between items-center py-8 self-stretch bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/auth_banner.png')",
            }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
          >
            <motion.div
              className="p-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: [0.4, 0, 0.2, 1] as const,
              }}
            >
              <Logo size={10} className="w-[12vw] h-auto" />
            </motion.div>

            <motion.div
              className="mt-auto pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: [0.4, 0, 0.2, 1] as const,
              }}
            >
              <p className="text-center text-sm font-poppins leading-relaxed text-white drop-shadow-lg">
                By accessing the site, I attest that I am at least 18 years old
                <br />
                and have read the Terms and Conditions
              </p>
            </motion.div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            className="w-full lg:w-[45%] h-full flex flex-col py-8 sm:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
          >
            <DialogClose asChild>
              <X className="w-8 h-8 text-white hover:text-gray-300 absolute top-4 right-4 cursor-pointer" />
            </DialogClose>

            {/* Logo on mobile */}
            <motion.div
              className="lg:hidden flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: [0.4, 0, 0.2, 1] as const,
              }}
            >
              <Logo size={10} className="w-32 h-auto" />
            </motion.div>

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
                  <TabsTrigger
                    value="register"
                    className="text-sm sm:text-base"
                  >
                    <UserPlus className="w-4 h-4 inline mr-2" />
                    Register
                  </TabsTrigger>
                  <TabsTrigger value="login" className="text-sm sm:text-base">
                    <LogIn className="w-4 h-4 inline mr-2" />
                    Login
                  </TabsTrigger>
                </TabsList>

                <TabsContent
                  value="register"
                  className="mt-6 sm:mt-8 flex-1 max-h-full overflow-y-auto"
                >
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

            {/* Terms on mobile */}
            <motion.div
              className="lg:hidden mt-8 px-4 py-3.5 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.4,
                ease: [0.4, 0, 0.2, 1] as const,
              }}
            >
              <p className="text-center text-xs font-poppins leading-relaxed text-white/90">
                By accessing the site, I attest that I am at least 18 years old
                and have read the Terms and Conditions
              </p>
            </motion.div>
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

const AuthMobile = ({ user }: { user: User | undefined }) => {
  return <>{user ? <AccountDropdown user={user} /> : <AuthModal />}</>;
};


export {AuthMobile, Auth}
export default Auth;
