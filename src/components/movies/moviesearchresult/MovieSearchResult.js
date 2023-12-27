import React from 'react'
import './MovieSearchResult.css'
import Button from '@mui/material/Button';
import DirectionsRoundedIcon from '@mui/icons-material/DirectionsRounded';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
const MovieSearchResult = () => {
    const buttonStyles = {
        textTransform: 'capitalize', // Use 'uppercase' for all uppercase
      };
  return (
    <div className='main-seat-div'>
        <div className='col-md-4 theaterinfo'>
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
        <div className='col-md-8 theatertime'>

                <div class="card " id="time-info" >

                    <div class="card-body">
                       
                        <h6 class="card-text" style={{color:"green"}}>4:45PM</h6>
                        <p class="card-title">2D</p>
                        <p className='seat-type'>RECLINER</p>
                    </div>
                </div>



                <div class="card " id="time-info" >

                    <div class="card-body">
                    
                        <h6 class="card-text" style={{color:"green"}}>4:45PM</h6>
                        <p class="card-title">2D</p>
                        <p className='seat-type'>RECLINER</p>
                    </div>
                </div>

                <div class="card " id="time-info" >

                    <div class="card-body">
                    
                        <h6 class="card-text" style={{color:"green"}}>4:45PM</h6>
                        <p class="card-title">2D</p>
                        <p className='seat-type'>RECLINER</p>
                    </div>
                </div>

                <div class="card " id="time-info" >

                    <div class="card-body">
                    
                        <h6 class="card-text" style={{color:"green"}}>4:45PM</h6>
                        <p class="card-title">2D</p>
                        <p className='seat-type'>RECLINER</p>
                    </div>
                </div>

                <div class="card " id="time-info" >

                    <div class="card-body">
                    
                        <h6 class="card-text" style={{color:"green"}}>4:45PM</h6>
                        <p class="card-title">2D</p>
                        <p className='seat-type'>RECLINER</p>
                    </div>
                </div>                

                 <div class="card " id="time-info" >

                    <div class="card-body">
                    
                        <h6 class="card-text" style={{color:"green"}}>4:45PM</h6>
                        <p class="card-title">2D</p>
                        <p className='seat-type'>RECLINER</p>
                    </div>
                </div>                 

                <div class="card " id="time-info" >

                    <div class="card-body">
                    
                        <h6 class="card-text" style={{color:"green"}}>4:45PM</h6>
                        <p class="card-title">2D</p>
                        <p className='seat-type'>RECLINER</p>
                    </div>
                </div>   
        </div>
    </div>
  )
}

export default MovieSearchResult
