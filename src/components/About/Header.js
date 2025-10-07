'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="relative w-full min-h-screen overflow-hidden"
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background Image */}
      <motion.div 
        className="relative w-full h-screen"
        variants={imageVariants}
      >
        <Image
          src="/HomeImages/About/image.png"
          alt="About Us Header Image"
          fill
          className="object-cover"
          priority
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 drop-shadow-2xl"
          variants={textVariants}
        >
          About Us
        </motion.h1>
        
        <motion.div
          className="w-20 h-1 bg-white mb-6 rounded-full"
          variants={textVariants}
        ></motion.div>
        
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-center max-w-2xl drop-shadow-lg"
          variants={textVariants}
        >
          Discover our story and passion for creating unforgettable experiences
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="mt-8"
          variants={textVariants}
        >
          <motion.button
            className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          animate={{ 
            y: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ 
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}