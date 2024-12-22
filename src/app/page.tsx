import About from '@/components/about'
import Contact from '@/components/contact'
import Education from '@/components/education'
import Hero from '@/components/hero'
import Project from '@/components/projects'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Project/>
      <Education/>
      <Contact/>
    </div>
  )
}

export default page


