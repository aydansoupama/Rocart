import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/Dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { RegisterForm } from "@/components/modals/forms/auth/register";
import { LoginForm } from "@/components/modals/forms/auth/login";

import { User } from "better-auth";
import { User as UserIcon } from "lucide-react";
import Image from "next/image";
import Logo from "../Logo";

// If user is not logged in
const AuthTrigger = () => {
  return (
    <button className="flex justify-center items-center gap-x-2 px-2 py-2 rounded-xl bg-linear-to-b from-[#3DFF88] to-[#259951] hover:to-[#259951] hover:from-[#169e4a] transition-colors transition-300 shadow-[inset_0px_-2px_0px_0px_rgba(255,255,255,255.1)] active:shadow-none active:translate-y-0.5 cursor-pointer">
      <UserIcon />
      <span className="font-poppins font-semibold">Log in</span>
    </button>
  );
};

const AuthModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <AuthTrigger />
      </DialogTrigger>
      <DialogContent
        className="bg-[#06100a] border-none min-w-[960px] min-h-[700px] p-0 overflow-hidden"
        showCloseButton={false}
      >
        <DialogTitle className="sr-only"/>
        <div className="flex w-full h-full min-h-[775px]">
          <div
            className="w-1/2 relative flex flex-col justify-betweeen items-center py-8 self-stretch bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/auth_banner.png')",
            }}
          >
            <div className="p-8">
              <Logo size={10} />
            </div>

            <div className="mt-auto pt-6 text-center text-sm font-poppins leading-relaxed">
              By accessing the site, I attest that I am at least 18 years old
              <br />
              and have read the Terms and Conditions
            </div>
          </div>

          {/* Right side - Form */}
          <div className="w-1/2 h-full flex flex-col py-8 px-10">
            <Tabs
              defaultValue="register"
              className="w-full flex-1 flex flex-col"
            >
              <TabsList className="w-full grid grid-cols-2 mb-0">
                <TabsTrigger value="register">Register</TabsTrigger>
                <TabsTrigger value="login">Login</TabsTrigger>
              </TabsList>

              <TabsContent value="register" className="mt-6 flex-1">
                <RegisterForm />
              </TabsContent>

              <TabsContent value="login" className="mt-6 flex-1">
                <LoginForm />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// If user is logged in
const AccountDropdown = () => {
  return <h1>AccountDropdown</h1>;
};

const Auth = ({ user }: { user: User | undefined }) => {
  console.log(user);

  return <>{user ? <AccountDropdown /> : <AuthModal />}</>;
};

export default Auth;
