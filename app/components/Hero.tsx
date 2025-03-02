import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div id='hero' className='grid grid-cols-2 grid-rows-1 mt-24 px-16 text-white'>
        <div className="flex flex-col justify-center">
            <p className='text-zinc-400'>Более 100 успешных проектов под нашим руководством</p>
            <h1 className='text-5xl font-bold'>Интеллектуальные решения для автоматизации и цифровых интеграций</h1>
            <h2 className='mt-4 mb-8'>SynTex Develop - эксперт в разработке Telegram-ботов, API, систем автоматизации и парсеров. Мы помогаем бизнесам оптимизировать процессы, интегрировать цифровые инструменты и достигать новых высот с помощью интеллектуальных решений, созданных под ваши уникальные задачи</h2>
            <div className="grid grid-cols-2 grid-rows-1 gap-4">
                <Button className='bg-white text-black hover:bg-zinc-200 transition-all duration-300 font-bold'>Создать проект</Button>
                <Link className='block w-full' href='#projects'>
                  <Button className='bg-black text-white border border-zinc-800 hover:bg-zinc-900 transition-all duration-300 font-bold w-full'>Примеры работ</Button>
                </Link>
            </div>
        </div>
        <video autoPlay muted loop src="/syntex_animation.mp4"></video>
    </div>
  )
}

export default Hero