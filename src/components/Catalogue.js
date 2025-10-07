'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Catalogue() {
  return (
    <section className="py-4 sm:py-8 lg:py-4 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col lg:flex-row justify-around items-center gap-8 lg:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Image Section */}
          <motion.div 
            className="w-full lg:w-auto flex justify-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image
              src="/HomeImages/Frame 9.png"
              alt="Hot air balloon flight experience"
              width={500}
              height={500}
              className=" max-w-md lg:max-w-none h-auto"
              priority
            />
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Heading */}
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              ABOUT US
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-full lg:w-[500px]"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Sky Experience, More Than Just a Flight
              A hot-air balloon ride is much more than a simple journey. Sky Experience turns this aerial
              adventure into an unforgettable moment. Watch the sun rise over the Atlas Mountains, lush oases,
              and expansive palm groves surrounding the city. A truly unique view awaits, offering you a bird&apos;s-
              eye view of Marrakech&apos;s natural beauty.
            </motion.p>

            {/* CTA Section */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 lg:gap-80"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Button */}
              <motion.button 
                className="bg-[#f7802f] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e67329] transition-colors duration-300 shadow-md w-full sm:w-auto"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(247, 128, 47, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Check Details
              </motion.button>

              {/* Secondary Image */}
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Image
                  src="/HomeImages/Fichier 3.png"
                  alt="Additional sky experience view"
                  width={70}
                  height={70}
                  className="w-16 h-16 sm:w-[70px] sm:h-[70px]"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}