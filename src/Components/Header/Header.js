import React from 'react';
import './Header.scss';
// import Logo from '../Logo';

 const Header = (props) => {
  return (
    <nav>
      <ul>
      {/* <Logo /> */}
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact us</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Logout</a></li>
      </ul>
    </nav>
  )
}
export default Header