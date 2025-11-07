"use client";
import VertexBackground from "@/components/backgrounds/Vertex";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { steps } from "@/datas/workflow";

const HowItWorksSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

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
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <VertexBackground
      radius={45}
      backgroundLayer={<div className="bg-[#06100a]  w-full h-full" />}
    >
      <div className="max-w-7xl mx-auto px-4 py-16 relative">
        {/* Title Section */}
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="font-poppins font-bold text-white text-4xl lg:text-5xl tracking-[-0.02em] leading-tight mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
          >
            How <span className="text-[#3dff87]">Rocart</span> Works?
          </motion.h2>
          <motion.p
            className="font-poppins font-medium text-[#999999] text-base lg:text-lg tracking-[0] leading-relaxed max-w-4xl mx-auto"
            variants={descriptionVariants}
          >
            Buying Items on RoCart is designed to be simple, fast, and reliable!
            <br />
            Here&apos;s how you can get started
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -8, transition: { duration: 0.3 } }}
              className="relative"
            >
              <Card
                className={`${step.bgColor} ${step.borderColor} border border-solid rounded-[26px] h-full group`}
                style={{
                  boxShadow: `0 0 20px ${
                    step.borderColor.includes("3dff87")
                      ? "#3dff8720"
                      : step.borderColor.includes("31a6ff")
                      ? "#31a6ff20"
                      : step.borderColor.includes("d13bff")
                      ? "#d13bff20"
                      : "#ff3c3c20"
                  }`,
                }}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start gap-4 grow">
                    {/* Icon */}
                    <motion.div className="shrink-0 p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                      <motion.img
                        src={step.icon}
                        alt={step.title}
                        className="w-6 h-6 object-contain"
                      />
                    </motion.div>

                    {/* Content */}
                    <div className="flex flex-col justify-center grow">
                      <h3 className="font-semibold text-white text-sm sm:text-base lg:text-[15px] mb-1 wrap-break-words">
                        {step.title}
                      </h3>
                      <p className="text-[#d9d9d9] text-xs sm:text-sm lg:text-[12px] leading-relaxed whitespace-normal wrap-break-words">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </VertexBackground>
  );
};

export default HowItWorksSection;
