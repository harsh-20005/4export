import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import your images
import p1 from "../assets/p1.jpg";
import p12 from "../assets/p12.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";

export default function HeroBanner({ title, subtitle }) {
  const images = [p1, p12, p3, p4, p5, p6];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-600 to-blue-800 py-28 px-4 text-center text-white flex flex-col justify-center items-center relative overflow-hidden"
      >
        <div className="w-full max-w-4xl h-64 md:h-96 mb-6 relative rounded-lg shadow-lg overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={images[currentIndex]}
              src={images[currentIndex]}
              alt={`Slide ${currentIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute w-full h-full object-cover rounded-lg"
            />
          </AnimatePresence>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto opacity-90">
          {subtitle}
        </p>
      </motion.section>
    </div>
  );
}
