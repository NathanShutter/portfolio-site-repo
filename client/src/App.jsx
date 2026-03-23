import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectPage from './pages/ProjectPage'
import FeaturedProject from './components/FeaturedProject'

function Home() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <FeaturedProject />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:id" element={<ProjectPage />} />
    </Routes>
  )
}

export default App
