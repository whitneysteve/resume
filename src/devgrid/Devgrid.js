import { Component } from 'react';

/**
 * Renders devgrid measurements.
 */
class Devgrid extends Component {
  constructor(props) {
      super(props);
  }

  componentDidMount() {
      window.addEventListener('load', drawMeasurements);
      window.addEventListener('resize', drawMeasurements);
  }

  componentWillUnmount() {
    window.removeEventListener('load', drawMeasurements)
    window.removeEventListener('resize', drawMeasurements)
  }

  render() {
    return '';
  }
}

function drawMeasurements() {
  updateX();
  updateY();
}

function updateX() {
  ['right', 'left'].forEach(position => {
    let elements = document.getElementsByClassName(`dev-grid-measurement-${position}`);
    for (let element of elements) {
      element.innerHTML = `${element.parentElement?.offsetHeight || '??' }px`;
    }
  });
}

function updateY() {
  ['top', 'bottom'].forEach(position => {
    let elements = document.getElementsByClassName(`dev-grid-measurement-${position}`);
    for (let element of elements) {
      element.innerHTML = `${element.parentElement?.offsetWidth || '??' }px`;
    }
  });
}

Devgrid.propTypes = {};

export default Devgrid;
