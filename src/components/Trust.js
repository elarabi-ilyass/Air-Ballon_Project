'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Trust() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imagesRef = useRef([]);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!headingRef.current || imagesRef.current.length === 0) return;

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      // Stagger images animation
      gsap.from(imagesRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.15,
        ease: 'back.out(1.2)'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const logos = [
    { src: '/HomeImages/airbnb.png', alt: 'Airbnb' },
    { src: '/HomeImages/booking-com.png', alt: 'Booking.com' },
    { src: '/HomeImages/tripadvisor.png', alt: 'TripAdvisor' },
    { src: '/HomeImages/get-your-guide-seeklogo 1.png', alt: 'Get Your Guide' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="bg-[#f5f5dc] w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Heading Section */}
        <div ref={headingRef} className="text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.h3 
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4"
          >
            Trusted By
          </motion.h3>
          <motion.p 
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4"
          >
            With award winning services we are trusted by many companies
          </motion.p>
        </div>

        {/* Logos Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center justify-items-center"
          variants={containerVariants}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.alt}
              ref={el => imagesRef.current[index] = el}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.08,
                y: -5,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[240px] lg:max-w-[260px]"
            >
              <div className="relative bg-transparent rounded-xl  hover:shadow-xl transition-shadow duration-300 p-4 sm:p-5 lg:p-6 aspect-[4/3] flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={240}
                  height={180}
                  className="w-full h-full object-contain filter  hover:grayscale-0 transition-all duration-500"
                  priority={index < 2}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}