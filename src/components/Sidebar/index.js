import './index.scss'
import { useState, useEffect } from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faHome,
  faScrewdriverWrench,
  faUser,
  faFolder,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'

import outLookLogo from '../../assets/images/outlook.png'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/sukhman-logo.png'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
  
  useEffect(() => {
    // Handle keyboard accessibility (ESC key)
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && showNav) {
        setShowNav(false);
      }
    };
    
    // Check for mobile viewport
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };
    
    // Control body scroll when menu is open
    if (showNav) {
      document.body.style.overflow = 'hidden';
    } else {
      // Only enable scroll for mobile, keep desktop as is
      if (isMobile) {
        document.body.style.overflow = 'auto';
      }
    }
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
      // Reset body overflow when component unmounts
      if (isMobile) {
        document.body.style.overflow = 'auto';
      }
    };
  }, [showNav, isMobile]);
  
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoS} alt="Logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="Sukhman" />
        </Link>
        
        {/* Hamburger Menu Button - Animated */}
        <div 
          className={`hamburger-menu ${showNav ? 'open' : ''}`}
          onClick={() => setShowNav(!showNav)}
          aria-label={showNav ? "Close menu" : "Open menu"}
          role="button"
          tabIndex={0}
        >
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        
        <nav className={showNav ? 'mobile-show' : ''}>
          <NavLink 
            onClick={() => setShowNav(false)}
            exact="true" 
            activeclassname="active" 
            to="/"
          >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            <span className="link-text">HOME</span>
          </NavLink>
          
          <NavLink 
            onClick={() => setShowNav(false)}
            activeclassname="active" 
            className="about-link" 
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            <span className="link-text">ABOUT</span>
          </NavLink>

          <NavLink
            onClick={() => setShowNav(false)}
            activeclassname="active"
            className="projects-link"
            to="/projects"
          >
            <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
            <span className="link-text">PROJECTS</span>
          </NavLink>

          <NavLink
            onClick={() => setShowNav(false)}
            activeclassname="active"
            className="skills-link"
            to="/skills"
          >
            <FontAwesomeIcon icon={faScrewdriverWrench} color="#4d4d4e" />
            <span className="link-text">SKILLS</span>
          </NavLink>

          <NavLink
            onClick={() => setShowNav(false)}
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            <span className="link-text">CONTACT</span>
          </NavLink>
          
          {/* Add mobile social icons */}
          {isMobile && (
            <ul className="mobile-social">
              <li>
                <a 
                  href="https://www.linkedin.com/in/sukhmanpreetsinghaulakh" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} color="#b9b9b9" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/SukhmanAulakh18" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} color="#b9b9b9" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:ausukhma@sheridancollege.ca" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  {/* Use FontAwesome icon instead of image */}
                  <FontAwesomeIcon icon={faEnvelope} color="#b9b9b9" />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          )}
        </nav>
        
        {/* Desktop-only social icons */}
        <ul className="social-icons">
          <li>
            <a href="https://www.linkedin.com/in/sukhmanpreetsinghaulakh" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} color="#b9b9b9" />
            </a>
          </li>
          <li>
            <a href="https://github.com/SukhmanAulakh18" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} color="#b9b9b9" />
            </a>
          </li>
          <li>
            <a href="mailto: ausukhma@sheridancollege.ca" target="_blank" rel="noreferrer">
              <img src={outLookLogo} width="24" alt="Email" className="desktop-only-icon" />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar