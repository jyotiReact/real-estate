"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About Us", url: "#about-us" },
    // { label: "Our Work", url: "#our-work" },
    { label: "Location", url: "#location" },
    // { label: "Contact Us", url: "#contact-us" },
    { label: "Deals", url: "#deals" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#201800] border-b border-blue-900 shadow-md z-50 relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold flex items-center gap-2 tracking-wide text-white "
          >
            <div className="w-16 ">
              <img
                src="/images/logo.webp"
                alt="Harwood"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-sm">
              HARWOOD CONSTRUCTION
            </div>
          </motion.div>

          {/* Desktop Nav Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="hidden md:flex items-center space-x-8"
          >
            {navLinks.map(({ label, url }) => (
              <motion.div
                key={label}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={url}
                  className="text-white/80 hover:text-white tracking-wide uppercase text-sm transition"
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Links */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#201800] px-6 pb-6"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map(({ label, url }) => (
                <Link
                  key={label}
                  href={url}
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white tracking-wide uppercase text-sm transition"
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
