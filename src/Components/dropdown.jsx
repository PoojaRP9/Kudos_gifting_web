// src/Components/Dropdown.js
import React from 'react';
import './dropdown.css'; // Import the CSS for styling

const Dropdown = () => {
  return (
    <div className="dropdown">
      <button className="dropdown-button">
        Menu
      </button>
      <div className="dropdown-content">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Dropdown;
