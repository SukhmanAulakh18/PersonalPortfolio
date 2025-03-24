import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import WordCloud from './wordcloud'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200)

  const skillsArray = 'Skills'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    
    // Add window resize handler for mobile detection
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200)
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Categorized skills for mobile view
  const skillCategories = [
    {
      name: 'Languages',
      skills: ['Python', 'Typescript', 'Golang', 'C++', 'SQL', 'Bash', 'JavaScript', 'Java', 'Dart', 'C', 'Solidity']
    },
    {
      name: 'Frontend',
      skills: ['React', 'NextJS', 'HTML5', 'CSS3', 'Flutter']
    },
    {
      name: 'Backend',
      skills: ['Firebase', 'Django', 'Flask', 'NodeJS', 'Express', 'GraphQL', 'FastAPI']
    },
    {
      name: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
    },
    {
      name: 'ML/AI',
      skills: ['TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn', 'OpenCV']
    },
    {
      name: 'DevOps',
      skills: ['Docker', 'Kubernetes', 'GCP', 'AWS', 'Terraform', 'Git', 'GitHub', 'Linux']
    }
  ]

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <p>
            I have a strong foundation in both development and operations, with
            a focus on creating seamless, efficient systems. My experience
            includes automating deployment processes, designing scalable
            applications, and working with cloud technologies to deliver
            reliable solutions.
          </p>
          <p>
            My skill set spans across DevOps, machine learning, full-stack
            development, and cloud infrastructure. I'm committed to staying
            updated with the latest advancements and continually refining my
            expertise to tackle complex challenges effectively.
          </p>
          
          {/* Mobile-only skills list */}
          {isMobile && (
            <div className="skills-list">
              {skillCategories.map((category) => (
                <div className="skill-category" key={category.name}>
                  <h3>{category.name}</h3>
                  <ul>
                    {category.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Show WordCloud only on desktop */}
        <div className={`tagcloud-wrap ${isMobile ? 'hidden' : ''}`}>
          <WordCloud isMobile={isMobile} />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Skills