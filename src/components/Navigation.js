'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Track scroll position
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const menuItems = [
    { name: 'Home', href: '/', delay: 0.1 },
    { name: 'About', href: '/About', delay: 0.2 },
    { name: 'Flight', href: '/Flight', delay: 0.3 },
    { name: 'Contact', href: '/Contact', delay: 0.4 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      {/* Fixed Header Container */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className={`w-full max-w-6xl mx-auto rounded-3xl shadow-lg transition-all duration-300 ${
            isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-white'
          }`}
          animate={{
            scale: isScrolled ? 0.98 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-6 py-4 lg:px-8">
            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center justify-between">
              {/* Logo */}
              <motion.div 
                className="flex-shrink-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Image
                  src="/HomeImages/Logo.png"
                  alt="Logo"
                  width={isScrolled ? 100 : 120}
                  height={isScrolled ? 33 : 40}
                  className="w-auto h-auto transition-all duration-300"
                  priority
                />
              </motion.div>

              {/* Navigation */}
              <motion.nav 
                className="flex items-center space-x-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {menuItems.map((item) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    <Link 
                      href={item.href}
                      className="text-gray-600 hover:text-red-500 font-medium transition-colors duration-300 relative group"
                    >
                      {item.name}
                      <motion.span 
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              {/* Book Now Button */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.button
                  className="bg-[#a7341c] hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  Book Now
                </motion.button>
              </motion.div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/HomeImages/Logo.png"
                    alt="Logo"
                    width={isScrolled ? 80 : 100}
                    height={isScrolled ? 28 : 35}
                    className="w-auto h-auto transition-all duration-300"
                    priority
                  />
                </motion.div>

                {/* Mobile Menu Button */}
                <motion.button
                  className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </motion.button>
              </div>

              {/* Mobile Menu */}
              <motion.div
                className="overflow-hidden"
                variants={mobileMenuVariants}
                initial="closed"
                animate={isMenuOpen ? "open" : "closed"}
              >
                <div className="py-4 space-y-4 border-t border-gray-200">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: isMenuOpen ? 1 : 0, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link 
                        href={item.href}
                        className="block py-2 text-gray-600 hover:text-red-500 font-medium transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* Mobile Book Now Button */}
                  <motion.button
                    className="w-full bg-[#a7341c] hover:bg-red-600 text-white py-3 rounded-xl font-semibold shadow-lg mt-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: isMenuOpen ? 1 : 0, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Now
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* Spacer to prevent content jump - matches header height */}
      <div className={`transition-all duration-300 ${isScrolled ? 'h-20' : 'h-28'}`} />
    </>
  );
}