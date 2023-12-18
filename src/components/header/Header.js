import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
const header = () => {


  return (
    <div className='main-top-banner'>
      <div className='container'>
        <div>
        <nav className="navbar navbar-expand-lg  transparent-bg">
          <div className="container-fluid ">
            <span className="navbar-brand " href="#"><img src='Eventify-logo.png'></img></span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse offset-2 " id="navbarSupportedContent">
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

        <div className='d-flex flex-column justify-content-center align-items-center search-main-div'> 
          <div className='d-flex flex-column justify-content-center align-items-center'>
             <p className="mb-0" style={{color:"#FAAC1D",fontWeight:"500",fontSize:"20px"}}>Easy to Search You Just enter the Keyword</p>
             <h1 className="" style={{color:"white",fontSize:"52px"}}>Connecting the world</h1>
          </div>
          
           <div className="input-group search-box mt-4">
              <span class="input-group-text" id="basic-addon1"><SearchIcon/></span>
              <input type="text" style={{height:"50px", width:""}} class="form-control custom-width" id="inputGroupFile02"/>
              <label className="input-group-text searchButton d-flex justify-content-center " style={{width:"20%",color:"white",fontWeight:"600"}} for="inputGroupFile02">Search</label>
           </div>
            
          

        </div>
      </div>

    </div>
  )
}

export default header
