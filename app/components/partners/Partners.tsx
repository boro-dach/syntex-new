import Image from 'next/image'
import React from 'react'

const Partners = () => {
  return (
    <div id='partners' className='mt-16 flex flex-col px-16'>
        <h2 className='text-center text-4xl font-bold mb-8'>Наши партнёры</h2>
        <div className='flex flex-row items-center justify-center grayscale gap-32'>
            <Image className='rounded-xl' src={'/partners/xpay.png'} width={128} height={128} alt='XPAY'/>
            <Image className='rounded-xl' src={'/partners/dyad_andrey.png'} width={128} height={128} alt='dyad_andrey'/>
        </div>
    </div>
  )
}

export default Partners