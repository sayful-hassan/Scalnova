import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
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
        <div className="nav-left">...</div>
        <div className="logo">SCALNOVA</div>
        <div className="nav-right">...</div>
      </div>
    </nav>
  )
}