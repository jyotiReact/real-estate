'use client';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#201800] text-[#ffffff] py-16 px-6 font-serif">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
        {/* Contact Us */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p className="mb-2">03 9684 8183</p>
          <p className="mb-6">warragulcrownlea@oliverhume.com.au</p>
          <div className="flex flex-wrap gap-4 text-sm opacity-80 mb-2">
            <span className="underline cursor-pointer">Privacy Policy</span>
            <span>|</span>
            <span className="underline cursor-pointer">Terms of Use</span>
          </div>
          <p className="text-sm opacity-80">Site by Ivy Street</p>
        </div>

        {/* Visit Us */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Visit Us</h3>
          <p>20 Murdie Road</p>
          <p>Warragul, VIC 3820</p>
          <div className="mt-6">
            <p>Sales Office Open 7 Days</p>
            <p>11am – 5pm</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white mt-12 pt-6" />

      {/* Acknowledgement Message */}
      <div className="max-w-6xl mx-auto mt-6 text-sm leading-relaxed">
        <p className="font-semibold">
          Warragul Crownlea acknowledges the Gunaikurnai & Bunurong People as the traditional custodians of the land on which we are gathered. 
          We pay our respects to their Elders both past and present. We acknowledge that their connection to Country is both ancient and ongoing.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
