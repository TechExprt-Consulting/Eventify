import React, { useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Swiper, SwiperSlide } from 'swiper/react';
import cardimg1 from '../../../images/movie1.jpg'
import cardimg2 from '../../../images/sambhadur.jpeg'
import cardimg3 from '../../../images/m23.jpeg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';


const EventBannerPageCarousel =()=>{
    const [swiperRef, setSwiperRef] = useState(null);
    return(<>
  <Grid container justifyContent="center" >
      <Grid item xs={12} md={12} style={{backgroundColor:""}}>
     
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={20}
     
       
        loop={true} 
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{height:"64vh",width:"15.5vw",borderRadius:"1vw"}}>
            <div>
            <img style={{height:"45vh",width:"100%", borderRadius: '1vw'}} src={cardimg1}/>
            <h6 style={{padding:"0.2vh 1vh",fontSize:"1.1vw",fontWeight:"600"}}>Avengers</h6>
            <p style={{padding:"0vh 1vh"}}>Action/Sci-fi</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor:"",height:"64vh",width:"15.5vw",borderRadius:"1vw"}}>
            <div>
            <img style={{height:"45vh",width:"100%", borderRadius: '1vw'}} src={cardimg3}/>
            <h6 style={{padding:"0.5vh 1vh",fontSize:"1.1vw",fontWeight:"600"}}>Avengers</h6>
            <p style={{padding:"0vh 1vh"}}>Action/Sci-fi</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor:"",height:"64vh",width:"15.5vw",borderRadius:"1vw"}}>
            <div>
            <img style={{height:"45vh",width:"100%", borderRadius: '1vw'}} src={cardimg2}/>
            <h6 style={{padding:"0.5vh 1vh",fontSize:"1.1vw",fontWeight:"600"}}>Avengers</h6>
            <p style={{padding:"0vh 1vh"}}>Action/Sci-fi</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor:"",height:"64vh",width:"15.5vw",borderRadius:"1vw"}}>
            <div>
            <img style={{height:"45vh",width:"100%", borderRadius: '1vw'}} src={cardimg1}/>
            <h6 style={{padding:"0.5vh 1vh",fontSize:"1.1vw",fontWeight:"600"}}>Avengers</h6>
            <p style={{padding:"0vh 1vh"}}>Action/Sci-fi</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor:"",height:"64vh",width:"15.5vw",borderRadius:"1vw"}}>
            <div>
            <img style={{height:"45vh",width:"100%", borderRadius: '1vw'}} src={cardimg3}/>
            <h6 style={{padding:"0.5vh 1vh",fontSize:"1.1vw",fontWeight:"600"}}>Avengers</h6>
            <p style={{padding:"0vh 1vh"}}>Action/Sci-fi</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor:"",height:"64vh",width:"15.5vw",borderRadius:"1vw"}}>
            <div>
            <img style={{height:"45vh",width:"100%", borderRadius: '1vw'}} src={cardimg2}/>
            <h6 style={{padding:"0.5vh 1vh",fontSize:"1.1vw",fontWeight:"600"}}>Avengers</h6>
            <p style={{padding:"0vh 1vh"}}>Action/Sci-fi</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"64vh",width:"15.5vw",borderRadius:"1vw"}}>
            <div>
            <img style={{height:"45vh",width:"100%", borderRadius: '1vw'}} src={cardimg1}/>
            <h6 style={{padding:"0.2vh 1vh",fontSize:"1.1vw",fontWeight:"600"}}>Avengers</h6>
            <p style={{padding:"0vh 1vh"}}>Action/Sci-fi</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor:"",height:"64vh",width:"15.5vw",borderRadius:"1vw"}}>
            <div>
            <img style={{height:"45vh",width:"100%", borderRadius: '1vw'}} src={cardimg3}/>
            <h6 style={{padding:"0.5vh 1vh",fontSize:"1.1vw",fontWeight:"600"}}>Avengers</h6>
            <p style={{padding:"0vh 1vh"}}>Action/Sci-fi</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor:"",height:"64vh",width:"15.5vw",borderRadius:"1vw"}}>
            <div>
            <img style={{height:"45vh",width:"100%", borderRadius: '1vw'}} src={cardimg2}/>
            <h6 style={{padding:"0.5vh 1vh",fontSize:"1.1vw",fontWeight:"600"}}>Avengers</h6>
            <p style={{padding:"0vh 1vh"}}>Action/Sci-fi</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor:"",height:"64vh",width:"15.5vw",borderRadius:"1vw"}}>
            <div>
            <img style={{height:"45vh",width:"100%", borderRadius: '1vw'}} src={cardimg1}/>
            <h6 style={{padding:"0.5vh 1vh",fontSize:"1.1vw",fontWeight:"600"}}>Avengers</h6>
            <p style={{padding:"0vh 1vh"}}>Action/Sci-fi</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor:"",height:"64vh",width:"15.5vw",borderRadius:"1vw"}}>
            <div>
            <img style={{height:"45vh",width:"100%", borderRadius: '1vw'}} src={cardimg3}/>
            <h6 style={{padding:"0.5vh 1vh",fontSize:"1.1vw",fontWeight:"600"}}>Avengers</h6>
            <p style={{padding:"0vh 1vh"}}>Action/Sci-fi</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor:"",height:"64vh",width:"15.5vw",borderRadius:"1vw"}}>
            <div>
            <img style={{height:"45vh",width:"100%", borderRadius: '1vw'}} src={cardimg2}/>
            <h6 style={{padding:"0.5vh 1vh",fontSize:"1.1vw",fontWeight:"600"}}>Avengers</h6>
            <p style={{padding:"0vh 1vh"}}>Action/Sci-fi</p>
            </div>
        </SwiperSlide>
      </Swiper>
      </Grid>
    </Grid>
    
    
    </>)
}

export default EventBannerPageCarousel