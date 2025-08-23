import React from "react";
import { motion } from "framer-motion";

export default function TestimonialsSlider() {
  return (
    <div>
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 py-16 px-4"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-gray-800">
        What Our Clients Say
      </h2>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg text-center">
        <p className="text-lg text-gray-700 italic mb-4">
          "Excellent service, top-notch products, and timely delivery! Highly
          recommended for global trade needs."
        </p>
        <p className="text-gray-600 font-semibold">— John Doe, Importer</p>
      </div>
    </motion.section>
    </div>
  );
}

