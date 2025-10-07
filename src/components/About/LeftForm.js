"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function LeftForm()  {
  return (
    <>
    <motion.div className="bg-transparent absolute translate-y-230  ">
      <motion.div className="relative bg-transparent w-[300px] h-[520px] rotate-180   ">
          <motion.div className="relative bg-transparent w-[300px] h-[480px] p-12 border border-39 border-[#b5aba5] rounded-xl border-r-[0] rounded-tr-[0] rounded-br-[0]   ">
              <motion.div className="relative bg-transparent w-[210px] h-[300px] p-12 border border-30 border-[#e9d1b9] rounded-xl border-r-[0] rounded-tr-[0] rounded-br-[0]">
                  <motion.div className="relative w-[0px] h-[150px]  p-12 border border-25 border-[#fcf6e6]  rounded-xl border-r-[0] rounded-tr-[0]  rounded-br-[0]">
        
                  </motion.div>
              </motion.div>
          </motion.div>
      </motion.div>
     </motion.div>
    </>
  )}