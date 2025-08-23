import React from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";

import p4 from "../assets/p4.jpg";
import p13 from "../assets/p13.jpg";
import p9 from "../assets/p9.jpg";

// Product Data
const products = [
  {
    id: 1,
    name: "Product 1",
    description: "High-quality product 1 for global markets.",
    image: p4,
  },
  {
    id: 2,
    name: "Product 2",
    description: "Reliable and certified product 2.",
    image: p13,
  },
  {
    id: 3,
    name: "Product 3",
    description: "Tailored product 3 for your needs.",
    image: p9,
  },
];

export default function ProductsPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 py-20 px-4 text-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-gray-800">
          Our Products
        </h1>
        <p className="text-lg text-gray-600 text-center mb-14 max-w-3xl mx-auto">
          Discover our diverse range of high-quality products ready for export to any market worldwide.
          Reliable, certified, and tailored to your needs.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </motion.main>
  );
}
