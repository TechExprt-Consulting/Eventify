import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
const header = () => {


  return (
    
    
        <div>
        <nav className="navbar navbar-expand-lg navbar-main ">
          <div className="container-fluid ">
            <span className="navbar-brand " href="#"><img src='Eventify-logo.png'></img></span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse offset-4 " id="navbarSupportedContent">
              <ul className="navbar-nav ">
                <li className="nav-item mx-4 mt-1 pt-1">
                  <span className='list-name'>Home</span>
                </li>
                <li className="nav-item mx-4 mt-1 pt-1">
                  <span className='list-name'>Movies</span>
                </li>
                
                <li className="nav-item mx-4 mt-1 pt-1">
                  <span className='list-name' >Events</span>
                </li>
                <li className="nav-item mx-4 mt-1 pt-1">
                  <span className='list-name'>Plays</span>
                </li>
                <li className="nav-item mx-4 mt-1 pt-1 ">
                  <span className='list-name'>Activity</span>
                </li>
                <li className="nav-item mx-4 ">
              
                <button className="btn btn main-btn" >List your Show</button>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>

        </div>

        
 

   
  )
}

export default header
