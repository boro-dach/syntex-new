import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { LucideIcon } from 'lucide-react'

interface ServicesCardProps {
    title: string
    text: string
    number: string
    icon: LucideIcon
}

const ServicesCard = ({title, text, number, icon: Icon}: ServicesCardProps) => {
  return (
    <Collapsible className='flex flex-col'>
      <CollapsibleTrigger><h3 className='text-6xl font-bold border-b border-zinc-800 pb-4 flex flex-row items-center'><span className='pr-8 text-lg align-top font-bold'>{number}</span>{title} <Icon size={32} className='mt-4 ml-4'/></h3></CollapsibleTrigger>
      <CollapsibleContent className="grid grid-cols-2 grid-rows-1 mt-4">
        <p>{text}</p>
      </CollapsibleContent>
    </Collapsible>
  )
}

export default ServicesCard