'use client'
import ProjectsCard from './ProjectsCard'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from '@/components/ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import React from 'react'

const Projects = () => {

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )
  
  return (
    <div id='projects' className='mt-16 flex flex-col px-16'>
      <h2 className='text-center text-4xl font-bold mb-8'>Наши проекты</h2>
      <Carousel 
        className='max-w-full'
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={() => {plugin.current.play()}}
      >
        <CarouselContent>
          <CarouselItem className='pl-4 basis-1/2'>
            <ProjectsCard title='Чат-Бот "Магаз Дядюшки v2"' imageSrc='/uc_shop.png' linkHref='https://t.me/syntex_devlogs/14'/>
          </CarouselItem>
          <CarouselItem className='pl-4 basis-1/2'>
            <ProjectsCard title='Чат-Бот "Халява Дядюшки v2"' imageSrc='/free.png' linkHref='https://t.me/syntex_devlogs/6'/>
          </CarouselItem>
          <CarouselItem className='pl-4 basis-1/2'>
            <ProjectsCard title='Чат-Бот "Халява от Кошмара v2"' imageSrc='/free_koshmar.png' linkHref='https://t.me/syntex_devlogs/12'/>
          </CarouselItem>
        </CarouselContent>
        <div className="flex justify-center gap-4 mt-6 text-black">
          <CarouselPrevious className="static translate-y-0"/>
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </div>
  )
}

export default Projects