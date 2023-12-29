import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, AppBar, Toolbar, Typography, span } from '@material-ui/core';
import './Footer.css'

const Footer = () => {
  

  return (
    <div>
    <AppBar position="" style={{backgroundColor:"grey"}} >
      <Toolbar >
        <Grid container >
          {/* Categories */}
          <Grid item xs={12} sm={6} md={3} >
            <Typography variant="h6">Categories</Typography>
            <ul className='footer-list'>
                <li><span  color="inherit">Movies</span></li>
                <li>  <span  color="inherit">Events</span></li>
            </ul>
         
          
     
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={3} >
            <Typography variant="h6">Services</Typography>
            <ul className='footer-list'>
                <li><span href="#" color="inherit">Free Events Registration</span></li>
                <li> <span href="#" color="inherit">Create Event</span></li>
                <li><span href="#" color="inherit">Find Event</span></li>
            </ul>
            
        
          </Grid>

          {/* Need Help */}
          <Grid item xs={12} sm={6} md={3} >
            <Typography variant="h6">Need Help</Typography>
            <ul className='footer-list'>
                <li><span href="#" color="inherit">Contact Us</span></li>
                <li> <span href="#" color="inherit">FAQs</span></li>
            </ul>
       
          </Grid>

          {/* Follow Us */}
          <Grid item xs={12} sm={6} md={3} >
            <Typography variant="h6">Follow Us</Typography>
            <ul className='footer-list'>
                <li><span href="#" color="inherit">Facebook</span></li>
                <li><span href="#" color="inherit">Twitter</span></li>
                <li><span href="#" color="inherit">Instagram</span></li>
            </ul>

          </Grid>

          <Grid item xs={12} >
              <hr style={{ width: '100%', borderColor: 'white', margin: '10px 0' }} />
          </Grid>

          <Grid item xs={12} sm={12} md={12} >
            <Typography variant="">CITIES  : </Typography>
            Mumbai | Bengaluru | Delhi-NCR | Chennai | Ahmedabad | Jaipur | Kolkata | Hyderabad | Pune | Pondicherry | Panchkula | Goa | AP

          </Grid>

          <Grid item xs={12} sm={12} md={12} >
            <Typography variant="">COUNTRIES : </Typography>
            India |Singapore |Malaysia |United Arab Emirates |United States |United Kingdom
          </Grid>

          <Grid item xs={12} >
              <hr style={{ width: '100%', borderColor: 'white', margin: '10px 0' }} />
          </Grid>

          <Grid item xs={12} sm={12} md={12} >
          
            © 2020-2025, Copyright @ Eventify. All Rights Reserved
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    </div>
  )
}

export default Footer
