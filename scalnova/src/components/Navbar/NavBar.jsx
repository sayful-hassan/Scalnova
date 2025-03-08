import { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';


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
        <Link to='/' className="nav-left">Home</Link>
        <Link to='/about' className="nav-left">About</Link>
        <Link to='/services' className="nav-left">Services</Link>
        <div className="logo">SCALNOVA</div>
        <Link to='/works' className="nav-right">Our works</Link>
        <Link to='/careers' className="nav-right">Careers</Link>
        <Link to='/contact' className="nav-right">Contact</Link>
      </div>
    </nav>
  )
}