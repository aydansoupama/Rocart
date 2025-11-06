"use client";

import { ChevronDown } from "lucide-react";
import Flag from "react-flagpack";
import { languages } from "@/datas/language";
import { useState, useRef, useEffect } from "react";

const LanguageEditor = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("FR");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedLang = languages.find((lang) => lang.code === selectedLanguage);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-center items-center gap-x-2.5 px-4 py-3 rounded-xl bg-card hover:bg-card/30 cursor-pointer transition-colors"
      >
        <Flag key={selectedLanguage} code={selectedLanguage} size="m" />
        <span className="font-poppins font-semibold">{selectedLang?.name}</span>
        <ChevronDown className={`text-secondary transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 min-w-[200px] bg-card rounded-xl shadow-lg border border-border overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                setSelectedLanguage(language.code);
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-x-2.5 px-4 py-3 font-poppins font-semibold hover:bg-card/50 transition-colors text-left"
            >
              <Flag code={language.code} size="m" />
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageEditor;
