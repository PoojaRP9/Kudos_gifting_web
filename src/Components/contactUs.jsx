// src/Components/ContactUs.js
import React from 'react';
import './ContactUs.css';


function ContactUs() {
  


  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form  className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            
          />
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
      
    </div>
  );
}

export default ContactUs;
