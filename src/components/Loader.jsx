import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext.jsx'
import '../styles/Loader.css'

const Loader = () => {
  const { theme } = useTheme()
  
  return (
    <div className={`loader ${theme}`}>
      <motion.div 
        className="loader-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="logo-animation">
          <motion.div 
            className="circle"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 200
            }}
          />
          <motion.div 
            className="text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            SN
          </motion.div>
        </div>
        <motion.div 
          className="loader-bar"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2 }}
        />
      </motion.div>
    </div>
  )
}

export default Loader