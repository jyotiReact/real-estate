"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const LocationSection = () => {
  const [showBrochureModal, setShowBrochureModal] = useState(false);
  return (
    <section id="location" className="bg-[#EAE1D5] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#201800] mb-4">
            Discover Life at Warragul
          </h2>
          <div className="w-24 h-1 bg-[#6B7231] mx-auto mb-6"></div>
          <p className="text-lg text-[#201800]/80 max-w-3xl mx-auto">
            Warragul Crown is a master-planned estate development nestled among
            lush green hills and distant mountain ranges, offering a peaceful
            and refreshing lifestyle. It features stunning views, ample space
            for families, and a focus on convenience, with excellent food, wine,
            and endless outdoor adventures. The estate is designed to help you
            create your desired home, blending natural beauty with a dynamic way
            of life where abundance is a core element.
          </p>
        </motion.div>

        {/* Luxury Map Container */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Map Image Placeholder */}
          <motion.div
            className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl border-4 border-white"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.8988035924654!2d144.9101972!3d-37.5338827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65318ea8a9e39%3A0x93067080f8af9d5a!2s10%20Callantina%20Rd%2C%20Mickleham%20VIC%203064%2C%20Australia!5e0!3m2!1sen!2sin!4v1745478858175!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#201800]/30" />
            <div className="absolute bottom-6 left-6 bg-white/90 p-4 rounded-lg shadow-lg max-w-xs">
              <h4 className="font-serif text-xl text-[#201800] mb-2">
                6 Sierra Street
              </h4>
              <p className="text-sm text-[#201800]/80">Warragul VIC 3820</p>
            </div>
          </motion.div>

          {/* Location Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-serif  text-[#201800] mb-6">
              Warragul Highlights
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Column 1 */}
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-[#6B7231] p-2 rounded-full mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#201800]">Lifestyle</h4>
                    <ul className="text-sm text-[#201800]/80 list-disc pl-5">
                      <li>Warragul Library</li>
                      <li>Peninsula Cinemas</li>
                      <li>West Gippland Hospital</li>
                      <li>West Gippland Arts Center</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-[#6B7231] p-2 rounded-full mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H5a1 1 0 010-2h12V4H4zm3 2a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#201800]">Food & Drink</h4>
                    <ul className="text-sm text-[#201800]/80 list-disc pl-5">
                      <li>Frankie's</li>
                      <li>Stella's Pantry</li>
                      <li>Main Street Cafe</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-[#6B7231] p-2 rounded-full mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#201800]">Shopping</h4>
                    <ul className="text-sm text-[#201800]/80 list-disc pl-5">
                      <li>Woolworths</li>
                      <li>Target</li>
                      <li>Bunnings</li>
                      <li>Emart</li>
                      <li>Priceline</li>
                      <li>Future SuperMarket</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-[#6B7231] p-2 rounded-full mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#201800]">Parks</h4>
                    <ul className="text-sm text-[#201800]/80 list-disc pl-5">
                      <li>Logan Park</li>
                      <li>Burka Street Park</li>
                      <li>Civic Park</li>
                      <li>Eastern Park</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-[#6B7231] p-2 rounded-full mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#201800]">Transport</h4>
                    <ul className="text-sm text-[#201800]/80 list-disc pl-5">
                      <li>Warragul Station</li>
                      <li>Bus Stops</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-[#6B7231] p-2 rounded-full mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#201800]">Education</h4>
                    <ul className="text-sm text-[#201800]/80 list-disc pl-5">
                      <li>GoodStart Early-Early Learning</li>
                      <li>Future Warragul-primary</li>
                      <li>Warragul Regional College-secondary</li>
                      <li>Community College Gippaland-tertiary</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Lot Details - Luxury Card */}
        <motion.div
          className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-[#E8E1D5] max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row gap-8">
            {/* Address Section */}
            <div className="md:w-1/3 border-r border-[#E8E1D5] pr-6">
              <h3 className="text-2xl font-serif text-[#201800] mb-4">
                Property Address
              </h3>
              <div className="flex items-start gap-3">
                <div className="bg-[#6B7231] p-2 rounded-full">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-lg text-[#201800]">
                    6 Sierra Street
                  </p>
                  <p className="text-[#201800]/80">Warragul VIC 3820</p>
                </div>
              </div>
            </div>

            {/* Lot Details */}
            <div className="md:w-2/3" id="dowloadBrochure">
              <h3 className="text-2xl font-serif text-[#201800] mb-4">
                Lot Details
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-[#6B7231] mb-1">
                    Land Size
                  </h4>
                  <p className="text-lg text-[#201800]">Approx. 600m²</p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-[#6B7231] mb-1">
                    Orientation
                  </h4>
                  <p className="text-lg text-[#201800]">North-facing rear</p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-[#6B7231] mb-1">
                    Zoning
                  </h4>
                  <p className="text-lg text-[#201800]">Residential (GRZ)</p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-[#6B7231] mb-1">
                    Topography
                  </h4>
                  <p className="text-lg text-[#201800]">Gentle slope</p>
                </div>
              </div>
            </div>
          </div>

          {/* Brochure Download */}
          <div className="mt-10 pt-6 border-t border-[#E8E1D5] text-center">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* View Brochure Button */}
              <motion.button
                onClick={() => setShowBrochureModal(true)}
                className="flex-1 max-w-xs mx-auto flex items-center justify-center gap-2 px-6 py-3 bg-white border border-[#6B7231] text-[#6B7231] hover:bg-[#6B7231]/10 transition-colors rounded-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                View Brochure Online
              </motion.button>

              {/* Download Brochure Button */}
              <motion.a
                href="/images/brochures.pdf"
                download
                className="flex-1 max-w-xs mx-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#6B7231] text-white hover:bg-[#201800] transition-colors rounded-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download Brochure
              </motion.a>
            </div>
          </div>

          {/* Brochure Modal */}
          {showBrochureModal && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] flex flex-col"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
              >
                {/* Modal Header */}
                <div className="flex justify-between items-center p-4 border-b border-[#E8E1D5]">
                  <h3 className="text-xl font-serif text-[#201800]">
                    Warragul Estate Brochure
                  </h3>
                  <button
                    onClick={() => setShowBrochureModal(false)}
                    className="p-2 text-[#6B7231] hover:text-[#201800]"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Modal Content - PDF Viewer */}
                <div className="flex-1 overflow-auto">
                  <iframe
                    // src="/brochures.pdf#view=fitH"
                    src="/images/brochures.pdf"
                    className="w-full h-full min-h-[70vh]"
                    frameBorder="0"
                  />
                </div>

                {/* Modal Footer */}
                <div className="p-4 border-t border-[#E8E1D5] flex justify-end">
                  <motion.a
                    href="/images/brochures.pdf"
                    download
                    className="flex items-center gap-2 px-6 py-2 bg-[#6B7231] text-white hover:bg-[#201800] transition-colors rounded-lg"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download Copy
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
