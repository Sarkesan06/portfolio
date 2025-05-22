import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const AnimatedText = ({ text, delay = 0, duration = 0.05, className = '' }) => {
  const [words, setWords] = useState([])
  
  useEffect(() => {
    // Split text into words
    const wordArray = text.split(' ')
    setWords(wordArray)
  }, [text])
  
  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: duration,
        delayChildren: delay * i
      }
    })
  }
  
  // Animation variants for each word
  const wordVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  }
  
  return (
    <motion.div
      className={`animated-text ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="animated-word"
          variants={wordVariants}
          custom={index}
        >
          {word}{' '}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default AnimatedText