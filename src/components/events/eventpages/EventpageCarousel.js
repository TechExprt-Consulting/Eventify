import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const EventpageCarousel = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 1 },
        1024: { items: 1 },
    };
    
    const items = [
        <div className="item" data-value="1" style={{margin:"0vw 0.5vw",borderRadius:".5vw"}}><img  src='salarbanner.jpeg' style={{height:"45vh" ,width:"100%",borderRadius:".5vw" }}/></div>,
        <div className="item" data-value="2" style={{margin:"0vw 0.5vw",borderRadius:".5vw"}}><img  src='dunki.jpeg' style={{height:"45vh" ,width:"100%",borderRadius:".5vw" }}/></div>,
        <div className="item" data-value="3" style={{margin:"0vw 0.5vw",borderRadius:".5vw"}}><img  src='promo.jpeg' style={{height:"45vh" ,width:"100%",borderRadius:".5vw" }}/></div>,
        <div className="item" data-value="4" style={{margin:"0vw 0.5vw",borderRadius:".5vw"}}><img  src='salarbanner.jpeg' style={{height:"45vh" ,width:"100%",borderRadius:".5vw" }}/></div>,
        <div className="item" data-value="5" style={{margin:"0vw 0.5vw",borderRadius:".5vw"}}><img  src='dunki.jpeg' style={{height:"45vh" ,width:"100%",borderRadius:".5vw" }}/></div>,
    ];
  return (
    <div>
  <AliceCarousel
          autoPlay
         
          autoPlayStrategy="action"
          autoPlayInterval={2000}
          animationDuration={1000}
          disableButtonsControls="false"
          infinite
        
        items={items}
        paddingLeft={50}
        paddingRight={50}
        responsive={responsive}
    />
    </div>
  )
}

export default EventpageCarousel
