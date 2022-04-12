import React from 'react'
import { Container, Typography} from "@material-ui/core"
import { useStyle } from './Stack.style'
import { Element } from "react-scroll"
import { FaHtml5, FaCss3, FaJsSquare, FaReact, FaSass, FaGitAlt } from "react-icons/fa"
import { SiMaterialui, SiFirebase } from "react-icons/si"
const Stack = () => {
  const classes = useStyle()
 
  return (
      <Element name='stack'>
        <div className={classes.space} />
    <Container className={classes.container}>
        <div className={classes.box}>
            <div style={{color: '#f06529'}}><FaHtml5 /></div>
            <div style={{color: '#2ba4d9'}}><FaCss3 /></div>
            <div style={{color: '#c69'}}><FaSass /></div>
            <div style={{color: '#efd81d'}}><FaJsSquare /></div>
            <div style={{color: '#5ed4f4'}}><FaReact /></div>
            <div style={{color: '#f1502f'}}><FaGitAlt /></div>
            <div style={{color: 'blue'}}><SiMaterialui /></div>
            <div style={{color: '#ffca28'}}><SiFirebase /></div>
        </div>
    </Container>
    </Element>
  )
}

export default Stack