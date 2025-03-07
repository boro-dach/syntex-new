import React from 'react'
import Hero from './components/Hero'
import Services from './components/services/Services'
import Projects from './components/projects/Projects'
import Partners from './components/partners/Partners'

const Home = () => {
  return (
    <>
      <Hero/>
      <Services/>
      <Projects/>
      <Partners/>
    </>
  )
}

export default Home