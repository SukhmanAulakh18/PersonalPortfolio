import React, { useEffect, useState } from 'react'
import TagCloud from 'TagCloud'

const WordCloud = ({ isMobile }) => {
  const [isLoading, setLoad] = useState(true)

  const container = '.content'
  const texts = [
    'Python',
    'Typescript',
    'Golang',
    'C++',
    'SQL',
    'Bash',
    'React',
    'NextJS',
    'Firebase',
    'Django',
    'Flask',
    'NodeJS',
    'Express',
    'GraphQL',
    'FastAPI',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'TensorFlow',
    'Keras',
    'PyTorch',
    'Scikit-learn',
    'OpenCV',
    'Docker',
    'Kubernetes',
    'GCP',
    'AWS',
    'Terraform',
    'Git',
    'GitHub',
    'Linux',
    'Java',
    'Flutter',
    'Dart',
    'HTML5',
    'CSS3',
    'JS',
    'C',
    'Solidity',
  ]
  const options = {
    radius: 300,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: true,
  }
  
  // Only initialize TagCloud on desktop
  useEffect(() => {
    if (isLoading && !isMobile) {
      try {
        TagCloud(container, texts, options)
      } catch (error) {
        console.error("TagCloud initialization error:", error);
      }
      setLoad(false)
    }
  }, [isLoading, isMobile])

  // If mobile, don't render the content
  if (isMobile) return null;

  return (
    <div className="main">
      <span className="content"></span>
    </div>
  )
}

export default WordCloud