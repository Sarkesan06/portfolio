import { FiGithub, FiLinkedin, FiTwitter, FiDribbble } from 'react-icons/fi'
import { userData } from '../data/userData.js'
import { useTheme } from '../context/ThemeContext.jsx'
import '../styles/Footer.css'

const Footer = () => {
  const { theme } = useTheme()
  const year = new Date().getFullYear()
  
  return (
    <footer className={`footer ${theme}`}>
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-text">SN</span>
            <p className="footer-tagline">Creating elegant digital experiences</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-social">
              <h4>Connect</h4>
              <div className="social-icons">
                <a href={userData.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FiGithub />
                </a>
                <a href={userData.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FiLinkedin />
                </a>
                <a href={userData.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FiTwitter />
                </a>
                <a href={userData.social.dribbble} target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
                  <FiDribbble />
                </a>
              </div>
            </div>
            
            <div className="footer-nav">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {year} {userData.name}. All rights reserved.</p>
          <p className="footer-credits">Designed & Built with ❤️</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer