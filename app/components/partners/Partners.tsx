'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

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
      className='mt-32 flex flex-col md:px-16 px-8'
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants} 
    >
      <h2 className='text-center text-4xl font-bold mb-8'>НАШИ ПАРТНЁРЫ</h2>
      <div className='flex flex-row items-center justify-center grayscale md:gap-32 gap-8'>
        <Link href='https://ezepay.org/'>
          <img
            className='rounded-xl md:w-32 md:h-32 w-24 h-24'
            src={'/partners/ezepay.png'}
            alt='EzePay'
          />
        </Link>
        <Link href='https://t.me/BAZADYADKI'>
          <img
            className='rounded-xl md:w-32 md:h-32 w-24 h-24'
            src={'/partners/dyad_andrey.png'}
            alt='dyad_andrey'
          />
        </Link>
      </div>
    </motion.div>
  );
};

export default Partners;