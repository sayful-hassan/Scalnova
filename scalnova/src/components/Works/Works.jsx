import React from 'react';
import './Works.css';

const caseStudies = [
  {
    title: "E-commerce Platform Redesign",
    problem: "Low conversion rates and poor mobile experience",
    solution: "Implemented responsive design with React and optimized checkout flow",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    results: "40% increase in mobile conversions",
    feedback: "Their technical expertise transformed our online sales"
  },
  {
    title: "Enterprise Analytics Dashboard",
    problem: "Legacy system with slow reporting",
    solution: "Built real-time analytics with Angular and Python",
    tech: ["Angular", "Python", "AWS", "Tableau"],
    results: "60% faster report generation",
    feedback: "Revolutionized our data-driven decisions"
  }
];

const featuredProjects = [
  {
    title: "Fashion Brand Portal",
    category: "Web Design",
    description: "Luxury brand showcase with immersive visuals"
  },
  {
    title: "SAAS Platform",
    category: "Web Development",
    description: "Cloud-based project management solution"
  }
];

const testimonials = [
  {
    text: "Amazing work! The team delivered beyond expectations.",
    author: "Tech Startup CEO"
  },
  {
    text: "Professional approach and stunning results.",
    author: "Fashion Brand Manager"
  }
];

export default function Works() {
  return (
    <div className="works-page">
      {/* <Navbar /> */}
      
      <main className="works-main">
        <div className="container">
          {/* Hero Section */}
          <section className="works-hero">
            <h1>Our Portfolio</h1>
            <p className="hero-subtext">
              Transforming ideas into impactful digital solutions
            </p>
          </section>

          {/* Case Studies */}
          <section className="case-studies">
            <div>
              title="Case Studies" 
              subtitle="Detailed explorations of our problem-solving process" 
            </div>
            
            <div className="case-studies-grid">
              {caseStudies.map((study, index) => (
                <div key={index} className="glass-card case-study-card">
                  <h3>{study.title}</h3>
                  <div className="case-study-content">
                    <div className="case-study-section">
                      <h4>Challenge</h4>
                      <p>{study.problem}</p>
                    </div>
                    <div className="case-study-section">
                      <h4>Solution</h4>
                      <p>{study.solution}</p>
                    </div>
                    <div className="case-study-section">
                      <h4>Technologies</h4>
                      <div className="tech-tags">
                        {study.tech.map((tech, i) => (
                          <span key={i} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div className="case-study-section">
                      <h4>Results</h4>
                      <p>{study.results}</p>
                    </div>
                    <blockquote className="testimonial">
                      "{study.feedback}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Projects */}
          <section className="featured-projects">
            <div>
              title="Featured Work"
              subtitle="Highlighted projects showcasing our expertise"
            </div>
            <div className="projects-grid">
              {featuredProjects.map((project, index) => (
                <div key={index} className="glass-card project-card">
                  <h3>{project.title}</h3>
                  <span className="category">{project.category}</span>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="testimonials">
                
            <div>
              title="Client Voices"
              subtitle="What our partners say about working with us"
            </div>
            
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="glass-card testimonial-card">
                  <blockquote>
                    "{testimonial.text}"
                    <cite>- {testimonial.author}</cite>
                  </blockquote>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  )
}