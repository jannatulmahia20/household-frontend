import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Household Service</h2>
          <p>Your comfort is our priority. Professional services you can trust.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="/book" className="hover:text-white">Book Now</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p className="flex items-center mb-2"><FaPhone className="mr-2" /> +880 1234-567890</p>
          <p className="flex items-center mb-4"><FaEnvelope className="mr-2" /> support@household.com</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Household Service. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
