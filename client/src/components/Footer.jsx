export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Nathan Shutter. All rights reserved.</p>
        <p>B.S. Information Technology | Technical Support Specialist</p>
      </div>
    </footer>
  )
}
