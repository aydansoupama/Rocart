"use client";
import { motion } from "framer-motion";
import VertexBackground from "@/components/backgrounds/Vertex";
import { Card, CardContent } from "@/components/ui/card";
import { benefitCards } from "@/datas/benefits";

const WhyChooseSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };
  return (
    <VertexBackground radius={20} backgroundLayer={<div className="bg-[#030804] w-full h-full" />}>
      <section className="w-full py-8 md:py-12 px-4 md:px-6 font-poppins relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="font-poppins font-bold text-white text-4xl lg:text-5xl tracking-[-0.02em] leading-tight mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
            >
              Why Choose <span className="text-primary">Bloxbeam</span>?
            </motion.h2>
            <p className="font-poppins font-medium text-[#999999] text-sm tracking-[0] leading-[normal] max-w-4xl mx-auto">
              Enjoy lightning - fast delivery, unbeatable prices, and a safe,
              secure shopping experience for all your
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              favorite Roblox item. Our dedicated support team is always here to
              help!
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {benefitCards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Card
                  className={`${card.bgColor} ${card.borderColor} border border-solid rounded-[26px] h-[154px]`}
                >
                  <CardContent className="px-6 h-full">
                    <div className="flex flex-col h-full">
                      <div className="flex items-start justify-between mb-4">
                        <motion.h3
                          className="font-poppins font-semibold text-white text-[13px] tracking-[0] leading-[normal]"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.1 + 0.3,
                            duration: 0.3,
                          }}
                        >
                          {card.title}
                        </motion.h3>
                        <motion.img
                          className="w-5 h-5 shrink-0"
                          alt="Mask group"
                          src={card.icon}
                          initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.1 + 0.4,
                            duration: 0.4,
                            ease: [0.4, 0, 0.2, 1] as const,
                          }}
                          whileHover={{
                            rotate: 10,
                            scale: 1.1,
                            transition: { duration: 0.2 },
                          }}
                        />
                      </div>
                      <motion.p
                        className="font-poppins font-medium text-[#d9d9d9] text-[11px] tracking-[0] leading-[normal] whitespace-pre-line"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
                      >
                        {card.description}
                      </motion.p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </VertexBackground>
  );
};

export default WhyChooseSection;
