import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { userData } from '../data/userData.js'
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext.jsx'
import '../styles/Hero.css'

const Hero = () => {
  const { theme } = useTheme()
  const [typedText, setTypedText] = useState('')
  const roles = ['Software Developer', 'Frontend Developer', 'UI/UX Designer', 'Problem Solver']
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)
  
  useEffect(() => {
    const currentRole = roles[roleIndex]
    
    // Handle typing effect
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (typedText.length < currentRole.length) {
          setTypedText(currentRole.substring(0, typedText.length + 1))
          setTypingSpeed(100)
        } else {
          // Pause at end of word before deleting
          setIsDeleting(true)
          setTypingSpeed(1000)
        }
      } else {
        // Deleting
        if (typedText.length > 0) {
          setTypedText(currentRole.substring(0, typedText.length - 1))
          setTypingSpeed(50)
        } else {
          setIsDeleting(false)
          setRoleIndex((roleIndex + 1) % roles.length)
          setTypingSpeed(300)
        }
      }
    }
    
    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [typedText, roleIndex, isDeleting, roles, typingSpeed])
  
  return (
    <section id="hero" className={`hero ${theme}`}>
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="hero-greeting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              className="hero-name"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {userData.name}
            </motion.h1>
            
            <motion.div 
              className="hero-role"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <span className="typed-text">{typedText}</span>
              <span className="cursor"></span>
            </motion.div>
            
            <motion.p 
              className="hero-bio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {userData.bio}
            </motion.p>
            
            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Link 
                to="projects" 
                smooth={true} 
                duration={800}
                className="btn btn-primary"
              >
                View My Work <FiArrowRight className="btn-icon" />
              </Link>
              
              <Link 
                to="contact" 
                smooth={true} 
                duration={800}
                className="btn-secondary"
              >
                Contact Me
              </Link>
            </motion.div>
            
            <motion.div 
              className="hero-social"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <a href={userData.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href={userData.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="image-container">
              <div className="image-bg"></div>
              <img 
                src="https://www.lookslikegrass.com.au/wp-content/uploads/2022/07/avatar1.jpg" 
                alt="Developer" 
                className="profile-image"
              />
              <div className="image-highlight"></div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero