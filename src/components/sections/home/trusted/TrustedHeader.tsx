"use client";
import { motion } from "framer-motion";
import { RatingCard } from "./RatingCard";

export const TrustedHeader = () => {
  return (
    <div className="text-center md:text-left md:flex md:items-start md:justify-between mb-12">
      <div>
        <motion.h2
          className="text-white text-4xl font-bold mb-4"
          style={{ fontFamily: "Poppins, sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Trusted with by <span className="text-[#3DFF87]">1,500+</span>{" "}
          Happy Buyers
        </motion.h2>
        <motion.p
          className="text-[#999999] text-sm max-w-2xl leading-relaxed text-center md:text-left"
          style={{ fontFamily: "Poppins, sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Join thousands of happy buyers who trust Rocart for their in-game
          items!
          <br />
          From casual players to serious collectors, our customers keep
          coming back for quality and reliability. See some of our amazing
          supporters below:
        </motion.p>
      </div>

      <RatingCard />
    </div>
  );
};
