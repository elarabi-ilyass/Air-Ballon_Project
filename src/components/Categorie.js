'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Categorie() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const flights = [
    {
      id: 1,
      type: "VIP",
      title: "ROYAL",
      subtitle: "Hot-Air Balloon Flight in Marrakech",
      location: "Marrakech",
      rating: 4.9,
      image: "/HomeImages/image (1).png",
      badgeColor: "/HomeImages/Ellipse 1.png"
    },
    {
      id: 2,
      type: "Most reserved",
      title: "CLASSIC",
      subtitle: "Hot-Air Balloon Flight in Marrakech",
      location: "Marrakech",
      rating: 4.9,
      image: "/HomeImages/image.png",
      badgeColor: "/HomeImages/Ellipse 1.png"
    },
    {
      id: 3,
      type: "Romantic offer",
      title: "PRIVATE",
      subtitle: "Hot-Air Balloon Flight in Marrakech",
      location: "Marrakech",
      rating: 4.9,
      image: "/HomeImages/part3.png",
      badgeColor: "/HomeImages/Ellipse 1.png"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % flights.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + flights.length) % flights.length);
  };

  return (
    <motion.div 
      className=" min-h-screen pb-16"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >

      {/* Flight Cards Section */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        variants={containerVariants}
      >
        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flights.map((flight, index) => (
            <motion.div
              key={flight.id}
              className="relative rounded-2xl shadow-xl overflow-hidden group min-h-[500px] cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              custom={index}
            >
              {/* Card Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={flight.image}
                  alt={flight.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
              </div>

              {/* Card Content Overlay */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">

                {/* Top Section - Badge */}
                <motion.div
                  className="relative translate-x-[85px] translate-y-[-25px] inline-flex justify-end"
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative w-[250px] h-[120px]">
                    <Image
                      src={flight.badgeColor}
                      alt={flight.type}
                      fill
                      className="object-contain"
                    />
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-semibold z-10 w-12 text-center">
                      {flight.type}
                    </span>
                  </div>
                </motion.div>

                {/* Middle Section - Content */}
                <div className="flex-1 flex flex-col justify-end">
                  <motion.span 
                    className="block text-3xl font-bold mb-2 text-white drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {flight.title}
                  </motion.span>
                  <motion.span 
                    className="block text-xl text-gray-200 mb-3 drop-shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {flight.subtitle}
                  </motion.span>
                </div>

                {/* Bottom Section - Rating & Button */}
                <div className="flex items-center justify-between bg-black/40 backdrop-blur-md rounded-xl p-4">
                  <motion.div 
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-lg font-semibold text-white">
                      {flight.rating}/5
                    </span>
                  </motion.div>
              
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href='/YY'
                className="bg-[#a7341c] hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-colors duration-300 block"
              >
                Check
              </Link>
            </motion.div>
                
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel - Updated to match desktop design */}
        <div className="lg:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="relative rounded-2xl shadow-xl overflow-hidden min-h-[500px] cursor-pointer group"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {/* Card Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={flights[currentSlide].image}
                  alt={flights[currentSlide].title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  priority
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
              </div>

              {/* Card Content Overlay */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">

                {/* Top Section - Badge (same as desktop) */}
                <motion.div
                  className="relative translate-x-[60px] translate-y-[-20px] inline-flex justify-end"
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative w-[200px] h-[100px]">
                    <Image
                      src={flights[currentSlide].badgeColor}
                      alt={flights[currentSlide].type}
                      fill
                      className="object-contain"
                    />
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-semibold z-10 w-12 text-center">
                      {flights[currentSlide].type}
                    </span>
                  </div>
                </motion.div>

                {/* Middle Section - Content */}
                <div className=" flex translate-y-[160px] flex-col justify-end ">

                  <motion.span 
                    className="block  text-3xl font-bold mb-2 text-white drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {flights[currentSlide].title}
                  </motion.span>
                  <motion.span 
                    className="block text-xl text-gray-200 mb-3 drop-shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {flights[currentSlide].subtitle}
                  </motion.span>
                </div>

                {/* Bottom Section - Rating & Button */}
                <div className="flex translate-y-[160px] justify-between bg-black/40 backdrop-blur-md rounded-xl p-4">
                  <motion.div 
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-lg font-semibold text-white">
                      {flights[currentSlide].rating}/5
                    </span>
                  </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href='/YY'
                className="bg-[#a7341c] hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-colors duration-300 block"
              >
                Check
              </Link>
            </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            <motion.button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </motion.button>
            
            <div className="flex space-x-2">
              {flights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-[#a7341c] w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <motion.button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
