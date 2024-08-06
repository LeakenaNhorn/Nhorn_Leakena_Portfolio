import React from 'react'
import './Contact.css'
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";





const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "9f32e09b-b0c1-4388-b2a0-a77cc1baaf98");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert("Form submitted successfully");
        }
      };

  return (
    <div id='contact' className='contact'>


        <h1><span>Get In Touch</span></h1>
        <div className='contact-section'>

       
        <div className='let-talk'>

            <h2>Let's Talk</h2>
            <h5 className='talk-desc'>I am currently avaliable <br /> to take on new projects , 
                 so feel free  <br />to send  me a  Message about anything that
                you  <br />want me to work on. You can contact me anytime.
            </h5>
            <p>
            <IoLocation className='location'/>
                271 Street , Terk thlar , Sen sok , Phnom penh
            </p>
            <p>
           
            <FaPhoneAlt  className='phone'/>
            +855 887480583
              
            </p>
            <p>
            <MdMarkEmailUnread  className='email'/>
                naahshii@gmail.com
            </p>
            <p>
            <FaSquareInstagram  className='instagram'/>
               Leakena Nhorn
            </p>
            
        </div>

        <div className='contact-form'>
            <form onSubmit={onSubmit}>
                <p>Your Name</p>
                <input type='text' name='name' placeholder='Your Name' /><br />
                <p>Your Email</p>
                <input type='email' name='email' placeholder='Your Email' /><br />
                <p>Your Message</p>
                <textarea name='message' placeholder='Write Message' required /><br />
                <button type='submit' className='contact-btn'>Submit</button>
            </form>
        </div>
        </div>


      
    </div>
  )
}

export default Contact
