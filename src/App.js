// import dependencies
import React, { useState } from 'react';
import './App.css';
import Nav from '../src/components/Nav/Nav'
import About from '../src/components/About/About'
import Contact from '../src/components/Contact/Contact'
import Portfolio from '../src/components/Portfolio/Portfolio'
import Footer from '../src/components/Footer/Footer'
import Resume from '../src/components/Resume/Resume'


// import sections from file structure
function App() {
  const [sections] = useState([
    // nav bar sections for page scroll
    {
      name: 'About',
      component: <About />
    },

    {
      name: 'Portfolio',
      component: <Portfolio />
    },
    {
      name: 'Resume',
      component: <Resume />
    },

    {
      name: 'Contact',
      component: <Contact />
    }
  ])

  // uses current state of sections
  const [ currentSection, setCurrentSection ] = useState(sections[0])

// return the various sections *note nav bar is set 
  return (
    <div>
      <Nav
      sections = {sections}
      currentSection = {currentSection}
      setCurrentSection = {setCurrentSection} />
      <main>
        {currentSection.component}
      </main>
      <Footer />
    </div>
  );
}

// exports app
export default App;
