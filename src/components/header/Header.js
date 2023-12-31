import React, { useState,useEffect} from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  // Add a scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position (you can adjust the threshold as needed)
      const isScrolling = window.scrollY > 50;

      // Update the state based on the scroll position
      setScrolling(isScrolling);
    };

    window.addEventListener('scroll', handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    
    
        <div className='header-name '>
        <nav className={`header-name ${scrolling ? 'navbar navbar-expand-lg navbar-main-scroll bg-transperent ': activeLink === 0 ?'navbar navbar-expand-lg navbar-main bg-transperent':'navbar navbar-expand-lg navbar-main-rest bg-transperent'}`}>
          <div className="container-fluid ">
            <span className="navbar-brand offset-1" href="#"><img src='Eventify-logo.png'></img></span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
              <ul className="navbar-nav ">
                <li className="nav-item mx-3 mt-1 pt-1">
                  <span className='list-name'><Link to="/" className={activeLink === 0 ? 'custom-linkactive' : 'custom-link'} onClick={() => handleLinkClick(0)}>Home</Link></span>
                </li>
                <li className="nav-item mx-3 mt-1 pt-1">
                  <span className='list-name'><Link to="/movie" className={activeLink === 1 ? 'custom-linkactive' : 'custom-link'} onClick={() => handleLinkClick(1)} >Movies</Link></span>
                </li>
                
                <li className="nav-item mx-3 mt-1 pt-1">
                  <span className='list-name' ><Link to="/Event" className={activeLink === 2 ? 'custom-linkactive' : 'custom-link'} onClick={() => handleLinkClick(2)}>Events</Link></span>
                </li>


                <li className="nav-item mx-3 mt-1 pt-1 ">
                  <span className='list-name'><Link to="/ListYourShow" className={activeLink === 3 ? 'custom-linkactive' : 'custom-link'} onClick={() => handleLinkClick(3)}>List your Show</Link></span>
                </li>
                <li className="nav-item mx-3 ">
              
                <button className="btn btn main-btn" ><Link to="/login" className='main-btn-link' onClick={() => handleLinkClick(4)}>LogIn</Link></button>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>

        </div>

        
 

   
  )
}

export default Header
