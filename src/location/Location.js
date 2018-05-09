import Map from './Map'
import React, { Component } from 'react';

/**
 * Landing renders the blurb about my location and the map story.
 */
class Location extends Component {
  render() {
    return (
      <div className="Section" id="location">
        <h1>Location</h1>
        <Map />
        <p>
          I’m based in Dublin, Ireland <span aria-label="Ireland Flag" role="img"> 🇮🇪</span>
        </p>
        <p>
          I've been fortunate enough to work directly with great people based from San Francisco to Singapore.
        </p>
      </div>
    );
  }
}

export default Location;
