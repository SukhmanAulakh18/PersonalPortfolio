import { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import ProjectCard from './ProjectCard'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

// Import all project images
import spotifyImg from '../../assets/images/SpotifyClone.png'
import recipeFinder from '../../assets/images/RecipeFinder.png'
import meetImg from '../../assets/images/Video-calling.png'  
import userManageImg from '../../assets/images/UserManage.png' 
import covid19Img from '../../assets/images/Covid19.png'

// Import FontAwesome library
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { 
  faExternalLinkAlt, 
  faDatabase, 
  faServer, 
  faCloud,
  faCode,
  faFileCode,
  faMobile,
  faFlask,
  faImage
} from '@fortawesome/free-solid-svg-icons'

// Add all icons to library
library.add(
  fab,
  faExternalLinkAlt,
  faDatabase, 
  faServer, 
  faCloud, 
  faCode,
  faFileCode,
  faMobile,
  faFlask,
  faImage
)

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  const projectsArray = 'Projects'.split('')
  const projectsGridRef = useRef(null)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])
  
  // Force show the indicator initially and ensure it stays visible
  useEffect(() => {
    // Always show indicator when component mounts
    setShowScrollIndicator(true)
    
    // Keep it visible for at least 3 seconds
    const initialTimer = setTimeout(() => {
      // After initial period, check if scrolling should hide it
      if (projectsGridRef.current && projectsGridRef.current.scrollTop > 50) {
        setShowScrollIndicator(false)
      }
    }, 3000)
    
    return () => clearTimeout(initialTimer)
  }, [])
  
  // Hide scroll indicator when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (projectsGridRef.current && projectsGridRef.current.scrollTop > 50) {
        setShowScrollIndicator(false)
      } else {
        setShowScrollIndicator(true)
      }
    }
    
    const gridElement = projectsGridRef.current
    if (gridElement) {
      gridElement.addEventListener('scroll', handleScroll)
    }
    
    return () => {
      if (gridElement) {
        gridElement.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])
  
  const projects = [
    {
      title: 'Video Calling App',
      description: 'Real-time video conferencing application with WebRTC integration and secure rooms',
      technologies: ['React', 'WebRTC', 'Node.js', 'Socket.io'],
      image: meetImg,
      github: 'https://github.com/SukhmanAulakh18/videoCallingApp',
      live: 'https://video-calling-app-tau.vercel.app/',
    },
    {
      title: 'User Management System',
      description: 'Secure user authentication with biometric fingerprint verification and role-based access control',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      image: userManageImg, 
      github: 'https://github.com/SukhmanAulakh18/mern-fingerprint-backend',
    },
    {
      title: 'Recipe Finder App',
      description: 'Interactive recipe discovery platform with search, filtering, and personalized recommendations',
      technologies: ['React', 'API Integration', 'JavaScript', 'CSS'],
      image: recipeFinder,
      github: 'https://github.com/SukhmanAulakh18/RecipeFinder',
      live: 'https://recipe-finder-eo19.vercel.app/',
    },
    {
      title: 'Streamify Music App',
      description: 'Full-featured music streaming service with playlist management, recommendations, and responsive design',
      technologies: ['React', 'SCSS', 'JavaScript', 'REST API'],
      image: spotifyImg,
      github: 'https://github.com/SukhmanAulakh18/Streamify',
      live: 'https://streamify-vf7r.onrender.com/',
    },
    {
      title: 'Covid-19 Tracker',
      description: 'Real-time tracker for COVID-19 cases across Canada with interactive visualizations and provincial statistics',
      technologies: ['Angular', 'Ionic', 'API', 'PWA'],
      image: covid19Img,
      github: 'https://github.com/SukhmanAulakh18/Covid-19-StatApplication'
    }
  ]

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={projectsArray}
              idx={15}
            />
          </h1>
          <p>
            Here's a selection of projects I've worked on that showcase my technical skills
            and problem-solving abilities. Each project represents different challenges and
            solutions across various domains of software development.
          </p>
          <p>
            Feel free to explore the code repositories and live demos to see my work in action.
            I'm always open to feedback and collaboration opportunities!
          </p>
        </div>

        <div className="projects-grid" ref={projectsGridRef}>
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
        
        {/* Scroll indicator moved outside the grid for better positioning */}
        {showScrollIndicator && (
          <div className="scroll-indicator">
            <span className="scroll-text">Scroll to see more</span>
            <FontAwesomeIcon icon={faChevronDown} className="scroll-arrow" />
          </div>
        )}
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects