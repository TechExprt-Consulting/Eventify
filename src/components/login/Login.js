import React from 'react'
import './Login.css'


const Login = () => {
  return (
    <div className='login-background'>
           <div className='mb-3'><img id='imageclass' src='./Eventify-logo.png'/></div>
          <div className='inner-login-box'>
 
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
                <div className='forgot'>
                <p className='forgot-password'>Forgot Password?</p>
                </div>
                 
                 <div>
                 <button className="btn btn" id='signin' type="button">Login</button>
                 <div className='mt-2 end-content'>
                    <p className='sign-up-free'>Don't have an account ? <span id="free-sign-up">Sign up free.</span> </p>
                 </div>

                 </div>

          </div>
    </div>
  )
}

export default Login
