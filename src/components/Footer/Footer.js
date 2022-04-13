import { Container, Grid, List, ListItem, Typography } from '@material-ui/core'
import { Copyright, GitHub, Twitter, LinkedIn,Facebook } from '@material-ui/icons'
import React, { useState } from 'react'
import { useStyle } from './Footer.style'
import { Mail, LocationCity } from "@material-ui/icons"

const Footer = () => {
  const classes = useStyle()
  const date = new Date()
  const time = date.getFullYear()

  return (
    <div style={{background: '#0A1929'}}>
    <div style={{borderTop: '1px solid white'}} className={classes.divider} />
    <Container className={classes.footer_container}>
    <div>
      <Typography variant='h4'>godwin</Typography>
    </div>
    <div>
      <List>
        <ListItem>
          <span style={{marginRight: 5}}><Mail /></span>godwinalugbin004@gmail.com
        </ListItem>
        <ListItem>
          <span style={{marginRight: 5}}><LocationCity /></span>33, Orisunbare street, Itamerin-Tioya, Ibadan, Oyo, Nigeria
        </ListItem>
        </List>
    </div>
    
    </Container>
    
    </div>
  )
}

export default Footer