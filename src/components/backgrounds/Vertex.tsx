"use client";
import { cn } from "@/lib/utils";

const VertexBackground = ({
  children,
  backgroundLayer,
  radius = 50,
}: Readonly<{
  children: React.ReactNode;
  backgroundLayer?: React.ReactNode;
  radius?: number;
}>) => {
  return (
    <div className="relative flex w-full items-center justify-center bg-transparent overflow-hidden">
      {backgroundLayer && (
        <div className="absolute inset-0 z-[-2]">{backgroundLayer}</div>
      )}

      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};

export default VertexBackground;
