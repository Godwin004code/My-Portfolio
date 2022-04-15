import React, { useEffect, useState } from 'react'
import { Container, Typography} from "@material-ui/core"
import { useStyle } from './Stack.style'
import { Element } from "react-scroll"
import { FaHtml5, FaCss3, FaJsSquare, FaReact, FaSass, FaGitAlt } from "react-icons/fa"
import { SiMaterialui, SiFirebase } from "react-icons/si"
import "./Stack.css"
import Aos from "aos"
import 'aos/dist/aos.css'

const Stack = () => {
  const classes = useStyle()
 
  useEffect(() => {git 
    Aos.init({duration: 2000})
  },[])
 
  return (
      <Element name='stack'>
       <Typography variant='h3' style={{color: 'white', textAlign: 'center', marginBottom: '2rem'}}>Stack</Typography>
    <Container className={classes.container}>
      
        <div className={classes.box}>
            <div id='stack' data-aos='fade-in'  style={{color: '#f06529'}}><FaHtml5 /></div>
            <div id='stack'  data-aos='fade-in' style={{color: '#2ba4d9'}}><FaCss3 /></div>
            <div id='stack' data-aos='fade-in' style={{color: '#c69'}}><FaSass /></div>
            <div id='stack' data-aos='fade-in'  style={{color: '#efd81d'}}><FaJsSquare /></div>
            <div id='stack' data-aos='fade-in'  style={{color: '#5ed4f4'}}><FaReact /></div>
            <div id='stack' data-aos='fade-in' style={{color: '#f1502f'}}><FaGitAlt /></div>
            <div id='stack' data-aos='fade-in' style={{color: 'blue'}}><SiMaterialui /></div>
            <div id='stack' data-aos='fade-in'  style={{color: '#ffca28'}}><SiFirebase /></div>
        </div>
    </Container>
    </Element>
  )
}

export default Stack