'use client'; // Убедитесь, что компонент выполняется на клиенте
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion'; // Импортируем motion
import { useInView } from 'react-intersection-observer'; // Импортируем useInView
import { Button } from '@/components/ui/button';
import { Mail, Send } from 'lucide-react';

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
      <div className="flex flex-row items-center md:gap-8 gap-4">
        <Link className='w-fit rounded-full' href={'https://t.me/zako_abb'}>
          <Button className='rounded-full md:w-16 md:h-16 w-8 h-8 md:p-4 p-0 bg-white hover:bg-zinc-400 text-black'><img className='md:w-8 md:h-8 w-4 h-4' src="/svgs/telegram.svg" alt=""/></Button>
        </Link>
        <Link type='mail' className='md:text-xl text-lg' href={'mailto:ceo@syntex-dev.ru'}>
          <Button className='rounded-full md:w-16 md:h-16 w-8 h-8 md:p-4 p-0 bg-white hover:bg-zinc-400 text-black'><img className='md:w-8 md:h-8 w-4 h-4' src="/svgs/mail.svg" alt="" /></Button>
        </Link>
      </div>

    </motion.div>
  );
};

export default Footer;