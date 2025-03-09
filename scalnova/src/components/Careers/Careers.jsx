import React from 'react';
import './Careers.css';

const jobOpenings = [
  {
    title: "Frontend Developer",
    type: "Full Time",
    location: "Remote",
    description: "Build responsive web interfaces using modern React stack"
  },
  {
    title: "Backend Developer",
    type: "Full Time",
    location: "Hybrid",
    description: "Develop scalable APIs and microservices with Node.js"
  },
  {
    title: "UI/UX Designer",
    type: "Contract",
    location: "Remote",
    description: "Create intuitive user experiences and visual designs"
  }
];

const benefits = [
  "Flexible Work Hours",
  "Remote Work Opportunities",
  "Comprehensive Health Insurance",
  "Continuous Learning Budget",
  "Career Growth Programs",
  "Paid Time Off"
];

export default function Careers() {
  return (
    <div className="careers-page">
      {/* <Navbar /> */}
      
      <main className="careers-main">
        <div className="container">
          {/* Hero Section */}
          <section className="careers-hero">
            <h1>Build the Future With Us</h1>
            <p className="hero-subtext">
              Join our team of innovators and shape the digital landscape
            </p>
          </section>

          {/* Job Openings */}
          <section className="job-openings">
            <h2>Current Opportunities</h2>
            <p className="section-subtitle">Explore our available positions</p>
            
            <div className="jobs-grid">
              {jobOpenings.map((job, index) => (
                <div key={index} className="glass-card job-card">
                  <h3>{job.title}</h3>
                  <div className="job-meta">
                    <span className="job-type">{job.type}</span>
                    <span className="job-location">{job.location}</span>
                  </div>
                  <p>{job.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Work Culture */}
          <section className="work-culture">
            <div className="glass-card culture-card">
              <h2>Our Work Culture</h2>
              <p className="culture-description">
                We thrive in a collaborative environment that values innovation, 
                diversity, and continuous learning. Our flat hierarchy encourages 
                open communication and creative problem-solving.
              </p>
            </div>
          </section>

          {/* Benefits */}
          <section className="benefits-section">
            <h2>Benefits & Perks</h2>
            <ul className="benefits-list">
              {benefits.map((benefit, index) => (
                <li key={index} className="benefit-item">
                  {benefit}
                </li>
              ))}
            </ul>
          </section>

          {/* Internships */}
          <section className="internship-section">
            <div className="glass-card internship-card">
              <h2>Internship Opportunities</h2>
              <p className="internship-description">
                We offer 3-6 month internships for students and recent graduates. 
                Gain hands-on experience working on real projects with mentorship 
                from industry experts across various domains.
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  )
}