import Contact from '../contact/Contact'
import Experience from '../experience/Experience'
import Education from '../education/Education'
import Landing from '../landing/Landing'
import Location from '../location/Location'
import React, { Component } from 'react';
import Skills from '../skills/Skills'

/**
 * The main driver and parent container for the app.
 */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resume: false
    };
  }

  render() {
    return (
      <div className={"App " + (this.state.resume ? "" : "non-resume") }>
        <div>
          <Landing />
          <Location />
        </div>
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </div>
    );
  }
}

export default App;
