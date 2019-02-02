import CthuluColumns from '../floaty/CthuluColumns'
import React, { Component } from 'react';

/**
 * Landing renders the top of the site, with my face on it.
 */
class Landing extends Component {
  render() {
    return (
      <div className="Section" id="landing">
          <h1>Intro</h1>
          <h2>Stephen Whitney</h2>
          <h3>Software Engineer</h3>
          <h4>Since 2005</h4>
          <CthuluColumns />
      </div>
    );
  }
}

export default Landing;
