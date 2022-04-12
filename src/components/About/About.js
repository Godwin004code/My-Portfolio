import { Card, Typography, Grid } from '@material-ui/core'
import React from 'react'
import { useStyle } from './About.style'
import { Element } from "react-scroll"
import "./About.css"
import Stack from '../Stack/Stack'
import { FaHtml5, FaCss3, FaJsSquare, FaReact, FaSass, FaGit } from "react-icons/fa"

const About = () => {
  const classes = useStyle()
  return (
    <>
    <Element name='about'>
    <Card className={classes.about_container} style={{opacity: '.6', color: 'rgba(0, 30, 60,1)', borderRadius: '0',  }}>
        <Typography variant='h3' style={{textAlign: 'center', paddingBottom: 30 }}>About Me</Typography>
        <Grid className={classes.container}>
        <Grid className={classes.spin}>
          <div className="stage_cube_spinner">
          <div className="cubespinner">
            <div className="face1" style={{color: '#f06529'}}><FaHtml5 /></div>
            <div className="face2" style={{color: '#2ba4d9'}}><FaCss3 /></div>
            <div className="face3" style={{color: '#efd81d'}}><FaJsSquare /></div>
            <div className="face4" style={{color: '#c69'}}><FaSass /></div>
            <div className="face5" style={{color: '#f1502f'}}><FaGit /></div>
            <div className="face6" style={{color: '#5ed4f4'}}><FaReact /></div>
            </div>
          </div>
        </Grid>
          <Grid className={classes.body}>
            <Typography variant='body1' style={{textAlign: 'center', marginBottom: 8}} >

            I'm <span>Alugbin Boluwatife Godwin</span>, a front-end developer, I am passionate about using my little skills to create delightful experiences.
            </Typography>
            <Typography variant='body1' style={{textAlign: 'center', marginBottom: 8}}>

          I develop websites with HTML, CSS and JavaScript but now I use React in combination with Material UI.
          </Typography>
          <Typography variant='body1' style={{textAlign: 'center'}}>

            Even though I don't have much experience in this field, I am an hardworking and result oriented guy, I will always fit into any team and achieve best result on each project I lay my hands on.
            </Typography>
         
          </Grid>
          
        </Grid>
       
    </Card>
 
    </Element>
    </>
  )
}


export default About