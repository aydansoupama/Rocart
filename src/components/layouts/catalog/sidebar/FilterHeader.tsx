"use client";

interface FilterHeaderProps {
  onReset: () => void;
}

export function FilterHeader({ onReset }: FilterHeaderProps) {
  return (
    <div className="flex flex-col items-baseline sm:flex-row sm:items-center sm:justify-between mb-6">
      <div className="flex items-center gap-3">
        <h2 className="text-sm font-semibold text-white">Filter items</h2>
        <span className="bg-linear-to-br from-[#13E97D] to-[#0B8346] font-bold text-sm w-7 h-6 flex items-center justify-center rounded-lg">
          43
        </span>
      </div>
      <button
        onClick={onReset}
        className="text-[#13E97D] hover:text-[#13E97D]/80 font-medium text-xs cursor-pointer hover:underline transition-colors"
      >
        Reset
      </button>
    </div>
  );
}
