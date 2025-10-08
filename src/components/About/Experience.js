"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Experience()  {
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
            className="text-2xl text-center w-[300px] lg:w-[1000px] sm:text-4xl lg:text-5xl xl:text-4xl font-bold text-gray-900 leading-tight"
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
              
              <div className="space-y-4  lg:space-y-6">
                {[
                  "From reservation to landing, we’ve taken care of everything to ensure you can fully relax and enjoy the moment. We handle all the logistics—transport, welcoming, safety briefings, and personalized souvenirs at the end of your adventure. All you have to do is focus on what matters: enjoying the experience.",
                ].map((text, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center text-left gap-4"
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
          </motion.div>

      {/* Images Grid Section */}
      <motion.div className="w-full rotate-90 lg:w-1/2">
        <motion.div className="grid grid-cols-2 grid-rows-3 gap-3 sm:gap-4 h-[400px] sm:h-[500px] lg:h-[600px]">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="col-span-2  relative"
             >
              <Image
                src="/HomeImages/About/image (9).png"
                alt="Sky experience view"
                fill
                className="rounded-2xl sm:rounded-3xl lg:rounded-4xl shadow-lg object-cover"
                quality={100}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </motion.div>
            <motion.div
               whileHover={{ scale: 1.02 }}
               className="col-start-1 row-start-3 relative">
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
              className="col-start-2 row-start-1 row-span-3 relative">
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



        </div>
      </motion.div>
    </section>
  )
}