'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const socialLinks = [
    { src: "/HomeImages/icons8-facebook-nouveau-48 1.png", alt: "Facebook", href: "#" },
    { src: "/HomeImages/icons8-insta-50 (1) 1.png", alt: "Instagram", href: "#" }
  ];

  const usefulLinks = [
    { name: "Home", href: "/" },
    { name: "Program", href: "/program" },
    { name: "About Us", href: "/about" },
    { name: "Flights", href: "/flights" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <motion.footer
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
      className="bg-black text-white py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <motion.div 
          variants={containerVariants}
          className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 mb-8"
        >
          {/* Logo */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0"
          >
            <Image
              src="/HomeImages/Logo2.png"
              alt="Sky Experience Marrakech"
              width={250}
              height={80}
              className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              priority
            />
          </motion.div>

          {/* Social Media */}
          <motion.div
            variants={itemVariants}
            className="text-center lg:text-left"
          >
            <motion.h3 
              className="text-xl font-semibold mb-4 text-gray-200"
              whileHover={{ scale: 1.05 }}
            >
              JOIN US
            </motion.h3>
            <motion.div 
              className="flex justify-center lg:justify-start gap-4"
              variants={containerVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.alt}
                  href={social.href}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="block"
                >
                  <Image
                    src={social.src}
                    alt={social.alt}
                    width={35}
                    height={35}
                    className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 border-t border-gray-700"
        >
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            {/* Address */}
            <motion.div
              variants={itemVariants}
              className="space-y-2"
            >
              <motion.h4 
                className="text-lg font-semibold text-gray-200 flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                <span className="w-2 h-2 bg-[#da8611] rounded-full"></span>
                ADDRESS:
              </motion.h4>
              <motion.p 
                className="text-gray-400 leading-relaxed"
                whileHover={{ color: "#ffffff" }}
              >
                3ème Étage Bureau N° 16, Angle Bd Moulay Rachid, Marrakech 40000
              </motion.p>
            </motion.div>

            {/* Email */}
            <motion.div
              variants={itemVariants}
              className="space-y-2"
            >
              <motion.h4 
                className="text-lg font-semibold text-gray-200 flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                <Image
                  src="/HomeImages/icons8-nouveau-message-50 1.png"
                  alt="Email"
                  width={20}
                  height={20}
                  className="rounded"
                />
                CONTACT
              </motion.h4>
              <motion.a
                href="mailto:contact@skyexperience-marrakech.com"
                className="text-gray-400 hover:text-white transition-colors duration-300 block"
                whileHover={{ x: 5 }}
              >
                contact@skyexperience-marrakech.com
              </motion.a>
            </motion.div>

            {/* Customer Support */}
            <motion.div
              variants={itemVariants}
              className="space-y-2"
            >
              <motion.span 
                className="text-gray-300 font-medium block"
                whileHover={{ x: 5 }}
              >
                Customer support:
              </motion.span>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                <Image
                  src="/HomeImages/icons8-nouveau-message-50 1.png"
                  alt="Phone"
                  width={20}
                  height={20}
                  className="rounded"
                />
                <motion.a
                  href="tel:+212661445327"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Tel: +212 661 445 327
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Useful Links */}
          <motion.div
            variants={itemVariants}
            className="space-y-4"
          >
            <motion.h4 
              className="text-xl font-semibold text-gray-200"
              whileHover={{ scale: 1.05 }}
            >
              Useful Links
            </motion.h4>
            <motion.ul 
              className="space-y-3"
              variants={containerVariants}
            >
              {usefulLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  variants={itemVariants}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 block py-1 hover:pl-2 border-l-2 border-transparent hover:border-[#da8611]"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Additional Space for Future Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-4"
          >
            <motion.h4 
              className="text-xl font-semibold text-gray-200"
              whileHover={{ scale: 1.05 }}
            >
              Newsletter
            </motion.h4>
            <motion.p 
              className="text-gray-400"
              variants={itemVariants}
            >
              Subscribe to get updates on our latest offers and experiences.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 flex-1"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-[#da8611] text-white rounded-lg hover:bg-orange-400 transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-8 pt-6 border-t border-gray-700"
        >
          <motion.p 
            className="text-gray-400"
            whileHover={{ scale: 1.02 }}
          >
            © {new Date().getFullYear()} Sky Experience Marrakech. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
}