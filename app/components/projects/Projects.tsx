'use client';
import ProjectsCard from './ProjectsCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';
import { motion } from 'framer-motion'; // Импортируем motion
import { useInView } from 'react-intersection-observer'; // Импортируем useInView

const Projects = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

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
      id='projects'
      className='mt-16 flex flex-col px-16'
      ref={ref} // Привязываем ref к компоненту
      initial="hidden" // Начальное состояние
      animate={inView ? 'visible' : 'hidden'} // Анимация при появлении
      variants={variants} // Варианты анимации
    >
      <h2 className='text-center text-4xl font-bold mb-8'>Наши проекты</h2>
      <Carousel
        className='max-w-full'
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={() => { plugin.current.play() }}
      >
        <CarouselContent>
          <CarouselItem className='pl-4 basis-1/2'>
            <ProjectsCard title='Чат-Бот "Магаз Дядюшки v2"' imageSrc='/uc_shop.png' linkHref='https://t.me/syntex_devlogs/14' />
          </CarouselItem>
          <CarouselItem className='pl-4 basis-1/2'>
            <ProjectsCard title='Чат-Бот "Халява Дядюшки v2"' imageSrc='/free.png' linkHref='https://t.me/syntex_devlogs/6' />
          </CarouselItem>
          <CarouselItem className='pl-4 basis-1/2'>
            <ProjectsCard title='Чат-Бот "Халява от Кошмара v2"' imageSrc='/free_koshmar.png' linkHref='https://t.me/syntex_devlogs/12' />
          </CarouselItem>
        </CarouselContent>
        <div className="flex justify-center gap-4 mt-6 text-black">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </motion.div>
  );
};

export default Projects;