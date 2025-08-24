// import React from "react";
// import { motion } from "framer-motion";
// import TestimonialsSlider from "../components/TestimonialsSlider";

// export default function TestimonialsPage() {
//   return (
//     <div>
//     <motion.main
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.5 }}
//       className="bg-gradient-to-b from-white to-blue-50 py-20 px-4 text-gray-900"
//     >
//       <div className="max-w-4xl mx-auto text-center mb-12">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
//           What Our Clients Say
//         </h1>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//           We value our customers’ feedback and take pride in delivering world-class
//           products and services that build lasting partnerships.
//         </p>
//       </div>

//       <div className="max-w-4xl mx-auto">
//         <TestimonialsSlider />
//       </div>
//     </motion.main>
//     </div>
//   );
// }








import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "framer-motion"
import rating_star from '../assets/rating_star.svg'

function Testimonials() {

  return (
    <motion.div  className='flex flex-col items-center justify-center
    my-20 py-12 '
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once: true}}
    
    >

        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Customer Testimonials</h1>
        <p className='text-gray-500 mb-8'>What our Users are Saying</p>

        <div className='flex flex-wrap gap-6'>
            {testimonialsData.map((testimonial,index)=>(
                <div key={index}
                className='bg-white/20 p-12 rounded-lg shadow-md
                order w-80 m-auto cursor-pointer hover:scale-[1.02]'>

                    <div className='flex flex-col items-center'>
                        <img src={testimonial.image} alt="" className="rounded-full w-14" />
                        <h2 className='text-gray-500 mb-4'>{testimonial.name}</h2>
                        <p>{testimonial.role}</p>

                        <div className='flex mb-4'>
                            {Array(testimonial.stars).fill().map((item,index)=>(
                                <img src={assets.rating_star} alt="" className="src" key={index} />
                            ))}
                        </div>

                        <p className='text-center text-sm text-gray-600'>
                            {testimonial.text}
                        </p>
                    </div>
                </div>
            ))}

        </div>
    </motion.div>
  )
}

export default Testimonials