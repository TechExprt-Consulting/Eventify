import React from 'react'
import './DynamicComponent.css'
const DynamicComponent = () => {
  return (
    <div className='d-flex flex-wrap justify-content-evenly dynamic-main-div'>
      <div className='text-center dynamic-div '>
        <img style= {{width:"3.3vw",height:"6.5vh"}} src="ic-check 1.png"/>
        <h6 className='mt-2 dynamictitle' style={{fontSize:"1.2vw"}}>CHOOSE EVENTS AND TICKETS</h6>
        <p style={{fontSize:".8vw"}}>with only few clicks</p>
      </div>
      <div className='text-center dynamic-div '>
        <img style={{width:"3.5vw",height:"6.5vh"}} src="mdi_cart 1.png"/>
        <h6 className='mt-2 dynamictitle' style={{fontSize:"1.2vw"}}>BUY DIRECTLY FROM ORGANIZERS</h6>
        <p style={{fontSize:".8vw"}}>Pay online and cash on delivery</p>
      </div>
      <div className='text-center dynamic-div'>
        <img style={{width:"4vw",height:"8vh"}} src="fe_ticket 1.png"/>
        <h6 className='dynamictitle' style={{fontSize:"1.2vw"}}>RECEIVE TICKETS</h6>
        <p style={{fontSize:".8vw"}}>via email or right at your door</p>
      </div>
    </div>
  )
}

export default DynamicComponent
