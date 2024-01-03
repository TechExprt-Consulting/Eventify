import React, { useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Swiper, SwiperSlide } from 'swiper/react';
import cardimg1 from '../../images/aqua.jpeg'
import cardimg2 from '../../images/sambhadur.jpeg'
import cardimg3 from '../../images/m23.jpeg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const LandingpageCardCarousel = () => {
    const [swiperRef, setSwiperRef] = useState(null);
  return (
 <>
    <Grid container justifyContent="center" >
      <Grid item xs={12} md={8} style={{backgroundColor:""}}>
      <div><p style={{fontSize:"1.6vw",fontWeight:"600"}}>Recommended Movies</p></div>  
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        loop={true} 
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{height:"64vh",width:"180px",borderRadius:"1vw"}}>
            <div>
            <img style={{height:"45vh",width:"100%", borderRadius: '1vw'}} src={cardimg1}/>
            <h6 style={{padding:"0.2vh 1vh",fontSize:"1.4vw",fontWeight:"600"}}>Avengers</h6>
            <p style={{padding:"0vh 1vh"}}>Action/Sci-fi</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor:"",height:"64vh",width:"180px",borderRadius:"1vw"}}>
            <div>
            <img style={{height:"45vh",width:"100%", borderRadius: '1vw'}} src={cardimg3}/>
            <h6 style={{padding:"0.5vh 1vh",fontSize:"1.4vw",fontWeight:"600"}}>Avengers</h6>
            <p style={{padding:"0vh 1vh"}}>Action/Sci-fi</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor:"",height:"64vh",width:"180px",borderRadius:"1vw"}}>
            <div>
            <img style={{height:"45vh",width:"100%", borderRadius: '1vw'}} src={cardimg2}/>
            <h6 style={{padding:"0.5vh 1vh",fontSize:"1.4vw",fontWeight:"600"}}>Avengers</h6>
            <p style={{padding:"0vh 1vh"}}>Action/Sci-fi</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor:"",height:"64vh",width:"180px",borderRadius:"1vw"}}>
            <div>
            <img style={{height:"45vh",width:"100%", borderRadius: '1vw'}} src={cardimg1}/>
            <h6 style={{padding:"0.5vh 1vh",fontSize:"1.4vw",fontWeight:"600"}}>Avengers</h6>
            <p style={{padding:"0vh 1vh"}}>Action/Sci-fi</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor:"",height:"64vh",width:"180px",borderRadius:"1vw"}}>
            <div>
            <img style={{height:"45vh",width:"100%", borderRadius: '1vw'}} src={cardimg3}/>
            <h6 style={{padding:"0.5vh 1vh",fontSize:"1.4vw",fontWeight:"600"}}>Avengers</h6>
            <p style={{padding:"0vh 1vh"}}>Action/Sci-fi</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor:"",height:"64vh",width:"180px",borderRadius:"1vw"}}>
            <div>
            <img style={{height:"45vh",width:"100%", borderRadius: '1vw'}} src={cardimg2}/>
            <h6 style={{padding:"0.5vh 1vh",fontSize:"1.4vw",fontWeight:"600"}}>Avengers</h6>
            <p style={{padding:"0vh 1vh"}}>Action/Sci-fi</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{height:"64vh",width:"180px",borderRadius:"1vw"}}>
            <div>
            <img style={{height:"45vh",width:"100%", borderRadius: '1vw'}} src={cardimg1}/>
            <h6 style={{padding:"0.2vh 1vh",fontSize:"1.4vw",fontWeight:"600"}}>Avengers</h6>
            <p style={{padding:"0vh 1vh"}}>Action/Sci-fi</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor:"",height:"64vh",width:"180px",borderRadius:"1vw"}}>
            <div>
            <img style={{height:"45vh",width:"100%", borderRadius: '1vw'}} src={cardimg3}/>
            <h6 style={{padding:"0.5vh 1vh",fontSize:"1.4vw",fontWeight:"600"}}>Avengers</h6>
            <p style={{padding:"0vh 1vh"}}>Action/Sci-fi</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor:"",height:"64vh",width:"180px",borderRadius:"1vw"}}>
            <div>
            <img style={{height:"45vh",width:"100%", borderRadius: '1vw'}} src={cardimg2}/>
            <h6 style={{padding:"0.5vh 1vh",fontSize:"1.4vw",fontWeight:"600"}}>Avengers</h6>
            <p style={{padding:"0vh 1vh"}}>Action/Sci-fi</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor:"",height:"64vh",width:"180px",borderRadius:"1vw"}}>
            <div>
            <img style={{height:"45vh",width:"100%", borderRadius: '1vw'}} src={cardimg1}/>
            <h6 style={{padding:"0.5vh 1vh",fontSize:"1.4vw",fontWeight:"600"}}>Avengers</h6>
            <p style={{padding:"0vh 1vh"}}>Action/Sci-fi</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor:"",height:"64vh",width:"180px",borderRadius:"1vw"}}>
            <div>
            <img style={{height:"45vh",width:"100%", borderRadius: '1vw'}} src={cardimg3}/>
            <h6 style={{padding:"0.5vh 1vh",fontSize:"1.4vw",fontWeight:"600"}}>Avengers</h6>
            <p style={{padding:"0vh 1vh"}}>Action/Sci-fi</p>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor:"",height:"64vh",width:"180px",borderRadius:"1vw"}}>
            <div>
            <img style={{height:"45vh",width:"100%", borderRadius: '1vw'}} src={cardimg2}/>
            <h6 style={{padding:"0.5vh 1vh",fontSize:"1.4vw",fontWeight:"600"}}>Avengers</h6>
            <p style={{padding:"0vh 1vh"}}>Action/Sci-fi</p>
            </div>
        </SwiperSlide>
      </Swiper>
      </Grid>
    </Grid>

 </>
  )
}

export default LandingpageCardCarousel
