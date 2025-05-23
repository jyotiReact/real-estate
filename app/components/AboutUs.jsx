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
      title: "Custom New Home",
    },
    // {
    //   src: "/images/kitchecn.jpg",
    //   title: "Renovated Kitchen",
    // },
    // {
    //   src: "/images/bathroom.jpg",
    //   title: "Heritage Restoration",
    // },
    // {
    //   src: "/images/banner.jpg",
    //   title: "Commercial Project",
    // },
  ];

  return (
    <section id="about-us" className="bg-[#96694d] text-white px-6 pb-20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-mono mb-8 text-white"
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
          At Harwood Constructions, we turn your dream home into a reality with
          trust, expertise, and a commitment to excellence. Our professional
          team focuses on clear communication and building long-lasting
          relationships, ensuring a seamless and successful experience every
          step of the way. Choose us as your partner, and together, we'll exceed
          expectations and create a home you’ll love.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {[
            {
              title: "Your Trusted Partner",
              desc: "Choose Harwood Constructions as your trusted, results-driven partner. We simplify the build process, delivering exceptional results that align with your vision while ensuring your success every step of the way.",
            },
            {
              title: "Personalized Support",
              desc: "We truly care for our customers. Our dedicated team goes above and beyond, providing personalized support to exceed expectations and ensure your satisfaction. Your success is our success.",
            },
            {
              title: "Building Lasting Relationships",
              desc: "Our commitment to excellence and clear communication fosters lasting partnerships. We work together to create a seamless, satisfying construction experience that builds trust and shared success.",
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
          className="max-w-4xl mx-auto bg-white/5 border border-white/10 p-8 rounded-xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Why Choose Harwood Constructions?
          </h3>
          <ul className="grid md:grid-cols-2 gap-4 text-left text-white/80">
            <li className="flex items-start gap-3">
              <svg
                className="w-5 h-5 mt-1 text-[#E8C050] flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Homes designed to grow with you — not outgrow you</span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                className="w-5 h-5 mt-1 text-[#E8C050] flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                Trusted, results-driven approach to bring your vision to life
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                className="w-5 h-5 mt-1 text-[#E8C050] flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Personalised support from a team that truly cares</span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                className="w-5 h-5 mt-1 text-[#E8C050] flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Strong relationships built on trust and integrity</span>
            </li>
          </ul>
        </motion.div>

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
              key={activeImage}
            >
              <Image
                src={propertyImages[activeImage].src}
                alt={propertyImages[activeImage].title}
                fill
                className="object-cover"
                priority={activeImage === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#cdb1a1]/90 via-[#cdb1a1]/20 to-transparent" />

              {/* Hover Overlay */}
              {/* {isHovered && ( */}
                <>
                  <motion.div
                    className="absolute inset-0 z-10 bg-gradient-to-t from-[#cdb1a1]/80 via-[#cdb1a1]/10 to-transparent "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                    <motion.h3
                      className="text-3xl  md:text-4xl font-mono text-white mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      {propertyImages[activeImage].title}
                    </motion.h3>
                    <motion.p className="text-white font-bold mb-6 max-w-md">
                      {activeImage === 0 &&
                        "Tailored to your lifestyle with premium finishes"}
                      {activeImage === 1 &&
                        "Modern functionality meets timeless design"}
                      {activeImage === 2 &&
                        "Preserving history with contemporary comforts"}
                      {activeImage === 3 &&
                        "Professional spaces built for business success"}
                    </motion.p>
                    <motion.button
                      className="flex items-center gap-2 px-6 py-3 w-fit mx-auto bg-[#96694d] border  text-white hover:[#96694d]/80 transition-all rounded-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => window.open("https://www.realestate.com.au/home-builders/harwood-constructions-ERMGCM", "_blank")}
                    >
                      Explore Our Projects
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </motion.button>
                  </div>
                </>
              {/* )} */}
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
