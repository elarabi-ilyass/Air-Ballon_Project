'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Données des slides
const slides = [
  {
    id: 1,
    title: "Soar Above Marrakech in Hot Air Balloon",
    image: "/HomeImages/Background.png",
    buttonText: "Book Your Flight Now",
    buttonLink: "/booking",
  },
  {
    id: 2,
    title: "Discover Atlas Mountains",
    image: "/HomeImages/Background2.jpg",
    buttonText: "Explore Adventures",
    buttonLink: "/adventures",
  },
  {
    id: 3,
    title: "Sunset Balloon Experience",
    image: "/HomeImages/Background1.jpg",
    buttonText: "View Packages",
    buttonLink: "/packages",
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Variants pour les animations - EFFET SCALE
  const slideVariants = {
    enter: {
      scale: 0.8,
      opacity: 0,
    },
    center: {
      scale: 1,
      opacity: 1,
    },
    exit: {
      scale: 1.2,
      opacity: 0,
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.3
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.8
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const dotVariants = {
    inactive: {
      scale: 1,
      opacity: 0.6,
    },
    active: {
      scale: 1.2,
      opacity: 1,
    },
    hover: {
      scale: 1.3,
      opacity: 1,
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slider Principal */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              scale: { 
                duration: 1.5,
                ease: [0.25, 0.46, 0.45, 0.94]
              },
              opacity: { 
                duration: 1.2,
                ease: "easeInOut"
              }
            }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Image de fond qui remplit tout l'écran */}
            <div className="absolute inset-0">
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                fill
                className="object-cover"
                priority
                quality={100}
              />
              {/* Overlay sombre pour mieux voir le texte */}
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Contenu du slide */}
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  className="text-center max-w-4xl mx-auto"
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {/* Titre principal */}
                  <motion.h1
                    className="text-4xl font-Poppins sm:text-5xl lg:text-7xl font-bold text-white sm:mb-[130px] leading-tight"
                    variants={textVariants}
                  >
                    {slides[currentSlide].title}
                  </motion.h1>

                  {/* Bouton CTA */}
                  <motion.div variants={buttonVariants}>
                    <Link href={slides[currentSlide].buttonLink}>
                      <motion.button
                        className="bg-[#a7341c] hover:bg-[#8a2b18] text-white px-8 sm:px-12 py-3  sm:py-4 rounded-full text-lg sm:text-xl font-semibold shadow-2xl transition-colors duration-300"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        {slides[currentSlide].buttonText}
                      </motion.button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Points de navigation en colonne à gauche */}
      <div className="absolute  left-6 top-1/2 transform -translate-y-1/2 z-20 flex flex-col space-y-4">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className="relative"
            variants={dotVariants}
            initial="inactive"
            animate={index === currentSlide ? "active" : "inactive"}
            whileHover="hover"
            whileTap="tap"
          >
            {/* Point principal */}
            <div
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/60'
              }`}
            />
            
            {/* Ligne de connexion entre les points (sauf pour le dernier) */}
            {index < slides.length - 1 && (
              <motion.div
                className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-white/40"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.2 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Indicateur de progression (progress bar) */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-white/50 z-20"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ 
          duration: 5, 
          ease: "easeInOut"
        }}
        key={currentSlide}
      />

      {/* Indicateur de slide actuel en haut à droite */}
      {/* <div className="absolute top-6 right-6 z-20">
        <motion.div
          className="text-white text-sm bg-black/40 backdrop-blur-sm rounded-full px-4 py-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {currentSlide + 1} / {slides.length}
        </motion.div>
      </div> */}

      {/* Boutons de navigation fléchés */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-6 bottom-6 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>

      <motion.button
        onClick={nextSlide}
        className="absolute right-6 bottom-6 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>
    </section>
  );
}