import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";




const Footer = () => {
  return (
    <div>
        <footer>


            <div>

                <h2>Useful Link</h2>
               <ul>
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Project</li>
                <li>Contact</li>
               </ul>

            </div>


            <div>
                <h3>New Sletter</h3>
                <input type="text" className='emailinp' placeholder='Enter your email' /><br />
                <button className='btn'>Subscribe</button>
            </div>


            <div>

                <h2>Contact</h2>
                <p>Email:  johndoe@example.com</p>
                <p>Phone:  +855 123 456 7890</p>
                <p>Address:271 Street, terk Thlar , Sen Sok , Phnom Penh, Cambodia</p>

                <div className='icon'>
                    <FaFacebook />
                <BsLinkedin />
                <FaSquareInstagram />
                <FaGithub />
                </div>
                
                
                
            </div>


         



        </footer>

        <hr />
        <div className='copyright'>
        <p className='copyright'>© 2024 Leakena Nhorn. All rights reserved.</p>
        <div className='last-footer'>
        <p>Term of Services</p>
        <p>Privacy Policy</p>
        <p>Connect with me</p>
        </div>
        
        </div>
        





        
      
    </div>
  )
}

export default Footer
