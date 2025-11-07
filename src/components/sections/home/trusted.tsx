"use client";
import { motion } from "framer-motion";
import { testimonials } from "@/datas/testimonials";
import { Star, StarHalf } from "lucide-react";
import Image from "next/image";

const TrustedSection = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  const ratingVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  return (
    <section className="font-poppins bg-[#030804] py-12 sm:py-14 md:py-16 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-8 max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full md:max-w-4xl"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center md:text-left w-full"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
          >
            Trusted with by{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary">
              5,000+ Happy Buyers
            </span>
          </motion.h3>
          <motion.p
            className="flex flex-col font-medium text-xs sm:text-sm text-secondary text-center md:text-left"
            variants={descriptionVariants}
          >
            <span>
              Join thousands of happy buyers who trust Bloxbeam for their in-game
              items!
            </span>
            <span>
              From casual players to serious collectors, our customers keep
              coming back for quality and reliability, See same of our amazing
              supporters below:
            </span>
          </motion.p>
        </motion.div>
        <motion.div
          className="shrink-0"
          variants={ratingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="flex flex-col w-fit rounded-xl sm:rounded-2xl px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 border border-secondary/10"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center text-primary gap-0.5">
              <Star fill="var(--primary)" className="w-3 h-3 sm:w-4 sm:h-4" />
              <Star fill="var(--primary)" className="w-3 h-3 sm:w-4 sm:h-4" />
              <Star fill="var(--primary)" className="w-3 h-3 sm:w-4 sm:h-4" />
              <Star fill="var(--primary)" className="w-3 h-3 sm:w-4 sm:h-4" />
              <StarHalf
                fill="var(--primary)"
                className="w-3 h-3 sm:w-4 sm:h-4"
              />
            </div>
            <div className="flex justify-between items-center gap-x-2 mt-1">
              <span className="text-[11px] sm:text-[13px] text-primary font-semibold">
                Amazing 4.5
              </span>
              <span className="font-semibold text-white text-[9px] sm:text-[10px]">
                out of 5.0
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="relative overflow-hidden max-w-7xl mx-auto mt-8 sm:mt-10 md:mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] as const }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 bg-linear-to-r from-[#030804] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 bg-linear-to-l from-[#030804] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-3 sm:gap-4 md:gap-6"
          animate={{
            x: [0, -(testimonials.length * (280 + 24))],
          }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
            repeatType: "loop",
          }}
          style={{ willChange: "transform" }}
        >
          {[...testimonials, ...testimonials, ...testimonials].map(
            (testimonial, index) => (
              <motion.div
                key={index}
                className="relative rounded-xl sm:rounded-2xl min-w-60 sm:min-w-[260px] md:min-w-[280px] cursor-pointer overflow-hidden bg-[#0a1a0f] border-[0.5px] border-transparent hover:border-primary"
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  borderColor: "#22c55e",
                  transition: { duration: 0.2 },
                }}
              >
                <div className="relative z-10 p-4 sm:p-5">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          fill="#22c55e"
                          stroke="#22c55e"
                          className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                        />
                      ))}
                    </div>

                    {testimonial.verified && (
                      <div className="flex items-center gap-1 sm:gap-1.5">
                        <Star
                          className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                          fill="#22c55e"
                          stroke="#22c55e"
                        />
                        <span className="text-[#22c55e] text-[10px] sm:text-xs font-medium">
                          Verified
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-[#22c55e]/20">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-white font-semibold text-xs sm:text-sm">
                      {testimonial.name}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {testimonial.testimonial}
                  </p>
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TrustedSection;
