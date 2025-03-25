import { Route, Routes } from 'react-router-dom'

// Local component imports should typically come after router imports
import Home from './components/Home'
import Layout from './components/Layout'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ResumeButton from './components/ResumeButton'

import './App.scss'

function App() {
  return (
    <>
      <ResumeButton />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="skills" element={<Skills />} />
        </Route>
      </Routes>
    </>
  )
}

export default App