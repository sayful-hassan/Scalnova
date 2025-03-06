import { useState } from 'react';
import './NavBar.css';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Mobile Menu Button */}
      <button 
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Navigation Links */}
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <div className="nav-left">Home</div>
        <div className="nav-left">About</div>
        <div className="nav-left">Services</div>
        <div className="logo">SCALNOVA</div>
        <div className="nav-right">Our works</div>
        <div className="nav-right">Careers</div>
        <div className="nav-right">Contact</div>
      </div>
    </nav>
  )
}