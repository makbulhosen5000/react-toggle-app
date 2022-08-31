import React from 'react'
import {Link as NavLink} from 'react-router-dom';
import './style.css';
function Navbar() {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </nav>
  )
}

export default Navbar