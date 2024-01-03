import React from 'react'
import MainBannerSearch from './main-banner-search/MainBannerSearch'
import Cardsectionfirst from './cardsectionfirst/Cardsectionfirst'
import Cardsectionsecond from './cardsectionsecond/Cardsectionsecond'
import MiddleBanner from './middleBanner/MiddleBanner'
import TimeCounter from './timeCounter/TimeCounter'
import Header from './header/Header'
import Featuresection from './featuresection/Featuresection'
import Footer2 from './footer/Footer2'
import LandingpageCarousel from './landingPagecarousel/LandingpageCarousel'
import LandingpageCardCarousel from './landingPagecarousel/LandingpageCardCarousel'
import LandingpageEventCarousel from './landingPagecarousel/LandingpageEventCarousel'


const Home = () => {
  return (
    <div>
      <LandingpageCarousel/>
      {/* <MainBannerSearch/> */}
      <LandingpageCardCarousel/>
      <LandingpageEventCarousel/>
      {/* <Cardsectionfirst/> */}
      {/* <Cardsectionsecond/> */}
      {/* <MiddleBanner/> */}
      {/* <Featuresection/> */}
      <TimeCounter/>
      <Footer2/>
    </div>
  )
}

export default Home
