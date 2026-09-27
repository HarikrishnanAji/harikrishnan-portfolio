import { useEffect } from 'react'
import AOS from 'aos'

import Navbar from './components/Navbar'
import SocialSidebar from './components/SocialSidebar'
import CursorGlow from './components/CursorGlow'
import Hero from './components/Hero'
import Features from './components/Features'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import EducationCertifications from './components/EducationCertifications'
import Facts from './components/Facts'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out-quart',
      offset: 100,
      once: true,
    })
  }, [])

  return (
    <>
      <CursorGlow />
      <Navbar />
      <SocialSidebar />
      <Hero />
      <Features />
      <Skills />
      <Projects />
      <Experience />
      <EducationCertifications />
      <Facts />
      <Contact />
      <BackToTop />
    </>
  )
}
