import React from 'react'
import "./Eventcard.css"
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import img3 from "../../../images/m23.jpeg"

import { NavLink, useNavigate } from 'react-router-dom';
const Eventcard = ({events}) => {
    const navigate = useNavigate();
    

    const cardClick =(eventid)=>{
        console.log("hhhhahs")
       navigate('/eventBannerPage')
       window.location.href = "/eventBannerPage"
     }
    
  return (
    <div className=''>
        <div className='mt-3 mb-2'><p style={{fontSize:"1.6vw",fontWeight:"600",marginLeft:"1vw"}}>Movies in indore</p></div>  
            <div className='mt-2  d-flex flex-wrap justify-content-start'>
                
                {events.map((e,index) => (
                    <Card onclick={() => cardClick(e.id)} key={index}  sx={{ width:310,boxShadow:" rgba(0, 0, 0, 0.01) 0px 3px 5px",marginBottom: 8, marginRight: 2,marginLeft:2, transition: 'transform 0.3s','&:hover': { transform: 'scale(1.05)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',cursor:"pointer"} }} className='card-movies'>
                    <CardMedia
                        sx={{ height: 290, objectFit: 'cover' }}
                        image={img3}
                        title="green iguana"
                        
                    />
                    <CardContent>
                        
                        <Typography  variant="h6" component="div" style={{fontSize:".9vw",fontWeight:"550"}}>
                        {e.eventName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {e.performer}
                        </Typography>
                    
                    </CardContent>
                    </Card>
                ))}

            </div>
     </div>
  )
}

export default Eventcard
