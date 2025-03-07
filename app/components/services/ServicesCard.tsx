'use client';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ServicesCardProps {
    title: string
    text: string
    number: string
}

const ServicesCard = ({title, text, number}: ServicesCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Collapsible 
      className='flex flex-col transition-all duration-300 border-b border-zinc-800' 
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <CollapsibleTrigger className="w-full text-left">
        <h3 className='md:text-6xl text-2xl font-bold flex flex-row items-center pb-4'>
          <span className='pr-8 md:text-lg text-sm align-top font-bold'>{number}</span>
          {title.toUpperCase()}
        </h3>
      </CollapsibleTrigger>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <CollapsibleContent forceMount asChild>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: 'auto', 
                opacity: 1,
                transition: { 
                  height: { duration: 0.3 },
                  opacity: { duration: 0.3, delay: 0.1 }
                }
              }}
              exit={{ 
                height: 0, 
                opacity: 0,
                transition: {
                  height: { duration: 0.3 },
                  opacity: { duration: 0.2 }
                }
              }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-2 grid-rows-1 pb-4 md:text-base text-sm">
                <p>{text}</p>
              </div>
            </motion.div>
          </CollapsibleContent>
        )}
      </AnimatePresence>
    </Collapsible>
  )
}

export default ServicesCard