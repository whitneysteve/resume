import { Component } from 'react';

/**
 * Renders supported devgrid measurements on load and when the window resizes.
 */
class Devgrid extends Component {
  componentDidMount() {
    window.addEventListener('load', drawMeasurements);
    window.addEventListener('resize', drawMeasurements);
  }

  componentWillUnmount() {
    window.removeEventListener('load', drawMeasurements);
    window.removeEventListener('resize', drawMeasurements);
  }

  render() {
    return '';
  }
}

/**
 * Function renders all the different measurements supported by devgrid.
 */
function drawMeasurements() {
  updateX();
  updateY();
  updateBottomLeftCornerDownMargins();
  updateTopLeftCornerLeftMargins();
  updateCenterUpMargins();
  updateBetweens();
}

/**
 * Update the measurement values along any horizontal borders.
 */
function updateX() {
  ['top', 'bottom'].forEach(position => {
    const elements = document.getElementsByClassName(`dev-grid-measurement-${position}`);
    for (let element of elements) {
      element.innerHTML = `${element.parentElement?.offsetWidth || '??'}px`;
    }
  });
}

/**
 * Update the measurement values along any vertical borders.
 */
function updateY() {
  ['right', 'left'].forEach(position => {
    const elements = document.getElementsByClassName(`dev-grid-measurement-${position}`);
    for(let element of elements) {
      element.innerHTML = `${element.parentElement?.offsetHeight || '??'}px`;
    }
  });
}

/**
 * Update the measurement values of margins between elements from the top-left of the element, going left.
 */
function updateTopLeftCornerLeftMargins() {
  const elements = document.getElementsByClassName('dev-grid-margin-top-left-corner-left');
  for (let element of elements) {
    const { parentRect, targetRect } = getElementRectangles(element);

    const firstY = targetRect.left;
    const secondY = parentRect.left;
    const distance = Math.abs(Math.round(firstY - secondY));

    updateElement(
      element,
      targetRect.top - parentRect.top,
      distance / 4,
      distance,
    );
  }
}

/**
 * Update the measurement values of margins between elements from the bottom-left of the element, going downwards.
 */
function updateBottomLeftCornerDownMargins() {
  const elements = document.getElementsByClassName('dev-grid-margin-bottom-left-corner-down');
  for (let element of elements) {
    const { parentRect, targetRect } = getElementRectangles(element);

    const firstY = targetRect.top + targetRect.height;
    const secondY = parentRect.top + parentRect.height;
    const distance = Math.abs(Math.round(firstY - secondY));
    const leftCorner = (parentRect.top + parentRect.height) - (targetRect.top);

    updateElement(
      element,
      leftCorner + (distance / 2) - 5,
      targetRect.left - parentRect.left,
      distance,
    );
  }
}

/**
 * Update the measurement values of margins between elements from the centre of the top border of the element, going
 * upwards.
 */
function updateCenterUpMargins() {
  const elements = document.getElementsByClassName('dev-grid-margin-center-up');
  for (let element of elements) {
    const { parentRect, targetRect } = getElementRectangles(element);

    const firstY = targetRect.top;
    const secondY = parentRect.top;
    const distance = Math.abs(Math.round(firstY - secondY));

    updateElement(
      element,
      distance / 2,
      targetRect.left + (targetRect.width / 2) - 20 - parentRect.left,
      distance,
    );
  }
}

/**
 * Update the measurement values of distances between elements.
 */
function updateBetweens() {
  const elements = document.getElementsByClassName('dev-grid-margin-between');
  for (let element of elements) {
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
      (target1Rect.top - target1ParentRect.top) + (distance / 2),
      target1Rect.width - (distance / 4),
      distance,
    );
  }
}

/**
 * Update the measurement element with position and value.
 *
 * @param {DOMElement} element the measurement element to update.
 * @param {Number} top the top value for the measurement element.
 * @param {Number} left the left value of the measurement element.
 * @param {Number} distance the distance di display on the margin.
 */
function updateElement(element, top, left, distance) {
  element.innerHTML = `${distance}px`;
  element.style.top = `${top}px`;
  element.style.left = `${left}px`;
  element.style.width = `${distance / 2}px`;
  element.style.display = distance < 35 ? "none" : "flex";
}

/**
 * Utility function to pull the bounding rectangles from elements we are measuring.
 *
 * @param {DOMElement} element the element to extract the source and target bounding rectangles between which we are
 * measuring.
 * @returns the extracted rectangles in an object form keyed by parentRect and targetRect.
 */
function getElementRectangles(element) {
  const parent = element.parentElement;
  const target = document.getElementById(element.dataset.target);

  return { parentRect: parent.getBoundingClientRect(), targetRect: target.getBoundingClientRect() };
}

Devgrid.propTypes = {};

export default Devgrid;
