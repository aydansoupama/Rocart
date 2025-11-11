"use client";

interface ActionButtonsProps {
  onClearAll: () => void;
}

export function ActionButtons({ onClearAll }: ActionButtonsProps) {
  return (
    <div className="space-y-3 mb-8">
      <button className="w-full h-11 bg-linear-to-b from-[#48FFA3] to-[#0B8346] hover:from-[#48FFA3]/80 hover:to-[#0B8346]/80 transition-all rounded-[13px] text-xs font-semibold text-white active:scale-99">
        Confirm
      </button>
      <button
        onClick={onClearAll}
        className="w-full h-11 bg-[#141d15] hover:bg-[#141d15]/80 transition-all rounded-[13px] border border-[#313131] text-xs font-semibold text-white active:scale-99"
      >
        Clear all
      </button>
    </div>
  );
}
