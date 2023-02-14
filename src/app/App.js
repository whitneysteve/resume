import React, { Component } from 'react';
import Contact from '../contact/Contact';
import Education from '../education/Education';
import Experience from '../experience/Experience';
import Header from '../header/Header';
import Learning from '../learning/Learning';
import Location from '../location/Location';
import Skills from '../skills/Skills';

/**,
 * The main driver and parent container for the app.
 */
class App extends Component {
  render() {
    return (
      <div className="App" id="App">
        <Header />
        <Location />
        <Experience />
        <Skills />
        <Learning />
        <Education />
        <Contact />
      </div>
    );
  }
}

export default App;
