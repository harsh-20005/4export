import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>

        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition"
            aria-label="Facebook"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition"
            aria-label="Instagram"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition"
            aria-label="Twitter"
          >
            <FaTwitter size={18} />
          </a>
        </div>
      </div>
    </motion.footer>
    </div>
  );
}
