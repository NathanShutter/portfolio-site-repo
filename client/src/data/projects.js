const projects = [
  {
    id: 1,
    title: 'Touch-And-Go',
    description: 'University Fingerprint Scanner Attendance System. Developed a college attendance system using a fingerprint scanner, Raspberry Pi, and LCD screen, hosted on AWS EC2 with a MySQL database for managing user and course information.',
    longDescription: 'Built a scalable attendance system using a Raspberry Pi and fingerprint sensor. Responsible for data ingestion, GPIO integration, and deployment to AWS EC2. The system stores users and attendance records in MySQL and has an admin interface to review attendance logs.',
    tech: ['Raspberry Pi', 'AWS EC2', 'MySQL', 'Python', 'Fingerprint Scanner'],
    link: 'https://example.com/touch-and-go',
    repo: '',
    image: '/images/projects/touch-and-go.png'
  },
  {
    id: 2,
    title: 'SeatSense',
    description: "Patient Seating Monitor Sensor & Web App developed in collaboration with Saint Luke's Health Network. Notifies caregivers of missed check-ins or excessive sitting time, with data accessible through a web application.",
    longDescription: 'Integrated sensors with a web application to monitor patient seating behavior. Implemented notifications for caregivers and a data dashboard for trends and alerts; documentation and handoff materials were provided to the partner health network.',
    tech: ['Web App', 'Sensor Integration', 'Healthcare Tech', 'Data Management'],
    link: 'https://example.com/seatsense',
    repo: '',
    image: '/images/projects/seatsense.png'
  }
]

export default projects
