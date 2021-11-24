import React, { Component } from 'react'
import Contact from '../contact/Contact'
import Education from '../education/Education'
import Experience from '../experience/Experience'
import Landing from '../landing/Landing'
import Location from '../location/Location'
import Skills from '../skills/Skills'

/**
 * The main driver and parent container for the app.
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
      </div>
    );
  }

  todo() {
    return (
      <div className="App">
        <Location />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </div>
    )
  }
}

export default App;
