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
    <div >
       
        <EventCarousel/>
        <div className='container'>
        <Eventcard data={movie}/>
        </div>
        
    </div>
  )
}

export default Movie
