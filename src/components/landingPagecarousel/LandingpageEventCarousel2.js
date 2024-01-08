import React, { useRef, useState,useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Swiper, SwiperSlide } from 'swiper/react';
import cardimg1 from '../../images/aqua.jpeg'
import cardimg2 from '../../images/sambhadur.jpeg'
import cardimg3 from '../../images/m23.jpeg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {getreadAllEventdata} from '../../store/action/action'

const LandingpageEventCarousel2 = () => {
    const [swiperRef, setSwiperRef] = useState(null);
    const eventsData = useSelector((state) => state.event);
   
    const [eventdata,seteventdata] =useState([])

    console.log("eventdatarrrr",eventdata)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getreadAllEventdata());
      }, [dispatch]);
    
      useEffect(() => {
        if (eventsData !== null && eventsData !== undefined) {
            if(eventsData.readAllevent !== null && eventsData.readAllevent !== undefined ){
             
              seteventdata(eventsData.readAllevent)
             // localStorage.setItem("homeEventid",)
           
            }
        }
        
      }, [eventsData]);



      
 const cardeventBanner =(eventid)=>{
  

    localStorage.setItem('homeEventId', eventid);
   
 
     navigate('/eventBannerPage')
    }

  return (
    <>
     <Grid container justifyContent="center" >
      <Grid item xs={12} md={9} style={{backgroundColor:""}}>
      <div><p style={{fontSize:"1.6vw",fontWeight:"600"}}>Events</p></div>  
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={20}
        
        loop={true} 
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
     {
        eventdata.map((e,index)=>(
            <SwiperSlide onClick={()=>(cardeventBanner(e.id))} key={index} style={{backgroundColor:"",height:"64vh",width:"15.5vw",borderRadius:"1vw"}}>
                <div>
                <img style={{height:"45vh",width:"100%", borderRadius: '1vw'}} src={cardimg2}/>
                <h6 style={{padding:"0.5vh 1vh",fontSize:"1.1vw",fontWeight:"600"}}>{e.eventName}</h6>
                <p style={{padding:"0vh 1vh"}}>{e.performer}</p>
                </div>
           </SwiperSlide>

))
     }

      </Swiper>
      </Grid>
    </Grid>
    </>
  )
}

export default LandingpageEventCarousel2
