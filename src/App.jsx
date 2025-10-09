import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/hero'
import Footer from './components/Footer'
import About from './sections/About'
import EducationTimeline from './sections/EducationTimeline'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <EducationTimeline/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
