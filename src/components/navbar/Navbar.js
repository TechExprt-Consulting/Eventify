import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='mainnavbar'>
      <div>logo</div>
      <div className='right-nav-list'>
        <ul className='right-list'>
            <li>Home</li>
            <li>Movies</li>
            <li>Events</li>
            <li>Plays</li>
            <li>Activity</li>
            <li>ListYourShow</li>
        </ul>
        <span><i class="fa-solid fa-bars"></i></span>
        <div></div>
      </div>
    </div>
  )
}

export default Navbar
