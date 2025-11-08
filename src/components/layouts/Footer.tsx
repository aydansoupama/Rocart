"use client";
import { motion } from "framer-motion";
import { CreditCard, ShoppingBag } from "lucide-react";
import Logo from "./Logo";
import Image from "next/image";

// Social media, support, resource, and legal links (updated to use custom icon)
const socialMediaIcons = [
  { name: "Twitter", href: "#", image: "/link/x.png" },
  { name: "YouTube", href: "#", image: "/link/yt.png" },
  { name: "TikTok", href: "#", image: "/link/tiktok.png" },
  { name: "Discord", href: "#", image: "/link/dc.png" },
];

const aboutUsLinks = [
  { name: "How We Work", href: "#" },
  { name: "Why Us", href: "#" },
  { name: "FAQ", href: "#" },
];

const platformLinks = [{ name: "Support", href: "#" }];

// const legalLinks = [
//   { name: "Terms of Service", href: "#" },
//   { name: "Privacy Policy", href: "#" },
//   { name: "Cookie Policy", href: "#" },
// ];

const paymentMethods = [
  {
    name: "visa",
    icon: CreditCard,
    image: "/cards/visa.png",
  },
  {
    name: "amex",
    icon: CreditCard,
    image: "/cards/amex.png",
  },
  {
    name: "mastercard",
    icon: CreditCard,
    image: "/cards/mastermind.png",
  },
  {
    name: "Applepay",
    icon: CreditCard,
    image: "/cards/apple.png",
  },
  {
    name: "paypal",
    icon: ShoppingBag,
    image: "/cards/paypal.png",
  },
  {
    name: "discover",
    icon: CreditCard,
    image: "/cards/discover.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const linkHover = {
  scale: 1.05,
  x: 4,
  color: "#00ff88",
  transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
};

const buttonHover = {
  scale: 1.1,
  rotateZ: 5,
  transition: { duration: 0.2, ease: "easeInOut" },
};

const paymentHover = {
  scale: 1.1,
  y: -2,
  transition: { duration: 0.2, ease: "easeInOut" },
};

export const MainContentSection = () => {
  return (
    <motion.footer
      className="w-full bg-[#030a06] bg-opacity-90 py-8 px-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col lg:flex-row justify-between gap-20 mb-8">
          {/* Left Section - Logo and Info */}
          <motion.div
            className="flex flex-col space-y-4 grow"
            variants={itemVariants}
          >
            <motion.div
              className="cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
                <Logo size={12} />
            </motion.div>

            <div className="space-y-3">
              <h3 className="font-poppinis font-medium text-white text-sm">
                Disclaimer
              </h3>

              <p className="font-poppinis font-medium text-[#7b7b7b] text-sm leading-relaxed max-w-md">
                BloxBeams is not affiliated, endorsed by, or in any way associated
                with ROBLOX Corporation, Roblox.com, or any of its subsidiaries
                or affiliates.
              </p>

              <p className="font-poppinis font-medium text-[#7b7b7b] text-xs">
                &copy; 2025 BloxBeams All rights reserved.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:ml-auto"
            variants={itemVariants}
          >
            <div className="flex flex-col space-y-3">
              <h4 className="font-inter font-semibold text-white text-sm">
                Social Media
              </h4>
              <nav className="flex flex-col space-y-2">
                {socialMediaIcons.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="font-inter font-normal text-[#999999] text-sm cursor-pointer"
                    whileHover={linkHover}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* About Us */}
            <div className="flex flex-col space-y-3">
              <h4 className="font-inter font-semibold text-white text-sm">
                About Us
              </h4>
              <nav className="flex flex-col space-y-2">
                {aboutUsLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="font-inter font-normal text-[#999999] text-sm cursor-pointer"
                    whileHover={linkHover}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Platform */}
            <div className="flex flex-col space-y-3 col-span-2 md:col-span-1">
              <h4 className="font-inter font-semibold text-white text-sm">
                Platform
              </h4>
              <nav className="flex flex-col space-y-2">
                {platformLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="font-inter font-normal text-[#999999] text-sm cursor-pointer"
                    whileHover={linkHover}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Social Media (left) + Payment Methods (right) */}

        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6 mt-8"
          variants={itemVariants}
        >
          {/* Social Media Icons */}
          <div className="flex space-x-3 justify-center md:justify-start w-full md:w-auto">
            {socialMediaIcons.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="flex items-center justify-center cursor-pointer"
                whileHover={buttonHover}
                whileTap={{ scale: 0.9 }}
                title={item.name}
              >
                <img
                  src={item.image}
                  alt={`${item.name} icon`}
                  className="w-12 h-12 object-contain"
                />
              </motion.a>
            ))}
          </div>

          {/* Payment Methods */}
          <div className="flex flex-wrap justify-center md:justify-end gap-3 w-full md:w-auto">
            {paymentMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.div
                  key={index}
                  className="w-12 h-8 rounded-md flex items-center justify-center shadow-sm cursor-pointer relative overflow-hidden"
                  whileHover={paymentHover}
                  whileTap={{ scale: 0.95 }}
                  title={
                    method.name.charAt(0).toUpperCase() + method.name.slice(1)
                  }
                >
                  {/* Fallback Icon */}
                  <IconComponent
                    size={18}
                    className="text-gray-600 absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200"
                  />

                  <Image
                    src={method.image}
                    alt={`${
                      method.name.charAt(0).toUpperCase() + method.name.slice(1)
                    } logo`}
                    fill
                    className="absolute inset-0 object-contain opacity-100 transition-opacity duration-200"
                    onError={(e) => {
                      e.currentTarget.style.opacity = "0";
                      if (e.currentTarget.previousSibling) {
                        (
                          e.currentTarget.previousSibling as HTMLElement
                        ).style.opacity = "1";
                      }
                    }}
                  />
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default MainContentSection;
