import React,{useEffect, useState} from 'react'
import { Box, Grid, Paper } from '@mui/material';
import './EventBannerPage.css'
import EventBannerPageCarousel from './EventBannerPageCarousel';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {getEventBannerById} from "../../../store/action/action"
import moment from 'moment';

const EventBannerPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const eventsBannerData = useSelector((state) => state.event);
  const [eventBanner,setEventBanner]=useState([])
  const [eventDate,seteventDate]=useState('')
  console.log("eventDate",eventDate)
  useEffect(() => {
    dispatch(getEventBannerById());
  }, [dispatch]);

  useEffect(() => {
    if (eventsBannerData !== null && eventsBannerData !== undefined) {
      if(eventsBannerData.readEventBannerById !== null && eventsBannerData.readEventBannerById !== undefined){
        setEventBanner(eventsBannerData.readEventBannerById)
   
        seteventDate(moment(eventsBannerData.readEventBannerById.startDate).format("MMM Do YY"))
      }
    }
    
  }, [eventsBannerData]);
  console.log("eventsBannerData",eventsBannerData)
  return (
    <div className='Event-Bannermain-div'>
    <Grid container spacing={3}  justifyContent="center">
      {/* First Row */}
      <Grid item xs={12}>
        <Paper><img style={{height:"70vh",width:"100%"}} src='abhinav.jpeg'/></Paper>
      </Grid>

      {/* Second Row */}
      <Grid item xs={12} sm={9}  container sx={{ borderRadius: '8px',marginTop:"5vh" }}>
        
        <Box className="d-flex  " style={{width:"100%" }}>
            <Box style={{boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',width:"100%",height:"100%" ,marginRight:".2vw"}}>

              <Box className="d-flex flex-wrap  align-items-center" style={{height:"218px" ,boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',borderRadius:".5vw"}}>
                <img  style={{marginLeft:"1vw",borderRadius:"190px",height:"12.75vh",width:"6.5vw"}} src="abhisek33.jpg"/>
                <h6 style={{marginLeft:"2vw",fontSize:"1.3vw",fontWeight:"600"}}>{eventBanner.performer} </h6>
              </Box>
              <Box  className="d-flex flex-column justify-ciontent-start flex-wrap " style={{height:"218px",width:"100%",boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',marginTop:"1vh",padding:"1vw",borderRadius:".5vw"}}>
                <h6 style={{ fontSize:"1.1vw"}}>About</h6>
                <h6>{eventBanner.description}</h6>
              </Box>
            </Box>

            <Box style={{width:"100%" ,marginLeft:".5vw"}}>
                <Box style={{boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',borderRadius:".2vw"}}>
                  <div className='d-flex flex-column justify-content-center p-4'>
                    <h6 style={{fontSize:"1.1vw",fontWeight:"600"}}>Vijay Nagar,indore</h6>
                    <img src='Rectangle 354.png'/>
                  </div>

              </Box>
            </Box>

        </Box>


      </Grid>


      {/* Third Row */}
      <Grid item xs={12} sm={9}  container sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '16px', borderRadius: '8px' ,marginTop:"4vh"}}>
        <Box className="d-flex justify-content-between" style={{width:"100%"}}>
          <Box >
             <h6 style={{fontSize:"1.2vw"}}>{eventBanner.performer}</h6>
             <p style={{fontSize:"1vw",fontWeight:"600",marginTop:"1.3vh"}}>{eventBanner.category} | {eventBanner.language} | 16+yrs | {eventBanner.duration} hr</p>
             <div className='d-flex ' style={{fontSize:"1vw",fontWeight:"600"}}>
              <h6><img src='ic-location.png'/></h6><p  style={{marginLeft:".5vw"}}>Vijay Nagar indore</p>
              <h6 style={{marginLeft:"1vw"}}><img src='ic-time-2.png'/></h6><p style={{marginLeft:".5vw"}}> {eventDate}</p></div>
            <div className='d-flex flex-wrap m-1' >
              <div style={{border:"1px solid green", padding:".5vw 1vw",borderRadius:"0.3vw", textAlign:"center"}}><h6 style={{color:"green",fontSize:"1.1vw",fontWeight:"600"}}>{eventBanner.time}</h6></div> 
              <div style={{marginLeft:"1vw",border:"1px solid green", padding:".5vw 1vw",borderRadius:"0.3vw"}}><h6 style={{color:"green",fontSize:"1.1vw",fontWeight:"600"}}>7:00 PM</h6> </div>
            </div>
          </Box>
          <Box className=" d-flex flex-column justify-content-center align-items-center" style={{marginRight:"2vw"}}>
              <h6 style={{fontSize:"1.3vw"}}>₹ {eventBanner.price}</h6>
              <button className='btn btn' style={{backgroundColor:"#EC167F", color:"white" ,fontSize:"1.2vw",fontWeight:"600", padding:"1vh 1.5vw"}}>Book Now</button>
          </Box>
        </Box>
      </Grid>
      

      {/* Fourth Row */}
      <Grid item xs={12} sm={9}  container sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '16px', borderRadius: '8px' ,marginTop:"4vh"}}>
         <div className='d-flex flex-column flex-wrap justify-content-center'>
                    <h6 style={{fontSize:"1.2vw",marginBottom:"3vh"}}>Term and Condition</h6>
                    <p style={{}}>1.  Tickets once booked cannot be exchanged or refunded</p>
                    <p style={{}}>2.  An Internet handling fee per ticket may be levied. Please check the total amount before payment</p>
                    <p style={{}}>3.  We recommend that you arrive at-least 30 minutes prior at the venue for a seamless entry </p>
                    <p style={{}}>4.  It is mandatory to wear masks at all times and follow social distancing norms</p>
                    <p style={{}}>5.  Please do not purchase tickets if you feel sick</p>
                    <p style={{}}>6.  Unlawful resale (or attempted unlawful resale) of a ticket would lead to seizure or cancellation of that ticket without refund or other compensation</p>
                    <p style={{}}>7.  Rights of admission reserved</p>
                    <p style={{}}>8.  These terms and conditions are subject to change from time to time at the discretion of the organizer</p>
         </div>
   
      </Grid>

      <Grid item xs={12} sm={9}  container sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '16px', borderRadius: '8px' ,marginTop:"4vh"}}>
          
        <EventBannerPageCarousel/>
      </Grid>
     
    </Grid>
    </div>
  )
}

export default EventBannerPage
