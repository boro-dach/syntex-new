'use client'

import { motion } from 'framer-motion'; // Импортируем framer-motion
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  // Варианты анимации для текстов
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div id='hero' className='grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-1 mt-24 md:px-16 px-8 text-white'>
      <div className="flex flex-col justify-center">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={{ ...textVariants, visible: { ...textVariants.visible, transition: { delay: 1 } } }}
          className='text-zinc-400 md:text-base text-xs'
        >
          Более 100 успешных проектов под нашим руководством
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{ ...textVariants, visible: { ...textVariants.visible, transition: { delay: 0.2 } } }}
          className='md:text-5xl text-2xl font-bold'
        >
          Интеллектуальные решения для автоматизации и цифровых интеграций
        </motion.h1>

        <motion.h2
          initial="hidden"
          animate="visible"
          variants={{ ...textVariants, visible: { ...textVariants.visible, transition: { delay: 0.5 } } }}
          className='mt-4 mb-8 md:text-base text-sm'
        >
          SynTex Develop - эксперт в разработке Telegram-ботов, API, систем автоматизации и парсеров. Мы помогаем бизнесам оптимизировать процессы, интегрировать цифровые инструменты и достигать новых высот с помощью интеллектуальных решений, созданных под ваши уникальные задачи
        </motion.h2>

        {/* Анимированные кнопки */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ ...textVariants, visible: { ...textVariants.visible, transition: { delay: 1 } } }}
          className="grid grid-cols-2 grid-rows-1 gap-4"
        >
          <Button className='bg-white text-black hover:bg-zinc-200 transition-all duration-300 font-bold'>
            Создать проект
          </Button>
          <Link className='block w-full' href='#projects'>
            <Button className='bg-black text-white border border-zinc-800 hover:bg-zinc-900 transition-all duration-300 font-bold w-full'>
              Примеры работ
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Правая часть с видео */}
      <motion.div
        className='md:block hidden'
        initial="hidden"
        animate="visible"
        variants={{ ...textVariants, visible: { ...textVariants.visible, transition: { delay: 0.8 } } }}
      >
        <video autoPlay muted loop src="/syntex_animation.mp4"></video>
      </motion.div>
    </div>
  );
};

export default Hero;