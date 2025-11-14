// import React, { useState } from 'react'
import { useState } from "react";
import "./Navbar.css";
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div>
      <nav className="top-navbar">
        <Link to="/" className="logo">MEGA-BITE.INC</Link>
        <div className="hamburger-icon" onClick={()=>setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li><NavLink to="/about" >About Us</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
           <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
      <div className="space-under"></div>
    </div>
  )
}

export default Navbar
