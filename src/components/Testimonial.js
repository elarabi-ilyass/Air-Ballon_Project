'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonial() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [currentSlide, setCurrentSlide] = useState(0);

  // Testimonials Data
  const testimonials = [
    {
      id: 1,
      name: "Yossef Ait Bella",
      date: "Il ya 2 mois",
      image: "/HomeImages/image (4).png",
      text: "Definitely a bucket list experience. Everything went smoothly on the day. Jamal and the team were great, really friendly and checked in with us throughout the morning to check we were enjoying the experience. Good value for the money with breakfast and transfers included. Thank you to Jamal, the pilot and the rest of the team."
    },
    {
      id: 2,
      name: "Yossef Ait Bella",
      date: "Il ya 2 mois",
      image: "/HomeImages/image (4).png",
      text: "Definitely a bucket list experience. Everything went smoothly on the day. Jamal and the team were great, really friendly and checked in with us throughout the morning to check we were enjoying the experience. Good value for the money with breakfast and transfers included. Thank you to Jamal, the pilot and the rest of the team."
    },
    {
      id: 3,
      name: "Yossef Ait Bella",
      date: "Il ya 2 mois",
      image: "/HomeImages/image (4).png",
      text: "Definitely a bucket list experience. Everything went smoothly on the day. Jamal and the team were great, really friendly and checked in with us throughout the morning to check we were enjoying the experience. Good value for the money with breakfast and transfers included. Thank you to Jamal, the pilot and the rest of the team."
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Slider Functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      ref={sectionRef}
      className="bg-[#ded1c6] w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* ========== Section Header ========== */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4"
          >
            Client s Testimonials
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Providing The Best Services For Our Customers
          </motion.p>
        </div>

        {/* ========== Desktop View - Grid of Cards ========== */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 justify-center">
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              variants={cardVariants}
              className="w-full"
            >
              <motion.div  
                className="bg-center bg-no-repeat transition-all duration-500 p-6 sm:p-8 min-h-[300px] flex flex-col rounded-2xl"
                style={{ backgroundImage: "url('/HomeImages/BackgroundCard.png')" }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: 'easeOut' }
                }}
              >
                {/* Client Info Section */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-4">
                  {/* Profile Image */}
                  <motion.div 
                    className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex-shrink-0 mt-[-30px] rounded-2xl overflow-hidden"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover border-4 border-white"
                      priority
                      sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 96px"
                    />
                  </motion.div>

                  {/* Client Details */}
                  <div className="flex-1 text-center sm:text-left -mt-2 sm:mt-0">
                    <motion.h4 
                      className="text-sm underline underline-offset-1 sm:text-sm font-bold text-gray-900"
                      variants={itemVariants}
                    >
                      {testimonial.name}
                    </motion.h4>
                    <motion.p 
                      className="text-sm sm:text-sm text-gray-500 mb-1"
                      variants={itemVariants}
                    >
                      {testimonial.date}
                    </motion.p>

                    {/* Star Rating */}
                    <motion.div 
                      className="flex justify-center sm:justify-start gap-1"
                      variants={itemVariants}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          whileHover={{ scale: 1.2, rotate: 15 }}
                        >
                          <Star className="w-4 h-4 sm:w-3 sm:h-3 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>

                {/* Testimonial Text */}
                <motion.p 
                  variants={itemVariants}
                  className="text-gray-700 leading-relaxed text-xs sm:text-xs flex-grow"
                >
                  {testimonial.text}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* ========== Mobile & Tablet View - Slider ========== */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <motion.div 
              className="flex transition-transform duration-500 ease-out"
              animate={{ x: `-${currentSlide * 100}%` }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -1000) {
                  nextSlide();
                } else if (swipe > 1000) {
                  prevSlide();
                }
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 py-4 px-4"
                >
                  <motion.div  
                    className="bg-center bg-no-repeat transition-all duration-500 p-6 mx-auto w-full min-h-[300px] flex flex-col rounded-2xl"
                    style={{ backgroundImage: "url('/HomeImages/BackgroundCard.png')" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Client Info Section */}
                    <div className="flex gap-6 sm:flex-row items-center sm:items-start sm:gap-4 mb-4">
                      {/* Profile Image */}
                      <motion.div 
                        className="relative w-22 h-22 sm:w-20 sm:h-20 mt-[-43px] rounded-2xl overflow-hidden"
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          priority
                          sizes="(max-width: 640px) 64px, 80px"
                        />
                      </motion.div>

                      {/* Client Details */}
                      <div className="flex-1 text-left sm:text-left mt-2 sm:mt-0">
                        <motion.h4 
                          className="text-sm underline underline-offset-1 sm:text-sm font-bold text-gray-900"
                        >
                          {testimonial.name}
                        </motion.h4>
                        <motion.p 
                          className="text-sm sm:text-sm text-gray-500 mb-1"
                        >
                          {testimonial.date}
                        </motion.p>

                        {/* Star Rating */}
                        <motion.div 
                          className="flex justify-left sm:justify-start gap-1"
                        >
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 + i * 0.1 }}
                              whileHover={{ scale: 1.2, rotate: 15 }}
                            >
                              <Star className="w-4 h-4 sm:w-3 sm:h-3 fill-yellow-400 text-yellow-400" />
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <motion.p 
                      className="text-gray-700 leading-fixed text-xs sm:text-xs flex-grow"
                    >
                      {testimonial.text}
                    </motion.p>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Slider Navigation Arrows */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </motion.button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </motion.button>
          </div>
        </div>

        {/* ========== View More Button ========== */}
        <motion.div 
          className="text-center mt-8 sm:mt-12 lg:mt-16"
          variants={itemVariants}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg"
          >
            View All Testimonials
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}