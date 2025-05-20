'use client';
import React from 'react';
import { motion } from 'framer-motion';

const GetInTouch = () => {
  return (
    <section id='contact-us' className="relative bg-[#0B1F3A] py-24 px-6 text-white">
      {/* Parallax Background Image */}
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/images/lawn.jpg')" }}></div>
      
      {/* Overlay on the background image */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div className="max-w-4xl mx-auto text-center relative z-20">
        <motion.h2
          className="text-5xl font-mono text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="text-lg mb-12 max-w-2xl mx-auto font-light opacity-80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Let's start a conversation. Whether you're buying, selling, or just curious — we're here to guide you through your luxury property journey with care and expertise.
        </motion.p>

        <motion.form
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col">
            <label className="text-white text-xl font-semibold mb-2">Full Name</label>
            <input
              type="text"
              className="border-2 border-white rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
              placeholder="Enter your full name"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white text-xl font-semibold mb-2">Email Address</label>
            <input
              type="email"
              className="border-2 border-white rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
              placeholder="Enter your email"
            />
          </div>

          <div className="md:col-span-2 flex flex-col">
            <label className="text-white text-xl font-semibold mb-2">Message</label>
            <textarea
              rows={5}
              className="border-2 border-white rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
              placeholder="Type your message here..."
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-[#201800] text-white px-10 py-4 rounded-lg  transition-all font-semibold shadow-lg transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default GetInTouch;
