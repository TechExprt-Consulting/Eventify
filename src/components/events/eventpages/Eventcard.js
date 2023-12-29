import React from 'react'
import "./Eventcard.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img2 from "../../../images/salar.jpeg"
import img3 from "../../../images/sambhadur.jpeg"
import aqua from "../../../images/aqua.jpeg"
const Eventcard = () => {
  return (
    <div className='d-flex justify-content-center'>
    <div className='mt-2  d-flex flex-wrap justify-content-start'>

        {[...Array(12).keys()].map((index) => (
            <Card key={index} sx={{ maxWidth: 190, flex: '1 0 calc(20% - 8px)', marginBottom: 8, marginRight: 3 }}>
            <CardMedia
                sx={{ height: 300, width: '100%', objectFit: 'cover' }}
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
