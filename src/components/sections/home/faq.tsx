"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FAQHeader } from "./faq/FAQHeader";
import { FAQItem } from "./faq/FAQItem";
import { FAQCategoryButton } from "./faq/FAQCategoryButton";
import { faqCategories } from "@/datas/faq";
import VertexBackground from "@/components/backgrounds/Vertex";

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].id);

  const currentCategory = faqCategories.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <VertexBackground radius={80} backgroundLayer={<div className="w-full h-full bg-[#06100a]" />}>
      <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <FAQHeader />

          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Sidebar Categories */}
            <div className="w-full lg:w-64 xl:w-72 flex-shrink-0">
              <motion.div
                className="flex flex-row lg:flex-col gap-3 sm:gap-4 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {faqCategories.map((category, index) => (
                  <div
                    key={category.id}
                    className="flex-shrink-0 lg:flex-shrink lg:w-full"
                  >
                    <FAQCategoryButton
                      name={category.name}
                      icon={category.icon}
                      isActive={activeCategory === category.id}
                      onClick={() => setActiveCategory(category.id)}
                      index={index}
                    />
                  </div>
                ))}
              </motion.div>

              {/* Contact Us Section */}
              <motion.div
                className="hidden lg:block mt-8 p-6 bg-[#030804] border border-[#2A2A2A] rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p
                  className="text-white text-sm mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <span className="text-[#3DFF87] font-semibold">
                    More Questions?
                  </span>
                </p>
                <a
                  href="#"
                  className="text-[#3DFF87] text-sm hover:underline"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Contact Us
                </a>
              </motion.div>

              {/* Disclaimer */}
              <motion.div
                className="hidden lg:block mt-6 p-4 bg-[#030804]/50 border border-[#2A2A2A] rounded-xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p
                  className="text-[#999999] text-xs leading-relaxed"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <span className="font-semibold text-[#d9d9d9]">
                    We are not affiliated with Roblox Corporation or any of its
                    trademarks
                  </span>
                  <br />
                  <br />
                  Bloxbeam&apos;s services are not the same, similar or
                  equivalent to Roblox Corporation&apos;s products and services
                  and we are not sponsored by, affiliated with, approved by
                  and/or endorsed by ROBLOX Corporation at all.
                </p>
              </motion.div>
            </div>

            {/* Questions List */}
            <div className="flex-1">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-3 sm:space-y-4"
              >
                <h3
                  className="text-white text-lg sm:text-xl font-semibold mb-4 sm:mb-6"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {currentCategory?.name} FAQs
                </h3>
                {currentCategory?.questions.map((question, index) => (
                  <FAQItem
                    key={question.id}
                    question={question.question}
                    answer={question.answer}
                    index={index}
                  />
                ))}
              </motion.div>
            </div>
          </div>

          {/* Mobile Contact Us */}
          <motion.div
            className="lg:hidden mt-8 p-6 bg-[#030804] border border-[#2A2A2A] rounded-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p
              className="text-white text-sm mb-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <span className="text-[#3DFF87] font-semibold">
                More Questions?
              </span>
            </p>
            <a
              href="/contact"
              className="text-[#3DFF87] text-sm hover:underline"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </VertexBackground>
  );
};

export default FAQSection;
