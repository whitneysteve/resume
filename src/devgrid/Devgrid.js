import { Component } from 'react';

/**
 * Renders devgrid measurements.
 */
class Devgrid extends Component {
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
  updateBottomLeftCornerDownMargins();
  updateTopLeftCornerLeftMargins();
  updateCenterUpMargins();
}

function updateX() {
  ['top', 'bottom'].forEach(position => {
    const elements = document.getElementsByClassName(`dev-grid-measurement-${position}`);
    for (let element of elements) {
      element.innerHTML = `${element.parentElement?.offsetWidth || '??' }px`;
    }
  });
}

function updateY() {
  ['right', 'left'].forEach(position => {
    const elements = document.getElementsByClassName(`dev-grid-measurement-${position}`);
    for (let element of elements) {
      element.innerHTML = `${element.parentElement?.offsetHeight || '??' }px`;
    }
  });
}

function updateTopLeftCornerLeftMargins() {
  const elements = document.getElementsByClassName('dev-grid-margin-top-left-corner-left');
  for(let element of elements) {
    const {parentRect, targetRect} = getElementRectangles(element);

    const firstY = targetRect.left;
    const secondY = parentRect.left;
    const distance = Math.abs(Math.round(firstY - secondY));

    element.innerHTML = `${distance}px`;
    element.style.top = `${targetRect.top - parentRect.top}px`;
    element.style.left = `${distance/4}px`;
    element.style.width = `${distance/2}px`;
  }
}

function updateBottomLeftCornerDownMargins() {
  const elements = document.getElementsByClassName('dev-grid-margin-bottom-left-corner-down');
  for(let element of elements) {
    const {parentRect, targetRect} = getElementRectangles(element);

    const firstY = targetRect.top + targetRect.height;
    const secondY = parentRect.top + parentRect.height;
    const distance = Math.abs(Math.round(firstY - secondY));

    const leftCorner = (parentRect.top + parentRect.height) - (targetRect.top)

    element.innerHTML = `${distance}px`;
    element.style.top = `${leftCorner + (distance/2)}px`;
    element.style.left = `${targetRect.left - parentRect.left}px`;
    element.style.width = `${distance/2}px`;
  }
}

function updateCenterUpMargins() {
  const elements = document.getElementsByClassName('dev-grid-margin-center-up');
  for(let element of elements) {
    const {parentRect, targetRect} = getElementRectangles(element);

    const firstY = targetRect.top;
    const secondY = parentRect.top;
    const distance = Math.abs(Math.round(firstY - secondY));

    element.innerHTML = `${distance}px`;
    element.style.top = `${distance/2}px`;
    element.style.left = `${(parentRect.width/2) - (distance/4)}px`;
    element.style.width = `${distance/2}px`;
  }
}

function getElementRectangles(element) {
  const parent = element.parentElement;
  const target = document.getElementById(element.dataset.target);

  return { parentRect: parent.getBoundingClientRect(), targetRect: target.getBoundingClientRect() }
}

Devgrid.propTypes = {};

export default Devgrid;
