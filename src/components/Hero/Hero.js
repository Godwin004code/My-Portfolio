import { Card, Container, Grid, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useStyle } from './Hero.style'
import HeroImage from "../../Assets/IMG-20211216-WA0001.jpg"
import Typical from "react-typical"
import { FaComment } from "react-icons/fa"
import Contact from '../Contact/Contact'
import "./Hero.css"

const Hero = () => {
    const classes = useStyle()
    const [showChat, setShowChat] = useState(false)

    const handleClick = () => {
        setShowChat(!showChat)
    }

    const web = ["p","o","r","t","f","o","l", "i", "o"]

  return (
    <Grid container className={classes.hero_container}>
        <Grid className={classes.hero} item sm={12}>
            <Card className={classes.herotext} style={{backgroundColor: 'transparent', boxShadow: '0 0 0 transparent' }}>
                <div>
                <Typography variant='h3' style={{color: 'white'}}>Hola!</Typography>
                <Typography variant='h2' style={{color: 'white'}}>Welcome to my <span style={{color: '#5090D3', fontFamily: 'cursive'}}>
                <div style={{display: 'flex'}}> {
                    web.map((item, idx) => {
                        return (
                            
                            <Typography style={{marginRight: 4}} className={'web' + ' ' +  idx}>{item}</Typography>
                           
                        )
                    })
                   
                }
                 </div>
                    </span> </Typography>
                </div>
                <Typography variant='h6' style={{color: 'white'}}>
                    I'm a <div styl={{fontFamily: 'cursive'}} className={classes.typical}>
                        <Typical
                            steps={[
                                'Front-end Developer',
                                2000,
                                'Website maintainer',
                                2000,
                                'Enthusiastic developer',
                                2000
                            ]}
                            loop={Infinity}
                        />
                    </div>
                </Typography>
            </Card>
            <div className={classes.img_container}>
                <img src={HeroImage} alt="Hero Image" />
            </div>
        </Grid>
        <div className={classes.comment}>
        {showChat && <Contact />}
      <div onClick={handleClick}  className={classes.commentIcon}>
      <FaComment  />
      </div>
       </div>
    </Grid>
  )
}

export default Hero
