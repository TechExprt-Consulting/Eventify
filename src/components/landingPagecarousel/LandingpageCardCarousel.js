import React, { useRef, useState,useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Swiper, SwiperSlide } from 'swiper/react';
import cardimg1 from '../../images/aqua.jpeg'
import cardimg2 from '../../images/sambhadur.jpeg'
import cardimg3 from '../../images/m23.jpeg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {getreadAllMoviedata} from '../../store/action/action'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Pagination, Navigation } from 'swiper/modules';



const LandingpageCardCarousel = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [swiperRef, setSwiperRef] = useState(null);
    const moviesData = useSelector((state) => state.event);
    const [moviedata,setmoviedata] =useState([])

   console.log("jdjjjd",moviesData)
    useEffect(() => {
    dispatch(getreadAllMoviedata());
    }, [dispatch]);

    useEffect(() => {
    if (moviesData !== null && moviesData !== undefined) {
        if(moviesData.readAllmovie !== null && moviesData.readAllmovie !== undefined ){
        
            setmoviedata(moviesData.readAllmovie)
        
    
        
        }
    }
    
    }, [moviesData]);

  return (
 <>
    <Grid container justifyContent="center" >
      <Grid item xs={12} md={9} style={{backgroundColor:""}}>
      <div><p style={{fontSize:"1.6vw",fontWeight:"600"}}>Recommended Movies</p></div>  
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
            moviedata.map((m,index)=>(
                <SwiperSlide key={index} style={{height:"64vh",width:"15.5vw",borderRadius:"1vw"}}>
                <div>
                <img style={{height:"45vh",width:"100%", borderRadius: '1vw'}} src={cardimg1}/>
                <h6 style={{padding:"0.2vh 1vh",fontSize:"1.1vw",fontWeight:"600"}}>{m.title}</h6>
                <p style={{padding:"0vh 1vh"}}>{m.language}</p>
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

export default LandingpageCardCarousel
