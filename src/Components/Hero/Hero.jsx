import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.jpg'


const Hero = () => {
  return (
    <div id='home' className='hero'>
        
        <img src={profile} alt="" />
        <h1> <span>Hello, I'm Leakena Nhorn</span>  </h1>
            <h2>I'm a frontend developer , UI/UX Designer based in Phnom penh</h2>

        <p>I am a frontend developer from Takeo , Crafting user-friendly and visually appealing websites using HTML, CSS, and JavaScript. Let's bring your designs to life</p>
        <div className='Hero-button'>
            <button className='seework-btn'> See my work</button>
            <button className='resume'> My Resume</button>
            

        </div>






      
    </div>
  )
}

export default Hero
