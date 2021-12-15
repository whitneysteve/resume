import PropTypes from 'prop-types';
import React, { Component } from 'react';

const JobDescriptions = {
  0: 'Sweet explorer',
  1: 'Lost',
  2: 'Looks cool in sunglasses',
  3: 'Software engineer',
  4: 'Waiting for the bus',
  5: 'Software engineer',
  6: 'Holding the umbrella',
  7: 'Software engineer',
};

const MaxHeaders = 7;
const LeftKey = 37;
const RightKey = 39;

/**
 * Header renders the top of the site, with my face on it.
 */
class Header extends Component {
  static defaultProps = {
    start: Math.floor(Math.random() * 8),
  };

  state = {jobIndex: this.props.start};

  handleKeyDown = (event) => {
    let jobIndex = this.state.jobIndex;
    if (event.keyCode === LeftKey) {
      if (jobIndex === 0) {
        jobIndex = MaxHeaders;
      } else {
        jobIndex--;
      }
    } else if (event.keyCode === RightKey) {
      if (jobIndex >= MaxHeaders) {
        jobIndex = 0;
      } else {
        jobIndex++;
      }
    }
    if (jobIndex !== this.state.jobIndex){
      this.setState({jobIndex});
    }
  }

  componentDidMount = () => {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount = () => {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    const {jobIndex} = this.state;
    return (
      <div className={`Section `} id="header">
        <div className={`dev-grid header-container header-${jobIndex}`}>
          <div className="header-text-overlay">
            <h1>Stephen Whitney</h1>
            <h2>{JobDescriptions[jobIndex]}</h2>
          </div>
          <div className="dev-grid-cell">
              <div className="dev-grid-measurement-right"></div>
              <div className="dev-grid-measurement-top"></div>
              <div className="dev-grid-measurement-bottom"></div>
          </div>
          <div className="dev-grid-cell">
            <div className="dev-grid-measurement-right"></div>
          </div>
          <div className="dev-grid-cell">
            <div className="dev-grid-measurement-bottom"></div>
            <div className="dev-grid-measurement-left"></div>
          </div>
          <div className="dev-grid-cell">
            <div className="dev-grid-measurement-left"></div>
            <div className="dev-grid-measurement-top"></div>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  start: PropTypes.number,
};

export default Header;
