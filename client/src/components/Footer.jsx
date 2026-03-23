export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12">
      <div className="max-w-6xl mx-auto px-6 text-center text-slate-300">
        <p>&copy; {currentYear} Nathan Shutter. All rights reserved.</p>
        <p className="mt-2">B.S. Information Technology | Technical Support Specialist</p>
      </div>
    </footer>
  )
}
