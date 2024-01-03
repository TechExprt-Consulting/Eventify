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
    <div className='mt-3 mb-2'><p style={{fontSize:"1.6vw",fontWeight:"600",marginLeft:"1vw"}}>Movies in indore</p></div>  
    <div className='mt-2  d-flex flex-wrap justify-content-start'>
        
        {[...Array(14).keys()].map((index) => (
            <Card key={index} sx={{ width:220, marginBottom: 8, marginRight: 2,marginLeft:2, transition: 'transform 0.3s','&:hover': { transform: 'scale(1.05)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',cursor:"pointer"} }} className='card-movies'>
            <CardMedia
                sx={{ height: 250, objectFit: 'cover' }}
                image={img3}
                title="green iguana"
            />
            <CardContent>
                
                <Typography  variant="h6" component="div" style={{fontSize:"1.1vw",fontWeight:"600"}}>
                Salaar Part 1-CeaseFire
                </Typography>
                <Typography variant="body2" color="text.secondary">
                hindi,English
                </Typography>
            
            </CardContent>
            </Card>
        ))}

     </div>
     </div>
  )
}

export default Eventcard
