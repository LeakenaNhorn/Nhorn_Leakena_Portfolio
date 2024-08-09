import React from 'react'
import './About.css'
import about_me from '../../assets/about_me.jpg'
import Setec_Logo from '../../assets/Setec_Logo.png'
import Mentors_Logo from '../../assets/Mentors_logo.png'

const About = () => {
  return (
    <div id='about' className='about' >

        <div className='title'>
            <h1>About me</h1>

        </div>

        <div className='about-sections'>
        <div className='about-left'>
          <img src={about_me} alt="" />
        </div>

        <div className='about-right'>
          <div className='about-para'>
               <p>I am an experienced Frontend Developer with over a decade of professional  expertise in the field.Throughout my career, I have had the privilege of collaboratingwith prestigious organizations, contributing to their success and growth.</p>
          
          </div>

          <div className='about-skills'>
            <div className='about-skill'><p>HTML&CSS</p>
            <hr style={{width:"30%"}}/>
            </div>
            
            <div className='about-skill'><p>Tailwind</p><hr style={{width:"17%"}}/></div>
            <div className='about-skill'><p>Javascript</p><hr style={{width:"10%"}}/></div>
            <div className='about-skill'><p>Next&React</p><hr style={{width:"12%"}}/></div>
            <div className='about-skill'><p>Design Tool</p><hr style={{width:"20%"}}/></div>

          

          </div>
          
        </div>

        </div>

        <div className='about-educations'>
           {/* <div className="education">
            <h1>High school</h1>
            <p>Sok An DongKpus High school (2018 - 2020)</p> */}

          {/* </div> */}
          {/* <hr /> */}
          <div className="education">
          <h1>Mentors International</h1>
            <p>Scholarship 100% of Graphic Design (Sep - Dec 2022 )</p>

          </div>
          <hr />
          <div className="education">
          <h1>Etec Center</h1>
            <p>Short course of Web Design (May - Aug 2022)</p>

          </div>
          <hr />
          <div className="education">
          <h1>Setec Institute</h1>
            <p>Bachelor of Management Information System (2021 - present)</p>

          </div>
        </div>


      

     
    </div>
  )
}

export default About
