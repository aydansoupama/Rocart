"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FAQHeader } from "./faq/FAQHeader";
import { FAQItem } from "./faq/FAQItem";
import { FAQCategoryButton } from "./faq/FAQCategoryButton";
import { faqCategories } from "@/datas/faq";
import VertexBackground from "@/components/backgrounds/Vertex";
import FAQFooter from "./faq/FAQFooter";

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].id);

  const currentCategory = faqCategories.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <section className="relative bg-[#06100a] w-full pt-6 pb-3 sm:py-16 md:py-20 lg:py-24 ">
      <div
        className="
          absolute inset-0 
          bg-[url('/bg/mesh.png')] 
          bg-no-repeat bg-center 
          sm:bg-repeat
          opacity-30 pointer-events-none 
          from-[#06100A] via-transparent to-[#2A2A2A]
        "
        style={{
          backgroundSize: "100% 100%",
          backgroundBlendMode: "overlay",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="flex flex-col gap-6 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <FAQHeader />

        <div className="flex flex-col lg:flex-row">
          {/* Sidebar Categories */}
          <div className="lg:w-max bg-transparent mt-8 sm:mt-12 lg:mt-16 p-3 sm:p-4">
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {faqCategories.map((category, index) => (
                <div key={category.id} className="shrink-0 lg:shrink lg:w-full">
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
          </div>

          {/* Questions List */}
          <div className="flex-1 space-y-6 sm:space-y-8 p-4 sm:p-6">
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

        <div className="w-full flex justify-center">
          <p className="text-center text-sm sm:text-base font-medium">
            More Questions?
            <a
              className="text-primary hover:text-primary/80 underline hover:underline focus:outline-none rounded-sm ml-1"
              aria-label="Contact us for additional support"
              data-discover="true"
              href="/contact-us"
            >
              Contact Us
            </a>
          </p>
        </div>

        <FAQFooter />
      </div>
    </section>
  );
};

export default FAQSection;
