import React from "react";
import {HashLink} from 'react-router-hash-link';
import logo from '../assets/Asset.png';

function Header() {
  return (
    <nav className="nav-header">
      <img src={logo} alt='little lemon' />
      <main>
        <HashLink to={'/#home'}>Home</HashLink>
        <HashLink to={'/booking'}>Booking</HashLink>
        <HashLink to={'/#contact'}>Contact</HashLink>
        <HashLink to={'/#about'}>About</HashLink>
      </main>
    </nav>
  )
}


export default Header