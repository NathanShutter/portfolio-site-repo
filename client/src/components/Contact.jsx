import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>Open to discussing IT opportunities, collaborations, and industry insights. Feel free to reach out!</p>
            <div className="contact-links">
              <a href="mailto:nateshut1@gmail.com" className="contact-link">📧 Email</a>
              <a href="https://github.com/NathanShutter" target="_blank" rel="noopener noreferrer" className="contact-link">💻 GitHub</a>
              <a href="https://www.linkedin.com/in/nathan-shutter-abc123" target="_blank" rel="noopener noreferrer" className="contact-link">💼 LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
