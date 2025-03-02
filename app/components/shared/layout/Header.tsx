import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='sticky top-0 h-16 px-16 flex flex-row items-center justify-between gap-8 backdrop-blur-lg z-50'>
        <Link href={'#hero'}><Image src='/textlogo.png' alt='logo' width={100} height={100} /></Link>
        <div className="flex flex-row items-center gap-8">
            <Link href='#services'>Услуги</Link>
            <Link href='#projects'>Проекты</Link>
            <Link href='#partners'>Партнёры</Link>
        </div>
        <Button className='bg-white text-black hover:bg-zinc-200 transition-all duration-300 font-bold'>Создать проект</Button>
    </div>
  )
}

export default Header