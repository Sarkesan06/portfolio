import { useEffect, useState } from 'react'
import { useTheme } from './context/ThemeContext.jsx'
import Header from './components/Header.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './components/Footer.jsx'
import Loader from './components/Loader.jsx'
import './styles/App.css'

function App() {
  const { theme } = useTheme()
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`app ${theme}`}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App