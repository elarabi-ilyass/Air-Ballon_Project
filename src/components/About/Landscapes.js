"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Landscapes()  {
  return (
    <>
    <section className="max-w-6xl mx-auto p-6">
      {/* Mobile-only media query wrapper */}
      <div className="block lg:hidden">
        {/* Mobile-optimized heading */}
        <motion.h1 
          className="font-bold text-2xl text-gray-800 text-center mb-8 px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A Journey Through Moroccan Landscapes
        </motion.h1>
        
        {/* Mobile-optimized images section - appears first on mobile */}
        <motion.div 
          className="flex flex-col-reverse items-center gap-6 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* First Image - Mobile */}
          <motion.div
            className="relative w-full max-w-[350px] h-[200px]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/HomeImages/About/image (5).png"
              alt="Sky experience view"
              fill
              className="rounded-3xl shadow-lg object-cover"
              quality={100}
              sizes="(max-width: 640px) 90vw, 50vw"
            />
          </motion.div>
          
          {/* Second Image - Mobile */}
          <motion.div
            className="relative w-full max-w-[350px] h-[200px]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/HomeImages/About/image (6).png"
              alt="Sky experience view"
              fill
              className="rounded-3xl shadow-lg object-cover"
              quality={100}
              sizes="(max-width: 640px) 90vw, 50vw"
            />
          </motion.div>

          {/* Third Image - Mobile */}
          <motion.div
            className="relative w-full max-w-[350px] h-[200px]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/HomeImages/About/image (7).png"
              alt="Sky experience view"
              fill
              className="rounded-3xl shadow-lg object-cover"
              quality={100}
              sizes="(max-width: 640px) 90vw, 50vw"
            />
          </motion.div>
        </motion.div>

        {/* Mobile-optimized text content */}
        <motion.div 
          className="text-left px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            {[
              "Let yourself be captivated by the beauty of Moroccan landscapes. ",
              "From above, you'll enjoy unparalleled views of Marrakech's expansive palm groves, the Atlas Mountains, and the desert dunes.",
              "The sunrise creates spectacular colors—perfect for capturing unforgettable photos."
            ].map((text, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.6 + index * 0.2,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.p 
                  className="text-gray-700 text-base leading-relaxed"
                  whileHover={{ color: "#da8611" }}
                  transition={{ duration: 0.3 }}
                >
                  {text}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Your original web code - completely unchanged */}
      <div className="hidden lg:block">
        <motion.h1 
          className="font-bold text-2xl lg:w-[800px] md:text-3xl lg:text-5xl lg:mb-20 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A Journey Through Moroccan Landscapes
        </motion.h1>
        <motion.div className="flex flex-col lg:translate-y-[-130px] lg:flex-row max-w-6xl justify-center items-center gap-8"> 
          <motion.div 
            className="text-left flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4 lg:space-y-6">
              {[
                "Let yourself be captivated by the beauty of Moroccan landscapes. ",
                "From above, you'll enjoy unparalleled views of Marrakech's expansive palm groves, the Atlas Mountains, and the desert dunes.",
                " The sunrise creates spectacular colors—perfect for capturing unforgettable photos."
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
            className="relative flex flex-col items-center lg:-ml-20 flex-1 w-full lg:w-auto h-auto lg:h-[500px] mt-8 lg:mt-"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {/* First Image */}
            <motion.div
              className="relative w-full max-w-[400px] h-[200px] lg:absolute lg:w-[500px] lg:translate-y-[50px] lg:h-[]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Image
                src="/HomeImages/About/image (5).png"
                alt="Sky experience view"
                fill
                className="rounded-4xl shadow-lg object-cover"
                quality={100}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </motion.div>
            
            {/* Second Image */}
            <motion.div
              className="relative w-full max-w-[400px] h-[200px] lg:absolute lg:w-[400px] lg:h-[] lg:translate-y-[200px] lg:translate-x-[180px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Image
                src="/HomeImages/About/image (6).png"
                alt="Sky experience view"
                fill
                className="rounded-4xl shadow-lg object-cover"
                quality={100}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="relative w-full max-w-[800px] h-[200px] lg:absolute lg:h lg:h- lg:translate-y-[300px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Image
              src="/HomeImages/About/image (7).png"
              alt="Sky experience view"
              fill
              className="rounded-4xl shadow-lg"
              quality={100}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
    </>
  )
}