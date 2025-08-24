import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <div>
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-b from-blue-50 to-white py-20 px-4"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Got questions? We’re here to help you with all your import-export needs.
          Reach out and our team will get back to you promptly.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <ContactForm />
      </div>
    </motion.main>
    </div>
  );
}
