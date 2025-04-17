"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutUs = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const propertyImages = [
    {
      src: "/images/openLiving.jpg",
      title: "Open Living Space",
    },
    {
      src: "/images/kitchecn.jpg",
      title: "Modern Kitchen",
    },
    {
      src: "/images/bathroom.jpg",
      title: "Luxurious Bathroom",
    },
    {
      src: "/images/banner.jpg",
      title: "Elegant Lawn",
    },
  ];

  return (
    <section id="about-us" className="bg-[#6B7231] text-white px-6 pb-20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-serif mb-8 text-white"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Who We Are
        </motion.h2>

        <motion.p
          className="text-lg text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          At Real Estate Co., we are a distinguished luxury real estate firm,
          masterfully curating an exquisite portfolio of properties. With over
          three decades of expertise, our elite team of agents delivers bespoke
          services, ensuring every client experiences the pinnacle of
          sophistication and elegance in their property journey.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {[
            {
              title: "Expertise",
              desc: "Over 30 years of refined experience in the luxury market, guiding you with unmatched precision.",
            },
            {
              title: "Exclusivity",
              desc: "Access to a curated selection of elite properties tailored to your luxurious lifestyle.",
            },
            {
              title: "Service",
              desc: "Personalized, world-class support from inception to completion of your dream estate.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-white/5 border border-white/10 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-white/80">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          viewport={{ once: true }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative overflow-hidden rounded-xl shadow-2xl h-[500px]">
            {/* Main Image Display */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              key={activeImage} // This ensures animation when image changes
            >
              <Image
                src={propertyImages[activeImage].src}
                alt={propertyImages[activeImage].title}
                fill
                className="object-cover"
                priority={activeImage === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6B7231]/90 via-[#6B7231]/40 to-transparent" />

              {/* Hover Overlay */}
              {isHovered && (
                <>
                  <motion.div
                    className="absolute inset-0 z-10 bg-gradient-to-t from-[#6B7231]/90 via-[#6B7231]/40 to-transparent backdrop-blur-[2px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                    <motion.h3
                      className="text-3xl md:text-4xl font-serif text-white mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      {propertyImages[activeImage].title}
                    </motion.h3>
                    <motion.button
                      className="flex items-center gap-2 px-6 py-3 w-fit mx-auto bg-[#201800] border border-white/40  text-white hover:bg-white/10 transition-all rounded-lg "
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      Discover Our Legacy
                    </motion.button>
                  </div>
                </>
              )}
            </motion.div>

            {/* Thumbnail Navigation */}
            <div className="absolute bottom-0 left-0 right-0 z-30 p-6 flex justify-center gap-4">
              {propertyImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative w-20 h-16 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
                    activeImage === idx
                      ? "border-white scale-110"
                      : "border-white/30 hover:border-white/60"
                  }`}
                  onClick={() => {
                    setActiveImage(idx);
                    setIsHovered(true);
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover"
                  />
                  <div
                    className={`absolute inset-0 transition-all duration-300 ${
                      activeImage === idx
                        ? "bg-white/10"
                        : "bg-black/40 hover:bg-black/20"
                    }`}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-white/20 rounded-tl-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-white/20 rounded-br-xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
