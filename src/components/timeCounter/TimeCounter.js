import React from 'react'
import './TimeCounter.css'
import PersonIcon from '@mui/icons-material/Person';
import EventSeatRoundedIcon from '@mui/icons-material/EventSeatRounded';
const TimeCounter = () => {
  return (
    <div>
      <div className='Info-div mt-5'>
         <div className='d-flex flex-column justify-content-center align-items-center  pt-5'>
             <p className="mb-0" style={{color:"#FAAC1D",fontWeight:"500",fontSize:"20px"}}>January 20,2023</p>
             <h1 className="" style={{color:"white",fontSize:"52px"}}>World Digital</h1>
             <h1 className="" style={{color:"white",fontSize:"52px"}}>Conference 2023</h1>
             <div className="d-flex mt-3" style={{color:"white",fontSize:"14px",fontWeight:"500"}}>
                <div className='mx-2'><span style={{color:"#FAAC1D"}}><EventSeatRoundedIcon /></span> 5000 SEATS</div>
                <div className='mx-2'><span style={{color:"#FAAC1D"}}><PersonIcon/></span> 12 SPEAKERS</div>
                <div className='mx-2'>PALO CALIFORNIA</div>
            </div>
            <div className='mt-5'><button type="button" style={{backgroundColor:"#FAAC1D",fontSize:"14px",color:"white",fontWeight:"500"}} class="btn btn px-4 py-2 ">Book Now</button></div>
          </div>
      </div>
      <div className='Info-counter '>
        <div className='d-flex justify-content-center pt-4'>
            <div className='numbercounter'><h1 style={{fontSize:"46px",color:'white'}}>17</h1><p style={{fontSize:"16px",color:'white'}}>Days</p></div>
            <div className='mx-5 ' style={{fontSize:"46px",color:'white',}}>:</div>
            <div className='numbercounter'><h1 style={{fontSize:"46px",color:'white'}}>18</h1><p style={{fontSize:"16px",color:'white'}}>Hours</p></div>
            <div className='mx-5 ' style={{fontSize:"46px",color:'white',}}>:</div>
            <div className='numbercounter'><h1 style={{fontSize:"46px",color:'white'}}>12</h1><p style={{fontSize:"16px",color:'white'}}>Minutes</p></div>
            <div className='mx-5 ' style={{fontSize:"46px",color:'white',}}>:</div>
            <div className='numbercounter'><h1 style={{fontSize:"46px",color:'white'}}>20</h1><p style={{fontSize:"16px",color:'white'}}>Second</p></div>
        </div>
      </div>
    </div>
  )
}

export default TimeCounter
