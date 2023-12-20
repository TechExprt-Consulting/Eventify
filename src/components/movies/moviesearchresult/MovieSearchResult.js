import React from 'react'
import Button from '@mui/material/Button';
import DirectionsRoundedIcon from '@mui/icons-material/DirectionsRounded';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
const MovieSearchResult = () => {
    const theme = createTheme({
        palette: {
          primary: {
            main:'rgb(250, 172, 29)',
          
          },
          secondary: {
            main: 'rgb(250, 172, 29)',
          },
        },
      });
  return (
    <ThemeProvider theme={theme}>
    <div className='d-flex'>
        <div className='col-4'>
            <h5>INOX Quest Mall,Indore</h5>
            <div>
            <Button variant="outlined" startIcon={<DirectionsRoundedIcon/>}  style={{ borderRadius: '20px', marginRight: '10px',border:'2px solid #E0E0E0' ,color:"black" }}>
                    <Typography variant="button" style={{ textTransform: 'capitalize' }}>
                    Get Directions
                   </Typography>
            </Button>
            <Button variant="outlined"  style={{ borderRadius: '20px', marginRight: '10px',border:'2px solid #E0E0E0' ,color:"black"}}startIcon={<InfoIcon/>}>
                  <Typography variant="button" style={{ textTransform: 'capitalize' }}>
                  More Info
                   </Typography>
            </Button>
            
            </div>
        </div>
        <div className='col-md-8 d-flex '>
                   
            <div className='col-md-3 m-0'>
                <div class="card" style={{width: "200px"}}>
  
                <div class="card-body  d-flex justify-content-center flex-column">
                    <div className='pb-0'>
                    <h5 class="card-title text-center " style={{color:"green"}}>4:35PM</h5>
                    <h6 class="card-text  text-center">2D</h6>
                    </div>
                    <p class="card-text text-center mt-1">RECLINER</p>
                
                </div>
                
                </div>
                
            </div>


           


            

            <div className='col-md-3'>
                <div class="card" style={{width: "12rem"}}>
  
                <div class="card-body  d-flex justify-content-center flex-column">
                    <div className='pb-0'>
                    <h5 class="card-title text-center " style={{color:"green"}}>4:35PM</h5>
                    <h6 class="card-text  text-center">2D</h6>
                    </div>
                    <p class="card-text text-center mt-1">RECLINER</p>
                
                </div>
                
                </div>
                
            </div>
            <div className='col-md-3'>
                <div class="card" style={{width: "12rem"}}>
  
                <div class="card-body  d-flex justify-content-center flex-column">
                    <div className='pb-0'>
                    <h5 class="card-title text-center " style={{color:"green"}}>4:35PM</h5>
                    <h6 class="card-text  text-center">2D</h6>
                    </div>
                    <p class="card-text text-center mt-1">RECLINER</p>
                
                </div>
                
                </div>
                
            </div>

        
        </div>
 
    </div>
    </ThemeProvider>
  )
}

export default MovieSearchResult
