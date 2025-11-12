"use client";

import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/Input";
import { Checkbox } from "@/components/ui/Checkbox";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import SignUpWithGoogleButton from "@/components/sections/auth/SignUpWithGoogle-button";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const registerSchema = z
  .object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
    agreed: z.boolean().refine((val) => val === true, {
      message: "You must agree to the terms and conditions",
    }),
    referral: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterFormInputs = z.infer<typeof registerSchema>;

export const RegisterForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      agreed: false,
    },
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

  const onSubmit = async (data: RegisterFormInputs) => {
    try {
      await authClient.signUp.email(
        {
          email: data.email,
          name: data.username,
          password: data.password,
          username: data.username,
          displayUsername: data.username,
          referralCode: data.referral,
        },
        {
          onSuccess: () => {
            toast.success("Registration successful!");
            return router.refresh();
          },
          onError: (err) => {
            toast.error(err.error.message);
            return;
          },
        }
      );
    } catch {
      toast.error("An error occurred during registration.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-3.5 px-px w-full font-poppins max-h-full overflow-y-auto"
    >
      <div className="space-y-2">
        <label
          htmlFor="username"
          className="flex items-center space-x-2 text-white text-sm font-poppins font-normal"
        >
          <User className="w-4 h-4" />
          Username<span>*</span>
        </label>
        <Input
          id="username"
          placeholder="Enter Username"
          {...register("username")}
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="flex items-center space-x-2 text-white text-sm font-poppins font-normal"
        >
          <Mail className="w-4 h-4" />
          Email<span>*</span>
        </label>
        <Input
          id="email"
          type="email"
          placeholder="Enter Email"
          {...register("email")}
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="password"
          className="flex items-center space-x-2 text-white text-sm font-poppins font-normal"
        >
          <Lock className="w-4 h-4" />
          Password<span>*</span>
        </label>
        <div className="relative">
          <Input
            id="password"
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
      </div>

      <div className="space-y-2">
        <label
          htmlFor="confirmPassword"
          className="flex items-center space-x-2 text-white text-sm font-poppins font-normal"
        >
          <Lock className="w-4 h-4" />
          Confirm Password<span>*</span>
        </label>
        <div className="relative">
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-white transition-colors"
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <div className="flex items-start gap-2 py-1">
        <Controller
          name="agreed"
          control={control}
          render={({ field }) => (
            <Checkbox
              id="terms"
              checked={field.value}
              onCheckedChange={field.onChange}
              className="mt-0.5"
            />
          )}
        />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms"
            className="text-xs text-white font-poppins cursor-pointer leading-relaxed"
          >
            I agree to the{" "}
            <Link
              href="/terms"
              className="text-white font-semibold hover:underline"
            >
              Terms and Conditions
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="text-white font-semibold hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-11 rounded-md bg-linear-to-b from-[#3DFF88] to-[#259951] hover:from-[#35e67d] hover:to-[#218a46] transition-all shadow-[inset_0px_-2px_0px_0px_rgba(0,0,0,0.2)] active:shadow-none active:translate-y-0.5 font-poppins font-semibold text-base text-black disabled:opacity-50 disabled:cursor-not-allowed mt-4"
      >
        Register
      </button>

      <div className="text-center text-sm font-poppins py-2">
        or continue with
      </div>

      <SignUpWithGoogleButton />
    </form>
  );
};
