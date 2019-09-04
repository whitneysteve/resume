import React, { Component } from 'react';

const JobDescriptions = {
  0: 'Sweet explorer',
  1: 'Lost',
  2: 'Looks cool in sunglasses',
  3: 'Software engineer',
  4: 'Waiting for the bus',
  5: 'Software engineer',
  6: 'Holding the umbrella',
  7: 'Software engineer',
}

const MaxLandings = 7;
const LeftKey = 37;
const RightKey = 39;
const SoftwareEngineer = 'Software engineer';

/**
 * Landing renders the top of the site, with my face on it.
 */
class Landing extends Component {
  state = {jobIndex: Math.floor(Math.random() * MaxLandings)}

  handleKeyDown = (event) => {
    let jobIndex = this.state.jobIndex;
    if (event.keyCode === LeftKey) {
      if (jobIndex === 0) {
        jobIndex = MaxLandings;
      } else {
        jobIndex--;
      }
    } else if (event.keyCode === RightKey) {
      if (jobIndex >= MaxLandings) {
        jobIndex = 0;
      } else {
        jobIndex++;
      }
    }
    if (jobIndex !== this.state.jobIndex){
      this.setState({jobIndex});
    }
  }

  componentDidMount = () => {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount = () => {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return (
      <div className="Section" id="landing">
        <div className={`landing-container landing-${this.state.jobIndex}`}>
          <h2>Stephen Whitney</h2>
          <h3>{JobDescriptions[this.state.jobIndex]}</h3>
        </div>
      </div>
    );
  }
}

export default Landing;
