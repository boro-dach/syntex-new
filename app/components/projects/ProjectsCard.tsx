import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ProjectsCardProps {
    title: string
    linkHref: string
    imageSrc: string
}

const ProjectsCard = ({title, linkHref, imageSrc}: ProjectsCardProps) => {
  return (
    <Card className='border border-zinc-800 rounded-xl p-4 bg-black text-white h-full'>
      <CardContent className='flex flex-row gap-8 h-full'>
        <Image src={imageSrc} alt={title} width={384} height={384} className='rounded-xl'/>
        <div className="flex flex-col">
            <h3 className='text-2xl font-bold flex-grow'>{title}</h3>
            <Link className='inline-block w-fit' href={linkHref}><Button className='bg-white text-black hover:bg-zinc-200 transition-all duration-300'>Узнать больше</Button></Link>
        </div>
      </CardContent>
    </Card>

  )
}

export default ProjectsCard