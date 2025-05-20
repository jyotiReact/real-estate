'use client';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#96694d] text-[#ffffff] py-16 px-6 font-mono">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
        {/* Contact Us */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p className="mb-2">
            <a href="tel:1800013013" className="underline">1800 013 013</a>
          </p>
          <p className="mb-6">
            <a href="mailto:admin@harwoodgroup.au" className="underline">admin@harwoodgroup.au</a>
          </p>
          <div className="flex flex-wrap gap-4 text-sm opacity-80 mb-2">
            <a href='https://harwoodgroup.au/disclaimer/' target='_blank'><span className="underline cursor-pointer">Disclaimer</span></a>
            <span>|</span>
            <a href='https://harwoodgroup.au/terms-conditions/' target='_blank'><span className="underline cursor-pointer">Terms of Use</span></a>
          </div>
          {/* <p className="text-sm opacity-80">Developed & Maintained by  <aIT WAVES</p> */}
        </div>

        {/* Visit Us */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Visit Us</h3>
          <p>7/50 Aitken Street Gisborne VIC 3427</p>
         
          <div className="mt-6">
          <p>Office Hours</p>
            <p>Mon - Fri: 9AM to 5PM</p>
            <p>Sat: 9AM to 1PM</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white mt-12 pt-2" />

      {/* Acknowledgement Message */}
      {/* <div className="max-w-6xl mx-auto mt-6 text-sm leading-relaxed">
        <p className="font-semibold">
          Warragul Crownlea acknowledges the Gunaikurnai & Bunurong People as the traditional custodians of the land on which we are gathered. 
          We pay our respects to their Elders both past and present. We acknowledge that their connection to Country is both ancient and ongoing.
        </p>
      </div> */}
      <p className="text-center text-sm mt-6 font-semibold">
        Developed & Maintained by <a className='underline' href='https://it-waves.com?utm_source=harwood_group' target='_blank'>IT WAVES</a>
      </p> 
    </footer>
  );
};

export default Footer;
