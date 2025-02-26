import { IconNode, LucideIcon } from 'lucide-react'
import React from 'react'

interface ServicesCardProps {
    title: string
    text: string
    number: string
    icon: LucideIcon
}

const ServicesCard = ({title, text, number, icon: Icon}: ServicesCardProps) => {
  return (
    <div className='flex flex-col'>
      <h3 className='text-6xl font-bold border-b border-zinc-800 pb-4 flex flex-row items-center'><span className='pr-8 text-lg align-top font-bold'>{number}</span>{title} <Icon size={32} className='mt-4 ml-4'/></h3>
      <div className="grid grid-cols-2 grid-rows-1 mt-4">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default ServicesCard