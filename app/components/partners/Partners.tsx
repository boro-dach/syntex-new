'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer';

const Partners = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      id='partners'
      className='mt-16 flex flex-col md:px-16 px-8'
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants} 
    >
      <h2 className='text-center text-4xl font-bold mb-8'>Наши партнёры</h2>
      <div className='flex flex-row items-center justify-center grayscale md:gap-32 gap-8'>
        <img
          className='rounded-xl md:w-32 md:h-32 w-24 h-24'
          src={'/partners/xpay.png'}
          alt='XPAY'
        />
        <img
          className='rounded-xl md:w-32 md:h-32 w-24 h-24'
          src={'/partners/dyad_andrey.png'}
          alt='dyad_andrey'
        />
      </div>
    </motion.div>
  );
};

export default Partners;