'use client'

import React from 'react'
import ServicesCard from './ServicesCard'

import { motion } from 'framer-motion'

const Services = () => {
  return (
    <motion.div 
      id='services' 
      className='mt-16 flex flex-col px-16'
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 1.5 }, },
      }}
    >
      <h2 className='text-center text-4xl font-bold mb-8'>Услуги</h2>
      <div className="flex flex-col gap-16">
        <ServicesCard number='01' title='Разработка' text='Мы разработаем для вас необходимые решения, внедрим их и поможем довести проект до завершения. Выполним все, что касается разработки: API, Telegram-боты, веб-сайты и многое другое.'/>
        <ServicesCard number='02' title='Дизайн' text='Наша команда творческих дизайнеров и аниматоров воплотит в жизнь ваше представление. Мы занимаемся веб-дизайном, созданием логотипов, анимацией ваших проектов и многим другим, помогая вам выразить свой стиль и идеи.'/>
        <ServicesCard number='03' title='Продвижение' text='При желании мы обеспечим полное продвижение вашего проекта, включая рекламу, заключение договоров и многого другого, чтобы помочь широкой аудитории узнать о ваших идеях и проектах.'/>
      </div>
    </motion.div>
  )
}

export default Services