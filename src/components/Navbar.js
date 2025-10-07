'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/About" },
    { name: "Flights", href: "/Flight" },
    { name: "Contact", href: "/Contact" }
  ];

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const overlayVariants = {
    open: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const menuContentVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200
      }
    },
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200
      }
    }
  };

  // Prevent body scroll when menu is open
  useState(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <nav className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/HomeImages/Logo.png"
                alt="Logo"
                width={100}
                height={35}
                className="w-auto h-auto"
                priority
              />
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors z-60 relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
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

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isMenuOpen && (
              <>
                {/* Backdrop Overlay */}
                <motion.div
                  className="fixed inset-0 bg-black bg-opacity-50 z-40"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={overlayVariants}
                  onClick={() => setIsMenuOpen(false)}
                />
                
                {/* Menu Content */}
                <motion.div
                  className="fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-xl z-50"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={menuContentVariants}
                >
                  <div className="p-6 h-full flex flex-col">
                    {/* Close Button */}
                    <div className="flex justify-between items-center mb-8">
                      <Image
                        src="/HomeImages/Logo.png"
                        alt="Logo"
                        width={80}
                        height={28}
                        className="w-auto h-auto"
                      />
                      <motion.button
                        className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
                        onClick={() => setIsMenuOpen(false)}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </motion.button>
                    </div>

                    {/* Menu Items */}
                    <div className="flex-1 space-y-6">
                      {menuItems.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          <Link 
                            href={item.href}
                            className="block py-3 text-lg text-gray-700 hover:text-red-500 font-medium transition-colors duration-300 border-b border-gray-100"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    {/* Mobile Book Now Button */}
                    <motion.button
                      className="w-full bg-[#a7341c] hover:bg-red-600 text-white py-4 rounded-xl font-semibold shadow-lg mt-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book Now
                    </motion.button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between py-4">
          {/* Your desktop menu code here */}
          <div className="flex items-center space-x-8">
            <Image
              src="/HomeImages/Logo.png"
              alt="Logo"
              width={120}
              height={42}
              className="w-auto h-auto"
              priority
            />
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-red-500 font-medium transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <button className="bg-[#a7341c] hover:bg-red-600 text-white px-6 py-2 rounded-xl font-semibold shadow-lg transition-colors duration-300">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}