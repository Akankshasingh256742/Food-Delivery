import React from 'react';
import './footer.css'
import { assets } from '../../assets/frontend_assets/assets';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-content' id='footer-content'>
            <div className='footer-content-left'>
                 <img src={assets.logo} alt="" />
                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quo corporis aliquid quidem tenetur. Cupiditate ea ipsum aut, rem provident ab assumenda explicabo cumque fugiat dolor a molestiae non voluptates.</p>
                  <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                  </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                  <h2>GET IN TOUCH</h2>
                  <ul>
                    <li>+1-121-234-2345</li>
                    <li>Contact@tomato.com</li>
                  </ul>
            </div>
        </div>
        <hr />
        <div className='footer-copyright'>
        <p>Copyright 2024 © Tomato.com - All right reserved </p>
        </div>
    </div>
  )
}

export default Footer