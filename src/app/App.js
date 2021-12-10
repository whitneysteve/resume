import React, { Component } from 'react'
import Contact from '../contact/Contact'
import Devgrid from '../devgrid/Devgrid'
import Education from '../education/Education'
import Experience from '../experience/Experience'
import Header from '../header/Header'
import Location from '../location/Location'
import Skills from '../skills/Skills'

/**,
 * The main driver and parent container for the app.
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <Devgrid />
        <Header />
        <Location />
        <Skills />
      </div>
    );
  }

  todo() {
    return (
      <div className="App">
        <Experience />
        <Education />
        <Contact />
      </div>
    )
  }
}

export default App;
