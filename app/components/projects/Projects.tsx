'use client'

import { useState } from 'react'
import ProjectsCard from './ProjectsCard'
import { Collapsible } from '@radix-ui/react-collapsible'
import { CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'

const Projects = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  function handleOpen() {
    setIsOpen(!isOpen)
  }

  return (
    <div id='projects' className='mt-16 flex flex-col px-16 '>
        <h2 className='text-center text-4xl font-bold mb-8'>Наши проекты</h2>
        <Collapsible className='flex flex-col gap-8 items-center'>
          <ProjectsCard title='Чат-Бот "Магаз Дядюшки v2"' imageSrc='/uc_shop.png' linkHref='https://t.me/syntex_devlogs/14'/>
          <ProjectsCard title='Чат-Бот "Халява Дядюшки v2"' imageSrc='/free.png' linkHref='https://t.me/syntex_devlogs/6'/>
          <ProjectsCard title='Чат-Бот "Халява от Кошмара v2"' imageSrc='/free_koshmar.png' linkHref='https://t.me/syntex_devlogs/12'/>
          <CollapsibleContent className='flex flex-col gap-8 items-center'>
            <ProjectsCard title='Чат-Бот "Магаз Дядюшки v2"' imageSrc='/uc_shop.png' linkHref='https://t.me/syntex_devlogs/14'/>
            <ProjectsCard title='Чат-Бот "Халява Дядюшки v2"' imageSrc='/free.png' linkHref='https://t.me/syntex_devlogs/6'/>
            <ProjectsCard title='Чат-Бот "Халява от Кошмара v2"' imageSrc='/free_koshmar.png' linkHref='https://t.me/syntex_devlogs/12'/>
          </CollapsibleContent>
          <CollapsibleTrigger asChild>
            <Button onClick={handleOpen} className=''>Показать {(isOpen ? 'ещё' : 'меньше')}</Button>
          </CollapsibleTrigger>
        </Collapsible>
    </div>
  )
}

export default Projects