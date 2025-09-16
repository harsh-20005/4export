// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // Import your images
// import p1 from "../assets/p1.jpg";
// import p12 from "../assets/p12.jpg";
// import p3 from "../assets/p3.jpg";
// import p4 from "../assets/p4.jpg";
// import p5 from "../assets/p5.jpg";
// import p6 from "../assets/p6.jpg";
// import p7 from "../assets/bannenr.png";
// import p8 from "../assets/onionx.png";

// export default function HeroBanner({ title, subtitle }) {
//   const images = [p7,p6,p8];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(
//       () => setCurrentIndex((prev) => (prev + 1) % images.length),
//       4000
//     );
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full h-[90vh] overflow-hidden">
//       {/* Slideshow (background layer) */}
//       <div className="absolute inset-0 w-full h-full z-0">
//         <AnimatePresence mode="wait">
//           <motion.img
//             key={images[currentIndex]}
//             src={images[currentIndex]}
//             alt={`Slide ${currentIndex}`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1 }}
//             className="absolute inset-0 w-full h-full object-cover"
//           />
//         </AnimatePresence>
//       </div>

//       {/* Text content (left side over banner) */}
//       <div className="relative z-20 flex flex-col justify-center h-full px-10 md:px-20 text-white max-w-2xl">
//         <motion.h2
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg"
//         >
//           Wide Range Supplier of Spices
//         </motion.h2>

//         <motion.h1
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.2, duration: 0.7 }}
//           className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
//         >
//           {title || "Welcome to 4Spact"}
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.4, duration: 0.7 }}
//           className="text-lg md:text-2xl opacity-95 drop-shadow-md"
//         >
//           {subtitle || "Your trusted partner in global import-export solutions."}
//         </motion.p>

//         {/* CTA Button */}
//         <motion.a
//           href="#contact"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6, duration: 0.6 }}
//           className="mt-5 inline-block px-5 py-2 bg-white text-green-700 font-semibold rounded-full shadow-lg hover:bg-green-100 transition"
//         >
//           Get Started
//         </motion.a>
//       </div>
//     </section>
//   );
// }







// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // Import your images
// import p6 from "../assets/p6.jpg";
// import p7 from "../assets/bannenr.png";
// import p8 from "../assets/onionx.png";

// export default function HeroBanner() {
//   // Array of slides with image + text
//   const slides = [
//     {
//       image: p7,
//       title: "Wide Range Supplier of Spices",
//       subtitle: "Your trusted partner in global import-export solutions.",
//     },
//     {
//       image: p6,
//       title: "Manufacturer & Exporter",
//       subtitle: "Specialized in Dehydrated Onion & Garlic",
//     },
//     {
//       image: p8,
//       title: "Delivering Quality Products",
//       subtitle: "Supplying around the world with excellence.",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto slideshow
//   useEffect(() => {
//     const interval = setInterval(
//       () => setCurrentIndex((prev) => (prev + 1) % slides.length),
//       4000 // change every 4s
//     );
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   const currentSlide = slides[currentIndex];

//   return (
//     <section className="relative w-full h-[90vh] overflow-hidden">
//       {/* Background slideshow */}
//       <div className="absolute inset-0 w-full h-full z-0">
//         <AnimatePresence mode="wait">
//           <motion.img
//             key={currentSlide.image}
//             src={currentSlide.image}
//             alt={`Slide ${currentIndex}`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1 }}
//             className="absolute inset-0 w-full h-full object-cover"
//           />
//         </AnimatePresence>
//       </div>

//       {/* Text overlay */}
//       <div className="relative z-20 flex flex-col justify-center h-full px-10 md:px-20 text-white max-w-2xl">
//         <motion.h2
//           key={currentSlide.title}
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg"
//         >
//           {currentSlide.title}
//         </motion.h2>

//         <motion.p
//           key={currentSlide.subtitle}
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0 }}
//           transition={{ delay: 0.2, duration: 0.7 }}
//           className="text-lg md:text-2xl opacity-95 drop-shadow-md"
//         >
//           {currentSlide.subtitle}
//         </motion.p>

//         {/* CTA button */}
//         <motion.a
//           href="#contact"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           className="mt-8 inline-block px-6 py-3 bg-white text-green-700 font-semibold rounded-full shadow-lg hover:bg-green-100 transition"
//         >
//           Get Started
//         </motion.a>
//       </div>
//     </section>
//   );
// }





import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import your images
import p6 from "../assets/p6.jpg";
import p7 from "../assets/bannenr.png";
import H4 from "../assets/h4.jpg";
import p9 from "../assets/onionxx.png";

export default function HeroBanner() {
  // Array of slides with image + text
  const slides = [
    {
      image: p7,
      title: "Wide Range Supplier of Spices",
      subtitle: "Your trusted partner in global import-export solutions.",
    },
    {
      image: p6,
      title: "Manufacturer & Exporter",
      subtitle: "Specialized in Dehydrated Onion & Garlic",
    },
    {
      image: p9,
      title: "Delivering Quality Products",
      subtitle: "Supplying around the world with excellence.",
    },
    {
      image: H4,
      title: "Vegetabel paste",
      subtitle: "We provided best qulity of pastes",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % slides.length),
      4000 // change every 4s
    );
    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0 w-full h-full z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide.image}
            src={currentSlide.image}
            alt={`Slide ${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Text overlay */}
      <div className="relative z-20 flex flex-col justify-center h-full px-10 md:px-20 text-white max-w-2xl">
        <motion.h2
          key={currentSlide.title}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg"
        >
          {currentSlide.title}
        </motion.h2>

        <motion.p
          key={currentSlide.subtitle}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg md:text-2xl opacity-95 drop-shadow-md"
        >
          {currentSlide.subtitle}
        </motion.p>

        {/* CTA button (extra small, white bg, black text) */}
        <motion.a
      href="products"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      ><motion.button
      className="mt-8 bg-green-600 text-white rounded-full px-6 py-4">
      View Products
    </motion.button>
    </motion.a>


      </div>
    </section>
  );
}
