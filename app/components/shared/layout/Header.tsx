import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='sticky top-0 h-16 md:px-16 px-8 md:text-base text-sm flex flex-row items-center justify-between md:gap-8 gap-0 backdrop-blur-lg z-50'>
        <Link href={'#hero'}><img src='/textlogo.png' alt='logo' className='w-16'/></Link>
        <div className="md:flex hidden flex-row items-center gap-8">
            <Link href='#services'>Услуги</Link>
            <Link href='#projects'>Проекты</Link>
            <Link href='#partners'>Партнёры</Link>
        </div>
        <Button className='bg-white text-black hover:bg-zinc-200 transition-all duration-300 font-bold'>Создать проект</Button>
    </div>
  )
}

export default Header