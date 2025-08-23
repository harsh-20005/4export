import React from "react";
import { motion } from "framer-motion";

export default function ProductCard({ image, name, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{name}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
        <button className="mt-4 px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-300 ease-in-out">
          View Details
        </button>
      </div>
    </motion.div>
  );
}
