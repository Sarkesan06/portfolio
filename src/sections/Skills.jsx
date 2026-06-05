import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { userData } from '../data/userData.js'
import { useTheme } from '../context/ThemeContext.jsx'
import '../styles/Skills.css'

const Skills = () => {
  const { theme } = useTheme()
  const [activeSkill, setActiveSkill] = useState(null)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
  
  const handleSkillHover = (index) => {
    setActiveSkill(index)
  }
  
  const handleSkillLeave = () => {
    setActiveSkill(null)
  }
  
  return (
    <section id="skills" className={`skills ${theme}`} ref={ref}>
      <div className="container skills-container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2>My Skills</h2>
        </motion.div>
        
        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="skills-text" variants={itemVariants}>
            <h3>Technical Proficiency</h3>
            <p>With a strong foundation in AI/ML and full-stack development, I build intelligent, scalable applications. My expertise spans machine learning algorithms, deep learning frameworks, and modern web technologies.</p>
          </motion.div>
          
          <motion.div className="skills-list" variants={containerVariants}>
            {userData.skills.map((skill, index) => (
              <motion.div
                key={index}
                className={`skill-item ${activeSkill === index ? 'active' : ''}`}
                variants={itemVariants}
                onMouseEnter={() => handleSkillHover(index)}
                onMouseLeave={handleSkillLeave}
                custom={index}
              >
                <div className="skill-info">
                  <h4 className="skill-name">{skill.name}</h4>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div className="skills-categories" variants={containerVariants}>
            <motion.div className="skill-category" variants={itemVariants}>
              <div className="category-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <path d="M12 22V12"/>
                  <path d="M3.3 7L12 12l8.7-5"/>
                </svg>
              </div>
              <h4>Programming Languages</h4>
              <p>{userData.professionalSkills.languages.join(", ")}</p>
            </motion.div>
            
            <motion.div className="skill-category" variants={itemVariants}>
              <div className="category-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="3" width="16" height="18" rx="2" />
                  <path d="M8 13h8" />
                  <path d="M8 17h5" />
                  <path d="M8 9h3" />
                </svg>
              </div>
              <h4>Frontend & Frameworks</h4>
              <p>{userData.professionalSkills.frameworks.join(", ")}</p>
            </motion.div>
            
            <motion.div className="skill-category" variants={itemVariants}>
              <div className="category-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h4>Machine Learning & AI</h4>
              <p>{userData.professionalSkills.machineLearning.join(", ")}</p>
            </motion.div>
            
            <motion.div className="skill-category" variants={itemVariants}>
              <div className="category-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16v16H4z" />
                  <path d="M8 8h8v8H8z" />
                  <path d="M12 12v4" />
                </svg>
              </div>
              <h4>Tools & Database</h4>
              <p>Database: {userData.professionalSkills.database.join(", ")}</p>
              <p>Tools: {userData.professionalSkills.tools.join(", ")}</p>
            </motion.div>
          </motion.div>
          
          
        </motion.div>
      </div>
    </section>
  )
}

export default Skills