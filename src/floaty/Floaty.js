import PropTypes from 'prop-types';
import React, { Component } from 'react';

/**
 * Renders a floaty thing.
 */
class Floaty extends Component {
  static defaultProps = {
    numLayers: 3
  };

  render() {
    return (
      <div className="floaty-container">
        {
          [...Array(this.props.numLayers).keys()].map((_, idx) =>
            <div aria-hidden="true" className={`floaty-${idx+1}`} key={`floaty-${idx}`} />
          )
        }
        <div aria-hidden="true" className="floaty-background"/>
      </div>
    );
  }
}

Floaty.propTypes = {
  numLayers: PropTypes.number
};

export default Floaty;
