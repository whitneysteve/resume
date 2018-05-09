import Experience from '../experience/Experience'
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
        <Landing />
        <Location />
        <Skills />
        <Experience />

        <div className="Section" id="education">
          <h1>Education</h1>
          <ol>
            <li>B.Sc, Computer Applications, 1st Class Honours, 2005</li>
            <li>M.Bs, Information Systems, 1st Class Honours, 2007</li>
          </ol>
        </div>
        <div className="Section" id="contact">
          <h1>Contact</h1>
          <div>
            I like it, online, and I’ve worked with remote teams most of my career.
          </div>
          <div>
            But I have a fairly minimal online presence.
          </div>
          <div>
            I’d like to think I’m moving towards quality, not quantity.
          </div>
          <div>
            It’s a process.
          </div>
          <div>
            <ol>
              <li>steve.whitney.cv@gmail.com</li>
              <li>Skype call button</li>
              <li>https://www.linkedin.com/in/whitneysteve</li>
              <li>GitHub</li>
              <li>Twitter</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
