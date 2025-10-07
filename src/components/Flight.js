'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Données des vols
const flightData = [
  {
    id: 1,
    title: "Royal Hot-Air Balloon Flight in Marrakech",
    price: "$450",
    image: "/HomeImages/image.png",
    features: [
 {
        icon: "/HomeImages/Casaque.png",
        title: "Transport",
        description: "Private round-trip transport in a luxury vehicle from your hotel or riad."
      },
      {
        icon: "/HomeImages/petit-déjeuner-64 3.png",
        title: "Breakfast",
        description: "Traditional Moroccan breakfast served in a Berber tent."
      },
      {
        icon: "/HomeImages/voiture.png",
        title: "Flight Certificate",
        description: "Official flight certificate as a souvenir of your experience."
      },
      {
        icon: "/HomeImages/icons8-présent-30 3.png",
        title: "Professional Photos",
        description: "High-quality photos of your flight experience."
      }
    ]
  },
    {
    id: 2,
    title: "Royal Hot-Air Balloon Flight in Marrakech",
    price: "$450",
    image: "/HomeImages/image.png",
    features: [
      {
        icon: "/HomeImages/Casaque.png",
        title: "Transport",
        description: "Private round-trip transport in a luxury vehicle from your hotel or riad."
      },
      {
        icon: "/HomeImages/petit-déjeuner-64 3.png",
        title: "Breakfast",
        description: "Traditional Moroccan breakfast served in a Berber tent."
      },
      {
        icon: "/HomeImages/voiture.png",
        title: "Flight Certificate",
        description: "Official flight certificate as a souvenir of your experience."
      },
      {
        icon: "/HomeImages/icons8-présent-30 3.png",
        title: "Professional Photos",
        description: "High-quality photos of your flight experience."
      }
    ]
  },
    {
    id: 3,
    title: "Royal Hot-Air Balloon Flight in Marrakech",
    price: "$450",
    image: "/HomeImages/image.png",
    features: [
     {
        icon: "/HomeImages/Casaque.png",
        title: "Transport",
        description: "Private round-trip transport in a luxury vehicle from your hotel or riad."
      },
      {
        icon: "/HomeImages/petit-déjeuner-64 3.png",
        title: "Breakfast",
        description: "Traditional Moroccan breakfast served in a Berber tent."
      },
      {
        icon: "/HomeImages/voiture.png",
        title: "Flight Certificate",
        description: "Official flight certificate as a souvenir of your experience."
      },
      {
        icon: "/HomeImages/icons8-présent-30 3.png",
        title: "Professional Photos",
        description: "High-quality photos of your flight experience."
      }
    ]
  }

];

// Variants d'animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    transition: {
      duration: 0.3
    }
  }
};

export default function Flight() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Title Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Our Flight
        </motion.h2>
        <motion.div 
          className="w-24 h-1 bg-[#a7341c] mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />
      </motion.div>

      {/* Flight Cards */}
      <motion.div
        className="flex justify-center flex-wrap space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {flightData.map((flight) => (
          <motion.div
            key={flight.id}
            className="bg-[#eec09a] rounded-2xl overflow-hidden shadow-xl"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="p-6 sm:p-8">
              {/* Flight Header */}
              <motion.div variants={itemVariants} className="mb-6">
                <motion.h3 
                  className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center lg:text-left"
                  whileHover={{ color: "#a7341c" }}
                  transition={{ duration: 0.3 }}
                >
                  {flight.title}
                </motion.h3>
              </motion.div>

              <div className="flex flex-col lg:flex-row gap-6">
                {/* Image Section */}
                <motion.div 
                  className="flex justify-center lg:justify-start"
                  variants={itemVariants}
                >
                  <div className="relative">
                    <Image
                      src={flight.image}
                      alt={flight.title}
                      width={300}
                      height={200}
                      className="rounded-xl shadow-lg"
                      priority
                    />
                    {/* Price Badge */}
                    <motion.div 
                      className="absolute -top-7 -right-[450px]  px-4 py-2 "
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.h4 className="text-lg font-bold">
                        Price: <span className="text-[#a7341c]">{flight.price}</span>
                      </motion.h4>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Features Section */}
                <motion.div 
                  className="flex-1"
                  variants={containerVariants}
                >
                  <div className="">
                    {flight.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex w-full items-start space-x-4 p-4  transition-colors duration-300"
                        variants={itemVariants}
                        whileHover={{ x: 5 }}
                      >
                        {/* Icon */}
                        <motion.div
                          className="flex-shrink-0"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Image
                            src={feature.icon}
                            alt={feature.title}
                            width={40}
                            height={40}
                            className="w-6 h-6 sm:w-6 sm:h-6"
                          />
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1">
                          <motion.h4 
                            className="text-xs font-semibold text-gray-900 mb-1"
                            whileHover={{ color: "#a7341c" }}
                          >
                            {feature.title}
                          </motion.h4>
                          <motion.p className="text-gray-700 text-xs sm:text-xs leading-relaxed">
                            {feature.description}
                          </motion.p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Book Button */}
                  <motion.div 
                    className="mt-6 text-center lg:text-right"
                    variants={itemVariants}
                  >
                    <motion.button
                      className="bg-[#a7341c] hover:bg-[#8a2b18] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-colors duration-300"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 25px rgba(167, 52, 28, 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book This Flight
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Flight Cards can be added here */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.button
          className="border-2 border-[#a7341c] text-[#a7341c] hover:bg-[#a7341c] hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Flights
        </motion.button>
      </motion.div>
    </section>
  );
}