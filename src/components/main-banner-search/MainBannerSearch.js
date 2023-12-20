import React from 'react'
import './MainBannerSearch.css'
import SearchIcon from '@mui/icons-material/Search';
const MainBannerSearch = () => {
  return (
    <div className='main-top-banner'>
       
          
          <div className='banner-content'>
             <p className="" style={{fontWeight:"500"}}>Easy to Search You Just enter the Keyword</p>
             <h1 className="" >Connecting the world</h1>
          </div>
         <div class="input-group banner-content-search">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1"><SearchIcon/></span>
            </div>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
            <div class="input-group-append">
            <button type="button" className="btn btn">Search</button>
            </div>
        </div>
    </div>
   
  )
}

export default MainBannerSearch
