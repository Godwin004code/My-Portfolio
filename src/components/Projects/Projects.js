import { Card, Typography } from '@material-ui/core'
import React from 'react'
import Overflow, { ProjectStack } from './Overflow'
import { useStyle } from './Project.style'
import '../../index.css'
import { Element } from "react-scroll"
import { Link, GitHub } from "@material-ui/icons"

const Projects = () => {
    const classes = useStyle()
  return (
    <>
        <Typography variant='h3'style={{textAlign: 'center', color: 'white', marginTop: '2rem'}}>Projects</Typography>
        <div id='hide' className={classes.projects_container}>
           {
               ProjectStack.map((item) => {
                   return (
                       <Card  className={classes.project_card} style={{backgroundColor: '#0A1929'}} key={item.id}>
                           
                       <div>
                           <img className={classes.img1} src={item.img} />
                       </div>
                       <div>
                       <div className={classes.icons}>
                       <span>
                           <a style={{color: 'white'}} href={item.net}>
                           <Link />
                           </a>
                       
                       </span>
                       <span>
                       <a style={{color: 'white'}} href={item.git}>
                       <GitHub />
                       </a>
                       
                       </span>
                       </div>
                           <Typography variant='h6' style={{textAlign: 'center', color: 'white'}}>{item.title}</Typography>
                       </div>
                      
                       </Card>
                   )
               })
           }
        </div>
</>
  )
}

export default Projects