import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { useTheme } from '../context/ThemeContext.jsx'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/Header.css'

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Navigation items
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  // Handle scroll event for header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    // Detect active section on scroll
    const handleSectionDetection = () => {
      const sections = document.querySelectorAll('section')
      const scrollPosition = window.scrollY + 100

      sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('scroll', handleSectionDetection)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleSectionDetection)
    }
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${theme}`}>
      <div className="container header-container">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="logo"
          onClick={closeMobileMenu}
        >
          <span className="logo-text">SN</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            className="theme-toggle"
            onClick={toggleTheme}
          >
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>

          <button
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              className="mobile-nav"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="mobile-nav-links">
                {navItems.map((item) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * navItems.indexOf(item) }}
                  >
                    <Link
                      to={item.id}
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-70}
                      className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header