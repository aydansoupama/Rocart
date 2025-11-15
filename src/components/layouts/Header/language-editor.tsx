"use client";

import { ChevronDownIcon } from "lucide-react";
import Flag from "react-flagpack";
import { languages } from "@/datas/language";
import { useRef, useEffect, useState, useMemo } from "react";
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
    <div
      ref={dropdownRef}
      className={isMobile ? "flex flex-col w-full" : "relative w-auto"}
    >
      <button
        onClick={toggle}
        className="cursor-pointer w-full h-12 sm:h-14 md:h-[5vh] bg-[linear-gradient(87deg,rgba(15,15,15,1)_0%,rgba(13,13,13,1)_100%)] rounded-lg sm:rounded-xl md:rounded-[0.7vw] flex items-center px-3"
      >
        {hydrated ? (
          <>
            <div className="flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 md:w-[2vw] md:h-[2vw] shrink-0">
              <Flag
                key={code}
                code={code}
                size="l"
                className="border-0 my-auto relative"
              />
            </div>
            <div className="ml-2 sm:ml-3 md:ml-[0.5vw] flex-1 flex items-center gap-2 sm:gap-3 md:gap-[0.5vw] justify-between">
              <span className="font-poppins font-semibold text-white text-sm sm:text-base md:text-[0.9vw] leading-tight truncate">
                {selectedLang?.name}/{selectedLang?.currency}
              </span>

              <ChevronDownIcon
                className={`w-[1.5vw] h-[2vw] text-white transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
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
            className={`
              ${
                isMobile
                  ? "fixed inset-x-4 top-16 max-h-[70vh]"
                  : "absolute top-[6vh] left-0 w-full"
              }
              rounded-xl shadow-lg z-50 bg-[#0C1610] p-2 sm:p-3 md:p-[0.5vw] overflow-y-auto
            `}
          >
            {languages.map((language) => (
              <motion.button
                key={language.code}
                onClick={() => {
                  changeCountry(language.code, language.currency);

                  if (isMobile && onToggle) {
                    onToggle();
                  } else {
                    setIsOpenInternal(false);
                  }
                }}
                className={`flex items-center gap-x-2 sm:gap-x-2.5 px-3 py-2.5 sm:px-4 sm:py-3 font-poppins font-semibold transition-colors ${
                  isMobile
                    ? "w-full rounded-xl bg-[#0a1f0d] hover:bg-[#0f2912]"
                    : "w-full hover:bg-card/50 text-left rounded-lg sm:rounded-xl"
                }`}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 md:w-[2vw] md:h-[2vw] shrink-0">
                  <Flag
                    key={language.code}
                    code={language.code}
                    size="l"
                    className="border-0 my-auto relative"
                  />
                </div>
                <span className="font-poppins font-bold text-white text-sm sm:text-base md:text-[1vw] leading-tight truncate">
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

const LanguageEditorMobile = () => {
  const { code, changeCountry, hydrated } = useLanguageStore();
  const [isOpen, setIsOpen] = useState(false);

  const selectedLang = useMemo(
    () => languages.find((lang) => lang.code === code),
    [code]
  );

  const toggle = () => setIsOpen(!isOpen);
  const handleSelect = (language: {code: string, currency: string}) => {
    changeCountry(language.code, language.currency);
    setIsOpen(false);
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Main Container */}
      <div className="flex flex-col w-full">
        <button
          onClick={toggle}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-label="Sélectionner la langue et la devise"
          className="flex items-center justify-between w-full p-4 bg-[#1a1a1a] hover:bg-[#2a2a2a] rounded-lg transition-colors active:scale-95"
        >
          {hydrated ? (
            <>
              <div className="flex justify-center items-center w-10 h-10 shrink-0">
                <Flag
                  code={code}
                  size="l"
                  className="border-0 my-auto relative"
                />
              </div>
              <div className="ml-3 flex-1 flex items-center gap-3 justify-between">
                <span className="font-poppins font-semibold text-white text-base leading-tight truncate">
                  {selectedLang?.name}/{selectedLang?.currency}
                </span>

                <ChevronDownIcon
                  className={`w-5 h-5 text-white transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            </>
          ) : (
            <div className="w-full h-10 animate-pulse bg-gray-700 rounded" />
          )}
        </button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={containerVariants}
              className="fixed inset-x-4 top-20 max-h-[70vh] rounded-xl shadow-2xl z-50 bg-[#0C1610] p-3 overflow-y-auto"
              role="listbox"
            >
              {languages.map((language) => (
                <motion.button
                  key={language.code}
                  onClick={() => handleSelect(language)}
                  className={`flex items-center gap-x-3 px-4 py-3 font-poppins font-semibold transition-colors w-full rounded-xl mb-2 ${
                    language.code === code
                      ? 'bg-[#0f2912] border-2 border-green-500'
                      : 'bg-[#0a1f0d] hover:bg-[#0f2912]'
                  }`}
                  variants={itemVariants}
                  whileTap={{ scale: 0.98 }}
                  role="option"
                  aria-selected={language.code === code}
                >
                  <div className="flex justify-center items-center w-10 h-10 shrink-0">
                    <Flag
                      code={language.code}
                      size="l"
                      className="border-0 my-auto relative"
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-poppins font-bold text-white text-base leading-tight">
                      {language.name}
                    </div>
                    <div className="font-poppins text-gray-400 text-sm">
                      {language.currency}
                    </div>
                  </div>
                  {language.code === code && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 bg-green-500 rounded-full"
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export { LanguageEditorMobile };
export default LanguageEditor;
