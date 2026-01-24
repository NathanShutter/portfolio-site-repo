import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
