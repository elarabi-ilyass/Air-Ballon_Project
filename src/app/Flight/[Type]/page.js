'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import CalendarComponent from '../../../components/CalendarComponent';
import Testimonial from "../../../components/Testimonial";
import Overview from "../../../components/Overview";
import Categorie from "../../../components/Categorie";

export default function Catalogue() {
  const [selectedImage, setSelectedImage] = useState('/HomeImages/GrandImage.png');

  const images = [
    { id: 1, src: '/HomeImages/Test Image.png', alt: 'image 1' },
    { id: 2, src: '/HomeImages/PetitImage2.png', alt: 'image 2' },
    { id: 4, src: '/HomeImages/GrandImage.png', alt: 'main balloon flight image' }
  ];

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  return (
    <motion.div 
      className="relative bg-[#efd0b4] min-h-screen py-8 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >  
      {/* Header */}
      <motion.h1 
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 text-gray-800"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <motion.span 
          className="text-amber-800"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Royal{" "}
        </motion.span>
        Flight in Marrakech
      </motion.h1>

      {/* Main Content Container */}
      <motion.div 
        className="flex flex-col lg:flex-row justify-between items-start gap-8 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        
        {/* Right Section - Images & Details */}
        <motion.div 
          className="flex-1 w-full"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            
            {/* Small Images Column - Hidden on mobile, shown on desktop */}
            <motion.div 
              className="hidden lg:flex lg:flex-col gap-4 order-2 lg:order-1 justify-center lg:justify-start"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {images.map((image, index) => (
                <motion.div
                  key={image.id}
                  className={`relative w-40 h-24 sm:w-32 sm:h-24 lg:w-40 lg:h-28 flex-shrink-0 cursor-pointer border-2 rounded-xl transition-all duration-300 ${
                    selectedImage === image.src ? 'border-amber-500 border-4 scale-105' : 'border-transparent'
                  }`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  onClick={() => handleImageClick(image.src)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="rounded-xl shadow-lg object-cover"
                    sizes="(max-width: 1024px) 96px, 160px"
                    priority={index === 0}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Main Image & Details */}
            <motion.div 
              className="flex-1 order-1 lg:order-2"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {/* Main Image */}
              <motion.div 
                className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={selectedImage}
                  alt="selected balloon flight image"
                  fill
                  className="rounded-xl shadow-lg object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </motion.div>

              {/* Small Images Row - Visible only on mobile */}
              <motion.div 
                className="flex lg:hidden gap-3 mb-6 justify-center order-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                {images.map((image, index) => (
                  <motion.div
                    key={image.id}
                    className={`relative w-[100px] h-16 sm:w-24 sm:h-20 flex-shrink-0 cursor-pointer border-2 rounded-lg transition-all duration-300 ${
                      selectedImage === image.src ? 'border-amber-500 border-3 scale-110' : 'border-transparent'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleImageClick(image.src)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="rounded-lg shadow-md object-cover"
                      sizes="(max-width: 768px) 80px, 96px"
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Details Section */}
              <motion.div 
                className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6  rounded-xl p-4 sm:p-6 backdrop-blur-sm"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {/* Features List */}
                <motion.ul 
                  className="flex-1 space-y-2 sm:space-y-3 text-sm sm:text-base"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  {[
                    "Luxury round-trip transport from your hotel",
                    "VIP welcome with Moroccan tea and snacks",
                    "1-hour hot-air balloon flight over Marrakech",
                    "Traditional breakfast in a nomadic kasbah",
                    "Personalized flight certificate included"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start gap-2 text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-green-600 mt-1">•</span>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Price Section */}
                <motion.div 
                  className="flex flex-col items-center lg:items-end gap-2  rounded-lg p-4 sm:p-6 min-w-[140px]"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.span 
                    className="text-lg sm:text-3xl font-semibold text-gray-700"
                    whileHover={{ scale: 1.1 }}
                  >
                    Price:
                  </motion.span>
                  <motion.span 
                    className="text-2xl sm:text-4xl font-bold text-red-600"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 1 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    $550
                  </motion.span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Left Section - Calendar */}
        <motion.div 
          className="w-full lg:w-auto lg:flex-shrink-0"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="sticky mt-[-12px]">
            <CalendarComponent />
          </div>
        </motion.div>
      </motion.div>
          <div className="bg-[#efd0b4]">
            <Testimonial className="bg-[#efd0b4]" />
          </div>
            <div className="">
            <Overview />
          </div>
          <div className="">
            <Categorie />
          </div>


    </motion.div>
  );
}