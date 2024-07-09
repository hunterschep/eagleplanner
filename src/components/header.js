import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/header.css'; // Make sure this file reflects the new styles

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Manage mobile menu toggle

  return (
    <div className="header">
      <div className="menuIcon" onClick={() => setIsOpen(!isOpen)}>
        {/* Hamburger Icon or Close Icon depending on the state */}
        {isOpen ? 'X' : '☰'}
      </div>
      <div className={`navItems ${isOpen ? 'show' : ''}`}>
        {/* Navigation Links */}
        <Link to="/" className="navItem">home</Link>
        <Link to="/plan" className="navItem">plan</Link>
      </div>
    </div>
  );
};

export default Header;
