import React from 'react'
import './Footer.css'
import Logo from '../../assets/Logo.png'
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";




const Footer = () => {
    
    const currentYear = new Date().getFullYear();

  return (
    <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={Logo} alt="" />
                    <p>I am a frontend developer from Takeo , Crafting user-friendly and visually appealing websites using HTML, CSS, and JavaScript. Let's bring your designs to life</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                           <FaUserLarge  className='user-icon'/>
                            <input type="email" placeholder='Enter your email' />

                    </div>
                    <div className="footer-subscribe">
                        Subscribe
                    </div>
                </div>
            </div>


        <hr />
        <div className='footer-bottom'>
        <p className='footer-bottom-left'>©{currentYear}Leakena Nhorn. All rights reserved.</p>
        <div className='footer-bottom-right'>
        <p>Term of Services</p>
        <p>Privacy Policy</p>
        <p>Connect with me</p>
        </div>
        
        </div>
        
        
      
    </div>
  )
}

export default Footer
