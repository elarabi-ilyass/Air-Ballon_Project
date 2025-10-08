"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Adventure()  {
  return (
    <section className="py-12 z-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Titre Principal */}
        <motion.div 
          className="text-left  mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h1 
            className="text-2xl w-[300px] lg:w-full sm:text-4xl lg:text-5xl xl:text-3xl font-bold text-gray-900 leading-tight"
          >
            Live a Unique Hot-Air Balloon Adventure with{' '}
            <span className="text-[#da8611]">Sky Experience!</span>
          </motion.h1>
        </motion.div>

        <div className="flex flex-col -translate-y-12 lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Section Texte */}
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div className=" p-6 sm:p-8 lg:p-10">
              <motion.h2 
                className="text-2xl sm:text-xl lg:text-2xl font-bold text-gray-900 mb-6 lg:mb-8"
              >
                The Sky Experience Adventures
              </motion.h2>
              
              <div className="space-y-4  lg:space-y-6">
                {[
                  "Soar above Marrakech and its breathtaking landscapes in the comfort of our modern hot-air balloons.",
                  "Give yourself the gift of serenity and enjoy an unforgettable view of the Atlas Mountains, the palm groves of Marrakech, and much more.",
                  "Every detail has been carefully thought out to make this experience unforgettable."
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

          {/* Section Images */}
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid h-full grid-cols-2 sm:grid-cols-2 gap-4 lg:gap-6">
              {/* Grande Image */}
              <motion.div 
                className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/HomeImages/About/image 10.png"
                  alt="Hot air balloon adventure"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  priority
                  quality={100}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </motion.div>

              {/* Deux Petites Images */}
              <div className="flex flex-col gap-4 lg:gap-6">
                <motion.div 
                  className="relative h-30 sm:h-36 lg:h-full rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/HomeImages/About/image 9 (1).png"
                    alt="Hot air balloon landscape"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    quality={100}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </motion.div>
                
                <motion.div 
                  className="relative h-30 sm:h-36 lg:h-full rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/HomeImages/About/image (1).png"
                    alt="Sky experience view"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    quality={100}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}