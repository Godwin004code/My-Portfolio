import React from 'react'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Services from './components/Services/Services'
import Stack from "./components/Stack/Stack"
import { Element } from "react-scroll"

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Element name='project'>
    <Projects />
    </Element>
    <Stack />
    <Footer />
    </>
  )
}

export default App