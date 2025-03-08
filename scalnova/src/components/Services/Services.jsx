import React from 'react';
import './Services.css';

const services = [
  'Web Design',
  'Web Development',
  'UI/UX Design',
  'Branding & Graphic Design',
  'Fashion Design',
  'Logo Design'
];

export default function Services() {
  return (
    <div className="services-page">
      {/* <Navbar /> */}
      
      <main className="services-main">
        <div className="container">
          <h1>Our Services</h1>
          <p className="services-intro">
            We provide a range of creative and development services to help businesses grow and succeed.
          </p>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card glass-card">
                <h3>{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  )
}