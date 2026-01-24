export default function Experience() {
  const jobs = [
    {
      id: 1,
      title: 'Technical Support Specialist I',
      company: 'PointSolve Technology, Inc.',
      location: 'Lebanon, PA',
      period: 'DEC 2024 - PRESENT',
      description: 'Provide end-to-end IT support for diverse clients including on-site installations, troubleshooting, and remote help desk services within an MSP environment.',
      highlights: [
        'Manage multiple client environments simultaneously',
        'Conduct system reviews and implement proactive improvements',
        'Maintain detailed client documentation',
        'Deliver secure, scalable IT solutions'
      ]
    },
    {
      id: 2,
      title: 'PC Deployment Technician',
      company: 'All Lines Technology',
      location: 'Harrisburg, PA',
      period: 'SEP 2024 - DEC 2024',
      description: 'Executed large-scale hardware rollouts across multiple healthcare facilities, managing imaging and deployment of end-user devices.',
      highlights: [
        'Large-scale hardware deployments across healthcare facilities',
        'Ensured compliance with UPMC IT standards',
        'Integrated systems into Active Directory environment',
        'Conducted comprehensive site surveys'
      ]
    },
    {
      id: 3,
      title: 'Help Desk Analyst',
      company: 'Kutztown University',
      location: 'Kutztown, PA',
      period: 'JAN 2022 - MAY 2024',
      description: 'Provided comprehensive IT support across campus via phone, email, ticketing systems, and on-site assistance.',
      highlights: [
        'Specialized in remote network troubleshooting',
        'Provided on-site support for classrooms and meeting areas',
        'Resolved technical issues promptly and effectively',
        'Collaborated with senior IT leadership'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Professional Experience</h2>
        <div className="experience-timeline">
          {jobs.map((job, index) => (
            <div key={job.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="job-header">
                  <div>
                    <h3>{job.title}</h3>
                    <p className="company-name">{job.company}</p>
                  </div>
                  <span className="job-period">{job.period}</span>
                </div>
                <p className="job-location">📍 {job.location}</p>
                <p className="job-description">{job.description}</p>
                <ul className="job-highlights">
                  {job.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
