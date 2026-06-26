import {useState} from 'react'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Portfolio from './Portfolio'
import Contact from './Contact'
import './Header.css' 


function Header() {
    const [showAbout, setShowAbout] = useState(false)
    const [showSkills, setShowSkills] = useState(false)
    const [showPortfolio, setShowPortfolio] = useState(false)
    const [showExperience, setShowExperience] = useState(false)
    const [showContact, setShowContact] = useState(false)
  return (
    <header>
      <h1>My Resume</h1>
      <nav>
        <ul>
          <li>
            <h2 onClick={() => setShowAbout(!showAbout)}>About</h2>
            {showAbout && <About />}
          </li>
          <li>
            <h2 onClick={() => setShowSkills(!showSkills)}>Skills</h2>
            {showSkills && <Skills />}
          </li>
          <li>
            <h2 onClick={() => setShowExperience(!showExperience)}>Experience</h2>
            {showExperience && <Experience />}
          </li>
          <li>
            <h2 onClick={() => setShowPortfolio(!showPortfolio)}>Portfolio</h2>
            {showPortfolio && <Portfolio />}
          </li>
          <li>
            <h2 onClick={() => setShowContact(!showContact)}>Contact</h2>
            {showContact && <Contact />}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;