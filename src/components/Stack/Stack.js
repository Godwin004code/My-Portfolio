import React, { useEffect } from 'react'
import { Typography} from "@material-ui/core"
import { useStyle } from './Stack.style'
import { Element } from "react-scroll"
import { FaHtml5, FaCss3, FaJsSquare, FaReact, FaSass, FaGitAlt } from "react-icons/fa"
import { SiMaterialui, SiTailwindcss, SiNextdotjs, SiVuedotjs } from "react-icons/si"
//import "./Stack.css"
import Aos from "aos"
import 'aos/dist/aos.css'

const Stack = () => {
  const classes = useStyle()
 
  useEffect(() => { 
    Aos.init({duration: 2000})
  },[])
 
  return (
      <Element name='stack'>
        <div className={classes.div} styles={{width: '100%'}}>
       <Typography variant='h3' style={{color: '#0A1929', textAlign: 'center', marginBottom: '2rem'}}>Stack</Typography>
    
      <marquee behavior="scroll" direction="left">
        <div className={classes.box}>
            <div id='stack' data-aos='fade-in'><FaHtml5 style={{color: '#f06529'}} /></div>
            <div id='stack'  data-aos='fade-in' ><FaCss3 style={{color: '#2ba4d9'}} /></div>
            <div id='stack' data-aos='fade-in' ><FaSass style={{color: '#c69'}} /></div>
            <div id='stack' data-aos='fade-in'><FaJsSquare style={{color: '#efd81d'}} /></div>
            <div id='stack' data-aos='fade-in'  ><FaReact style={{color: '#5ed4f4'}} /></div>
            <div id='stack' data-aos='fade-in'  ><SiNextdotjs style={{color: '#000'}} /></div>
            <div id='stack' data-aos='fade-in'  style={{color: '#42b883'}}><SiVuedotjs /></div>
            <div id='stack' data-aos='fade-in' ><SiMaterialui style={{color: 'blue'}} /></div>
            <div id='stack' data-aos='fade-in' style={{color: '#5ed4f4'}}><SiTailwindcss /></div>
            
            <div id='stack' data-aos='fade-in' style={{color: '#f1502f'}}><FaGitAlt /></div>
        </div>
        </marquee>
    </div>
    </Element>
  )
}

export default Stack