import React, { useState, useRef } from 'react';
import './Navbar.css'
import Logo from '../../assets/Logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Open_menu from '../../assets/Open_menu.png'
import Close_menu from '../../assets/Close_menu.png'




const Navbar = () => {

  const [menu ,setMenu] = useState("Home");
  const menuRef = useRef(null);

  const openMenu = () => {
    menuRef.current.style.right ="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right ="-1550px";
  }

  return (
    <div className='navbar'>
        <img src={Logo} alt="" />
        <img src={Open_menu} onClick={openMenu} alt="" className='nav-mob-open' />
        <ul ref={menuRef} className='nav-menu'>
          <img src={Close_menu} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li> <AnchorLink className='anchor-link'  href='#home'><p onClick={() =>setMenu("home")}>Home</p></AnchorLink>  </li>
            <li> <AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() =>setMenu("about")}>About</p></AnchorLink></li>
            <li> <AnchorLink className='anchor-link' offset={50} href='#project'><p onClick={() =>setMenu("project")}>Project </p></AnchorLink> </li>
            <li>  <AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() =>setMenu("contact")}>Contact</p></AnchorLink> </li>
        </ul>

        <button onClick={() => console.log("profile clicked")}>Profile</button>

       
      
    </div>
  )
}

export default Navbar
