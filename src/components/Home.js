import React from 'react'
import TimeCounter from './timeCounter/TimeCounter'
import Header from './header/Header'
import Featuresection from './featuresection/Featuresection'
import Footer2 from './footer/Footer2'
import LandingpageCarousel from './landingPagecarousel/LandingpageCarousel'
import LandingpageCardCarousel from './landingPagecarousel/LandingpageCardCarousel'
import LandingpageEventCarousel from './landingPagecarousel/LandingpageEventCarousel'
import DynamicComponent from './landingpagecomponent/DynamicComponent'


const Home = () => {
  return (
    <div>
      <LandingpageCarousel/>
      <DynamicComponent/>
      <LandingpageCardCarousel/>
      <LandingpageEventCarousel/>
      
      {/* <Featuresection/> */}
      <TimeCounter/>
      <Footer2/>
    </div>
  )
}

export default Home
