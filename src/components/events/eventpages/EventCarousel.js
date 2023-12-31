import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {data} from '../../../images/Banner.png'
import './EventCarousel.css'

const EventCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow:1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2900,
        cssEase: "linear",
        
      };
  return (
    <div className=''  >
        
        <Slider {...settings}>
          
         <div className='' style={{width:"100vw"}}>
            <img  src='salarbanner.jpeg' style={{height:"45vh" ,width:"100vw"}}/>
           
          </div>
          <div className='' style={{width:"100vw" }}>
            <img  src='dunki.jpeg' style={{height:"45vh" ,width:"100vw"}}/>
           
          </div>
          <div className='' style={{width:"100vw"}}>
            <img  src='promo.jpeg' style={{height:"45vh" ,width:"100vw"}}/>
           
          </div>
        </Slider>
    </div>
  )
}

export default EventCarousel
