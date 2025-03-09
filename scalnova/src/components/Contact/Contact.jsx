import React from 'react';
import './Contact.css';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="contact-page">
      {/* <Navbar /> */}
      
      <main className="contact-main">
        <div className="container">
          <h1 className="contact-heading">Contact</h1>
          
          {/* Inquiry Form */}
          <section className="form-section">
            <h2>Inquiry Form</h2>
            <form className="contact-form glass-morphism">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </section>

          {/* Location */}
          <section className="location-section">
            <h2>Our Location</h2>
            <div className="map-container glass-morphism">
              {/* Add actual map embed code here */}
              <div className="map-placeholder">
                <p>Map integration placeholder</p>
                <p>vyz Business Street<br/>kerala City, IK 45678</p>
              </div>
            </div>
          </section>

          {/* Social Media */}
          <section className="social-section">
            <h2>Follow Us</h2>
            <p className="social-description">Stay connected with our latest updates</p>
            <div className="social-icons">
              <a href="#" className="social-link"></a>
              <a href="#" className="social-link"></a>
              <a href="#" className="social-link"></a>
              <a href="#" className="social-link"></a>
            </div>
          </section>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  )
}