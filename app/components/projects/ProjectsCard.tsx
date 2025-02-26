import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface ProjectsCardProps {
    title: string
    linkHref: string
    imageSrc: string
}

const ProjectsCard = ({title, linkHref, imageSrc}: ProjectsCardProps) => {
  return (
    <div className='flex flex-row gap-8'>
        <Image src={imageSrc} alt={title} width={384} height={384} className='rounded-xl'/>
        <div className="flex flex-col">
            <h3 className='text-2xl font-bold mb-2'>{title}</h3>
            <p >Узнать больше: <Link className='underline' href={linkHref}>{linkHref}</Link></p>
        </div>
    </div>
  )
}

export default ProjectsCard