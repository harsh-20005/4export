import React from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div>
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 py-20 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Welcome to <span className="font-semibold text-gray-800">[Your Company]</span> — your trusted partner in global trade. We specialize in delivering high-quality goods worldwide with a strong commitment to reliability, transparency, and excellence. Our experienced team ensures smooth logistics, competitive pricing, and exceptional service to help your business thrive across borders.
        </p>
      </div>
    </motion.main>
    </div>
  );
}



// <img 
//   src="/about-team.jpg" 
//   alt="Our Team" 
//   className="mt-10 rounded-xl shadow-lg mx-auto"
// />
