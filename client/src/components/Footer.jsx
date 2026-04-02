export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-base-300 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-base-content/60 text-sm">
        <p>&copy; {currentYear} Nathan Shutter. All rights reserved.</p>
        <p>B.S. Information Technology · Technical Support Specialist</p>
      </div>
    </footer>
  )
}
