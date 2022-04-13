import { Button, Grid, TextField, Typography } from '@material-ui/core'
import React, { useState, useRef } from 'react'
import { useStyle } from './Contact.style'
import { Element } from "react-scroll"
import "../../index.css"

const Contact = () => {
    const classes = useStyle()
     
     const [name, setName] = useState('')
     const [email, setEmail] = useState('')
     const [mes, setMes] = useState('')
     const [error, setError] = useState(false)
     
     const nameHandler = (e) => {
        setName(e.target.value)
     }
     const emailHandler = (e) => {
        setEmail(e.target.value)
     }
     const mesHandler = (e) => {
        setMes(e.target.value)
        console.log(mes)
     }
   
     const submitHandler = (e) => {
         e.preventDefault()
         
         if(name === '' || email === '' || mes === '') {
            setError(true)

            setTimeout(() => {
                setError(false)
            }, 2000)

            return
         } else {
            console.log(name, email, mes)
         }
       
        
        console.log(123)
     }
  return (
    <Element name="contact">
    <Grid container className={classes.grid_container}>
        <div className={classes.text}>
            <form className={classes.form} onSubmit={submitHandler}>
                <div>
                { error && <div className={classes.error}>
                    <p style={{padding: '0 .1rem', fontFamily: 'sans-serif', fontSize: '14px'}}>Please make sure all input fields are field.</p>
                    <div className='line'></div>
                    </div>}
                    <Typography variant='h4' style={{textAlign: 'center'}}>Send me mail</Typography>
                    <TextField className={classes.input} fullWidth  label='Name' variant='outlined'  value={name} onChange={nameHandler}  />
                   </div>
                   <div>
               
                    <TextField type='email' fullWidth className={classes.input} label='Email' variant='outlined' value={email} onChange={emailHandler}  />
                </div>
                <div>
                    <TextField label='Message'  fullWidth className={classes.input} type='message' variant='outlined' value={mes} onChange={mesHandler} />
                </div>
                <Button type='submit' variant="outlined" className={classes.btn}>Send</Button>
                
            </form>
        </div>
        
    </Grid>
    </Element>
  )
}

export default Contact