import React, { Component } from 'react';

/**
 * Landing renders the top of the site, with my face on it.
 */
class Landing extends Component {
  render() {
    return (
      <div className="Section" id="landing">
        <div>
          <img
            alt="Stephen Whitney standing on a hill with an umbrella."
            src="img/logo.jpg" />
        </div>
        <div>
          <h1>Intro</h1>
          <h2>Stephen Whitney</h2>
          <h3>Software Engineer</h3>
        </div>
      </div>
    );
  }
}

export default Landing;
