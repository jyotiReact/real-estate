'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const leftSliderData = [
  {
    name: 'Sophia Turner',
    role: 'Luxury Homebuyer',
    quote:
      'Real Estate Co. redefined luxury for me. Their service, attention to detail, and discretion exceeded all expectations.',
  },
  {
    name: 'Liam Anderson',
    role: 'Property Investor',
    quote:
      'An unmatched experience. From the first call to the closing deal, their team made everything seamless and classy.',
  },
  {
    name: 'Emma Patel',
    role: 'Villa Owner',
    quote:
      'They found us our dream home — elegant, private, and exactly what we envisioned. Highly recommend their premium services!',
  },
];

const rightSliderData = [
  {
    name: 'Oliver Green',
    role: 'Developer Client',
    quote:
      'Professionalism at its finest. They helped us close high-value deals effortlessly.',
  },
  {
    name: 'Isabella Khan',
    role: 'Penthouse Buyer',
    quote:
      'From virtual tours to negotiations, their process felt ultra-premium and smooth.',
  },
  {
    name: 'Noah Reyes',
    role: 'Commercial Investor',
    quote:
      'A true partner in luxury real estate. Their discretion and network are unparalleled.',
  },
];

const TestimonialCard = ({ quote, name, role }) => (
  <div className="min-w-[320px] md:min-w-[380px] bg-white/5 border border-white/10 rounded-xl p-6 text-left shadow-xl mr-6">
    <Quote className="w-6 h-6 text-[#201800] mb-3" />
    <p className="text-white/90 italic mb-4">“{quote}”</p>
    <p className="font-semibold text-[#201800]">{name}</p>
    <p className="text-white/60 text-sm">{role}</p>
  </div>
);

const InfiniteSlider = ({ data, direction = 'left', duration = 40 }) => {
  const repeatedData = [...data, ...data]; // duplicate for smooth loop

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex flex-nowrap space-x-6"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {repeatedData.map((testimonial, idx) => (
          <TestimonialCard key={`${direction}-${idx}`} {...testimonial} />
        ))}
      </motion.div>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <section id='testimonial' className="bg-[#6B7231] py-20 px-1 overflow-hidden">
      <div className=" mx-auto text-center">
        <motion.h2
          className="text-5xl font-serif mb-12 text-white"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>

        <InfiniteSlider data={leftSliderData} direction="left" duration={40} />
        <div className="mt-20" />
        <InfiniteSlider data={rightSliderData} direction="right" duration={50} />
      </div>
    </section>
  );
};

export default TestimonialSection;
