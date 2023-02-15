import GoogleMapReact from "google-map-react";
import React, { Component } from 'react';

class Map extends Component {
  // Dublin
  static defaultProps = {
    center: {
      lat: 53.349,
      lng: -6.260,
    },
    zoom: 5,
  };

  state = { clicked: false }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <div className="map-click-wrapper" onClick={this.handleClick}>
        <div className={`map ${this.state.clicked ? "" : "map-unclicked"}`} id="map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyC87jefYvUwpJ45N4Dxo_o7Cg0tjvZtcck" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}>
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default Map;
