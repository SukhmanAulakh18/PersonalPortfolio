import { useEffect, useState } from 'react'

import Loader from 'react-loaders'
import { Link } from 'react-router-dom'

import Logo from './Logo'
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [displayedJob, setDisplayedJob] = useState('')
  const [jobIndex, setJobIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  const nameArray = 'ukhmanpreet Singh   Aulakh'.split('')
  
  // Array of job titles to cycle through
  const jobTitles = [
    'Software Engineer',
    'Full Stack Developer',
    'DevOps Engineer',
    'Cloud Solutions Architect',
    'Database Administrator',
    'Web Developer',
    'Frontend Specialist',
    'Backend Developer'
  ]

  // Effect for letter animation hover state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  // Effect for job title typing animation
  useEffect(() => {
    let timeout

    // Typing effect
    if (!isDeleting && charIndex < jobTitles[jobIndex].length) {
      timeout = setTimeout(() => {
        setDisplayedJob(prev => prev + jobTitles[jobIndex][charIndex])
        setCharIndex(prev => prev + 1)
      }, 100 + Math.random() * 40)
    } 
    // Pause before deleting
    else if (!isDeleting && charIndex >= jobTitles[jobIndex].length) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 1500)
    } 
    // Deleting effect
    else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedJob(prev => prev.slice(0, -1))
        setCharIndex(prev => prev - 1)
      }, 60 + Math.random() * 30)
    } 
    // Switch to next job title
    else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setJobIndex(prev => (prev + 1) % jobTitles.length)
      timeout = setTimeout(() => {}, 700)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, jobIndex, jobTitles])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="Sudip Banerjee" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            {/* Dynamic typing job title */}
            <span className="typing-text">
              {displayedJob}
              <span className="typing-cursor"></span>
            </span>
          </h1>
          <h2>
            Streamlining Workflows | Deploying Intelligent Systems | Building
            Scalable Applications
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home