import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.jpg'


const Hero = () => {
  return (
    <div id='home' className='hero'>
        
        <img src={profile} alt="" />
        <h1> <span>Hello, I'm Leakena Nhorn</span> frontend developer based in phnom Penh </h1>
        <p>I am a frontend developer from Takeo , Crafting user-friendly and visually appealing websites using HTML, CSS, and JavaScript. Let's bring your designs to life</p>
        <div className='hero-action'>
            <div className='hero-connect'> connect with me</div>
            <div className='hero-resume'> My Resume</div>
            

        </div>






      
    </div>
  )
}

export default Hero
