import React from 'react'
import './MovieSearchResult.css'
import Button from '@mui/material/Button';
import DirectionsRoundedIcon from '@mui/icons-material/DirectionsRounded';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import { Grid,Box } from '@mui/material';
const MovieSearchResult = () => {
    const buttonStyles = {
        textTransform: 'capitalize', // Use 'uppercase' for all uppercase
      };
  return (
    <div className='main-seat-div'>
                    <Grid container spacing={2} className='col-md-12 theatertime'>
                   
                    <Grid item xs={12} md={6}>
                        <div className=' theaterinfo'>
                            <h4 id='theater-name'>INOX C-21 mall Indore </h4>
                            <div className='button-info'>
                            <Button style={buttonStyles} startIcon={<DirectionsRoundedIcon/>}>Get Directions</Button>
                            <Button style={buttonStyles} startIcon={<InfoIcon/>}>More Info</Button>
                            </div>
                            <div className='online-info'>
                                <p className='new-feature'>Online Food</p>
                                <p className='new-feature' id='extrainfo'>Paytm Accepted</p>
                            </div>
                        </div>
                    </Grid>

                 
                    <Grid item xs={12} md={6} className='theatertimescreen'>
                        
                                
                                        <div className='d-flex flex-wrap justify-content-start' style={{width:"40vw"}} >
                                               <Box component="div" className="card" id="time-info">
                                                    <Box component="div" className="card-body">
                                                        <h6 className="card-text" style={{ color: 'green',fontSize:"1vw" }}>4:45PM</h6>
                                                        <h6 className="card-title">2D</h6>
                                                        
                                                    </Box>
                                                </Box>

                                                <Box component="div" className="card" id="time-info">
                                                    <Box component="div" className="card-body">
                                                        <h6 className="card-text" style={{ color: 'green',fontSize:"1vw" }}>4:45PM</h6>
                                                        <h6 className="card-title">2D</h6>
                                                        
                                                    </Box>
                                                </Box>

                                                <Box component="div" className="card" id="time-info">
                                                    <Box component="div" className="card-body">
                                                        <h6 className="card-text" style={{ color: 'green',fontSize:"1vw" }}>4:45PM</h6>
                                                        <h6 className="card-title">2D</h6>
                                                        
                                                    </Box>
                                                </Box>
                                                <Box component="div" className="card" id="time-info">
                                                    <Box component="div" className="card-body">
                                                        <h6 className="card-text" style={{ color: 'green',fontSize:"1vw" }}>4:45PM</h6>
                                                        <h6 className="card-title">2D</h6>
                                                        
                                                    </Box>
                                                </Box>
                                                <Box component="div" className="card" id="time-info">
                                                    <Box component="div" className="card-body">
                                                        <h6 className="card-text" style={{ color: 'green',fontSize:"1vw" }}>4:45PM</h6>
                                                        <h6 className="card-title">2D</h6>
                                                        
                                                    </Box>
                                                </Box>
                                                <Box component="div" className="card" id="time-info">
                                                    <Box component="div" className="card-body">
                                                        <h6 className="card-text" style={{ color: 'green',fontSize:"1vw" }}>4:45PM</h6>
                                                        <h6 className="card-title">2D</h6>
                                                        
                                                    </Box>
                                                </Box>
                                                <Box component="div" className="card" id="time-info">
                                                    <Box component="div" className="card-body">
                                                        <h6 className="card-text" style={{ color: 'green',fontSize:"1vw" }}>4:45PM</h6>
                                                        <h6 className="card-title">2D</h6>
                                                        
                                                    </Box>
                                                </Box>
                                                <Box component="div" className="card" id="time-info">
                                                    <Box component="div" className="card-body">
                                                        <h6 className="card-text" style={{ color: 'green',fontSize:"1vw" }}>4:45PM</h6>
                                                        <h6 className="card-title">2D</h6>
                                                        
                                                    </Box>
                                                </Box>


                                        </div>
                                
                         
                    </Grid>
                    </Grid>
               < hr/>
    </div>
  )
}

export default MovieSearchResult
