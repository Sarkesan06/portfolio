import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { userData } from '../data/userData.js'
import { useTheme } from '../context/ThemeContext.jsx'
import '../styles/Projects.css'

const Projects = () => {
  const { theme } = useTheme()
  const [activeFilter, setActiveFilter] = useState('all')
  const [currentProject, setCurrentProject] = useState(0)
  
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
  
  // Extract unique technologies for filter
  const allTechnologies = [...new Set(userData.projects.flatMap(project => project.technologies))]
  
  // Filter projects based on selected filter
  const filteredProjects = activeFilter === 'all' 
    ? userData.projects 
    : userData.projects.filter(project => 
        project.technologies.includes(activeFilter)
      )
  
  const handleFilterClick = (filter) => {
    setActiveFilter(filter)
    setCurrentProject(0)
  }
  
  const handlePrevProject = () => {
    setCurrentProject(prev => (prev - 1 + filteredProjects.length) % filteredProjects.length)
  }
  
  const handleNextProject = () => {
    setCurrentProject(prev => (prev + 1) % filteredProjects.length)
  }
  
  return (
    <section id="projects" className={`projects ${theme}`} ref={ref}>
      <div className="container projects-container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2>My Projects</h2>
        </motion.div>
        
        <motion.div
          className="projects-filter"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterClick('all')}
            variants={itemVariants}
          >
            All
          </motion.button>
          
          
        
        </motion.div>
        
        <motion.div
          className="featured-project"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={filteredProjects[currentProject]?.id}
              className="featured-project-content"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProjects.length > 0 ? (
                <>
                  <div className="project-image">
                    <img 
                      src={filteredProjects[currentProject].image} 
                      alt={filteredProjects[currentProject].title} 
                    />
                    <div className="project-tech-badges">
                      {filteredProjects[currentProject].technologies.map((tech, index) => (
                        <span key={index} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="project-details">
                    <h3>{filteredProjects[currentProject].title}</h3>
                    <p>{filteredProjects[currentProject].description}</p>
                    
                    <div className="project-links">
                      <a 
                        href={filteredProjects[currentProject].codeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FiGithub /> View Code
                      </a>
                      <a 
                        href={filteredProjects[currentProject].liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FiExternalLink /> Live Demo
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <div className="no-projects">
                  <p>No projects found with the selected filter.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          
          {filteredProjects.length > 1 && (
            <div className="project-navigation">
              <button 
                className="nav-btn prev-btn" 
                onClick={handlePrevProject}
                aria-label="Previous project"
              >
                <FiChevronLeft />
              </button>
              <div className="project-indicators">
                {filteredProjects.map((_, index) => (
                  <span 
                    key={index} 
                    className={`indicator ${index === currentProject ? 'active' : ''}`}
                    onClick={() => setCurrentProject(index)}
                  ></span>
                ))}
              </div>
              <button 
                className="nav-btn next-btn" 
                onClick={handleNextProject}
                aria-label="Next project"
              >
                <FiChevronRight />
              </button>
            </div>
          )}
        </motion.div>
        
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              custom={index}
            >
              <div className="card-image">
                <img src={project.image} alt={project.title} />
                <div className="card-overlay">
                  <div className="card-links">
                    <a 
                      href={project.codeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="View Code"
                    >
                      <FiGithub />
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="card-content">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="card-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects