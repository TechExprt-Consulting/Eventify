import React from 'react'
import Header from './header/Header'
import EventCarousel from './events/eventpages/EventCarousel'
import Eventcard from './events/eventpages/Eventcard'
const Movie = () => {
  return (
    <div >
       
        <EventCarousel/>
        <div className='container'>
        <Eventcard/>
        </div>
        
    </div>
  )
}

export default Movie
