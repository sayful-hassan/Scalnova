import React from 'react';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
      </div>
      
      <div className="logo">SCALNOVA</div>
      
      <div className="nav-right">
        <a href="/works">Our works</a>
        <a href="/careers">Careers</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  )
}