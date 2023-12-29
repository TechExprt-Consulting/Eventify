import React from 'react'
import "./Eventcard.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img2 from "../../../images/salar.jpeg"
import img3 from "../../../images/m23.jpeg"
import aqua from "../../../images/aqua.jpeg"
const Eventcard = () => {
  return (
    <div className=''>
      <div><h5>Movies in indore</h5></div>  
    <div className='mt-2  d-flex flex-wrap justify-content-center'>
        
        {[...Array(14).keys()].map((index) => (
            <Card key={index} sx={{ width:275, marginBottom: 8, marginRight: 3 }}>
            <CardMedia
                sx={{ height: 310, objectFit: 'cover' }}
                image={img3}
                title="green iguana"
            />
            <CardContent>
                <Typography  variant="h6" component="div">
                Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                salar
                </Typography>
            </CardContent>
            </Card>
        ))}

     </div>
     </div>
  )
}

export default Eventcard
