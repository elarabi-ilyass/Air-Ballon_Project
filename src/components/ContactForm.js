'use client';

import { motion } from 'framer-motion';

export default function ContactForm() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
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
      className="bg-[#f7eae1] max-w-6xl mx-auto h-auto rounded-4xl  flex items-center justify-center  px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="max-w-5xl w-full mx-auto my-12 p-6 sm:p-8 md:p-12 bg-[#f7eae1] rounded-lg"
        variants={itemVariants}
      >
        {/* Header Section */}
        <motion.div className="text-center mb-8" variants={itemVariants}>
          <motion.h1 
            className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800"
            variants={itemVariants}
          >
            Contact us
          </motion.h1>
          
          <motion.h2 
            className="text-xl sm:text-2xl font-semibold mb-4 text-gray-700 text-left"
            variants={itemVariants}
          >
            Get in Touch With Us
          </motion.h2>
          
          <motion.div className="text-left  sm:ml-12" variants={itemVariants}>
            <motion.p 
              className="text-base ml- sm:text-lg mb-2 text-gray-600"
              variants={itemVariants}
            >
              Planning your balloon adventure or just have a quick question?
            </motion.p>
            
            <motion.p 
              className="text-base sm:text-lg mb-6 text-gray-600"
              variants={itemVariants}
            >
              We'll get back to you faster than a balloon lifts off at sunrise.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Form Section */}
        <motion.div 
          className="flex justify-center"
          variants={itemVariants}
        >
          <motion.form 
            className="flex flex-col gap-6 w-full max-w-2xl mx-auto"
            variants={containerVariants}
          >
            <motion.h2 
              className="text-xl sm:text-2xl text-center font-semibold mb-4 text-gray-800"
              variants={itemVariants}
            >
              Send a message
            </motion.h2>
            
            {/* Request Details */}
            <motion.div className="flex flex-col" variants={itemVariants}>
              <motion.label 
                className="font-medium mb-2 text-gray-700 text-lg"
                variants={itemVariants}
              >
                The details of your request
              </motion.label>
              <motion.textarea 
                className="w-full bg-[#fefff1] h-32 p-3 border border-2 border-black rounded-2xl resize-none 
                         focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent
                         transition-all duration-300"
                placeholder="Tell us about your inquiry..."
                whileFocus={{ scale: 1.01 }}
                variants={itemVariants}
              />
            </motion.div>
            
            {/* Name Fields - Responsive row */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-between"
              variants={itemVariants}
            >
              <motion.div className="flex-1 min-w-0"> 
                <motion.label 
                  className="font-medium mb-2 block text-gray-700"
                  variants={itemVariants}
                >
                  First name
                </motion.label>
                <motion.input 
                  type="text" 
                  className="w-full p-3 bg-[#fefff1] border border-2 border-black rounded-md
                           focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent
                           transition-all duration-300"
                  placeholder="Enter your first name"
                  whileFocus={{ scale: 1.01 }}
                  variants={itemVariants}
                />
              </motion.div>
              
              <motion.div className="flex-1 min-w-0"> 
                <motion.label 
                  className="font-medium mb-2 block text-gray-700"
                  variants={itemVariants}
                >
                  Last name
                </motion.label>
                <motion.input 
                  type="text" 
                  className="w-full p-3 bg-[#fefff1] border border-2 border-black rounded-md
                           focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent
                           transition-all duration-300"
                  placeholder="Enter your last name"
                  whileFocus={{ scale: 1.01 }}
                  variants={itemVariants}
                />
              </motion.div>
            </motion.div>
            
            {/* Contact Fields - Responsive row */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-between"
              variants={itemVariants}
            >
              <motion.div className="flex-1 min-w-0"> 
                <motion.label 
                  className="font-medium mb-2 block text-gray-700"
                  variants={itemVariants}
                >
                  Phone
                </motion.label>
                <motion.input 
                  type="tel" 
                  className="w-full p-3 bg-[#fefff1] border border-2 border-black rounded-md
                           focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent
                           transition-all duration-300"
                  placeholder="Enter your phone number"
                  whileFocus={{ scale: 1.01 }}
                  variants={itemVariants}
                />
              </motion.div>
              
              <motion.div className="flex-1 min-w-0"> 
                <motion.label 
                  className="font-medium mb-2 block text-gray-700"
                  variants={itemVariants}
                >
                  Email
                </motion.label>
                <motion.input 
                  type="email" 
                  className="w-full bg-[#fefff1] p-3 border border-2 border-black rounded-md
                           focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent
                           transition-all duration-300"
                  placeholder="Enter your email"
                  whileFocus={{ scale: 1.01 }}
                  variants={itemVariants}
                />
              </motion.div>
            </motion.div>

            {/* Submit Button */}
            <motion.button 
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-8 rounded-md 
                       transition-all duration-300 transform hover:scale-105 active:scale-95
                       focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
                       self-center mt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              Envoyer
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}