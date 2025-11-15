"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/Input";
import { Eye, EyeOff, Lock, User } from "lucide-react";
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
        <label className="text-sm md:text-[0.9vw] text-white mb-2 md:mb-[0.5vh] flex items-center gap-2">
          <User className="w-4 h-4" />
          E-mail or Username*
        </label>
        <Input
          id="login-email"
          type="text"
          placeholder="Enter Email or Username"
          {...register("username")}
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-sm md:text-[0.9vw] text-white mb-2 md:mb-[0.5vh] flex items-center gap-2">
          <Lock className="w-4 h-4" />
          Password*
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

      <div className="flex flex-col items-center space-y-3">
        <button
          type="submit"
          className="w-full max-w-sm md:w-[25vw] bg-[linear-gradient(180deg,rgba(61,255,136,1)_0%,rgba(37,153,81,1)_100%)] hover:bg-[linear-gradient(180deg,rgba(61,255,136,0.9)_0%,rgba(37,153,81,0.9)_100%)] disabled:opacity-50 disabled:cursor-not-allowed rounded-lg py-3 md:py-[1.5vh] text-base md:text-[1vw] font-semibold text-white transition-all duration-200"
        >
          Log In
        </button>

        <span className="text-gray-400 text-sm md:text-[0.9vw]">
          or continue with
        </span>

        <SignInWithGoogleButton />
      </div>

      <div className="md:hidden text-center mt-6 px-4">
        <span className="text-xs text-white leading-tight">
          By accessing the site, I attest that I am at least 18 years old and
          have read the Terms and Conditions
        </span>
      </div>
    </form>
  );
};
