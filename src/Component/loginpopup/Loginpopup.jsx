import React, { useState } from 'react'
import './loginpopup.css'
import { assets } from '../../assets/frontend_assets/assets'

function Loginpopup({setshowlogin}) {
    const [currentstate,setcurrentstate] = useState('Sign Up')
  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className='login-popup-title'>
                  <h2>{currentstate}</h2>
                  <img onClick={()=>{
                        setshowlogin(false)
                  }} src={assets.cross_icon} alt="" />
            </div>
            <div className='login-popup-inputs'>
                   {currentstate==='Sign Up'?<input type="text" placeholder='Your Name' required />:<></>}
                   <input type="email" placeholder='Your Email' required />
                   <input type="password" placeholder='Password' required />  
            </div>
            <button>{currentstate==='Sign Up'?'Create account':'Login'}</button>
            <div className='login-popup-condition'>
                <input type="checkbox" required />
                <p>By continuing, I agree to the use of privacy policy.</p>
                </div>
                {currentstate==='Login'
                ?<p>Create a new account? <span onClick={()=>{setcurrentstate('Sign Up')}}>Click here</span></p>
                :<p>Already have an acount? <span onClick={()=>{setcurrentstate('Login')}}>Login</span></p>
                }
                
                
                
            
        </form>
    </div>
  )
}

export default Loginpopup