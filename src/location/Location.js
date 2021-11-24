import React, { Component } from 'react';
import Map from './Map';

/**
 * Landing renders the blurb about my location and the map story.
 */
class Location extends Component {
  render() {
    return (
      <div className="Section" id="location">
        <div className="dev-grid">
          <div className="dev-grid-cell location-text">
            <div className="dev-grid-measurement-right"></div>
            <p>
              I’m a software engineer based in Dublin, Ireland <span aria-label="Ireland Flag" role="img"> 🇮🇪</span>
            </p>
            <p>
              I've been fortunate enough to work directly with great people based from San Francisco to Singapore.
            </p>
          </div>
          <div className="dev-grid-cell">
            <div className="dev-grid-measurement-bottom"></div>
            <Map />
          </div>
        </div>
      </div>
    );
  }
}

export default Location;
