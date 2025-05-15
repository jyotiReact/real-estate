"use client";
import { motion } from "framer-motion";
import AboutUs from "../components/AboutUs";
import TestimonialSection from "../components/Testimonial";
import GetInTouch from "../components/ContactUs";
import Footer from "../components/Footer";
import OurWorks from "../components/OurWork";
import Navbar from "../components/Navbar";
import FloorPlan from "../components/FloorPlan";
import LocationDetails from "../components/Location";
import PropertyDealSection from "../components/Deals";

export default function Home() {
  const scrollToBrochure = () => {
    const brochureElement = document.getElementById("dowloadBrochure");
    if (brochureElement) {
      brochureElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#96694d] text-white font-roboto">
      <main className="relative overflow-hidden">
        <Navbar />

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute h-[600px] w-full"
        >
          <div className="h-full w-full relative">
            <img
              src="/images/banner.jpg"
              alt="Luxury Real Estate"
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#cdb1a1]/80 via-[#cdb1a1]/10 to-transparent" />

            {/* Decorative elements */}
            {/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div className="absolute top-1/4 left-10 w-16 h-16 border-2 border-white/30 rounded-full"></div>
              <div className="absolute bottom-1/3 right-20 w-24 h-24 border-2 border-white/20 rounded-full"></div>
              <div className="absolute top-1/3 right-1/4 w-8 h-8 border border-white/40 rounded-full"></div>
            </div> */}
          </div>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-6 py-40"
        >
          <div className="text-center">
            <div className="overflow-hidden">
              <div className="w-50 h-20 object-cover absolute top-2 left-1/2 transform -translate-x-1/2">
                {/* <img
                  src="/images/Warragul-Logo.svg"
                  alt="Luxury Real Estate"
                  className="w-full h-full object-contain brightness-125"
                /> */}
                <img
                src="/images/logo.webp"
                alt="Harwood"
                className="w-full h-full mt-4 object-contain"
              />
              </div>
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight font-roboto"
              >
                <span className="block font-roboto">Find Your Place</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 p-2 ">
                  of Elegance
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="max-w-2xl mx-auto text-white/90 text-lg mb-12 font-medium font-roboto tracking-wide"
            >
              Discover exceptional properties that match your distinguished
              lifestyle
            </motion.p>

            {/* Search Bar */}
            <motion.div
              whileHover={{ y: -2 }}
              className="max-w-2xl mx-auto relative mb-16"
            ></motion.div>
            {/* Brochure Download */}
            <motion.button
              onClick={scrollToBrochure}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 w-fit mx-auto bg-[#96694d] border border-white/40 text-white hover:bg-[#96694d]/70 transition-all rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Brochure
            </motion.button>

          </div>
        </motion.div>

        {/* Scrolling text for luxury feel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 1 }}
          className="absolute bottom-20 left-0 w-full overflow-hidden z-10"
        >
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="whitespace-nowrap text-white/90 text-2xl font-roboto tracking-widest"
          >
            LUXURY · ELEGANCE · PRESTIGE · EXCLUSIVE · REFINEMENT ·
            SOPHISTICATION · LUXURY · ELEGANCE · PRESTIGE · EXCLUSIVE ·
            REFINEMENT · SOPHISTICATION ·
          </motion.div>
        </motion.div>
      </main>

      <AboutUs />
      {/* <ServicesSection /> */}
      <LocationDetails />
      <FloorPlan />
      <PropertyDealSection />
      {/* <OurWorks /> */}
      {/* <TestimonialSection /> */}
      {/* <GetInTouch /> */}
      <Footer />
    </div>
  );
}
