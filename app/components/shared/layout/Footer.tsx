import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div id='footer' className='mt-16 flex flex-row items-center px-16 gap-8 h-16 border-t border-zinc-400 py-16'>
        <h2 className='text-center text-4xl font-bold'>Контакты</h2>
        <Link className='underline' href={'https://t.me/zako_abb'}>https://t.me/zako_abb</Link>
        <Link type='mail' className='underline' href={'mailto:ceo@syntex-dev.ru'}>ceo@syntex-dev.ru</Link>
    </div>
  )
}

export default Footer