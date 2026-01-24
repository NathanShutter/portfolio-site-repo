export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Touch-And-Go',
      description: 'University Fingerprint Scanner Attendance System. Developed a college attendance system using a fingerprint scanner, Raspberry Pi, and LCD screen, hosted on AWS EC2 with a MySQL database for managing user and course information.',
      tech: ['Raspberry Pi', 'AWS EC2', 'MySQL', 'Python', 'Fingerprint Scanner'],
      link: '#'
    },
    {
      id: 2,
      title: 'SeatSense',
      description: 'Patient Seating Monitor Sensor & Web App developed in collaboration with Saint Luke\'s Health Network. Notifies caregivers of missed check-ins or excessive sitting time, with data accessible through a web application. Successfully handed off to the health network for implementation.',
      tech: ['Web App', 'Sensor Integration', 'Healthcare Tech', 'Data Management'],
      link: '#'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
