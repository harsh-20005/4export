import React from "react";
import { motion } from "framer-motion";
import HeroBanner from "../components/HeroBanner";
import ProductCard from "../components/ProductCard";
import TestimonialsSlider from "../components/TestimonialsSlider";
import ContactForm from "../components/ContactForm";

import p12 from "../assets/p12.jpg";
import p10 from "../assets/p10.jpg";
import p11 from "../assets/p11.jpg";

export default function HomePage() {
  return (
    <div>
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-white text-gray-900"
    >
      <HeroBanner
        title="Your Trusted Partner in Global Trade"
        subtitle="Quality Products Delivered Worldwide"
      />

      <section className="py-20 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10">
          Featured Products
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {/* Example ProductCards */}
          <ProductCard
            image={p12}
            name="Featured Product 1"
            description="High-quality featured product 1."
          />
          <ProductCard
            image={p10}
            name="Featured Product 2"
            description="Reliable and certified featured product 2."
          />
          <ProductCard
            image={p11}
            name="Featured Product 3"
            description="Tailored featured product 3 for your needs."
          />
        </div>
      </section>

      <section className="py-20">
        <TestimonialsSlider />
      </section>

      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600">
            Let’s talk about your next big trade opportunity. We’re ready to help.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </motion.main>
    </div>
  );
}
