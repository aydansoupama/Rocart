import { cn } from "@/lib/utils";

const Logo = ({ size, className }: { size: number, className: string }) => {
  return (
    <img
      src={"/bloxbeam_logo.png"}
      className={cn(`object-cover h-${size}`, className ? className : "")}
      alt="Bloxbeam's Logo"
    />
  );
};

export default Logo;
