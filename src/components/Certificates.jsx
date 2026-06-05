import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTheme } from '../context/ThemeContext.jsx'
import { userData } from '../data/userData.js'
import { FiX, FiDownload, FiExternalLink, FiFileText, FiAward } from 'react-icons/fi'
import '../styles/Certificates.css'

const Certificates = () => {
  const { theme } = useTheme()
  const [selectedCert, setSelectedCert] = useState(null)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  // Certificate file mappings - Update these paths to match your actual files
  const certificateFiles = {
    "Cybersecurity & Ethical Hacking": "/certificates/ceh-Certificate.pdf",
    "Youth Astronomy & Space Science Congress": "/certificates/Regional level space science.pdf",
    "Introduction to MongoDB": "/certificates/sarkesan mango db certificate.pdf",
    "React JS Unleashed: Modern Web Development": "/certificates/react js.pdf",
    "Journey to Cloud: Envisioning Your Solution": "/certificates/cloud.PDF",
    "Flipkart GRiD 6.0 - Robotics Challenge": "/certificates/flipkart robotic challange.pdf",
    "World Consumer Rights Day Fair": "/certificates/world consumer right day.pdf",
    "Full Stack Development Internship": "/certificates/Sarkesan_S_Full Stack Development.pdf",
    "Machine Learning Internship": "/certificates/Sarkesan_S_Machine Learning.pdf",
    "Python Programming Internship": "/certificates/Sarkesan_S_Python Programming.pdf",
    "Artificial Intelligence Workshop": "/certificates/AI workshop (CIT).pdf",
    "UI/UX Design Workshop": "/certificates/UI & UX workshop (NIT).pdf",

    "Introduction to Information Security": "/certificates/Sarkesan.s (13).pdf",
  "Introduction to Ethical Hacking": "/certificates/Sarkesan.s (1).pdf",
  "Types of Cyber Security": "/certificates/Sarkesan.s (2).pdf",
  "Ethical Hacking - Mobile Platforms and Network Architecture": "/certificates/Sarkesan.s (3).pdf",
  "Introduction to Cyber Security": "/certificates/Sarkesan.s (4).pdf",
  "Cyber Security Threats": "/certificates/Sarkesan.s (5).pdf",
  "Introduction to Firewall": "/certificates/Sarkesan.s (6).pdf",
  "Encryption Basics": "/certificates/Sarkesan.s (7).pdf",
  "Cyber Security For Leadership": "/certificates/Sarkesan.s (8).pdf",
  "Basics of Exploratory Data Analysis": "/certificates/Sarkesan.s (9).pdf",
  "Cyber Forensics": "/certificates/Sarkesan.s (10).pdf",
  "Application Security Course": "/certificates/Sarkesan.s (11).pdf",
  "Introduction to Asset Security": "/certificates/Sarkesan.s (12).pdf",
  "Advanced Cyber Security - Threats and Governance": "/certificates/Sarkesan.s.pdf"

    
  }

  const openCertificate = (cert) => {
    setSelectedCert(cert)
  }

  const closeModal = () => {
    setSelectedCert(null)
  }

  const downloadCertificate = (certName) => {
    const filePath = certificateFiles[certName]
    if (filePath) {
      const link = document.createElement('a')
      link.href = filePath
      link.download = `${certName.replace(/[^a-z0-9]/gi, '_')}.pdf`
      link.click()
    }
  }

  const openInNewTab = (certName) => {
    const filePath = certificateFiles[certName]
    if (filePath) {
      window.open(filePath, '_blank')
    }
  }

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
      transition: { duration: 0.5 }
    }
  }

  // Combine all certificates from different categories
  const allCertificates = [
    ...userData.certifications.map(cert => ({ ...cert, type: 'certification' })),
    ...(userData.onlineCourses || []).map(course => ({ 
      name: typeof course === 'string' ? course : course.name,
      issuer: typeof course === 'string' ? 'Great Learning Academy' : course.provider,
      date: typeof course === 'string' ? '2024' : course.date,
      type: 'online'
    })),
    ...(userData.workshops || []).map(workshop => ({
      name: workshop.name,
      issuer: workshop.organizer,
      date: workshop.date,
      location: workshop.institution,
      type: 'workshop'
    }))
  ]

  return (
    <>
      <section id="certificates" className={`certificates ${theme}`} ref={ref}>
        <div className="container certificates-container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2>My Certificates</h2>
            <p>Professional certifications, courses, and workshops I've completed</p>
          </motion.div>

          <motion.div
            className="certificates-stats"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="stat-card">
              <span className="stat-number">{userData.certifications?.length || 0}</span>
              <span className="stat-label">Major Certifications</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">{userData.onlineCourses?.length || 0}</span>
              <span className="stat-label">Online Courses</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">{userData.workshops?.length || 0}</span>
              <span className="stat-label">Workshops</span>
            </div>
          </motion.div>

          <motion.div
            className="certificates-grid"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Major Certifications */}
            {userData.certifications && userData.certifications.map((cert, index) => (
              <motion.div
                key={`cert-${index}`}
                className="certificate-card major"
                variants={itemVariants}
                onClick={() => openCertificate(cert.name)}
              >
                <div className="certificate-icon">
                  <FiAward />
                </div>
                <div className="certificate-info">
                  <h3>{cert.name}</h3>
                  <p className="issuer">{cert.issuer}</p>
                  <p className="date">{cert.date}</p>
                  {cert.duration && <span className="badge">{cert.duration}</span>}
                </div>
                <div className="certificate-actions">
                  <button 
                    className="view-btn"
                    onClick={(e) => {
                      e.stopPropagation()
                      openCertificate(cert.name)
                    }}
                  >
                    View
                  </button>
                </div>
              </motion.div>
            ))}

            {/* Online Courses */}
            {userData.onlineCourses && userData.onlineCourses.map((course, index) => (
              <motion.div
                key={`course-${index}`}
                className="certificate-card online"
                variants={itemVariants}
                onClick={() => openCertificate(typeof course === 'string' ? course : course.name)}
              >
                <div className="certificate-icon">
                  <FiFileText />
                </div>
                <div className="certificate-info">
                  <h3>{typeof course === 'string' ? course : course.name}</h3>
                  <p className="issuer">{typeof course === 'string' ? 'Great Learning Academy' : course.provider}</p>
                  <p className="date">{typeof course === 'string' ? '2024' : course.date}</p>
                </div>
                <div className="certificate-actions">
                  <button 
                    className="view-btn"
                    onClick={(e) => {
                      e.stopPropagation()
                      openCertificate(typeof course === 'string' ? course : course.name)
                    }}
                  >
                    View
                  </button>
                </div>
              </motion.div>
            ))}

            {/* Workshops */}
            {userData.workshops && userData.workshops.map((workshop, index) => (
              <motion.div
                key={`workshop-${index}`}
                className="certificate-card workshop"
                variants={itemVariants}
                onClick={() => openCertificate(workshop.name)}
              >
                <div className="certificate-icon">
                  <FiExternalLink />
                </div>
                <div className="certificate-info">
                  <h3>{workshop.name}</h3>
                  <p className="issuer">{workshop.organizer}</p>
                  <p className="date">{workshop.date}</p>
                  <p className="location">{workshop.institution}</p>
                </div>
                <div className="certificate-actions">
                  <button 
                    className="view-btn"
                    onClick={(e) => {
                      e.stopPropagation()
                      openCertificate(workshop.name)
                    }}
                  >
                    View
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal for viewing certificate */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="certificate-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className={`certificate-modal ${theme}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3>{selectedCert}</h3>
                <button className="close-btn" onClick={closeModal}>
                  <FiX />
                </button>
              </div>
              
              <div className="modal-body">
                {certificateFiles[selectedCert] ? (
                  <iframe
                    src={`${certificateFiles[selectedCert]}#toolbar=0`}
                    title={selectedCert}
                    className="certificate-viewer"
                  />
                ) : (
                  <div className="no-preview">
                    <FiFileText size={48} />
                    <p>Preview not available</p>
                    <p className="note">Click download to view the certificate</p>
                  </div>
                )}
              </div>
              
              <div className="modal-footer">
                <button 
                  className="download-btn"
                  onClick={() => downloadCertificate(selectedCert)}
                >
                  <FiDownload /> Download
                </button>
                <button 
                  className="external-btn"
                  onClick={() => openInNewTab(selectedCert)}
                >
                  <FiExternalLink /> Open in New Tab
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Certificates