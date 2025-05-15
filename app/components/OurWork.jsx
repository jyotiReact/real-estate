'use client';
import React from 'react';
import { motion } from 'framer-motion';

const works = [
  {
    title: 'Modern Villa',
    desc: 'A sleek blend of comfort and style.',
    image: '/images/bedroom.jpg',
  },
  {
    title: 'Beachfront Mansion',
    desc: 'Breathtaking views & elegant interiors.',
    image: '/images/bathroom.jpg',
  },
  {
    title: 'Penthouse Suite',
    desc: 'Luxury living at the highest level.',
    image: '/images/bathroom.jpg',
  },
  // Add more objects as needed
];

const OurWorks = () => {
  return (
    <section id='our-work' className="bg-[#96694d] py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <motion.h2
          className="text-5xl font-serif font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Our Works
        </motion.h2>
        <p className="text-lg opacity-70">
          Explore a selection of our most prestigious and elegant real estate masterpieces.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((work, idx) => (
          <div key={idx} className="relative group overflow-hidden rounded-xl shadow-lg">
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition duration-500 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100">
              <h3 className="text-2xl font-semibold mb-2">{work.title}</h3>
              <p className="text-sm opacity-80 max-w-xs">{work.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWorks;
