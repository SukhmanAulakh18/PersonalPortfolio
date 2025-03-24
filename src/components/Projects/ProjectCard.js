import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faGithub,
  faReact, 
  faJs, 
  faPython, 
  faNodeJs, 
  faAngular, 
  faAws, 
  faDocker, 
  faSass,
  faEthereum
} from '@fortawesome/free-brands-svg-icons'
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

const ProjectCard = ({ project }) => {
  const { title, description, technologies, image, github, live } = project
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)
  
  // Preload image
  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImgError(true);
  }, [image]);

  // Technology icon mapping
  const techIcons = {
    'React': { icon: faReact, color: '#61DAFB' },
    'JavaScript': { icon: faJs, color: '#F7DF1E' },
    'Python': { icon: faPython, color: '#3776AB' },
    'Node.js': { icon: faNodeJs, color: '#339933' },
    'Angular': { icon: faAngular, color: '#DD0031' },
    'SCSS': { icon: faSass, color: '#CC6699' },
    'AWS': { icon: faAws, color: '#FF9900' },
    'Docker': { icon: faDocker, color: '#2496ED' },
    'MongoDB': { icon: faDatabase, color: '#47A248' },
    'Express': { icon: faNodeJs, color: '#000000' },
    'API': { icon: faServer, color: '#FF5733' },
    'API Integration': { icon: faServer, color: '#FF5733' },
    'REST API': { icon: faServer, color: '#FF5733' },
    'CSS': { icon: faFileCode, color: '#264DE4' },
    'WebRTC': { icon: faCode, color: '#333333' },
    'Socket.io': { icon: faCode, color: '#010101' },
    'Cloud': { icon: faCloud, color: '#4285F4' },
    'Terraform': { icon: faCloud, color: '#7B42BC' },
    'TensorFlow': { icon: faCode, color: '#FF6F00' },
    'Flask': { icon: faFlask, color: '#000000' },
    'Web3.js': { icon: faEthereum, color: '#F16822' },
    'Ethereum': { icon: faEthereum, color: '#3C3C3D' },
    'Solidity': { icon: faFileCode, color: '#363636' },
    'PWA': { icon: faMobile, color: '#5A0FC8' },
    'Ionic': { icon: faCode, color: '#3880FF' }
  }

  // Fallback for technologies without specific icons
  const defaultIcon = { icon: faCode, color: '#63e6a8' }

  // Function to truncate description if too long
  const truncateDescription = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  }

  return (
    <div className="project-card">
      <div 
        className="project-image" 
        style={{ 
          backgroundImage: imageLoaded && !imgError ? `url(${image})` : 'none',
          backgroundColor: !imageLoaded || imgError ? '#1a1a1a' : 'transparent'
        }}
      >
        {(!imageLoaded || imgError) && (
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100%',
            flexDirection: 'column',
            color: '#63e6a8'
          }}>
            <FontAwesomeIcon icon={faImage} style={{ fontSize: '2rem' }} />
            <div style={{ marginTop: '10px', fontSize: '0.8rem' }}>
              {imgError ? 'Image not found' : 'Loading...'}
            </div>
          </div>
        )}
        <div className="project-overlay">
          <div className="project-links">
            {github && (
              <a href={github} target="_blank" rel="noreferrer" className="icon-link">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            )}
            {live && (
              <a href={live} target="_blank" rel="noreferrer" className="icon-link">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p className="project-description">{truncateDescription(description)}</p>
        <div className="project-technologies">
          {technologies.map((tech, idx) => {
            const techInfo = techIcons[tech] || defaultIcon;
            return (
              <div key={idx} className="tech-icon-container" title={tech}>
                <FontAwesomeIcon 
                  icon={techInfo.icon} 
                  style={{ color: techInfo.color }}
                  className="tech-icon"
                />
                <span className="tech-name">{tech}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard