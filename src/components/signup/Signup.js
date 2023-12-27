import React from 'react'
import './Signup.css'
const Signup = () => {
  return (
<div className='Signup-background'>
           <div className='mb-3'><img id='imageclass' src='./Eventify-logo.png'/></div>
          <div className='inner-Signup-box'>

               <label for="exampleInputEmail1" class="form-label">Full Name</label>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default"><img id="login-icon" src='user.png'/></span>
                  <input type="text" class="form-control input-login" placeholder='example@gmail.com' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
 
                <label for="exampleInputEmail1" class="form-label">Email </label>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default"><img id="login-icon" src='user.png'/></span>
                  <input type="text" class="form-control input-login" placeholder='example@gmail.com' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>

                <label for="exampleInputPassword1" class="form-label">Password</label>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default"><img id="login-icon" src='lock.png'/></span>
                  <input type="text" class="form-control input-login" placeholder="at least 8 charactor" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>

                <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default"><img id="login-icon" src='lock.png'/></span>
                  <input type="text" class="form-control input-login" placeholder="at least 8 charactor" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>


                 
                 <div>
                 <button className="btn btn mt-2" id='signin' type="button">SignUp</button>
                 <div className='mt-2 end-content'>
                    <p className='sign-up-free'>Already have an account ? <span id="free-sign-up">Log In.</span> </p>
                 </div>

                 </div>

          </div>
    </div>
  )
}

export default Signup
