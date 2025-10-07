'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactQuestion() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "How long does a hot-air balloon ride in Marrakech last?",
      answer: "Typically, a hot-air balloon ride in Marrakech lasts about 1 hour in the air, with the entire experience including preparation and celebration taking 3-4 hours."
    },
    {
      question: "What altitude can we expect to fly at during a hot-air balloon ride in Marrakech?",
      answer: "Balloons usually fly at altitudes between 500 and 2,000 feet, providing spectacular views while maintaining comfort and safety."
    },
    {
      question: "What's the best time of year for a hot-air balloon ride in Marrakech?",
      answer: "The best time is from September to November and March to May when weather conditions are ideal with calm winds and clear skies."
    },
    {
      question: "Are there age restrictions for hot-air balloon rides in Marrakech?",
      answer: "Children must be at least 6 years old and accompanied by an adult. There's no upper age limit for those in good health."
    },
    {
      question: "What should I wear for a hot-air balloon flight in Marrakech?",
      answer: "Wear comfortable clothing, closed-toe shoes, and dress in layers as it can be cool in the morning but warm up quickly."
    },
    {
      question: "Are there any weight restrictions for hot-air balloon flights in Marrakech?",
      answer: "Yes, there are weight restrictions for safety. Typically, individual weight should not exceed 120kg, and total basket capacity is limited."
    }
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800"
        variants={itemVariants}
      >
        Frequently Asked Questions
      </motion.h1>

      <motion.div 
        className="space-y-4"
        variants={containerVariants}
      >
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            variants={itemVariants}
          >
            <motion.button
              className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              whileHover={{ backgroundColor: "#f9fafb" }}
              whileTap={{ scale: 0.99 }}
            >
              <motion.span 
                className="text-lg font-medium text-gray-800 pr-4"
              >
                {item.question}
              </motion.span>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-500 text-xl font-bold"
              >
                ▼
              </motion.span>
            </motion.button>

            <motion.div
              initial={false}
              animate={{ 
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <motion.div 
                className="px-6 py-4 bg-gray-50 border-t border-gray-100"
              >
                <motion.p 
                  className="text-gray-600 leading-relaxed"
                >
                  {item.answer}
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}