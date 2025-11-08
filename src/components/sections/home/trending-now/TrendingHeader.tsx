"use client";
import { motion } from "framer-motion";
import { titleVariants } from "./animation-variants";
import { descriptionVariants } from "../hero/animation-variants";

export const TrendingHeader = () => {
  return (
    <motion.div
      className="flex flex-col justify-center gap-2 mb-[10vh]"
      variants={titleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex justify-center items-center gap-[0.63vw]">
        <motion.hr
          className="bg-linear-to-r from-transparent to-white w-full h-0.5 rounded-full border-0"
          initial={{ scaleX: 0, originX: 1 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] as const }}
        />
        <motion.h3
          className="bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent font-bold text-[2.08vw] text-center w-fit whitespace-nowrap h-[8vh] sm:h-[12vh] flex items-center mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
        >
          Trending Now
        </motion.h3>
        <motion.hr
          className="bg-linear-to-l from-transparent to-white w-full h-0.5 rounded-full border-0"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] as const }}
        />
      </div>
      <motion.p
        className="text-gray-300 text-[0.78vw] max-w-[90vw] sm:max-w-[80vw] mx-auto leading-relaxed px-2 text-center"
        style={{ fontFamily: "Poppins, sans-serif" }}
        variants={descriptionVariants}
      >
        Items gaining popularity right now.
        <br />
        Most users are active on their catalog pages.
      </motion.p>
    </motion.div>
  );
};
