"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Expectations()  {
  return (
    <motion.div className="flex  flex-col-reverse  lg:flex-row justify-center items-center max-w-6xl mx-auto gap-6 lg:gap-8 p-4 sm:p-6"> 
      {/* Images Grid Section */}
      <motion.div className="w-full lg:w-1/2">
        <motion.div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4 h-[400px] sm:h-[500px] lg:h-[600px]">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="col-span-2 relative"
             >
              <Image
                src="/HomeImages/About/image (2).png"
                alt="Sky experience view"
                fill
                className="rounded-2xl sm:rounded-3xl lg:rounded-4xl shadow-lg object-cover"
                quality={100}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </motion.div>
            <motion.div
               whileHover={{ scale: 1.02 }}
               className="col-start-2 row-start-2 relative">
              <Image
                src="/HomeImages/About/image (3).png"
                alt="Sky experience view"
                fill
                className="rounded-2xl sm:rounded-3xl lg:rounded-4xl shadow-lg object-cover"
                quality={100}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="col-start-1 row-start-2 relative">
              <Image
                src="/HomeImages/About/image (4).png"
                alt="Sky experience view"
                fill
                className="rounded-2xl sm:rounded-3xl lg:rounded-4xl shadow-lg object-cover"
                quality={100}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Text Section */}
      <motion.div className="w-full lg:w-1/2">
        <motion.div 
          className="flex-1 w-full"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div className="p-4 sm:p-6 lg:p-8">
            <motion.h2 
              className="text-xl text-center sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8"
            >
              A Flight Tailored to Your Expectations
            </motion.h2>
            
            <div className="space-y-3  sm:space-y-4 lg:space-y-12">
              {[
                "Soar above Marrakech and its breathtaking landscapes in the comfort of our modern hot-air balloons.",
                "Every moment in the air invites you to relax and fully appreciate the stunning beauty of the landscapes around you. "
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
        </motion.div>
      </motion.div>
    </motion.div>
  )
}