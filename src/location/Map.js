import GoogleMapReact from "google-map-react"
import React, { Component } from 'react';

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

class Map extends Component {
  // Dublin
  static defaultProps = {
    center: {
      lat: 53.349,
      lng: -6.260
    },
    zoom: 5
  };

  render() {
    return (
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC87jefYvUwpJ45N4Dxo_o7Cg0tjvZtcck" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map;
