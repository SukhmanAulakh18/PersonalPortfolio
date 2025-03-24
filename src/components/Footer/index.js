import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="content">
        <div className="copyright">
          <p>Copyright © {currentYear} Sukhman Aulakh</p>
        </div>
        
        <ul className="footer-social">
          <li>
            <a 
              href="https://www.linkedin.com/in/sukhmanpreetsinghaulakh" 
              target="_blank" 
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/SukhmanAulakh18" 
              target="_blank" 
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a 
              href="mailto:ausukhma@sheridancollege.ca" 
              target="_blank" 
              rel="noreferrer"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer