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
    <Card className='border border-zinc-800 rounded-xl py-4 bg-black text-white h-full max-w-full'>
      <CardContent className='flex flex-row md:gap-8 gap-4 h-full'>
        <img src={imageSrc} alt={title} className='rounded-xl md:h-96 md:w-96 h-32 w-32 aspect-square'/>
        <div className="flex flex-col">
            <h3 className='md:text-2xl text-lg md:max-w-full max-w-32 break-words font-bold flex-grow'>{title}</h3>
            <Link className='inline-block w-fit' href={linkHref}><Button className='bg-white text-black hover:bg-zinc-200 transition-all duration-300 md:text-base text-sm'>Узнать больше</Button></Link>
        </div>
      </CardContent>
    </Card>

  )
}

export default ProjectsCard