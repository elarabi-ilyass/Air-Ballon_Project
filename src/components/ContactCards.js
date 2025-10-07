'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContactForm() {
  const cardVariants = {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div 
      className="flex max-w-6xl mx-auto h-auto justify-center items-center gap-4 p-4 flex-col md:flex-row"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Address Card */}
      <motion.div 
        className="p-6 rounded-2xl bg-[#bf9e83] w-full md:w-1/3"
        variants={cardVariants}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      >
        <motion.div className="p-[34px] border-2 rounded-xl bg-white shadow-lg">
          <motion.h3 className="text-lg font-semibold mb-4">Address</motion.h3>
          <motion.div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Image
              src="/HomeImages/icons8-adresse 1.png"
              alt="icon card_contact"
              width={50}
              height={50}
              className="rounded-xl shadow-lg"
            />
            <motion.p className="text-center md:text-left">
              3ème Étage Bureau N° 16, Angle Bd Moulay Rachid, Marrakech 40000
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Office Hours Card */}
      <motion.div 
        className="p-6 rounded-2xl bg-[#bf9e83] w-full md:w-1/3"
        variants={cardVariants}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      >
        <motion.div className="p-8 border-2 rounded-xl bg-white shadow-lg">
          <motion.h3 className="text-lg font-semibold mb-4">Office Hour</motion.h3>
          <motion.div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Image
              src="/HomeImages/icons8-hour-60 1.png"
              alt="icon office hours"
              width={50}
              height={50}
              className="rounded-xl shadow-lg"
            />
            <motion.p className="text-center md:text-left">
              Monday - Friday: 9AM - 6PM<br />
              Saturday: 10AM - 4PM<br />
              Sunday: Closed
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Contact Card */}
      <motion.div 
        className="p-6 rounded-2xl bg-[#bf9e83] w-full md:w-1/3"
        variants={cardVariants}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      >
        <motion.div className="p-8 border-2 rounded-xl bg-white shadow-lg">
          <motion.h3 className="text-lg font-semibold mb-4">Contact</motion.h3>
          <motion.div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Image
              src="/HomeImages/icons8-carte-contact-50 1.png"
              alt="icon contact"
              width={50}
              height={50}
              className="rounded-xl shadow-lg"
            />
            <motion.p className="text-center md:text-left">
              Phone: +212 5XX-XXXXXX<br />
              Email: contact@example.com
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}