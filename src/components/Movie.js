import React from 'react'
import Header from './header/Header'
import EventCarousel from './events/eventpages/EventCarousel'
import Eventcard from './events/eventpages/Eventcard'
const Movie = () => {
  const movie=  {
    "name": "The Shawshank Redemption",
    "certificate": "R",
    "languages": "English,hindi"
  }
  
  return (
    <div className='mt-1' >
       
        <EventCarousel/>
        <div className='container'>
        <Eventcard />
        </div>
        
    </div>
  )
}

export default Movie
