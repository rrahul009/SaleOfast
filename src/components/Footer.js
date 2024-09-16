import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Social media icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Contact Info */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p className="mb-2">D-76 Noida Sec-63</p>
            <p className="mb-2">Noida, UtterPradesh 201301</p>
            <p className="mb-2">Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>

          {/* Social Media Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6">
          <p className="text-sm">&copy; {new Date().getFullYear()} SaleOfast. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
