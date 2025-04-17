'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';

export default function AboutUs() {
  return (
    <div className="bg-blue-50 min-h-screen ">
      <Head>
        <title>About Us - Chanakya Coaching Centre</title>
        <meta name="description" content="Learn about Chanakya Coaching Centre, a leading institute for competitive exam preparation." />
      </Head>

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-28 text-center border-t">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg md:text-xl"
        >
          Empowering Dreams, Shaping Leaders
        </motion.p>
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold text-gray-800">Our Story</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-2"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-10"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-medium text-blue-800 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              At Chanakya Coaching Centre, our mission is to provide top-tier education and guidance to aspirants of competitive exams. We strive to build a strong foundation of knowledge and skills, fostering leadership and success.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-medium text-blue-800 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be the most trusted institute in India, shaping future leaders through innovative teaching methods and unwavering support, ensuring every student achieves their dreams.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <h2 className="text-3xl font-semibold text-gray-800">Why Choose Us?</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-2"></div>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {['Expert Faculty', 'Proven Results', 'Personalized Guidance'].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h4 className="text-lg font-medium text-blue-700">{item}</h4>
                <p className="text-gray-600 mt-2">We offer the best in class education with experienced mentors and a track record of success.</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

    
    </div>
  );
}