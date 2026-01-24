import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSubmitStatus('')

    // Determine API URL based on environment
    const apiUrl = window.location.hostname === 'localhost' 
      ? 'http://localhost:5000/api/contact'
      : 'https://portfolio-backend-je20.onrender.com/api/contact'

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('✅ Message sent successfully! I\'ll get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('❌ Failed to send message. Please try again.')
        console.error('Error:', data)
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('❌ Error sending message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

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
              <a href="tel:(717)701-9942" className="contact-link">📱 Call Me</a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={loading}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
            <textarea
              name="message"
              placeholder="Your Message (Job inquiries, partnerships, etc.)"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={loading}
            ></textarea>
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus && <p className="submit-status">{submitStatus}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
