import React from "react";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <div>
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 py-20 px-4 text-gray-900"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-4">
          Our Services
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We provide end-to-end solutions to ensure your import-export business runs smoothly,
          reliably, and with the highest standards of quality.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <li className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <span className="text-5xl mb-4">✅</span>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Quality Inspection
            </h2>
            <p className="text-gray-600">
              Thorough checks to ensure products meet international standards.
            </p>
          </li>

          <li className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <span className="text-5xl mb-4">📦</span>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Custom Packaging
            </h2>
            <p className="text-gray-600">
              Tailored packaging solutions for safe and efficient shipping.
            </p>
          </li>

          <li className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <span className="text-5xl mb-4">🚢</span>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Freight & Shipping
            </h2>
            <p className="text-gray-600">
              End-to-end logistics management for timely global deliveries.
            </p>
          </li>

          <li className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <span className="text-5xl mb-4">📄</span>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Documentation & Compliance
            </h2>
            <p className="text-gray-600">
              Hassle-free export-import paperwork handled by experts.
            </p>
          </li>
        </ul>
      </div>
    </motion.main>
    </div>
  );
}
