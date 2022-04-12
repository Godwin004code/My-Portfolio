import { Button, Grid, TextField, Typography } from '@material-ui/core'
import React, { useState, useRef } from 'react'
import { useStyle } from './Contact.style'
import { Element } from "react-scroll"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

const Contact = () => {
    const classes = useStyle()
     const position = [51.505, -0.09]
     const [center, setCenter] = useState({lat: 51.505, lng: -0.09})
     const ZOOM_LEVEL = 9;
     
     const [name, setName] = useState('')
     const [email, setEmail] = useState('')
     const [mes, setMes] = useState('')

     const nameHandler = (e) => {
        setName(e.target.value)
     }
     const emailHandler = (e) => {
        setEmail(e.target.value)
     }
     const mesHandler = (e) => {
        setMes(e.target.value)
     }

     const submitHandler = () => {
        console.log(name, email, mes)
     }
  return (
    <Element name="contact">
    <Grid container className={classes.grid_container}>
        <div className={classes.text}>
            <form className={classes.form} onSubmit={submitHandler}>
                <div>
                    <Typography variant='h4' style={{textAlign: 'center'}}>Send a mail</Typography>
                    <TextField className={classes.input} fullWidth  label='Name' variant='outlined'  value={name} onChange={nameHandler}  />
                   </div>
                   <div>
               
                    <TextField type='email' fullWidth className={classes.input} label='Email' variant='outlined' value={email} onChange={emailHandler}  />
                </div>
                <div>
                    <TextField label='Message'  fullWidth className={classes.input} type='message' variant='outlined' value={mes} onChange={mesHandler} />
                </div>
                <Button variant="outlined" className={classes.btn}>Send</Button>
            </form>
        </div>
        
    </Grid>
    </Element>
  )
}

export default Contact