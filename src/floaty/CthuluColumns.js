// import PropTypes from 'prop-types';
import React, { Component } from 'react';

/**
 * Renders floaty columns.
 */
class CthuluColumns extends Component {
  render() {
    return (
      <div className="cthulu-columns-container">
        <div aria-hidden="true" className="cthulu-column-up" />
        <div aria-hidden="true" className="cthulu-column-down" />
      </div>
    );
  }
}

CthuluColumns.propTypes = {};

export default CthuluColumns;
