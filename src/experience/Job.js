import React, { Component } from 'react';
import { Gradient } from '../3rdparty/Gradient';
import PropTypes from 'prop-types';

/**
 * Generate the markup for a job and attach hover events to update the
 * background.
 */
class Job extends Component {
  constructor() {
    super();
    this.startTracking = this.startTracking.bind(this);
    this.stopTracking = this.stopTracking.bind(this);
    this.track = this.track.bind(this);

    this.jobContainer = React.createRef();
  }

  static defaultProps = {
    job: null,
    selected: false,
    selectJob: () => {},
  };

  state = { tracking: false, transition: true };

  componentDidMount() {
    // Stripe gradient provided by https://whatamesh.vercel.app
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas-stripe');
  }

  startTracking(e) {
    this.setState({ tracking: true });
    window.setTimeout(() => {
      this.setState({ transition: false });
    }, 300);
  }

  stopTracking(e) {
    this.setState({ tracking: false, transition: true });
  }

  track(e) {
    if (this.state.tracking) {
      const { clientX, clientY } = e;
      const target = this.jobContainer.current;
      const targetRect = target.getBoundingClientRect();
      const { height, left, top, width } = targetRect;

      const internalX = Math.abs(clientX - left);
      const mid = width / 2;
      let xPercent = (mid - internalX) / mid;
      target.style.setProperty('--xPercent', xPercent);

      const internalY = Math.abs(clientY - top);
      const midY = height / 2;
      let yPercent = (midY - internalY) / midY;
      target.style.setProperty('--yPercent', yPercent);
    }
  }

  render() {
    const { job } = this.props;
    const containerId = `experience-job-${job.id}`;
    const selectedState = this.props.selected ? 'selected' : '';
    const transitionState = this.state.transition ? 'transition' : '';

    return (
      <div className="dev-grid-cell experience-job" id={ job.id } key={ job.id }>
        <div className="dev-grid-margin-top-left-corner-left" data-target={containerId}></div>
        <div className="dev-grid-margin-center-up" data-target={containerId}></div>
        <div
          id={containerId}
          ref={this.jobContainer}
          className={`experience-job-company-container ${transitionState} ${containerId}  ${selectedState}`}
          onClick={() => this.props.selectJob(job)}
          onMouseEnter={this.startTracking}
          onMouseLeave={this.stopTracking}
          onMouseMove={this.track} >
          <img alt={ `${ job.company } logo` } src={ job.logo } />
          <div className="experience-job-description">
            <div className="experience-job-description-company-name">
              {job.company}
            </div>
            <div className="experience-job-description-company-term">
              {job.term}
            </div>
          </div>
          <canvas id={`gradient-canvas-${job.id}`} data-transition-in />
        </div>
      </div>
    );
  }
}

Job.propTypes = {
  job: PropTypes.object,
  selected: PropTypes.bool,
  selectJob: PropTypes.func,
};

export default Job;
