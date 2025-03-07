import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Menu } from 'lucide-react'

const Header = () => {
  return (
    <div className='sticky top-0 h-16 md:px-16 px-8 md:text-base text-sm flex flex-row items-center justify-between md:gap-8 gap-0 backdrop-blur-lg z-50'>
        <Link href={'#hero'}><img src='/textlogo.png' alt='logo' className='w-16'/></Link>
        <div className="md:flex hidden flex-row items-center gap-8">
            <Link href='#services'>Услуги</Link>
            <Link href='#projects'>Проекты</Link>
            <Link href='#partners'>Партнёры</Link>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Button className='bg-white text-black hover:bg-zinc-200 transition-all duration-300 font-bold'>Создать проект</Button>
            <div className="md:hidden block">
              <DropdownMenu>
                <DropdownMenuTrigger className='border border-zinc-800 rounded-md p-2'>
                  <Menu/>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='bg-black text-white border-zinc-800'>
                  <DropdownMenuItem className='bg-black'><Link href='#services'>Услуги</Link></DropdownMenuItem>
                  <DropdownMenuItem className='bg-black'><Link href='#projects'>Проекты</Link></DropdownMenuItem>
                  <DropdownMenuItem className='bg-black'><Link href='#partners'>Партнёры</Link></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
        </div>
    </div>
  )
}

export default Header