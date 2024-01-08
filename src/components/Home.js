import React from 'react'
import TimeCounter from './timeCounter/TimeCounter'
import Header from './header/Header'
import Featuresection from './featuresection/Featuresection'
import Footer2 from './footer/Footer2'
import LandingpageCarousel from './landingPagecarousel/LandingpageCarousel'
import LandingpageCardCarousel from './landingPagecarousel/LandingpageCardCarousel'
import LandingpageEventCarousel from './landingPagecarousel/LandingpageEventCarousel'
import DynamicComponent from './landingpagecomponent/DynamicComponent'
import LandingpageMoviecardCarousel from './landingPagecarousel/LandingpageMoviecardCarousel'
import LandingpageEventCarousel2 from './landingPagecarousel/LandingpageEventCarousel2'

const Home = () => {
   localStorage.removeItem('singleEventId');
   localStorage.removeItem('homeEventId');
   localStorage.removeItem('singleMovieId');
   
  return (
    <div>
      <LandingpageCarousel/>
      <DynamicComponent/>
      <LandingpageMoviecardCarousel/>
      <LandingpageEventCarousel2/>
      
      {/* <Featuresection/> */}
      <TimeCounter/>
      <Footer2/>
    </div>
  )
}

export default Home
