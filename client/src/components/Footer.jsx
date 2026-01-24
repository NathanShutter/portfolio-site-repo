export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} IT Professional. All rights reserved.</p>
        <p>Pursuing CompTIA Security+ | Certified in IT Support</p>
      </div>
    </footer>
  )
}
