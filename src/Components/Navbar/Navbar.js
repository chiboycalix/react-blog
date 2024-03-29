import React from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';

 const Navbar = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact us</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/signup">Signup</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
      </ul>
    </nav>
  )
}
export default Navbar