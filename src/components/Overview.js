'use client';

import { motion } from 'framer-motion';

export default function Catalogue() {
  const experienceItems = [
    {
      icon: '🌟',
      title: 'Private VIP Transfer',
      description: 'Enjoy seamless transport in a luxury vehicle from your hotel or riad, ensuring comfort and style from the start.'
    },
    {
      icon: '☕',
      title: 'Elegant Welcome',
      description: 'Begin your journey with a warm Moroccan welcome featuring traditional refreshments and personalized service.'
    },
    {
      icon: '🎈',
      title: 'Exclusive Balloon Preparation',
      description: 'Witness the majestic inflation of your private hot-air balloon while our crew ensures every detail is perfect.'
    },
    {
      icon: '👨‍✈️',
      title: 'Dedicated Pilot & Safety Briefing',
      description: 'Meet your experienced pilot and receive a comprehensive safety briefing in a comfortable, relaxed environment.'
    },
    {
      icon: '🌄',
      title: 'One-Hour Royal Flight',
      description: 'Soar above breathtaking landscapes for a full hour, capturing unforgettable views and moments in complete luxury.'
    },
    {
      icon: '🍽️',
      title: 'Gourmet Breakfast in the Sky',
      description: 'Savor a delicious breakfast prepared with local ingredients while enjoying panoramic views from your balloon.'
    },
    {
      icon: '🎓',
      title: 'Prestige Flight Certificate',
      description: 'Receive a beautifully crafted certificate commemorating your royal hot-air balloon adventure.'
    }
  ];

  return (
    <div className="min-h-screen  py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          className="text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
            Overview
          </h1>
          
          <div className="">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-800 ">
              The Royal Hot-Air Balloon Experience
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-justify">
              <span className="font-semibold text-amber-600">Elevate Your Journey. Embrace the Skies.</span>
              <br />
              Step into a world where luxury meets wonder. The Royal Hot-Air Balloon Flight isn&apos;t just a ride—it&apos;s a curated moment of
              pure indulgence, designed for those who seek the extraordinary. From your private pick-up to the final champagne toast,
              every detail is tailored to create an unforgettable escape above Moroccos&apos; most iconic landscapes.
            </p>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-xl sm:text-xl font-bold text-amber-800 mb-2 text-left">
            Your Royal Experience Includes:
          </h2>

          <div className="space-y-6 sm:space-y-2">
            {experienceItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col "
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-2 sm:gap-1   sm:items-center sm:text-center">
                  <span className="text-lg sm:text-lg">{item.icon}</span>
                  <h3 className="text- font-bold text-amber-800  sm:text-sm sm:font-semibold">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed flex-1 sm:pl-4">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Simple CTA
        <motion.div 
          className="text-center mt-12 pt-8 border-t border-amber-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg sm:text-xl text-amber-700 mb-4">
            Ready for your royal adventure?
          </p>
          <motion.button
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Experience
          </motion.button>
        </motion.div> */}

      </div>
    </div>
  );
}