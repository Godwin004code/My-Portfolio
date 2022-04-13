import { Typography } from '@material-ui/core'
import React from 'react'
import { FaTools, FaCode, FaTablet } from "react-icons/fa"
import "./Services.css"


const Services = () => {
  return (
    <>
    <h2 style={{textAlign:'center', color: 'white'}}>Godwin.render(</h2>
    <div className="service-container">
        <div className='service'>
        <div className='tool first'>
        <FaCode />
        </div>
        <Typography style={{borderTop: '1px solid white', paddingTop: 5}}>
        I develop websites with HTML, CSS and JavaScript or JS frameworks like React with CSS-in-JS tool like Material UI with the aim of achieving best result.
        </Typography>
        </div>
        <div className='service'>
        <div className='tool second'>
        <FaTablet />
        </div>
        <Typography style={{borderTop: '1px solid white', paddingTop: 5}}>
        With great layout skill, I build websites that are adaptive to your device screen. The websites or web app I build accessible websites that look great on any screen. 
        </Typography>
        </div>
        <div className='service'>
        <div className='tool third'>
        <FaTools />
        </div>
        <Typography style={{borderTop: '1px solid white', paddingTop: 5}}>
        I work on-time and to spec, I pay attention to improve the aesthetics of the site as well as the functionality. I am responsive, and willing to wotk through issues as they arise.
        </Typography>
        </div>
        <div className='service'>
        <div className='tool fourth'>
        <FaTools />
        </div>
        <Typography style={{borderTop: '1px solid white', paddingTop: 5}}>
        I build fast, desktop-first websites that clearly communicates with visitors. 
        </Typography>
        </div>
    </div>
    <h2 style={{color: 'white', textAlign: 'center'}}>)</h2>
    </>
  )
}

export default Services