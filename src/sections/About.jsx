import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { userData } from '../data/userData.js'
import { useTheme } from '../context/ThemeContext.jsx'
import '../styles/About.css'

const About = () => {
  const { theme } = useTheme()
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }
  
  return (
    <section id="about" className={`about ${theme}`} ref={ref}>
      <div className="container about-container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2>About Me</h2>
        </motion.div>
        
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="about-image" variants={itemVariants}>
            <div className="image-wrapper">
              <img 
                src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Profile" 
              />
              <div className="image-shape"></div>
              <div className="image-dots"></div>
            </div>
          </motion.div>
          
          <motion.div className="about-text" variants={itemVariants}>
            <div className="about-bio">
              {userData.about.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            <div className="about-details">
              <div className="detail-group">
                <div className="detail-item">
                  <span className="detail-label">Name</span>
                  <span className="detail-value">{userData.name}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Location</span>
                  <span className="detail-value">{userData.location}</span>
                </div>
              </div>
              
              <div className="detail-group">
                <div className="detail-item">
                  <span className="detail-label">Email</span>
                  <span className="detail-value">
                    <a href={`mailto:${userData.email}`}>{userData.email}</a>
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Role</span>
                  <span className="detail-value">{userData.title}</span>
                </div>
              </div>
            </div>
            
            <motion.div className="about-experience" variants={itemVariants}>
              <h3>Experience</h3>
              <div className="experience-timeline">
                {userData.experience.map((exp, index) => (
                  <div className="timeline-item" key={index}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h4>{exp.position}</h4>
                      <h5>{exp.company}</h5>
                      <p className="timeline-duration">{exp.duration}</p>
                      <p className="timeline-description">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div className="about-education" variants={itemVariants}>
              <h3>Education</h3>
              <div className="education-list">
                {userData.education.map((edu, index) => (
                  <div className="education-item" key={index}>
                    <h4>{edu.degree}</h4>
                    <h5>{edu.institution}</h5>
                    <p className="education-duration">{edu.duration}</p>
                    <p className="education-description">{edu.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About