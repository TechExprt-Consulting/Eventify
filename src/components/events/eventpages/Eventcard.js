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
    <div className='mt-3 mb-2'><p style={{fontSize:"1.8vw",fontWeight:"600"}}>Movies in indore</p></div>  
    <div className='mt-2  d-flex flex-wrap justify-content-evenly'>
        
        {[...Array(14).keys()].map((index) => (
            <Card key={index} sx={{ width:285, marginBottom: 8, marginRight: 3 }}>
            <CardMedia
                sx={{ height: 310, objectFit: 'cover' }}
                image={img3}
                title="green iguana"
            />
            <CardContent>
                <Typography  variant="h6" component="div" style={{fontSize:"1.2vw",fontWeight:"600"}}>
                Salaar Part 1-CeaseFire
                </Typography>
                <Typography variant="body2" color="text.secondary">
                hindi,English
                </Typography>
                <Typography  style={{ borderTop: '1px solid grey', textAlign: 'center',marginTop:"1vh",paddingTop:"2vh" }}>
                        <span  style={{margin:"auto",color:"#EC167F",fontSize:"1.3vw",fontWeight:"550",textTransform:"capitalize"}}>Book Ticket</span>
                </Typography>
            </CardContent>
            </Card>
        ))}

     </div>
     </div>
  )
}

export default Eventcard
