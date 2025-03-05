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
      ref={ref} // Привязываем ref к компоненту
      initial="hidden" // Начальное состояние
      animate={inView ? 'visible' : 'hidden'} // Анимация при появлении
      variants={variants} // Варианты анимации
    >
      <h2 className='text-5xl font-bold my-8'>Связаться с нами:</h2>
      <Link className='underline mb-4 w-fit text-xl' href={'https://t.me/zako_abb'}>
        https://t.me/zako_abb
      </Link>
      <Link type='mail' className='underline w-fit text-xl' href={'mailto:ceo@syntex-dev.ru'}>
        ceo@syntex-dev.ru
      </Link>
    </motion.div>
  );
};

export default Footer;