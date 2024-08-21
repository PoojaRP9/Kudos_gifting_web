import React from 'react';
import './navbar.css';
import logo from '../assets/logo.jpeg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="top-line">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li className="dropdown">
            <a href="#">Products</a>
            <div className="dropdown-content">
              <a href="#">Hampers</a>
              <a href="#">Bags & Lugages</a>
              <a href="#">GIftsets</a>
              <a href="#">Back Pack</a>
              <div className="dropdown">
              <a href="#">Bags</a>
              </div>
              <a href="#">Diaries</a>
              <a href="#">Eco-Friendly Product</a>
              <a href="#">Clothing</a>
              <a href="#">Watches</a>
              <a href="#">Wooden Gift Articles</a>
              <a href="#">Utility Desktop Product</a>
              <a href="#">Caps</a>
              <a href="#">Pens</a>
              <a href="#">Umbrella</a>
              <a href="#">Tiffin Boxes</a>
              <a href="#">Gym Gears</a>
            </div>
          </li>
          <li className="dropdown">
          <a href="#">Brands</a>
          <div className="dropdown-content">
              <a href="#">Jack & Jones</a>
              <a href="#">Fuzzo</a>
              <a href="#">Adidas</a>
              <a href="#">Levis</a>
              <a href="#">Monte Carlo</a>
              <a href="#">Swiss Militory</a>
              <a href="#">Safari</a>
              <a href="#">Sheffer</a>
              <a href="#"></a>
              <a href="#">Delsey Paris</a>
              <a href="#">Cross</a>
              <a href="#">Boat</a>
              <a href="#">Decathlon</a>
            </div>
            </li>
          <li><a href="#">Gifting</a></li>
          <li><a href="/contactUs">Contact us</a></li>
          <li><a href="#">Testimonals</a></li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
     
    </nav>
  );
}

export default Navbar;
