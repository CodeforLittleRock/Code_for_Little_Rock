import React from 'react'
import Hero from '../controller/Hero'
import LatestNews from '../controller/LatestNews'
import Skills from '../controller/Skills'
import ProjectIdea from '../controller/ProjectIdea'

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <LatestNews />
      <ProjectIdea />
    </div>
  )
}
