"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Logo = ({
  size,
  className,
  variant = "full",
}: {
  size: number;
  className?: string;
  variant?: "compact" | "full";
}) => {
  const router = useRouter();

  const imgSrc =
    variant === "full" ? "/bloxbeam_logo.png" : "/bloxbeam_logo_2.png";

  return (
    <Link href={""} onClick={() => router.refresh()}>
      <img
        src={imgSrc}
        className={cn(
          `object-contain h-${size} w-auto`,
          className ? className : ""
        )}
        alt="Bloxbeam's Logo"
      />
    </Link>
  );
};

export default Logo;
