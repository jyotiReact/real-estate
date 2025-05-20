"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const accordionData = [
  {
    title: "Timeless Architecture",
    content:
      "Experience structures that blend classical beauty with modern sophistication, standing as icons of elegance.",
    image: "/images/openLiving.jpg",
  },
  {
    title: "Bespoke Interiors",
    content:
      "Every inch crafted to reflect luxury — from marble finishes to custom furnishings tailored to your taste.",
    image: "/images/kitchecn.jpg",
  },
  {
    title: "Serene Sanctuaries",
    content:
      "Retreat into bathrooms and bedrooms designed to relax, rejuvenate, and revive the senses.",
    image: "/images/bathroom.jpg",
  },
  {
    title: "Bespoke Interiors",
    content:
      "Every inch crafted to reflect luxury — from marble finishes to custom furnishings tailored to your taste.",
    image: "/images/kitchecn.jpg",
  },
  {
    title: "Serene Sanctuaries",
    content:
      "Retreat into bathrooms and bedrooms designed to relax, rejuvenate, and revive the senses.",
    image: "/images/bathroom.jpg",
  },
];

const OurServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section id="our-services" className="bg-[#EAE1D5] text-[#0B1F3A] py-20 px-6 h-[800px]">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-[#201800] mb-4">
          Services That Define Distinction
        </h2>
        <p className="text-[#0B1F3A]/70 text-lg md:text-xl max-w-2xl mx-auto">
          We don’t just sell properties — we craft experiences. Explore services
          built for those who demand the exceptional.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl ">
          <AnimatePresence mode="wait">
            <motion.div
              key={
                hoveredIndex !== null
                  ? accordionData[hoveredIndex].image
                  : "default"
              }
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 "
            >
              <Image
                src={
                  hoveredIndex !== null
                    ? accordionData[hoveredIndex].image
                    : accordionData[0].image
                }
                alt={
                  hoveredIndex !== null
                    ? accordionData[hoveredIndex].title
                    : accordionData[0].title
                }
                fill
                className="object-cover "
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Accordion */}
        <div className="space-y-4">
          {accordionData.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              className="border border-[#ccc] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg text-white"
            >
              <motion.div
                className="px-6 py-4 bg-[#201800] font-semibold text-xl cursor-pointer flex justify-between items-center"
                // whileHover={{ backgroundColor: "#f0f0f0" }}
              >
                {item.title}
                <motion.span
                  animate={{
                    rotate: hoveredIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-lg"
                >
                  ↓
                </motion.span>
              </motion.div>

              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    key={`content-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { duration: 0.4, ease: "easeInOut" },
                        opacity: { duration: 0.2, delay: 0.1 },
                      },

                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3, ease: "easeInOut" },
                        opacity: { duration: 0.15 },
                      },
                    }}
                    className="px-6 overflow-hidden bg-white text-black"
                  >
                    <div className="pb-4 pt-2 text-sm">{item.content}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
