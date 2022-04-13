import { Button, Grid, TextField, Typography} from '@material-ui/core'
import React, { useState, useRef } from 'react'
import { useStyle } from './Contact.style'
import { Element } from "react-scroll"
import "../../index.css"
import emailjs from "@emailjs/browser"
import Swal from 'sweetalert2'

const Contact = () => {
    const classes = useStyle()
     
    
     const [email, setEmail] = useState('')
     const [mes, setMes] = useState('')
     const [error, setError] = useState(false)
     
     const form = useRef()
   
     const emailHandler = (e) => {
        setEmail(e.target.value)
     }
     const mesHandler = (e) => {
        setMes(e.target.value)
        
     }
   
     const submitHandler = (e) => {
         e.preventDefault()
         
         if( email === '' || mes === '') {
            setError(true)

            setTimeout(() => {
                setError(false)
            }, 2000)

            return
         } else {
           

            emailjs.sendForm('service_bquzkdk', 'template_j8qjvsl', form.current,'SaKsUWe14ryr1EYV_')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
           Swal.fire({
               title: 'I have received your message, Thank You',
               icon: 'success'
           })

           setEmail("")
           setMes("")
         }
       
        
     }
  return (
    <Element name="contact">
    <Grid container className={classes.grid_container}>
        <div className={classes.text}>
            <form className={classes.form} ref={form} onSubmit={submitHandler}>
                <div> 
                { error && <div className={classes.error}>
                     <p style={{padding: '0 .1rem', fontFamily: 'sans-serif', fontSize: '14px'}}>Input Field is empty
                     </p>  
                      
                    <div className='line'></div>
                    </div>}
                    {/* <div onClick={closeForm()}>X</div> */}
                    <Typography variant='h4' style={{textAlign: 'center'}}>Send me mail</Typography>
                   </div>
                   <div>
               
                    <TextField type='email' fullWidth className={classes.input} label='Email' variant='outlined' name='email' value={email} onChange={emailHandler}  />
                </div>
                <div>
                    <TextField label='Message'  fullWidth className={classes.input} type='message' variant='outlined' name='mes' value={mes} onChange={mesHandler} />
                </div>
                <Button type='submit' variant="outlined" className={classes.btn}>Send</Button>
                
            </form>
        </div>
        
    </Grid>
    </Element>
  )
}

export default Contact