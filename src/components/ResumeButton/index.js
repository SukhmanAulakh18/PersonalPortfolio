import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import './index.scss'
import resumePdf from '../../assets/files/Resume.pdf'

const ResumeButton = () => {
  // Create a download function
  const downloadResume = () => {
    // Create a link element
    const link = document.createElement('a')
    link.href = resumePdf
    link.download = 'Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  
  return (
    <div className="resume-button">
      <a 
        href={resumePdf} 
        onClick={(e) => {
          e.preventDefault()
          downloadResume()
        }}
      >
        <FontAwesomeIcon icon={faFileDownload} className="download-icon" />
        <span>Resume</span>
      </a>
    </div>
  )
}

export default ResumeButton