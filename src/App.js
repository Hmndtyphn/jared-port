import React, { appBuild } from 'react';
import './App.css';

function App() {
  const [sections] = appBuild([
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

  const [ currentSection, setCurrentSection ] = appBuild(sections[0])

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
