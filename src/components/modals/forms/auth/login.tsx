"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/Input";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import SignInWithGoogleButton from "@/components/sections/auth/SignInWithGoogle-button";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  username: z.string().min(1, "Email or Username is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach((error) => {
        if (error?.message) {
          toast.error(error.message);
        }
      });
    }
  }, [errors]);

  const onSubmit = async (data: LoginFormInputs) => {
    const loginType = data.username.includes("@") ? "email" : "username";
    console.log("Login type:", loginType);

    try {
      if (loginType === "email") {
        await authClient.signIn.email(
          {
            email: data.username,
            password: data.password,
          },
          {
            onSuccess: () => {
              toast.success("Login successful!");
              return router.refresh();
            },
            onError: (err) => {
              toast.error(err.error.message);
              return;
            },
          }
        );
      } else {
        await authClient.signIn.username(
          {
            username: data.username,
            password: data.password,
          },
          {
            onSuccess: () => {
              return router.refresh();
            },
            onError: (err) => {
              toast.error(err.error.message);
              return;
            },
          }
        );
      }
    } catch {
      toast.error("An error occurred during registration.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-3.5 px-px w-full"
    >
      <div className="space-y-1.5">
        <label
          htmlFor="login-email"
          className="text-white text-sm font-poppins block"
        >
          Email or Username<span>*</span>
        </label>
        <Input
          id="login-email"
          type="text"
          placeholder="Enter Email or Username"
          {...register("username")}
        />
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="login-password"
          className="text-white text-sm font-poppins block"
        >
          Password<span>*</span>
        </label>
        <div className="relative">
          <Input
            id="login-password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            {...register("password")}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-white transition-colors"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        <div className="flex justify-end w-full">
          <Link href="#" className="text-white text-sm ml-auto hover:underline">
            Forgot password ?
          </Link>
        </div>
      </div>

      <button
        type="submit"
        className="w-full h-11 rounded-md bg-linear-to-b from-[#3DFF88] to-[#259951] hover:from-[#35e67d] hover:to-[#218a46] transition-all shadow-[inset_0px_-2px_0px_0px_rgba(0,0,0,0.2)] active:shadow-none active:translate-y-0.5 font-poppins font-semibold text-base text-black mt-4"
      >
        Login
      </button>

      <div className="text-center text-sm font-poppins py-2">
        or continue with
      </div>

      <SignInWithGoogleButton />
    </form>
  );
};
