"use client";

import { ChevronDownIcon } from "lucide-react";
import Flag from "react-flagpack";
import { languages } from "@/datas/language";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguageStore } from "@/stores/language";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0 },
};

const LanguageEditor = ({
  isMobile = false,
  isOpen: isOpenProp,
  onToggle,
}: {
  isMobile?: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
} = {}) => {
  const { code, changeCountry, hydrated } = useLanguageStore();
  const selectedLang = languages.find((lang) => lang.code === code);
  const [isOpenInternal, setIsOpenInternal] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isOpen = isMobile ? isOpenProp ?? false : isOpenInternal;
  const toggle =
    isMobile && onToggle ? onToggle : () => setIsOpenInternal(!isOpenInternal);

  useEffect(() => {
    if (isMobile) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
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
        className="cursor-pointer w-auto h-[5vh] bg-[linear-gradient(87deg,rgba(15,15,15,1)_0%,rgba(13,13,13,1)_100%)] rounded-[0.7vw] flex items-center"
      >
        {hydrated ? (
          <>
            <div className="flex justify-center items-center ml-[1vw] w-[2vw] h-[2vw]">
              <Flag
                key={code}
                code={code}
                size="l"
                className=" border-0 my-auto relative"
              />
            </div>
            <div className="ml-[0.5vw] flex-1 flex items-center gap-[0.5vw] justify-between">
              <span className="font-poppins font-semibold text-white text-[0.9vw] leading-tight">
                {selectedLang?.name}/{selectedLang?.currency}
              </span>

              <ChevronDownIcon className="w-[0.8vw] h-[0.8vw] text-white mr-[1vw]" />
            </div>
          </>
        ) : null}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={containerVariants}
            className="absolute top-[6vh] left-0 w-full rounded-xl shadow-lg z-50 bg-[#0C1610] p-[0.5vw] h-auto overflow-y-auto"
          >
            {languages.map((language, index) => (
              <motion.button
                key={language.code}
                onClick={() => {
                  // ✅ Mise à jour du store
                  changeCountry(language.code, language.currency);

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
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-center items-center w-[2vw] h-[2vw]">
                  <Flag
                    key={language.code}
                    code={language.code}
                    size="l"
                    className=" border-0 my-auto relative"
                  />
                </div>
                <span className="font-poppins font-bold text-white text-[1vw] leading-tight">
                  {language.name}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageEditor;
