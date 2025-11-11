"use client";

export function CloseButton() {
  return (
    <button className="fixed top-6 right-6 w-12 h-12 bg-gray-800/50 border border-gray-700 rounded-xl flex items-center justify-center hover:bg-gray-800 transition-colors">
      <svg
        className="w-6 h-6 text-emerald-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
}
