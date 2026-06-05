export const userData = {
  name: "SARKESAN S",
  title: "AI & Data Science Engineer | ML Enthusiast | Cybersecurity Practitioner",
  email: "sarkesansarkesan@gmail.com",
  phone: "+91 9176358376",
  location: "Tamil Nadu, India",
  bio: "AI and Data Science student passionate about building intelligent systems and exploring cybersecurity. I specialize in machine learning, deep learning, and full-stack development, with a focus on creating accessible and impactful applications.",
  about: "I'm an AI and Data Science student at Anna University with hands-on experience in machine learning, deep learning, and full-stack development. I have a strong foundation in Python, Java, and modern web technologies, and I'm passionate about creating intelligent systems that solve real-world problems.\n\nI believe in continuous learning and have completed internships in Machine Learning, Python Programming, Full Stack Development, and Java. My projects range from OCR-based multilingual translators to customer churn prediction systems, demonstrating my ability to build end-to-end solutions.",
  
  social: {
    github: "https://github.com/Sarkesan06",
    linkedin: "https://www.linkedin.com/in/sarkesan-sarkesan-135939258/",
  },
  
  skills: [
    { name: "Python", level: 85 },
    { name: "Java", level: 75 },
    { name: "SQL", level: 80 },
    { name: "Machine Learning", level: 80 },
    { name: "Deep Learning", level: 75 },
    { name: "HTML/CSS/JavaScript", level: 85 },
    { name: "React JS", level: 70 },
    { name: "MongoDB", level: 65 },
    { name: "TensorFlow/Keras", level: 75 },
    { name: "Scikit-learn", level: 80 },
    { name: "Git/GitHub", level: 85 },
    { name: "Cybersecurity", level: 70 }
  ],
  
  projects: [
    {
      id: 1,
      title: "Hospital Management System",
      description: "A comprehensive hospital management system for managing patient records, appointments, billing, and staff scheduling. Features include patient registration, doctor appointment booking, prescription management, and invoice generation.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Bootstrap"],
      image: "https://images.pexels.com/photos/263210/pexels-photo-263210.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "https://hms-vgsm.onrender.com/",
      codeUrl: "https://github.com/Sarkesan06/HMS",
      featured: true
    },
    {
      id: 2,
      title: "OCR-Based Multilingual Voice-Assisted Translator",
      description: "Built an OCR-based multilingual translator using Python, Streamlit, and Tesseract that extracts text from images and translates it into 50+ languages. Features include text-to-speech audio output and voice-controlled language selection for accessibility.",
      technologies: ["Python", "Streamlit", "Tesseract OCR", "Text-to-Speech", "Speech Recognition"],
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "https://newspaper-hacathon.onrender.com",
      codeUrl: "https://github.com/Sarkesan06/newspaper-hacathon",
      featured: true
    },
    {
      id: 3,
      title: "Universal Churn Prediction System",
      description: "Developed an end-to-end ML system for customer churn prediction that automatically processes datasets, trains multiple classification models, and generates comprehensive business analytics with ROI calculations.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Report Generation", "ML Models"],
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "https://izz9gndyzw9es25db8kwc3.streamlit.app/",
      codeUrl: "https://github.com/Sarkesan06/churn",
      featured: true
    },
    {
      id: 4,
      title: "Energy Theft Detection System",
      description: "Designed a hybrid model combining Fuzzy Logic, ML classifiers, and LSTM networks to detect anomalous electricity usage and prevent energy theft using time-series analysis.",
      technologies: ["Python", "Fuzzy Logic", "LSTM", "Scikit-learn", "Time Series Analysis"],
      image: "https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "https://energy-detection-1.onrender.com",
      codeUrl: "https://github.com/Sarkesan06/energy-detection",
      featured: false
    },
    {
  id: 5,
  title: "Bagels - Expense Tracker",
  description: "A terminal-first expense tracker with web and TUI interface. Provides structured budgeting, transaction tracking, categories, people/accounts management, and data migration support from Actual Budget.",
  detailedDescription: "Bagels is a Python-based expense tracker built as a terminal-first application with a web and TUI interface. It helps users track expenses, manage budgets, and monitor transactions. The project is designed to run in containerized environments and supports persistent storage for user data.",
  technologies: ["Python", "SQLAlchemy", "Pydantic", "Textual", "Rich", "ttyd", "Docker", "Render"],
  features: [
    "Expense tracking and budget management",
    "Terminal UI and web interface using Textual, Rich, and ttyd",
    "Transaction categorization and people/accounts management",
    "Persistent storage with database initialization",
    "Data migration support from Actual Budget via CLI options",
    "Custom forms and modals for expense input and transfers",
    "Docker and Render deployment with disk mount support"
  ],
  architecture: {
    core: ["app.py - main app entry", "__main__.py - CLI command group", "web.py - web frontend/server", "manager.py, provider.py, config.py - core management"],
    ui: ["components/", "forms/", "modals/"],
    domain: ["models/", "managers/"]
  },
  image: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=800",
  liveUrl: "https://bagel-1-ru4l.onrender.com",
  codeUrl: "https://github.com/sharkroshan-dot/bagel",
  featured: true
}
  ],
  
  experience: [
  {
    company: "Propel Technology Solution",
    position: "Software Developer Solution Intern",
    duration: "2025 - Present",
    description: "Working on enterprise-level software solutions, contributing to full-stack development, and collaborating with cross-functional teams to deliver high-quality applications. Involved in designing, developing, and implementing software solutions for business requirements.",
    responsibilities: [
      "Developing scalable software solutions using modern frameworks and technologies",
      "Collaborating with senior developers on system architecture and design decisions",
      "Implementing responsive user interfaces and RESTful APIs",
      "Participating in agile development sprints and daily stand-up meetings",
      "Troubleshooting, debugging, and optimizing existing codebase",
      "Writing clean, maintainable, and documented code",
      "Contributing to code reviews and team knowledge sharing"
    ],
    technologies: ["React", "Node.js", "JavaScript", "Python", "SQL", "Git", "REST APIs"],
    achievements: [
      "Successfully delivered 3 major feature modules",
      "Improved application performance by 25%",
      "Received recognition for code quality and documentation"
    ]
  },
  {
    company: "Skypark ITech",
    position: "Java Intern",
    duration: "2024",
    description: "Worked on Java development projects, gaining hands-on experience in object-oriented programming and application development.",
    technologies: ["Java", "OOP", "Data Structures"]
  },
  {
    company: "Artifai Tech",
    position: "Full Stack Development Intern",
    duration: "Aug 2025",
    description: "Gained practical experience in building end-to-end web applications using modern technologies like React.js, Node.js, Express, and MongoDB. Worked on both frontend and backend development.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API", "Git"],
    certificate: "/certificates/Sarkesan_S_Full Stack Development.pdf"
  },
  {
    company: "Artifai Tech",
    position: "Machine Learning Intern",
    duration: "Aug 2025",
    description: "Focused on developing and deploying Machine Learning models for real-world applications. Gained hands-on experience with Python, Scikit-learn, and TensorFlow.",
    technologies: ["Python", "Scikit-learn", "TensorFlow", "Keras", "Pandas", "NumPy", "Matplotlib"],
    certificate: "/certificates/Sarkesan_S_Machine Learning.pdf"
  },
  {
    company: "Artifai Tech",
    position: "Python Programming Intern",
    duration: "Aug 2025",
    description: "Mastered core Python concepts and built practical applications with focus on clean, efficient code and automation. Developed scripts for data processing and automation tasks.",
    technologies: ["Python", "OOP", "File Handling", "Data Structures", "Automation Scripts"],
    certificate: "/certificates/Sarkesan_S_Python Programming.pdf"
  }
],
  
  education: [
    {
      institution: "Anna University Regional Campus, Coimbatore",
      degree: "B.Tech Artificial Intelligence and Data Science",
      duration: "2022 - 2026",
      cgpa: "7.52",
      description: "Specialized in Machine Learning, Deep Learning, and Data Science"
    },
    {
      institution: "Sowdambikaa Matric Higher Secondary School, Thuraiyur",
      degree: "Higher Secondary Education (HSC)",
      duration: "2020 - 2022",
      percentage: "80.8%",
      description: "Computer Science with Mathematics"
    },
    {
      institution: "Sowdambikaa Matric Higher Secondary School, Thuraiyur",
      degree: "Secondary School Leaving Certificate (SSLC)",
      duration: "2020",
      percentage: "92.6%",
      description: ""
    }
  ],
  
  certifications: [
    {
      name: "Cybersecurity & Ethical Hacking",
      issuer: "CappricioSec University",
      date: "Dec 2025",
      duration: "42 Hours",
      topics: "Linux, Go, Python, Social Engineering, Wi-Fi Hacking, Web/API/Mobile App Pentesting"
    },
    {
      name: "Youth Astronomy & Space Science Congress",
      issuer: "TASS, IIA Bengaluru, IMSc Chennai",
      date: "July 2025",
      type: "Paper Presentation",
      location: "Vellalar College for Women, Erode"
    },
    {
      name: "Introduction to MongoDB",
      issuer: "MongoDB, Inc.",
      date: "Apr 2025"
    },
    {
      name: "Journey to Cloud: Envisioning Your Solution",
      issuer: "Your Learning Builder",
      date: "2025"
    },
    {
      name: "React JS Unleashed: Modern Web Development",
      issuer: "Webinar",
      date: "Sep 2024"
    },
    {
      name: "Flipkart GRiD 6.0 - Robotics Challenge",
      issuer: "Flipkart",
      date: "2024",
      type: "Level 1: MCQ Test"
    },
    {
      name: "World Consumer Rights Day Fair",
      issuer: "Bureau of Indian Standards",
      date: "Mar 2025",
      location: "Regional Science Centre, Coimbatore"
    }
  ],
  
  onlineCourses: [
    "Advanced Cyber Security - Threats and Governance",
    "Introduction to Ethical Hacking",
    "Types of Cyber Security",
    "Ethical Hacking - Mobile Platforms and Network Architecture",
    "Introduction to Cyber Security",
    "Cyber Security Threats",
    "Introduction to Firewall",
    "Encryption Basics",
    "Cyber Security For Leadership",
    "Basics of Exploratory Data Analysis",
    "Cyber Forensics",
    "Application Security Course",
    "Introduction to Asset Security",
    "Introduction to Information Security"
  ],
  
  workshops: [
    {
      name: "UI/UX Design Workshop",
      organizer: "GUVI Geek Networks",
      institution: "National Institute of Technology, Tiruchirappalli",
      date: "Mar 2024",
      event: "Vortex'24"
    },
    {
      name: "Artificial Intelligence Workshop",
      organizer: "CIT",
      institution: "Coimbatore Institute of Technology",
      department: "Dept. of AI & DS"
    }
  ],
  
  organizations: [
    { name: "National Service Scheme (NSS)", role: "Volunteer" },
    { name: "Talent Quest for India (TQI)", role: "Volunteer" }
  ],
  
  professionalSkills: {
    languages: ["Python", "Java", "SQL", "JavaScript"],
    frameworks: ["HTML", "CSS", "JavaScript", "Bootstrap", "React JS"],
    database: ["MySQL", "MongoDB"],
    tools: ["Git", "GitHub", "Canva"],
    machineLearning: ["Scikit-learn", "TensorFlow", "Tesseract", "PyTorch", "Keras"]
  },
  
  subjectKnowledge: [
    "Machine Learning",
    "Database Management System",
    "Operating System",
    "Data Structure and Algorithm",
    "Cyber Security",
    "Ethical Hacking"
  ],
  
  languages: [
    { name: "Tamil", proficiency: "Native Proficiency" },
    { name: "English", proficiency: "Professional Working Proficiency" }
  ]
}