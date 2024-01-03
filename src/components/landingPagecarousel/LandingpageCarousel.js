import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../../images/movie1.jpg'
import img2 from '../../images/movie2.jpg'
import img3 from '../../images/movie3.jpg'
import './LandingpageCarousel.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const LandingpageCarousel = () => {
  return (
    <div className='landingcarousel'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img style={{height:"80vh",width:"100vw"}} src={img1}/></SwiperSlide>
        <SwiperSlide><img style={{height:"80vh",width:"100vw"}} src={img2}/></SwiperSlide>
        <SwiperSlide><img style={{height:"80vh",width:"100vw"}} src={img3}/></SwiperSlide>
     
      </Swiper>
    </div>
  )
}

export default LandingpageCarousel
