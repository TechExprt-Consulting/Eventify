import React from 'react'
import './TimeCounter.css'
import PersonIcon from '@mui/icons-material/Person';
import EventSeatRoundedIcon from '@mui/icons-material/EventSeatRounded';
const TimeCounter = () => {


  return (
    <>
      <div className='Info-div '>
         <div className='Info-div-content'>
             <p className="mb-0" >January 20,2023</p>
             <h1 className="">World Digital</h1>
             <h1>Conference 2023</h1>
             <div className="Info-div-innerInfo" >
                <div className='mx-2'><span style={{color:"#FAAC1D"}}><EventSeatRoundedIcon /></span> 5000 SEATS</div>
                <div className='mx-2'><span style={{color:"#FAAC1D"}}><PersonIcon/></span> 12 SPEAKERS</div>
                <div className='mx-2' id='inner-id'> PALO CALIFORNIA</div>
            </div>
            <div className=''><button type="button" class="btn btn px-4 py-2 ">Book Now</button></div>
          </div>
      </div>
      <div className='Info-counter'>
        <div className='Info-counter-inner-div'>
            <div className='numbercounter' style={{textAlign:"center"}}><h1 style={{fontSize:"3vw",color:'white'}}>17</h1><p id="innertimer" style={{fontSize:"2vw",color:'white'}}>Days</p></div>
            <div className=' ' style={{fontSize:"3.5vw",color:'white', margin:"0 3.5vw 0 3.5vw",textAlign:"center"}}>:</div>
            <div className='numbercounter' style={{textAlign:"center"}}><h1 style={{fontSize:"3vw",color:'white' }}>18</h1><p id="innertimer" style={{fontSize:"2vw",color:'white'}}>Hours</p></div>
            <div className='' style={{fontSize:"3.5vw",color:'white',margin:"0 3.5vw 0 3.5vw"}}>:</div>
            <div className='numbercounter' style={{textAlign:"center"}}><h1 style={{fontSize:"3vw",color:'white'}}>12</h1><p id="innertimer" style={{fontSize:"2vw",color:'white'}}>Minutes</p></div>
            <div className='' style={{fontSize:"3.5vw",color:'white',margin:"0 3.5vw 0 3.5vw"}}>:</div>
            <div className='numbercounter' style={{textAlign:"center"}}><h1 style={{fontSize:"3vw",color:'white'}}>20</h1><p id="innertimer" style={{fontSize:"2vw",color:'white'}}>Second</p></div>
        </div>
      </div>
    </>
  )
}

export default TimeCounter
