import React from 'react'
import ui from '../../assets/ui.png'
import './Myprojects.css'
import scroll_img1 from '../../assets/scroll_img1.jpg'
import scroll_img2 from '../../assets/scroll_img2.jpg'
import scroll_img3 from '../../assets/scroll_img3.jpg'
import scroll_img4 from '../../assets/scroll_img4.jpg'
import scroll_img5 from '../../assets/scroll_img5.jpg'
import uxui1 from '../../assets/uxui1.png'
import uxui2 from '../../assets/uxui2.png'
import school_project from '../../assets/school_project.png'












const Myprojects = () => {
  return (
    <div id='project' className='project'>
       <h1><span>My Projects</span></h1>

      <div className='card-project'>

        <div>
          <h2> project Template</h2>
        </div>
        <hr />
        <h3>Template</h3>

        <div className='template'>
        <div className='temp-card1'>
          <img src={uxui1} alt="" />
        <p>Project Mifdterm User Interface design at Setec Institute  </p>

        
        </div>

        <div className='temp-card1'>
          <img src={uxui2} alt="" />
          <p>Project Mifdterm User Interface design at Setec Institute</p>

        </div>
        <div className='temp-card1'>
          <img  src={school_project} alt="" />
          <p>Project Mifdterm User Interface design at Setec Institute</p>

        </div>
        {/* <div className='temp-card1'>
          <img src={project1} alt="" />
          <p> final project using html css JavaScript at Setec Institute</p>

        </div>
        */}
        </div>

      

      </div>


  

      
    </div>
  )
}

export default Myprojects
