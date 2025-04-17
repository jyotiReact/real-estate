"use client";
import { motion, useAnimation } from "framer-motion";

export default function TopHeader() {
  const controls = useAnimation();
  return (
    <motion.div
      animate={controls}
      initial={{ y: 0 }}
      className="w-full bg-slateblue text-white py-4 px-6 shadow-md z-50 transition-all duration-500"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">YourBrand</h1>
        <div className="space-x-6 hidden md:flex">
          <a className="hover:text-coral transition-colors">Search</a>
          <a className="hover:text-coral transition-colors">Properties</a>
          <a className="hover:text-coral transition-colors">Agents</a>
          <a className="hover:text-coral transition-colors">Stories</a>
        </div>
        <button className="border border-coral text-coral px-4 py-1 rounded hover:bg-coral hover:text-white transition">
          Sell With Us
        </button>
      </div>
    </motion.div>
  );
}
