export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <h2>Resume</h2>
        
        <div className="resume-container">
          <div className="resume-header">
            <h3>Your Name</h3>
            <p className="resume-title">IT Professional & Aspiring System Administrator</p>
            <div className="resume-contact">
              <span>📧 your.email@example.com</span>
              <span>📱 (555) 123-4567</span>
              <span>📍 Your City, State</span>
            </div>
          </div>

          <div className="resume-section">
            <h4>Professional Summary</h4>
            <p>
              Dedicated IT professional with hands-on experience in system administration, infrastructure management, 
              and IT support. Seeking to advance career as a System Administrator with focus on enterprise infrastructure, 
              network security, and automation. Strong problem-solving skills and commitment to continuous learning.
            </p>
          </div>

          <div className="resume-section">
            <h4>Technical Skills</h4>
            <div className="resume-skills">
              <div className="skill-group">
                <strong>Operating Systems:</strong>
                <span>Windows Server 2016/2019/2022, Windows 10/11, Ubuntu, CentOS</span>
              </div>
              <div className="skill-group">
                <strong>Virtualization:</strong>
                <span>VMware vSphere, Hyper-V, VirtualBox</span>
              </div>
              <div className="skill-group">
                <strong>Directory Services:</strong>
                <span>Active Directory, Group Policy, User/Computer Management</span>
              </div>
              <div className="skill-group">
                <strong>Networking:</strong>
                <span>TCP/IP, DNS, DHCP, VPN, Firewall Configuration, Network Troubleshooting</span>
              </div>
              <div className="skill-group">
                <strong>Backup & Recovery:</strong>
                <span>Backup strategies, Disaster Recovery Planning, Data Protection</span>
              </div>
              <div className="skill-group">
                <strong>Cloud Platforms:</strong>
                <span>AWS (EC2, S3, IAM), Microsoft Azure, Office 365</span>
              </div>
              <div className="skill-group">
                <strong>Scripting & Automation:</strong>
                <span>PowerShell, Bash, Group Policy, Task Scheduler</span>
              </div>
              <div className="skill-group">
                <strong>Other:</strong>
                <span>Hardware Troubleshooting, Security Best Practices, Documentation</span>
              </div>
            </div>
          </div>

          <div className="resume-section">
            <h4>Professional Experience</h4>
            
            <div className="experience-item">
              <div className="experience-header">
                <h5>IT Support Technician</h5>
                <span className="date">2023 - Present</span>
              </div>
              <p className="company">Tech Solutions Inc. | Location</p>
              <ul className="experience-list">
                <li>Provide technical support to 200+ end users across multiple departments</li>
                <li>Manage user accounts, permissions, and group policies in Active Directory</li>
                <li>Troubleshoot hardware, software, and network connectivity issues</li>
                <li>Deploy and maintain Windows servers and workstations</li>
                <li>Assist in backup and recovery procedures</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h5>Junior IT Support Technician</h5>
                <span className="date">2022 - 2023</span>
              </div>
              <p className="company">Previous Company | Location</p>
              <ul className="experience-list">
                <li>Provided first-line technical support via helpdesk ticketing system</li>
                <li>Assisted with system installations and software deployments</li>
                <li>Maintained IT asset inventory and documentation</li>
                <li>Supported network and infrastructure team with routine tasks</li>
              </ul>
            </div>
          </div>

          <div className="resume-section">
            <h4>Certifications & Education</h4>
            <div className="resume-certs">
              <div className="cert-item">
                <strong>CompTIA A+</strong> - <em>In Progress / Completed</em>
              </div>
              <div className="cert-item">
                <strong>CompTIA Network+</strong> - <em>Target: 2026</em>
              </div>
              <div className="cert-item">
                <strong>CompTIA Security+</strong> - <em>Target: 2026</em>
              </div>
              <div className="cert-item">
                <strong>Microsoft Certified: Azure Fundamentals (AZ-900)</strong> - <em>Optional</em>
              </div>
              <div className="cert-item">
                <strong>Bachelor's Degree in Information Technology</strong> - <em>University Name</em>
              </div>
            </div>
          </div>
        </div>

        <div className="resume-actions">
          <a href="/resume.pdf" download className="resume-btn">📥 Download Resume (PDF)</a>
          <a href="mailto:your.email@example.com" className="resume-btn secondary">📧 Email Me</a>
        </div>
      </div>
    </section>
  )
}
