export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Active Directory Migration Project',
      description: 'Successfully migrated 500+ user accounts to new AD infrastructure with zero downtime using PowerShell automation and delegation strategies.',
      tech: ['Active Directory', 'PowerShell', 'Group Policy', 'Migration'],
      link: '#'
    },
    {
      id: 2,
      title: 'Virtual Infrastructure Setup',
      description: 'Designed and deployed virtualized environment with VMware ESXi, implemented HA clustering, and automated backup solutions for enterprise data center.',
      tech: ['VMware', 'Hyper-V', 'Clustering', 'Backup Strategy'],
      link: '#'
    },
    {
      id: 3,
      title: 'Network Security Implementation',
      description: 'Configured enterprise firewall rules, implemented VPN infrastructure, and established network segmentation to improve security posture.',
      tech: ['Firewalls', 'VPN', 'Network Security', 'Troubleshooting'],
      link: '#'
    },
    {
      id: 4,
      title: 'Disaster Recovery & Backup Plan',
      description: 'Developed comprehensive backup and disaster recovery strategy, tested failover procedures, achieving 99.5% RTO/RPO compliance.',
      tech: ['Backup Solutions', 'Recovery', 'Documentation', 'Testing'],
      link: '#'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>IT Projects & Achievements</h2>
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
