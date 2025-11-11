import { cn } from "@/lib/utils";

const Logo = ({ size, className, variant="full" }: { size: number, className?: string, variant?: "compact" | "full" }) => {
  const imgSrc = variant === "full" ? "/bloxbeam_logo.png" : "/bloxbeam_logo_2.png";

  return (
    <img
      src={imgSrc}
      className={cn(`object-cover h-${size}`, className ? className : "")}
      alt="Bloxbeam's Logo"
    />
  );
};

export default Logo;
