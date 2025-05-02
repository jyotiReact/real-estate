"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const PlanSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#EAE1D5] to-[#6B7231] py-20 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold-500 rounded-full mix-blend-overlay"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-gold-500 rounded-full mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Image with elegant frame */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-2xl group"
        >
          <div className="absolute inset-0 border-4 border-[#EAE1D5] opacity-80 rounded-xl pointer-events-none z-10"></div>
          <div className="absolute inset-4 border border-[#c9b79c] rounded-md pointer-events-none z-10"></div>
          
          <Image
            src="/images/floorPlan.png"
            alt="Luxury Property Floor Plan"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[#FAF8F3]"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
            <span className="text-[#201800]">Exquisite</span> Architectural Masterpiece
          </h2>
          <p className="text-[#EAE1D5]/90 text-lg mb-12 max-w-lg leading-relaxed">
            Discover the epitome of refined living with our meticulously designed residence, where every detail reflects unparalleled craftsmanship.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Home Area Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-[#201800]/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#EAE1D5]/20 hover:border-[#EAE1D5]/50 transition-all duration-300"
            >
              <div className="flex items-center mb-5 pb-3 border-b border-[#EAE1D5]/30">
                <div className="w-3 h-3 bg-[#EAE1D5] rounded-full mr-3"></div>
                <h3 className="text-xl font-serif font-semibold text-[#EAE1D5]">
                  Property Dimensions
                </h3>
              </div>
              <ul className="space-y-4 text-[#FAF8F3]">
                {[
                  { label: "Total area", value: "512m²" },
                  { label: "House area", value: "279.11m²" },
                  { label: "Garage", value: "36.02m²" },
                  { label: "Outdoor room", value: "17.45m²" },
                  { label: "Portico", value: "6.65m²" },
                ].map((item, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span className="text-[#EAE1D5]/90">{item.label}</span>
                    <span className="font-medium text-[#EAE1D5]">{item.value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Ground Floor Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-[#201800]/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#EAE1D5]/20 hover:border-[#EAE1D5]/50 transition-all duration-300"
            >
              <div className="flex items-center mb-5 pb-3 border-b border-[#EAE1D5]/30">
                <div className="w-3 h-3 bg-[#EAE1D5] rounded-full mr-3"></div>
                <h3 className="text-xl font-serif font-semibold text-[#EAE1D5]">
                  Floor Plan Details
                </h3>
              </div>
              <ul className="space-y-4 text-[#FAF8F3]">
                {[
                  { label: "Double garage", value: "5.5 × 6.00m" },
                  { label: "Outdoor Room", value: "3.36 × 3.60m" },
                  { label: "Family room", value: "4.91 × 3.61m" },
                  { label: "Leisure area", value: "3.84 × 4.54m" },
                  { label: "Dining hall", value: "2.93 × 4.27m" },
                  { label: "Study", value: "3.29 × 4.13m" },
                  { label: "Master suite", value: "4.97 × 4.41m" },
                ].map((item, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span className="text-[#EAE1D5]/90">{item.label}</span>
                    <span className="font-medium text-[#EAE1D5]">{item.value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.a
            href="/images/map.pdf"
            download
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center bg-[#201800] text-[#ffffff] px-10 py-5 rounded-lg font-serif font-semibold  transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Download Exclusive Floor Plan</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default PlanSection;