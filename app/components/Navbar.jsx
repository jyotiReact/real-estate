import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const navLinks = [
    { label: "About Us", url: "#about-us" },
    { label: "Services", url: "#our-services" },
    { label: "Our Work", url: "#our-work" },
    { label: "Contact Us", url: "#contact-us" },
  ];
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#201800] border-b border-blue-900 shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold tracking-wide text-white"
          >
            HARWOOD GROUP
          </motion.div>

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
        </div>
      </div>
    </motion.nav>
  );
}
