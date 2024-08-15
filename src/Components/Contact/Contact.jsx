import React , { useState } from 'react'
import './Contact.css'
// import React, { useState } from "react"
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";





const Contact = () => {

  
  const [status, setStatus] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9f32e09b-b0c1-4388-b2a0-a77cc1baaf98");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setStatus({ type: "success", message: "Form submitted successfully" });
      } else {
        setStatus({ type: "error", message: "Something went wrong. Please try again." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "An error occurred. Please try again later." });
    }
  };


  return (
    <div id='contact' className='contact'>

        <div className="contact-title">
        <h1>Get In Touch</h1>

        </div>
     


      <div className='contact-section'>


        <div className='contact-left'>

          <h1>Let's Talk</h1>
          <p >I am currently avaliable to take on new projects ,
            so feel free  to send  me a  Message about anything that
            you want me to work on. You can contact me anytime.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <p>
                <IoLocation className='location' />
                271 Street , Terk thlar , Sen sok , Phnom penh </p>
            </div>

            <div className="contact-detail">
              <p>

                <FaPhoneAlt className='phone' />
                +855 887480583  </p>
            </div>

            <div className="contact-detail">
             
          <p>
            <MdMarkEmailUnread className='email' />
                 naahshii@gmail.com
          </p>
            </div>
            <div className="contact-detail">
             
          
            <p>
            <FaSquareInstagram className='instagram' />
            Leakena Nhorn
          </p>
               </div>

          </div>




        </div>

        <div>
          <form className='contact-right' onSubmit={onSubmit}>
            <label htmlFor="">Your Name</label>
            <input type='text' name='name' placeholder='Your Name' />
            <label htmlFor="">Your Email</label>
            <input type='email' name='email' placeholder='Your Email' />
            <label htmlFor=''>Your Message</label>
            <textarea name='message' placeholder='Write Message' required />
            <button type='submit' className='contact-submit'>Submit</button>
          </form>
          {status && (
          <div className={status.type === "success" ? "success" : "error"}>
          {status.message}
        </div>
      )}
        </div>
      </div>



    </div>
  )
}

export default Contact
