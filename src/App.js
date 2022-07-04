import React, {useState} from 'react'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Services from './components/Services/Services'
import Stack from "./components/Stack/Stack"
import { Element } from "react-scroll"
import { useStyle } from "./components/Hero/Hero.style"
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Swal from "sweetalert2"
import AppNavigator from './components/Navbar/Navigator'

const App = () => {
  const classes = useStyle()
  const [showChat, setShowChat] = useState(false)

    const handleClick = () => {
        setShowChat(!showChat)
    }

    

  // window.onload = () => {
  //   Swal.fire({
  //     title: 'Hello boss, Welcome to my portfolio. I hope I get hired by you. Gracias🤲'
  //   })
  // }
  return (
    <BrowserRouter>
    <Navbar />
    
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/about' element={
        <div>
      <About />
      <Stack />
      <Services />
      </div>
      } />
      <Route path='/contact' element={<Contact />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
    <AppNavigator />
    </BrowserRouter>
  )
}


export default App