import Floaty from '../floaty/Floaty'
import React, { Component } from 'react';

/**
 * Landing renders the top of the site, with my face on it.
 */
class Landing extends Component {
  render() {
    return (
      <div className="Section" id="landing">
        <h1>Intro</h1>
        <div className="avatar">
            <img
              alt="Stephen Whitney"
              src="https://www.gravatar.com/avatar/56ca7097c63f89715d830034165ff7bd?s=350"/>
        </div>

        <h2>Stephen Whitney</h2>
        <h3>Software Engineer</h3>
        <h4>Since 2005</h4>
        <Floaty numLayers={3} />
      </div>
    );
  }
}

export default Landing;
