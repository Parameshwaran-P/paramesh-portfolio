import React, { useState, useRef} from 'react'
import "./Navbar.css"
import logo from "../../assets/paramesh-logo.png";
import underline from "../../assets/logo-symbol.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const menuRef = useRef();

  const openmenu = () =>{
    menuRef.current.style.right="0";
  }
  const closemenu = () =>{
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
        <img src={logo} alt="" className='company-logo'/>
        <img src={menu_open} onClick={openmenu} alt="" className='nav-mob-open'/>
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} onClick={closemenu} alt="" className="nav-mob-close" />
            <li><AnchorLink className="anchor-link" href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu === "home"?<img src={underline} alt=''className='underline'/>:<></>}</li>
            <li><AnchorLink className="anchor-link" offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu === "about"?<img src={underline} alt='' className='underline'/>:<></>}</li>
            <li><AnchorLink className="anchor-link" offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu === "services"?<img src={underline} alt='' className='underline'/>:<></>}</li>
            <li><AnchorLink className="anchor-link" offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu === "work"?<img src={underline} alt='' className='underline'/>:<></>}</li>
            <li><AnchorLink className="anchor-link" offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact"?<img src={underline} alt='' className='underline'/>:<></>}</li>
        </ul>
        <div className='nav-connect'>
           <AnchorLink className="anchor-link" offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
    </div>
  )
}

export default Navbar