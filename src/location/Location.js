import React, { Component } from 'react';
import Map from './Map';

/**
 * Location renders the blurb about my location and the map story.
 */
class Location extends Component {
  render() {
    return (
      <div className="Section" id="location">
        <div className="dev-grid">
          <div className="dev-grid-cell-one-quarter-height location-text">
            <div className="dev-grid-measurement-right"></div>
            <div className="dev-grid-margin-center-up" data-target="location-text-p"></div>
            <p id="location-text-p">
              I’m a software engineer based in Dublin, Ireland <span aria-label="Ireland Flag" role="img"> 🇮🇪</span>
            </p>
          </div>
          <div className="dev-grid-cell-three-quarters-height">
            <div className="dev-grid-measurement-bottom"></div>
            <div className="dev-grid-margin-top-left-corner-left" data-target="map"></div>
            <div className="dev-grid-margin-bottom-left-corner-down" data-target="map"></div>
            <Map />
          </div>
        </div>
      </div>
    );
  }
}

export default Location;
