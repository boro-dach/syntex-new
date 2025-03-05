import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div id='footer' className='my-8 flex flex-col px-16 border-t border-zinc-400'>
        <h2 className='text-5xl font-bold my-8'>Связаться с нами:</h2>
        <Link className='underline mb-4 w-fit text-xl' href={'https://t.me/zako_abb'}>https://t.me/zako_abb</Link>
        <Link type='mail' className='underline w-fit text-xl' href={'mailto:ceo@syntex-dev.ru'}>ceo@syntex-dev.ru</Link>
    </div>
  )
}

export default Footer