import React from 'react'
import './ListYourShow.css'
const ListYourShow = () => {
  return (
    <div className='mainlistyourshow'>
            <div className='ListInfo'>
                <div className='listInfoContent' id='listInfoContent-first'><h2 className='px-3'>Benefits of using-Do it Yourself our new event management tool</h2></div>
                <div className='listInfoContent'>
                    <div className='listInfoContent-img'><img style={{height:"10vh"}} src='ic-device.png'/></div>
                    <div className='listInfoContent-data'>
                        <h6>Quick and Easy Registration</h6>
                        <p className='content-detail'>complete your registration with just your PAN card and bank details</p>
                    </div> 
                </div>
                <div className='listInfoContent'>
                    <div className='listInfoContent-img'><img style={{height:"10vh"}} src='ic-time.png'/></div>
                    <div className='listInfoContent-data'>
                        <h6>Take your Event live Superfast!</h6>
                        <p className='content-detail'>complete your registration with just your PAN card and bank details</p>
                    </div> 
                </div>
                <div className='listInfoContent'>
                    <div className='listInfoContent-img'><img style={{height:"10vh"}} src='ic-monitor.png'/></div>
                    <div className='listInfoContent-data'>
                        <h6>Quick and Easy Registration</h6>
                        <p className='content-detail'>complete your registration with just your PAN card and bank details</p>
                    </div> 
                </div>
            </div>

            <div className='ListInput'>
                <h1 id='ListInput-heading'><img style={{height:"8vh",marginRight:"1vw"}}src='e-logo.png'/>Do It Yourself</h1>
                <div className='register-otp mt-2'>
                    <label for="exampleInputEmail1" class="form-label otp-label">Mobile no.</label>
                    <div class="input-group mb-3">
                    
                    <input type="text" class="form-control otp-input" placeholder='Enter your Moble no.' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <button className="btn btn mt-3" id='otpbutton' type="button">Send OTP</button>
                    <hr className='mt-5'/>

                    <h6 className='lower-otp-content'>Already have an account ? <span id="otp-login-span">Log In.</span> </h6>
                    <p className='lower-otp-content-para'>Incase of any query,please write to <span id='otp-login-span2'>bd@eventify.com</span></p>
                    
                </div>
            </div>
    </div>
  )
}

export default ListYourShow
