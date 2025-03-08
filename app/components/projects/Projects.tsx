'use client';
import ProjectsCard from './ProjectsCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';
import { motion } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer'; 

const Projects = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

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
      id='projects'
      className='md:mt-16 mt-24 flex flex-col md:px-16 px-8'
      ref={ref} 
      initial="hidden" 
      animate={inView ? 'visible' : 'hidden'} 
      variants={variants} 
    >
      <h2 className='text-center text-4xl font-bold mb-8'>НАШИ ПРОЕКТЫ</h2>
      <Carousel
        className='max-w-full'
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={() => { plugin.current.play() }}
      >
        <CarouselContent className='mb-4 max-w-full'>
          <CarouselItem className='pl-4 md:basis-1/2 basis-1/1 max-w-full'>
            <ProjectsCard title='Чат-Бот "Магаз Дядюшки v2"' imageSrc='/projects/uc_shop.png' linkHref='https://t.me/syntex_devlogs/14' />
          </CarouselItem>
          <CarouselItem className='pl-4 basis-1/2 basis-1/1'>
            <ProjectsCard title='Чат-Бот "Халява Дядюшки v2"' imageSrc='/projects/free.png' linkHref='https://t.me/syntex_devlogs/6' />
          </CarouselItem>
          <CarouselItem className='pl-4 basis-1/2 basis-1/1'>
            <ProjectsCard title='Чат-Бот "Халява от Кошмара v2"' imageSrc='/projects/free_koshmar.png' linkHref='https://t.me/syntex_devlogs/12' />
          </CarouselItem>
          <CarouselItem className='pl-4 basis-1/2 basis-1/1'>
            <ProjectsCard title='Чат-Бот "Турниры от Кошмара"' imageSrc='/projects/tournaments.png' linkHref='https://t.me/syntex_devlogs/15' />
          </CarouselItem>
          <CarouselItem className='pl-4 basis-1/2 basis-1/1'>
            <ProjectsCard title='Веб-сайт "TitanTrucks"' imageSrc='/projects/titantrucks.png' linkHref='https://t.me/syntex_devlogs/18' />
          </CarouselItem>
          <CarouselItem className='pl-4 basis-1/2 basis-1/1'>
            <ProjectsCard title='Чат-Бот "SyNET" и система' imageSrc='/projects/synet.png' linkHref='https://t.me/synet_tech' />
          </CarouselItem>
          <CarouselItem className='pl-4 basis-1/2 basis-1/1'>
            <ProjectsCard title='Чат-Бот "Кошмар UC Shop"' imageSrc='/projects/koshmar_uc.jpg' linkHref='https://t.me/synet_tech' />
          </CarouselItem>
          <CarouselItem className='pl-4 basis-1/2 basis-1/1'>
            <ProjectsCard title='Чат-Бот "AURORA UC SHOP"' imageSrc='/projects/aurora_uc.png' linkHref='https://t.me/auroramagaz_bot' />
          </CarouselItem>
        </CarouselContent>
        <div className="flex justify-center gap-4 text-black">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </motion.div>
  );
};

export default Projects;