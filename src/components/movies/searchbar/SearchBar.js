import React from 'react'


import './SearchBar.css'
import ClosedCaptionOffOutlinedIcon from '@mui/icons-material/ClosedCaptionOffOutlined';


const SearchBar = () => {
  return (
    <div className=''>
        <div className='d-flex justify-content-between'>
        <div className='col-md-6'>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text "style={{border:"none"}}>
                     
                        </span>
                    </div>
                    <input
                        style={{border:"none"}}
                        type="text"
                        className="form-control"
                        placeholder="Search Cinemas"
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                    />
                    </div>
        </div>
        <div className='col-md-6 d-flex  justify-content-end pl-4'>
            
            <div className='d-flex'><span className='green-dot mt-2 mx-2'></span><p>AVAILABLE</p></div>
            
            <div className='d-flex'><span className='orange-dot mt-2 mx-2'></span><p>FAST FILLING</p></div>
            
            <div className='d-flex'><span className='red-dot mt-2 mx-2'></span><p>ALMOST FULL</p></div>
           
            <div className='d-flex mx-2'> <ClosedCaptionOffOutlinedIcon/><p>SUBTITLE LANGUAGE</p></div>
        </div>    
        </div> 
    </div>
  )
}

export default SearchBar
