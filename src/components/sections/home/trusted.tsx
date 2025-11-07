"use client";
import { motion } from "framer-motion";
import { testimonials } from "@/datas/testimonials";
import { Star, StarHalf } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const TrustedSection = () => {
  return (
    <section className="font-poppins bg-[#030804] py-16">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex flex-col gap-8">
          <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center w-fit whitespace-nowrap">
            Trusted with by{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary">
              5,000+ Happy Buyers
            </span>
          </h3>
          <p className="flex flex-col font-medium text-sm text-secondary">
            <span>
              Join thousands of happy buyers who trust Rocart for their in-game
              items!
            </span>
            <span>
              From casual players to serious collectors, our customers keep
              coming back for quality and reliability, See same of our amazing
              supporters below:
            </span>
          </p>
        </div>
        <div>
          <div className="flex flex-col w-fit rounded-2xl px-6 py-3 border border-secondary/10">
            <div className="flex items-center text-primary">
              <Star fill="var(--primary)" size={16} />
              <Star fill="var(--primary)" size={16} />
              <Star fill="var(--primary)" size={16} />
              <Star fill="var(--primary)" size={16} />
              <StarHalf fill="var(--primary)" size={16} />
            </div>
            <div className="flex justify-between items-center gap-x-2">
              <span className="text-[13px] text-primary font-semibold">
                Amazing 4.5
              </span>
              <span className="font-semibold text-white text-[10px]">
                out of 5.0
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden max-w-7xl mx-auto mt-12">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-[#030804] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-[#030804] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6"
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
              <div
                key={index}
                className="relative rounded-2xl min-w-[280px] transition-transform cursor-pointer overflow-hidden bg-[#0a1a0f] border-[0.5px] border-transparent hover:border-primary "
              >
                <div className="relative z-10 p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          fill="#22c55e"
                          stroke="#22c55e"
                          size={14}
                        />
                      ))}
                      <StarHalf fill="#22c55e" stroke="#22c55e" size={14} />
                    </div>

                    {testimonial.verified && (
                      <div className="flex items-center gap-1.5">
                        <Star size={14} fill="#22c55e" stroke="#22c55e" />
                        <span className="text-[#22c55e] text-xs font-medium">
                          Verified
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#22c55e]/20">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-white font-semibold text-sm">
                      {testimonial.name}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {testimonial.testimonial}
                  </p>
                </div>
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedSection;
