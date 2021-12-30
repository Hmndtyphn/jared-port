import React, { useState } from 'react';
import './App.css';
import About from '../src/components/About/About'

function App() {
  const [sections] = useState([
    {
      name: 'About',
      component: <About />
    },

    // {
    //   name: 'Portfolio',
    //   component: <Portfolio />
    // },
    // {
    //   name: 'Resume',
    //   component: <Resume />
    // },

    // {
    //   name: 'Contact',
    //   component: <Contact />
    // }
  ])

  const [ currentSection, setCurrentSection ] = useState(sections[0])

  // return (
  //   <div>
  //     <Nav
  //     sections = {sections}
  //     currentSection = {currentSection}
  //     setCurrentSection = {setCurrentSection} />
  //     <main>
  //       {currentSection.component}
  //     </main>
  //     <Footer />
  //   </div>
  // );
}

export default App;
