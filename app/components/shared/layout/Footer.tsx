'use client'; // Убедитесь, что компонент выполняется на клиенте
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion'; // Импортируем motion
import { useInView } from 'react-intersection-observer'; // Импортируем useInView

const Footer = () => {
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
      id='footer'
      className='my-8 flex flex-col px-16 border-t border-zinc-400'
      ref={ref} 
      initial="hidden" 
      animate={inView ? 'visible' : 'hidden'} 
      variants={variants} 
    >
      <h2 className='md:text-5xl text-2xl font-bold mt-8 md:mb-8 mb-4'>СВЯЗАТЬСЯ С НАМИ:</h2>
      <Link className='underline mb-4 w-fit md:text-xl text-lg' href={'https://t.me/zako_abb'}>
        https://t.me/zako_abb
      </Link>
      <Link type='mail' className='underline w-fit md:text-xl text-lg' href={'mailto:ceo@syntex-dev.ru'}>
        ceo@syntex-dev.ru
      </Link>
    </motion.div>
  );
};

export default Footer;