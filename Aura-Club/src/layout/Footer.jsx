import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import image from '../assets/footer-image.jpg'; // Replace with actual path

const Footer = () => {
  return (
    <footer className="w-full bg-[#d2a98e] text-black font-serif px-6 md:px-16 py-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold leading-tight">
            THE AURAA <br /> CLUB
          </h1>
          <p className="uppercase tracking-wide text-sm font-semibold">
            A FUSION OF YOUR AURA & YOUR STYLE
          </p>

          <hr className="border-t border-gray-600 my-2 max-w-md" />

          <div className="space-y-3">
            <p className="font-bold">Stay in Touch</p>
            <p className="italic">
              Follow us on Instagram for styling tips, new launches, and exclusive offers!
              <br /> @_theauraaclub_
            </p>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <span role="img" aria-label="mail">📧</span>
            <p className="text-sm">Subscribe for 10% off your first order!</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Image */}
          <img
            src={image}
            alt="Jewelry"
            className="w-[320px] h-[320px] object-cover rounded-[50px] shadow-md"
          />

          {/* Contact Info */}
          <div className="space-y-4">
            <div>
              <p className="uppercase text-sm font-bold">Phone</p>
              <p>8130643324, 9540290564</p>
            </div>
            <div>
              <p className="uppercase text-sm font-bold">Email</p>
              <p>hello@theauraaclub.in</p>
            </div>
            <div>
              <p className="uppercase text-sm font-bold">Socials</p>
              <div className="flex gap-3 mt-2 items-center">
                <FaInstagram className="text-2xl text-[#C13584]" />
                <span>_theauraaclub_</span>
              </div>
              <div className="flex gap-3 mt-2 items-center">
                <FaFacebook className="text-2xl text-[#1877F2]" />
                <span>THE AURAA CLUB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
