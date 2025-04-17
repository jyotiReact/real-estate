'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuickEnquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = () => {
    // e.preventDefault();
    // Add your form submission logic here (e.g., API call)
    alert('Thank you for your enquiry! We will get back to you soon.');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-20">
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Quick Enquiry
        <span className="ml-2">💬</span>
      </motion.button>

      {/* Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="bg-white p-4 rounded-lg shadow-2xl w-80 border border-gray-200"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-blue-900">Quick Enquiry</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-xl focus:outline-none"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-gray-700 text-sm font-medium mb-1">
                  Mobile No
                </label>
                <input
                  type="tel"
                  id="mobile"
                  required
                  className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your mobile number"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="course" className="block text-gray-700 text-sm font-medium mb-1">
                  Select Course
                </label>
                <select
                  id="course"
                  required
                  className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select a course</option>
                  <option value="bank">Bank Coaching</option>
                  <option value="ssc">SSC Coaching</option>
                  <option value="nda">NDA Coaching</option>
                  <option value="tet">TET Coaching</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}