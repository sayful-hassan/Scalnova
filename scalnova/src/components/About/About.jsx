import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>Our Story</h1>
          <p className="hero-subtext">Our founder prefers to remain behind the scenes, focusing on building a powerhouse in design and development. The vision is to create impactful digital solutions for companies while also providing opportunities for talented individuals to work and grow</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <h2>Our Mission & Values</h2>
          <div className="glass-card">
            <p>We aim to build high-quality applications and offer lifetime service to our clients. Our platform will allow people to openly contribute their work—clients can post ideas, and developers/designers can collaborate to bring those ideas to life. Additionally, we provide business-ready templates and a marketplace where users can sell their templates</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {['Designers Team', 'Development Team', 'Marketing Team', 'Support Team'].map((team) => (
              <div key={team} className="team-card glass-card">
                <h3>{team}</h3>
                <p>Our team consists of freshers learning from experts, ensuring continuous growth and innovation.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}