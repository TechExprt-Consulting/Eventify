import React from 'react'
import MainBannerSearch from './main-banner-search/MainBannerSearch'
import Cardsectionfirst from './cardsectionfirst/Cardsectionfirst'
import Cardsectionsecond from './cardsectionsecond/Cardsectionsecond'
import MiddleBanner from './middleBanner/MiddleBanner'
import TimeCounter from './timeCounter/TimeCounter'
import Header from './header/Header'
import Featuresection from './featuresection/Featuresection'
const Home = () => {
  return (
    <div>
      
      <MainBannerSearch/>
      <Cardsectionfirst/>
      <Cardsectionsecond/>
      <MiddleBanner/>
      {/* <Featuresection/> */}
      <TimeCounter/>
    </div>
  )
}

export default Home
