const projects = [
  {
    id: 3,
    slug: 'enterprise-infrastructure-lab',
    title: 'Enterprise Infrastructure Lab',
    description: 'A fully reproducible small-enterprise Active Directory and network lab environment, with automation via Terraform and PowerShell.',
    longDescription: 'Simulates a real-world enterprise network including Active Directory, DNS, and core networking services. Designed to be fully reproducible from scratch, with VM provisioning and configuration automated using Terraform and PowerShell. Tracks ongoing work across 9 open issues covering additional infrastructure components and hardening tasks.',
    tech: ['Active Directory', 'Terraform', 'PowerShell', 'Windows Server', 'Networking'],
    link: '',
    repo: 'https://github.com/NathanShutter/enterprise-infrastructure-lab',
    image: '/images/projects/enterprise-server-manager.png'
  },
  {
    id: 1,
    slug: 'touch-and-go',
    title: 'Touch-And-Go',
    description: 'University Fingerprint Scanner Attendance System. Developed a college attendance system using a fingerprint scanner, Raspberry Pi, and LCD screen, hosted on AWS EC2 with a MySQL database for managing user and course information.',
    longDescription: 'Built a scalable attendance system using a Raspberry Pi and fingerprint sensor. Responsible for data ingestion, GPIO integration, and deployment to AWS EC2. The system stores users and attendance records in MySQL and has an admin interface to review attendance logs.',
    tech: ['Raspberry Pi', 'AWS EC2', 'MySQL', 'Python', 'Fingerprint Scanner'],
    link: '',
    repo: 'https://github.com/NathanShutter/Touch-And-Go/',
    image: '/images/projects/touch-and-go.png',
    cardImage: '/images/projects/pi.png'
  },
  {
    id: 2,
    slug: 'seatsense',
    title: 'SeatSense',
    description: "Patient Seating Monitor Sensor & Web App developed in collaboration with Saint Luke's Health Network. Notifies caregivers of missed check-ins or excessive sitting time, with data accessible through a web application.",
    longDescription: 'Integrated sensors with a web application to monitor patient seating behavior. Implemented notifications for caregivers and a data dashboard for trends and alerts; documentation and handoff materials were provided to the partner health network.',
    tech: ['Web App', 'Sensor Integration', 'Healthcare Tech', 'Data Management'],
    link: '',
    repo: 'https://github.com/NathanShutter/SeatSense',
    image: '/images/projects/SeatSense.png'
  }
]

export default projects
