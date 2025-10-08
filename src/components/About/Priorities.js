"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Priorities()  {
  return (
    <>
    <section className="flex flex-col lg:flex-row  max-w-6xl mx-auto justify-center items-center gap-8 p-6">
      <motion.div 
        className="text-center flex-1"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Safety and Comfort: Our Priorities
        </motion.h1>
        <motion.h2 
          className="font-base text-lg md:text-xl lg:text-2xl mb-8 text-gray-600"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Safety first always
        </motion.h2>
          <div className="space-y-4 lg:space-y-6">
              {[
                  "At Sky Experience, safety is our top priority.",
                  "Our certified, experienced pilots will guide you throughout the adventure, ensuring you enjoy a safe and comfortable flight. ",
                  "We provide perfectly maintained hot-air balloons, tailored to meet your needs, guaranteeing both safety and comfort."
              ].map((text, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center text-center gap-4"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.7, 
                      delay: 0.6 + index * 0.2,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      x: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.span 
                      className="w-2 h-2 bg-[#da8611] rounded-full -mt-2 flex-shrink-0"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.p 
                      className="text-gray-700 text-base sm:text-sm lg:text-lg leading-relaxed"
                      whileHover={{ color: "#da8611" }}
                      transition={{ duration: 0.3 }}
                    >
                      {text}
                    </motion.p>
                  </motion.div>
                ))}
            </div>
      </motion.div>
      
      {/* Images Section - Visible on ALL devices */}
      <motion.div 
        className="relative flex flex-col items-center lg:ml-30 flex-1 w-full lg:w-auto h-auto lg:h-[500px] mt-8 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        {/* First Image */}
        <motion.div
          className="relative w-full max-w-[400px] h-[300px] lg:h-full lg:w-[400px] mb-6 lg:mb-4"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Image
            src="/HomeImages/About/image 9 (2).png"
            alt="Sky experience view"
            fill
            className="rounded-4xl shadow-lg object-cover"
            quality={100}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </motion.div>
        
        {/* Second Image */}
        <motion.div
          className="relative w-full max-w-[300px] h-[200px] lg:absolute lg:w-[300px] lg:h-1/3 lg:translate-y-[400px] lg:translate-x-[-100px]"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Image
            src="/HomeImages/About/image 10 (1).png"
            alt="Sky experience view"
            fill
            className="rounded-4xl shadow-lg object-cover"
            quality={100}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </motion.div>
      </motion.div>
    </section>
    </>
  )
}