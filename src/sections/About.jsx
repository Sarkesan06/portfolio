import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { userData } from '../data/userData.js'
import { useTheme } from '../context/ThemeContext.jsx'
import { FiAward, FiUsers, FiBookOpen } from 'react-icons/fi'
import '../styles/About.css'

const About = () => {
  const { theme } = useTheme()
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })
  
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
                src="https://www.lookslikegrass.com.au/wp-content/uploads/2022/07/avatar1.jpg" 
                alt="Profile" 
              />
              <div className="image-shape"></div>
              <div className="image-dots"></div>
            </div>
          </motion.div>
          
          <motion.div className="about-text" variants={itemVariants}>
            <div className="about-bio">
              <p>{userData.about || "I'm an AI and Data Science student at Anna University with hands-on experience in machine learning, deep learning, and full-stack development."}</p>
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
                  <span className="detail-label">Phone</span>
                  <span className="detail-value">
                    <a href={`tel:${userData.phone || '+91 9176358376'}`}>{userData.phone || '+91 9176358376'}</a>
                  </span>
                </div>
              </div>
              
              <div className="detail-group">
                <div className="detail-item">
                  <span className="detail-label">Role</span>
                  <span className="detail-value">{userData.title}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Education</span>
                  <span className="detail-value">B.Tech AI & DS</span>
                </div>
              </div>
            </div>
            
            <motion.div className="about-experience" variants={itemVariants}>
              <h3>Internships</h3>
              <div className="experience-timeline">
                {userData.experience && userData.experience.map((exp, index) => (
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
  <h3>🎓 Education</h3>
  <div className="education-list">
    {userData.education && userData.education.map((edu, index) => (
      <div className="education-item" key={index}>
        <div className="education-icon">
          {index === 0 ? "🎓" : "📚"}
        </div>
        <div className="education-details">
          <h4>{edu.degree}</h4>
          <h5>{edu.institution}</h5>
          <p className="education-duration">
            📅 {edu.duration}
          </p>
          {edu.cgpa && <p className="education-score">⭐ CGPA: {edu.cgpa}</p>}
          {edu.percentage && <p className="education-score">⭐ Percentage: {edu.percentage}</p>}
        </div>
      </div>
    ))}
  </div>
</motion.div>
            {/* Professional Languages Section - Add this after certifications */}
<motion.div className="about-languages" variants={itemVariants}>
  <h3>🌐 Language Proficiency</h3>
  <div className="languages-container">
    {userData.languages && userData.languages.map((lang, index) => (
      <div key={index} className="language-card">
        <div className="language-name-wrapper">
          <div className="language-icon">
            {lang.name === "Tamil" ? "📜" : "🌍"}
          </div>
          <h4>{lang.name}</h4>
        </div>
        <div className="language-proficiency-bar">
          <div 
            className="proficiency-fill"
            style={{ 
              width: lang.name === "Tamil" ? "100%" : "85%"
            }}
          ></div>
        </div>
        <p className="proficiency-level">
          📈 {lang.proficiency}
        </p>
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