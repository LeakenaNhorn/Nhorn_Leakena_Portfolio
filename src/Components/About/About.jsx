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

        <div className='about-section'>

        <div><img src={about_me} alt="" /></div>
        <div className='describe'>
          <p className='des-p1'>I am an experienced Frontend Developer with over a decade of professional <br /> expertise in the field.Throughout my career, I have had the privilege of collaborating <br /> with prestigious organizations, contributing to their success and growth.</p>
           <p>My passion for frontend development is not only reflected in my extensive experience <br />but also in the enthusiasm and dedication I bring to each project.</p>

 
      

            <div className='skill'>
               <div className='skill-left'>
                <ul>
                <li>HTML 
                  <span className='bar'> 
                    <span className='html'></span>
                  </span>

                </li>
                <li>CSS
                  <span className='bar'>
                    <span className='css'></span>
                  </span>
                </li>
                <li>JavaScript 
                  <span className='bar'> 
                    <span className='js'></span>
                  </span>
                </li>
                <li>React
                  <span className='bar'> 
                    <span className='react'></span>
                  </span>
                </li>

                </ul>

               </div>
               <div className='skill-right'>
                <ul>
               
                <li>Next js
                  <span className='bar'> <span className='next'></span></span>
                </li>
                <li>Tailwind
                  <span className='bar'> <span className='tailwind'></span></span>
                </li>
                <li>UX UI design
                  <span className='bar'> <span className='uxui'></span></span>
                </li>
                <li>Design tool
                  <span className='bar'> <span className='adobe'></span></span>
                </li>
              </ul>
              </div>
              

            </div>
        </div>


        </div>



     

      <div className='about-more'>

        <div className='education'>

        

       <h2>Education</h2>


       <div>
        <h3>High school</h3>
        <p>Sok An DongKpus High school (2018 - 2020)</p>
       </div>

       <div>
          <h3>Mentors International</h3>
           <p>Scholarship 100% of Graphic Design (Sep - Dec 2022 )</p>

        </div>
        <div>
          <h3>Etec Center</h3>
           <p>Short course of Web Design  (May - Aug 2022)</p>

        </div>


        <div>
         <h3>Setec Institute</h3>
        <p>Bachelor of Management Information System (2021 - present)</p>

        </div>

        </div>

        <div className='experience'>
        <h2>Experience</h2>

        <div>
          <h3>Commercial Arbitration Lab </h3>
          <p>Volunteer as Graphic design (Nov - Dec 2022)</p>
        </div>
        <div>
          <h3>Bonphum </h3>
          <p>Volunteer as Graphic design (Feb - Apr 2023)</p>
        </div>




        </div>

       

       
      
      
      



      </div>







        




      

     
    </div>
  )
}

export default About
