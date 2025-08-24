import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div>
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-6 py-4 flex justify-between items-center shadow-md"
    >
      <Link to="/" className="text-2xl font-extrabold tracking-wide hover:text-gray-200 transition">
        MyBrand
      </Link>

      <div className="space-x-6 hidden md:flex">
        <Link
          to="/"
          className="hover:text-gray-300 transition border-b-2 border-transparent hover:border-white pb-1"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-gray-300 transition border-b-2 border-transparent hover:border-white pb-1"
        >
          About
        </Link>
        <Link
          to="/products"
          className="hover:text-gray-300 transition border-b-2 border-transparent hover:border-white pb-1"
        >
          Products
        </Link>
        <Link
          to="/services"
          className="hover:text-gray-300 transition border-b-2 border-transparent hover:border-white pb-1"
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="hover:text-gray-300 transition border-b-2 border-transparent hover:border-white pb-1"
        >
          Contact
        </Link>
      </div>
    </motion.nav>
    </div>
  );
}
