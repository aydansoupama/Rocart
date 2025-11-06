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
      {/* Layer 1: Custom background (derrière tout) */}
      {backgroundLayer && (
        <div className="absolute inset-0 z-[-2]">{backgroundLayer}</div>
      )}

      {/* Layer 2: Grid Vertex with radial mask */}
      <div
        className={cn(
          "absolute inset-0 z-[-1]",
          "[background-size:120px_60px]",
          "[background-image:linear-gradient(to_right,rgba(228,228,231,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.5)_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.5)_1px,transparent_1px)]"
        )}
        style={{
          maskImage: `radial-gradient(ellipse ${radius}% ${radius}% at 50% 100%, black, transparent)`,
          WebkitMaskImage: `radial-gradient(ellipse ${radius}% ${radius}% at 50% 100%, black, transparent)`,
        }}
      />

      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};

export default VertexBackground;
