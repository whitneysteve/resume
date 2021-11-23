import React, { Component } from 'react';
import Map from './Map';

/**
 * Landing renders the blurb about my location and the map story.
 */
class Location extends Component {
  render() {
    return (
      <div className="Section" id="location">
        <h1>Location</h1>
        <p>
          I’m a software engineer based in Dublin, Ireland <span aria-label="Ireland Flag" role="img"> 🇮🇪</span>
        </p>
        <Map />
        <p>
          I've been fortunate enough to work directly with great people based from San Francisco to Singapore.
        </p>
      </div>
    );
  }
}

export default Location;
