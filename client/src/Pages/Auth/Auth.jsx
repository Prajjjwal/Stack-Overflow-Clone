import React, { useState } from 'react'
import './Auth.css'
import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth'

const Auth = () => {

  const [isSignUp, setIsSignup] = useState(false);

  const handleSwitch = () => {
    setIsSignup(!isSignUp)
  }
  return (
    <section class='auth-section'>
        {isSignUp && <AboutAuth/>}
        <div class='auth-container-2'>
          {!isSignUp && <img src={icon} alt='stack-overflow-icon' className='login-logo'/>}
          <form>
            {
              isSignUp && (
                <label htmlFor='name'>
                  <h4>Display Name</h4>
                  <input type="text" name='name' id='name'/>
                </label>
              )
            }
            <label htmlFor="email">
              <h4>Email</h4>
              <input type="email" name='email' id='email'/>
            </label>
            <label htmlFor="email">
              <div style={{display:"flex", justifyContent:"space-between"}}>
                <h4>Password</h4>
                {!isSignUp && <p style={{color:"#007ac6", fontSize:"13px"}}>forgot password?</p>}
              </div>
              <input type="password" name='password' id='password'/>
              {isSignUp && <p style={{color:"#666767", fontSize:"13px"}}>Password must contain at least eight <br/>characters, including at least 1 letter and <br/> 1 number.</p>}
            </label>
            {
              isSignUp && (
                <label htmlFor="check">
                  <input type="checkbox" id='check' />
                  <p style={{fontSize:"13px"}}>Opt-in to receive occasional,<br/>product updates, user research invitations, <br/>company announcements and digests.</p>
                </label>
              )
            }
            <button type='submit' className='auth-btn'>{!isSignUp ? 'Log in' : 'Sign up'}</button>
            {
              isSignUp && (
                <p style={{color:"#666767", fontSize:"13px"}}>
                  By clicking "Sign up", you agree to our 
                  <span style={{color:"#007ac6"}}> terms of <br/>service</span>, 
                  <span style={{color:"#007ac6"}}> privacy policy</span> and 
                  <span style={{color:"#007ac6"}}> cookie policy</span></p>
              )
            }
          </form>
          <p>
            {!isSignUp ? "Don't have an account?" : "Already have an account?"}
            <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignUp? "Log in" : "Sign up"}</button>
          </p>
        </div>      
    </section>
  )
}

export default Auth
