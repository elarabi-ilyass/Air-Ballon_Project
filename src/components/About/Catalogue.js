"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Catalogue()  {
  return (
    <>
      <motion.div 
        style={{
          backgroundImage: "url('/HomeImages/About/Rectangle 57.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        className="w-full min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Section Texte */}
        <motion.div 
          className="flex-1 w-full max-w-7xl mx-auto"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div className="p-6 sm:p-8 lg:p-10">
            <motion.h2 
              className="text-2xl sm:text-2xl lg:text-6xl font-bold text-white mb-6 sm:mb-6 lg:mb-8 text-center "
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A Moment of Relaxation and Wonder
            </motion.h2>
            
            <div className="space-y-4 flex flex-col items-center text-center text-white sm:space-y-5 lg:space-y-6 ">
              {[
                "A hot-air balloon ride is a rare and peaceful experience, perfect for relaxation and awe.",
                "Step into a spacious and comfortable balloon and let yourself drift away on the gentle breeze",
                "Experience the tranquility of flight as you take in the ever-changing scenery below."
              ].map((text, index) => (
                <motion.div 
                  key={index}
                  className=" text-white  sm:items-center  gap-3 sm:gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ 
                    x: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.p 
                    className="text-white text-sm sm:text-base lg:text-2xl leading-relaxed"
                    whileHover={{ color: "#da8611" }}
                    transition={{ duration: 0.3 }}
                  >
                    {text}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}