import React from 'react'


import './SearchBar.css'
import ClosedCaptionOffOutlinedIcon from '@mui/icons-material/ClosedCaptionOffOutlined';


const SearchBar = () => {
  return (
    <div className=''>
        <div className='d-flex justify-content-between align-items-center'>
        <div className='col-md-6'>
                <div className="input-group" >
                    <div className="input-group-prepend">
                       
                    </div>
                    <input
                        style={{border:"none",backgroundColor:"#f4f0ec",height:"5vh",borderRadius:"5px"}}
                        type="text"
                        className="form-control"
                        placeholder="Search Cinemas..."
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                    />
                    </div>
        </div>
        <div className='col-md-6 d-flex  justify-content-end '>
            
            <div className='d-flex flex-wrap mx-3'><span className='green-dot mt-2 mx-1'></span><p style={{peddingRight:"1vw"}}>AVAILABLE</p></div>
            
            <div className='d-flex mx-3'><span className='orange-dot mt-2 mx-1'></span><p>FAST FILLING</p></div>
            
            <div className='d-flex mx-3'><span className='red-dot mt-2 mx-1'></span><p>ALMOST FULL</p></div>
           
            <div className='d-flex mx-3'> <ClosedCaptionOffOutlinedIcon/><p>SUBTITLE LANGUAGE</p></div>
        </div>    
        </div> 
    </div>
  )
}

export default SearchBar
