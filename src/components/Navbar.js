// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <input type="text" placeholder="Search Here..." />
      <div className="navbar-icons">
        <i className="fas fa-bell"></i>
        <img src="pic.avif" alt="Profile" />
      </div>
    </div>
  );
}

export default Navbar;
