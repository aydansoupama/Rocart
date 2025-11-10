"use client";

import { ChevronDown } from "lucide-react";
import Flag from "react-flagpack";
import { languages } from "@/datas/language";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LanguageEditor = ({ 
  isMobile = false, 
  isOpen: isOpenProp, 
  onToggle 
}: { 
  isMobile?: boolean; 
  isOpen?: boolean; 
  onToggle?: () => void;
} = {}) => {
  const [selectedLanguage, setSelectedLanguage] = useState("FR");
  const [isOpenInternal, setIsOpenInternal] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedLang = languages.find((lang) => lang.code === selectedLanguage);
  
  // Use external control in mobile, internal in desktop
  const isOpen = isMobile ? (isOpenProp ?? false) : isOpenInternal;
  const toggle = isMobile && onToggle ? onToggle : () => setIsOpenInternal(!isOpenInternal);

  useEffect(() => {
    if (isMobile) return; 
    
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpenInternal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile]);

  return (
    <div ref={dropdownRef} className={isMobile ? "flex flex-col" : "relative"}>
      <button
        onClick={toggle}
        className={`flex items-center gap-x-2.5 px-4 py-3 rounded-xl cursor-pointer transition-colors ${
          isMobile ? "justify-between bg-[#0a1f0d] hover:bg-[#0f2912]" : "justify-center bg-card hover:bg-card/30"
        }`}
      >
        <div className="flex items-center gap-x-2.5">
          <Flag key={selectedLanguage} code={selectedLanguage} size="m" />
          <span className="font-poppins font-semibold">
            {isMobile ? "Language" : selectedLang?.name}
          </span>
        </div>
        <ChevronDown className={`text-white transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={
              isMobile 
                ? "flex flex-col gap-2 mt-2 pl-2 overflow-hidden" 
                : "absolute top-full mt-2 right-0 min-w-[200px] bg-card rounded-xl shadow-lg border border-border overflow-hidden z-50"
            }
            initial={isMobile ? { height: 0, opacity: 0 } : { opacity: 0, y: -10 }}
            animate={isMobile ? { height: "auto", opacity: 1 } : { opacity: 1, y: 0 }}
            exit={isMobile ? { height: 0, opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
          >
            {languages.map((language, index) => (
              <motion.button
                key={language.code}
                onClick={() => {
                  setSelectedLanguage(language.code);
                  if (isMobile && onToggle) {
                    onToggle();
                  } else {
                    setIsOpenInternal(false);
                  }
                }}
                className={`flex items-center gap-x-2.5 px-4 py-3 font-poppins font-semibold transition-colors ${
                  isMobile 
                    ? "rounded-xl bg-[#0a1f0d] hover:bg-[#0f2912]" 
                    : "w-full hover:bg-card/50 text-left"
                }`}
                initial={isMobile ? { opacity: 0, x: -10 } : { opacity: 0 }}
                animate={isMobile ? { opacity: 1, x: 0 } : { opacity: 1 }}
                transition={isMobile ? { duration: 0.2, delay: index * 0.05 } : {}}
              >
                <Flag code={language.code} size="m" />
                <span>{language.name}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageEditor;
