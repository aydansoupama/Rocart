import * as React from "react";
import { cn } from "@/lib/utils";

const Input = ({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) => {
  return (
    <input
      type={type}
      className={cn(
        "w-full bg-[#030804] border border-[#000000] rounded-lg md:rounded-[0.5vw] px-4 py-3 md:px-[1vw] md:py-[1vh] text-sm md:text-[0.9vw] text-white placeholder-gray-500 focus:border-[#3DFF88] focus:outline-none",
        className
      )}
      {...props}
    />
  );
};

Input.displayName = "Input";

export { Input };
