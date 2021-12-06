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
  updateBetweens();
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

    updateElement(
      element,
      targetRect.top - parentRect.top,
      distance/4,
      distance,
    );
  }
}

function updateBottomLeftCornerDownMargins() {
  const elements = document.getElementsByClassName('dev-grid-margin-bottom-left-corner-down');
  for(let element of elements) {
    const {parentRect, targetRect} = getElementRectangles(element);

    const firstY = targetRect.top + targetRect.height;
    const secondY = parentRect.top + parentRect.height;
    const distance = Math.abs(Math.round(firstY - secondY));
    const leftCorner = (parentRect.top + parentRect.height) - (targetRect.top);

    updateElement(
      element,
      leftCorner + (distance/2),
      targetRect.left - parentRect.left,
      distance,
    );
  }
}

function updateCenterUpMargins() {
  const elements = document.getElementsByClassName('dev-grid-margin-center-up');
  for(let element of elements) {
    const {parentRect, targetRect} = getElementRectangles(element);

    const firstY = targetRect.top;
    const secondY = parentRect.top;
    const distance = Math.abs(Math.round(firstY - secondY));

    updateElement(
      element,
      distance/2,
      (targetRect.width/2) - (distance/4),
      distance,
    );
  }
}

function updateBetweens() {
  const elements = document.getElementsByClassName('dev-grid-margin-between');
  for(let element of elements) {
    const target1 = document.getElementById(element.dataset.targetOne);
    const target1Parent = target1.parentElement;
    const target2 = document.getElementById(element.dataset.targetTwo);

    const target1Rect = target1.getBoundingClientRect();
    const target1ParentRect = target1Parent.getBoundingClientRect();
    const target2Rect = target2.getBoundingClientRect();

    const firstX = target1Rect.right;
    const secondX = target2Rect.left;
    const distance = Math.abs(Math.round(firstX - secondX));

    updateElement(
      element,
      (target1Rect.top - target1ParentRect.top) + (distance/2),
      target1Rect.width - (distance / 4),
      distance,
    );
  }
}

function updateElement(element, top, left, distance) {
  element.innerHTML = `${distance}px`;
  element.style.top = `${top}px`;
  element.style.left = `${left}px`;
  element.style.width = `${distance/2}px`;
  element.style.display = distance < 35 ? "none" : "flex";
}

function getElementRectangles(element) {
  const parent = element.parentElement;
  const target = document.getElementById(element.dataset.target);

  return { parentRect: parent.getBoundingClientRect(), targetRect: target.getBoundingClientRect() }
}

Devgrid.propTypes = {};

export default Devgrid;
