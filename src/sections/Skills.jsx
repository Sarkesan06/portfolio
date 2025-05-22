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
            <p>With a foundation in modern web technologies, I build responsive, accessible, and performant applications. My approach combines technical skills with a keen eye for design and user experience.</p>
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
                  <rect x="4" y="3" width="16" height="18" rx="2" />
                  <path d="M8 13h8" />
                  <path d="M8 17h5" />
                  <path d="M8 9h3" />
                </svg>
              </div>
              <h4>Frontend Development</h4>
              <p>Creating responsive, accessible, and performant user interfaces with modern frameworks.</p>
            </motion.div>
            
            <motion.div className="skill-category" variants={itemVariants}>
              <div className="category-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 3v4c0 2-2 4-4 4s-4-2-4-4V3" />
                  <path d="M10 21l-2-2m4 0l-2 2m4-2l-2 2m4-2l-2 2" />
                  <path d="M4 7l4.5 4.5M19 7l-4.5 4.5" />
                </svg>
              </div>
              <h4>UI/UX Design</h4>
              <p>Designing intuitive and aesthetically pleasing interfaces that enhance user experience.</p>
            </motion.div>
            
            <motion.div className="skill-category" variants={itemVariants}>
              <div className="category-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h4>Backend Development</h4>
              <p>Building secure, scalable, and efficient server-side applications and APIs.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills