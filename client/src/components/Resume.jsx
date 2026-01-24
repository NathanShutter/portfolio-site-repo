export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <h2>Resume</h2>
        
        <div className="resume-container">
          <div className="resume-header">
            <h3>Nathan Shutter</h3>
            <p className="resume-title">Technical Support Specialist I</p>
            <div className="resume-contact">
              <span>📧 nateshut1@gmail.com</span>
              <span>📱 (717) 701-9942</span>
              <span>📍 Lebanon, PA</span>
              <span>💼 <a href="https://www.linkedin.com/in/nathan-shutter-abc123" target="_blank" rel="noopener noreferrer" style={{color: '#10B981', textDecoration: 'none'}}>LinkedIn</a></span>
              <span>💻 <a href="https://github.com/NathanShutter" target="_blank" rel="noopener noreferrer" style={{color: '#10B981', textDecoration: 'none'}}>GitHub</a></span>
            </div>
          </div>

          <div className="resume-section">
            <h4>Professional Summary</h4>
            <p>
              Technical Support Specialist I at PointSolve Technology, Inc., with expertise in providing on-site and remote support, 
              resolving network issues, and optimizing system performance. Proficient in Windows systems, Office 365, and network protocols, 
              including DNS and DHCP. B.S. in Information Technology (ABET Accredited) with proven ability to manage diverse client environments 
              and deliver secure, scalable IT solutions.
            </p>
          </div>

          <div className="resume-section">
            <h4>Professional Experience</h4>
            
            <div className="experience-item">
              <div className="experience-header">
                <h5>Technical Support Specialist I</h5>
                <span className="date">DEC 2024 - PRESENT</span>
              </div>
              <p className="company">PointSolve Technology, Inc. | Lebanon, PA</p>
              <ul className="experience-list">
                <li>Provide end-to-end IT support for diverse clients including on-site installations, troubleshooting, and remote help desk services within an MSP environment</li>
                <li>Conduct system reviews to identify recurring challenges and implement proactive measures to improve network performance and reliability</li>
                <li>Maintain detailed client documentation and ensure seamless integration of third-party business applications</li>
                <li>Manage multiple client environments simultaneously, utilizing advanced problem-solving and communication skills</li>
                <li>Apply knowledge of emerging technologies to deliver secure, scalable IT solutions aligned with client operational requirements</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h5>PC Deployment Technician</h5>
                <span className="date">SEP 2024 - DEC 2024</span>
              </div>
              <p className="company">All Lines Technology | Harrisburg, PA</p>
              <ul className="experience-list">
                <li>Executed large-scale hardware rollouts across multiple healthcare facilities, ensuring compliance with UPMC's IT standards</li>
                <li>Conducted comprehensive site surveys to assess technical requirements and verify asset deployment accuracy</li>
                <li>Managed imaging, configuration, and deployment of end-user devices, integrating into UPMC's Active Directory environment</li>
                <li>Collaborated with cross-functional teams to optimize infrastructure and ensure secure systems integration</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h5>Help Desk Analyst</h5>
                <span className="date">JAN 2022 - MAY 2024</span>
              </div>
              <p className="company">Kutztown University | Kutztown, PA</p>
              <ul className="experience-list">
                <li>Collaborated with senior leadership to provide regular IT service performance updates</li>
                <li>Addressed client inquiries via phone, email, and ticketing systems, resolving technical issues promptly</li>
                <li>Specialized in remote network troubleshooting and on-site technical support for classrooms</li>
                <li>Directed service calls and tickets to appropriate teams, improving response times and user satisfaction</li>
              </ul>
            </div>
          </div>

          <div className="resume-section">
            <h4>Technical Skills</h4>
            <div className="resume-skills">
              <div className="skill-group">
                <strong>IT Support:</strong>
                <span>Help Desk Support, Remote Troubleshooting, Technical Documentation, On-site Support</span>
              </div>
              <div className="skill-group">
                <strong>Operating Systems:</strong>
                <span>Windows (Systems & Workstations), Linux (Ubuntu, CentOS, Kali)</span>
              </div>
              <div className="skill-group">
                <strong>Networking:</strong>
                <span>TCP/IP, DNS, DHCP, Wireshark, Network Troubleshooting</span>
              </div>
              <div className="skill-group">
                <strong>Cloud & Infrastructure:</strong>
                <span>AWS, DigitalOcean, Active Directory, Office 365</span>
              </div>
              <div className="skill-group">
                <strong>Database Management:</strong>
                <span>SQL, MySQL, MariaDB, PostgreSQL</span>
              </div>
              <div className="skill-group">
                <strong>Scripting & Development:</strong>
                <span>Python, Bash Scripting</span>
              </div>
              <div className="skill-group">
                <strong>Soft Skills:</strong>
                <span>Problem-Solving, Communication, Collaboration, Documentation, Adaptability</span>
              </div>
            </div>
          </div>

          <div className="resume-section">
            <h4>Education</h4>
            <div className="resume-certs">
              <div className="cert-item">
                <strong>B.S. Information Technology (ABET Accredited)</strong> - Kutztown University of Pennsylvania (MAY 2024)
              </div>
              <div className="cert-item">
                <strong>Relevant Coursework:</strong> Computer Networks, Advanced Information Security, Unix: Scripting and Administration, Computing Systems Integration, Data Mining & Analytics, Software Engineering
              </div>
              <div className="cert-item">
                <strong>Involvement:</strong> Men's Club Soccer Secretary
              </div>
            </div>
          </div>
        </div>

        <div className="resume-actions">
          <a href="mailto:nateshut1@gmail.com" className="resume-btn">📧 Email Me</a>
          <a href="https://github.com/NathanShutter" target="_blank" rel="noopener noreferrer" className="resume-btn">💻 GitHub</a>
        </div>
      </div>
    </section>
  )
}
