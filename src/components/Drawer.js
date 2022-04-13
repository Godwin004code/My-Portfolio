import { Drawer, IconButton, List, ListItem } from '@material-ui/core'
import React, { useState } from 'react'
import { Facebook, GitHub, LinkedIn, Menu, Twitter } from "@material-ui/icons"
import { Link } from "react-scroll"
import "./Drawer.style"
import { useStyle } from './Drawer.style'
import "../index.css"


const DrawerComponent = () => {
    const [open, setOpen] = useState(false)
    const classes = useStyle()
  return (
    <>
    <Drawer open={open} onClose={() => setOpen(false)} anchor='left' className={classes.container} >
        <List id='drawer' className={classes.drawer}>
            <ListItem className={classes.listitem}>Home</ListItem>
            <ListItem className={classes.listitem}>
            <Link to='about' hashSpy={true} offset={-100} duration={500} smooth={true}>About</Link>
            </ListItem>
            <ListItem className={classes.listitem}>
            <Link to='project' hashSpy={true} offset={-100} duration={500} smooth={true}>Projects</Link>
            </ListItem>
            <ListItem className={classes.listitem}>
            <Link to='stack' hashSpy={true} offset={-100} duration={500} smooth={true}>Stack</Link>
            </ListItem>
            <div className={classes.icon_container}>
                <span className={classes.icon}>
                <a href="https://github.com/Godwin004code/My-Portfolio" style={{color: 'white'}}>  <GitHub /> </a>
                </span>
                <span className={classes.icon}>
                <a href="https://twitter.com/AlugbinGodwin" style={{color: 'white'}}><Twitter /></a>
                </span>
                <span className={classes.icon}>
                    <a href="https://www.linkedin.com/in/godwin-alugbin-b705b6227/" style={{color: 'white'}}><LinkedIn /></a>
                    </span>
                <span className={classes.icon}>
                <a href="https://www.facebook.com/profile.phpid=100010017672086" style={{color: 'white'}}><Facebook /></a>
                </span>
            </div>
        </List>
    </Drawer>
    <IconButton onClick={() => setOpen(!open)} style={{position: 'absolute', color: 'white', top: '23%', right: '0'}}>
        <Menu />
    </IconButton>
    </>
  )
}

export default DrawerComponent
