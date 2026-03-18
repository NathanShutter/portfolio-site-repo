import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Let's Connect</h2>
        <p className="contact-intro" style={{textAlign: 'center', color: 'var(--text-muted)', maxWidth: 700, margin: '0.5rem auto 1.5rem'}}>Open to discussing IT infrastructure, automation, and technical opportunities. Reach out via email or connect on GitHub / LinkedIn.</p>
n        <div className="contact-container">
          <div className="contact-grid">
            <a href="mailto:nateshut1@gmail.com" className="contact-card">
              <div className="contact-icon">📧</div>
              <div className="contact-title">Email</div>
              <div className="contact-link">nateshut1@gmail.com</div>
            </a>
n            <a href="https://www.linkedin.com/in/nathan-shutter-abc123" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon">💼</div>
              <div className="contact-title">LinkedIn</div>
              <div className="contact-link">/in/nathan-shutter-abc123</div>
            </a>
n            <a href="https://github.com/NathanShutter" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon">💻</div>
              <div className="contact-title">GitHub</div>
              <div className="contact-link">@NathanShutter</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
