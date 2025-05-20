"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const PropertyDetails = () => {
  const [activeTab, setActiveTab] = useState("details");
  const [currentRender, setCurrentRender] = useState(0);

  // Property details data
  const property = {
    price: "$980,000",
    roi: "8%",
    bedrooms: 4,
    bathrooms: 3,
    garage: 2,
    address: "6 Sierra Street, Warragul VIC 3820",
  };

  // Sample renders for the slideshow
  const renders = [
    "/images/bedroom.jpg",
    "/images/bathroom.jpg",
    "/images/lawn.jpg",
    "/images/openLiving.jpg",
  ];

  // Rotate renders automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRender((prev) => (prev + 1) % renders.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [renders.length]);

  return (
    <section id="deals" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-mono text-[#201800] mb-4">
            Property Details
          </h2>
          <div className="w-24 h-1 bg-[#6B7231] mx-auto mb-6"></div>
          <p className="text-lg text-[#201800]/80 max-w-3xl mx-auto">
            Discover this exquisite {property.bedrooms}-bedroom residence in the
            heart of Warragul
          </p>
        </motion.div>

        {/* Price & ROI Badge */}
        <div className="flex flex-col md:flex-row  justify-center w-full items-center gap-6 mb-12">
          <motion.div
            className="bg-[#96694d] text-white px-8 py-4 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-wider">Price</p>
            <p className="text-3xl font-bold">{property.price}</p>
          </motion.div>

          <motion.div
            className="bg-[#cdb1a1] text-[#201800] px-8 py-4 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-wider">
              Projected Annual Return
            </p>
            <p className="text-3xl font-bold">{property.roi}*</p>
          </motion.div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-[#96694d]">
          {["details", "floorplan", "siteplan", "renders"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 capitalize font-medium transition-colors ${
                activeTab === tab
                  ? "text-[#96694d] border-b-2 border-[#96694d]"
                  : "text-[#96694d]/70 hover:text-[#96694d]"
              }`}
            >
              {tab === "siteplan" ? "Site Plan" : tab === "floorplan" ? "Floor Plan" :  tab === "renders" ? "Gallery" : tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          {/* Details Tab */}
          {activeTab === "details" && (
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-mono text-[#201800]">
                  About the Property
                </h3>
                <p className="text-[#201800]/80 leading-relaxed">
                  This stunning {property.bedrooms}-bedroom,{" "}
                  {property.bathrooms}-bathroom residence with a{" "}
                  {property.garage}-car garage offers luxurious living in one of
                  Warragul's most sought-after locations. Designed with
                  meticulous attention to detail, the property features premium
                  finishes throughout.
                </p>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-[#F8F5EF] p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-[#96694d]">
                      {property.bedrooms}
                    </p>
                    <p className="text-sm uppercase tracking-wider text-[#201800]/80">
                      Bedrooms
                    </p>
                  </div>
                  <div className="bg-[#F8F5EF] p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-[#96694d]">
                      {property.bathrooms}
                    </p>
                    <p className="text-sm uppercase tracking-wider text-[#201800]/80">
                      Bathrooms
                    </p>
                  </div>
                  <div className="bg-[#F8F5EF] p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-[#96694d]">
                      {property.garage}
                    </p>
                    <p className="text-sm uppercase tracking-wider text-[#201800]/80">
                      Garage
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-mono text-2xl text-[#201800]">
                    Features
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[#201800]/80">
                    <li className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-[#96694d]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Open-plan living areas
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-[#96694d]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Chef's kitchen with premium appliances
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-[#96694d]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Master suite with walk-in robe
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-[#96694d]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Energy-efficient design
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-[#96694d]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Landscaped gardens
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-[#96694d]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Smart home technology
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/banner.jpg"
                  alt="Property exterior"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#201800]/60 to-transparent" />
              </div>
            </motion.div>
          )}

          {/* Floorplan Tab */}
          {activeTab === "floorplan" && (
            <motion.div
              className="bg-[#F8F5EF] p-8 rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-mono text-[#201800] mb-6">
                Floor Plan
              </h3>
              <div className="relative h-[600px] rounded-lg overflow-hidden border border-[#E8E1D5]">
                <Image
                  src="/images/floorplan.jpg"
                  alt="Property floorplan"
                  fill
                  className="object-contain p-6"
                />
                <div className="absolute bottom-4 right-4 bg-white/90 px-4 py-2 rounded-lg shadow-sm">
                  <p className="text-sm text-[#201800]"></p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Site Plan Tab */}
          {activeTab === "siteplan" && (
            <motion.div
              className="bg-[#F8F5EF] p-8 rounded-xl "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-mono text-[#201800] mb-6">
                Site Plan
              </h3>
              <div className="relative h-[600px] rounded-lg overflow-hidden border border-[#E8E1D5]">
                <Image
                  src="/images/siteplan.png"
                  alt="Property Site Plan"
                  fill
                  className="object-contain p-6"
                />
                <div className="absolute bottom-4 right-4 bg-white/90 px-4 py-2 rounded-lg shadow-sm">
                  <p className="text-sm text-[#201800]">Site Plan</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Renders Tab */}
          {activeTab === "renders" && (
            <motion.div
              className="relative h-[600px] rounded-xl overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Main Render Display */}
              {renders.map((render, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: index === currentRender ? 1 : 0,
                    transition: { duration: 1 },
                  }}
                >
                  <Image
                    src={render}
                    alt={`Property render ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#201800]/60 to-transparent" />
                </motion.div>
              ))}

              {/* Render Navigation Dots */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
                {renders.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentRender(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentRender ? "bg-white w-6" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>

              {/* Render Caption */}
              <div className="absolute bottom-6 left-6 bg-white/90 px-4 py-2 rounded-lg shadow-sm max-w-xs">
                <p className="text-sm text-[#201800]">
                  Artist's impression - subject to final design
                </p>
              </div>
            </motion.div>
          )}
        </div>

      
      </div>
    </section>
  );
};

export default PropertyDetails;
