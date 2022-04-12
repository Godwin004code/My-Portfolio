import React,{useEffect, useState} from 'react'
import { AppBar, Typography, List, ListItem, useMediaQuery, useTheme } from "@material-ui/core"
import { Facebook, GitHub, LinkedIn, Twitter } from "@material-ui/icons"
import {useStyle} from "./Navbar.style"
import DrawerComponent from '../Drawer'
import { Link } from "react-scroll"

const Navbar = () => {
    const classes = useStyle()
    const [id, setId] = useState('hide-nav')
    const [time, setTime] = useState("")

    let body = window

    body.onscroll = () => {
        if(body.scrollY > 50) {
            setId('show-nav')
        } else if (body.scrollY < 50) {
            setId('hide-nav')
        }
    }

    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))

    function showDate() {
        const date = new Date()
        setTime(date.toLocaleTimeString())
    }
    setTimeout(() => showDate(), 1000)
  return (
    <>
    {
        id === 'show-nav' ? (
            isMatch ? (
               <AppBar style={{backgroundColor: '#0A1929'}}>
                <header className={classes.header}>
                    <Typography variant='h4' className={classes.h4}>godwin</Typography>
                    <DrawerComponent />
                </header>
               </AppBar>
            ) : (
                <AppBar style={{backgroundColor: '#0A1929'}}>
        <header className={classes.appbar}>
            <Typography variant='h4'>godwin</Typography>
            <nav>
                <List className={classes.nav}>
                    <ListItem>Home</ListItem>
                    <ListItem>
                        <Link to='about' hashSpy={true} offset={50} duration={500} smooth={true}>About</Link></ListItem>
                    <ListItem>
                        <Link to='project' hashSpy={true} offset={50} duration={500} smooth={true}>Projects</Link></ListItem>
                    <ListItem>
                        <Link to='stack' hashSpy={true} offset={50} duration={500} smooth={true}>Stack</Link></ListItem>
                </List>
            </nav>
            <div className={classes.icon_container}>
                <span className={classes.icon}>
                <a href="https://twitter.com/AlugbinGodwin" style={{color: 'white'}}> <GitHub /></a>
                </span>
                <span className={classes.icon}>
                   <a href="https://twitter.com/AlugbinGodwin" style={{color: 'white'}}><Twitter /></a>
                    </span>
                <span className={classes.icon}>
                <a href="https://twitter.com/AlugbinGodwin" style={{color: 'white'}}><LinkedIn /></a>
                </span>
                <span className={classes.icon}>
                <a href="https://www.facebook.com/profile.phpid=100010017672086" style={{color: 'white'}}><Facebook /></a>
                </span>
            </div>
        </header>
    </AppBar>
            )
        ) : (
            <AppBar style={{backgroundColor: '#0A1929'}}>
                <header className={classes.appbar}>
                <Typography variant='h4'>Dev Godwin</Typography>
                <Typography style={{marginTop: 6}}>{time}</Typography>
                </header>
                
            </AppBar>
        )
    }
    </>
  )
}

export default Navbar

