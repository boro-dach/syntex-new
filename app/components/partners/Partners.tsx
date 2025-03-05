'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion'; // Импортируем motion
import { useInView } from 'react-intersection-observer'; // Импортируем useInView

const Partners = () => {
  // Используем useInView для отслеживания видимости компонента
  const [ref, inView] = useInView({
    triggerOnce: true, // Анимация сработает только один раз
    threshold: 0.1, // Порог видимости (10%)
  });

  // Варианты анимации
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      id='partners'
      className='mt-16 flex flex-col px-16'
      ref={ref} // Привязываем ref к компоненту
      initial="hidden" // Начальное состояние
      animate={inView ? 'visible' : 'hidden'} // Анимация при появлении
      variants={variants} // Варианты анимации
    >
      <h2 className='text-center text-4xl font-bold mb-8'>Наши партнёры</h2>
      <div className='flex flex-row items-center justify-center grayscale gap-32'>
        <Image
          className='rounded-xl'
          src={'/partners/xpay.png'}
          width={128}
          height={128}
          alt='XPAY'
        />
        <Image
          className='rounded-xl'
          src={'/partners/dyad_andrey.png'}
          width={128}
          height={128}
          alt='dyad_andrey'
        />
      </div>
    </motion.div>
  );
};

export default Partners;