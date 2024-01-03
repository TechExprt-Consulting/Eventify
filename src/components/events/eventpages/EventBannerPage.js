import React from 'react'
import { Box, Grid, Paper } from '@mui/material';
import './EventBannerPage.css'

const EventBannerPage = () => {
  return (
    <div className='Event-Bannermain-div'>
    <Grid container spacing={3}>
      {/* First Row */}
      <Grid item xs={12}>
        <Paper><img style={{height:"70vh",width:"100%"}} src='abhinav.jpeg'/></Paper>
      </Grid>

      {/* Second Row */}
      <Grid item xs={12} sm={10}>
        <Box>
          <Box>
             <h6>Abhisek Upmanyu LIVE -indore</h6>
             <p>Comedy | Hindi | 16+yrs |1hr</p>
             <div className='d-flex '><span><img src='ic-location.png'/></span><p>Vijay Nagar indore</p><span><img src='ic-time-2.png'/></span><p>Sat 21 Jan</p></div>

          </Box>
          <Box></Box>
        </Box>
      </Grid>
      
     
    </Grid>
    </div>
  )
}

export default EventBannerPage
