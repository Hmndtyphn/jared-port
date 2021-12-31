import React, { useState } from 'react';
import './App.css';
import Nav from '../src/components/Nav/Nav'
import About from '../src/components/About/About'
import Contact from '../src/components/Contact/Contact'
import Portfolio from '../src/components/Portfolio/Portfolio'
import Footer from '../src/components/Footer/Footer'



function App() {
  const [sections] = useState([
    {
      name: 'About',
      component: <About />
    },

    {
      name: 'Portfolio',
      component: <Portfolio />
    },
    // {
    //   name: 'Resume',
    //   component: <Resume />
    // },

    {
      name: 'Contact',
      component: <Contact />
    }
  ])

  const [ currentSection, setCurrentSection ] = useState(sections[0])

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

export default App;
