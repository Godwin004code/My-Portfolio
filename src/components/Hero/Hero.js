import { Card, Grid, Typography } from '@material-ui/core'

import { useStyle } from './Hero.style'
import HeroImage from "../../Assets/IMG-20211216-WA0001.jpg"
import Typical from "react-typical"

import "./Hero.css"

const Hero = () => {
    const classes = useStyle()

  return (
    <Grid container className={classes.hero_container}>
        <Grid className={classes.hero} item sm={12}>
            <Card className={classes.herotext} style={{backgroundColor: 'transparent', boxShadow: '0 0 0 transparent' }}>
                <div>
                <Typography variant='h3' style={{color: 'white'}}>Hola👋!</Typography>
                <Typography variant='h2' style={{color: 'white'}}>Welcome to my <span style={{color: '#5090D3', fontFamily: 'cursive'}}>Portfolio
                    </span> </Typography>
                </div>
                <Typography variant='h6' style={{color: 'white'}}>
                    I'm a <div styl={{fontFamily: 'cursive'}} className={classes.typical}>
                        <Typical
                            steps={[
                                'Front-end developer🔥',
                                2000,
                                'Website maintainer💪',
                                2000,
                                'JavaScript lover😍',
                                2000,
                                'Tech Writer😯',
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
        
    </Grid>
  )
}

export default Hero
