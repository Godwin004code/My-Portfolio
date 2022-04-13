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
import { FaComment } from 'react-icons/fa'
import Swal from "sweetalert2"

const App = () => {
  const classes = useStyle()
  const [showChat, setShowChat] = useState(false)

    const handleClick = () => {
        setShowChat(!showChat)
    }

  window.onload = () => {
    Swal.fire({
      title: 'Hello boss, Welcome to my portfolio. I hope I get hired by you. Gracias🤲'
    })
  }
  return (
    <>
    <Navbar />
    <div className={classes.comment}>
        {showChat && <Contact />}
        <div onClick={handleClick}  className={classes.commentIcon}>
       <FaComment  /> 
      </div> 
       </div>
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