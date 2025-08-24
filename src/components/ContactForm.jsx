import React from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <div>
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg flex flex-col space-y-4"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
        Get in Touch
      </h2>

      <input
        type="text"
        placeholder="Name"
        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-600 transition"
      />

      <input
        type="email"
        placeholder="Email"
        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-600 transition"
      />

      <input
        type="tel"
        placeholder="Phone"
        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-600 transition"
      />

      <textarea
        placeholder="Message"
        rows="5"
        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-600 transition resize-none"
      ></textarea>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition shadow-md hover:shadow-lg"
      >
        Send Message
      </button>
    </motion.form>
    </div>
  );
}
