import React, { Component } from 'react';
import { Gradient } from '../3rdparty/Gradient';
import intercom from '../img/companies/intercom.svg';
import stripe from '../img/companies/stripe.svg';
import twitter from '../img/companies/twitter.svg';
import mastercard from '../img/companies/mastercard.svg';
import PropTypes from 'prop-types';

/**
 * Experience renders my previous jobs.
 */
class Experience extends Component {
  static defaultProps = {
    expanded: false,
    selectedJob: null,
  };

  state = { expanded: this.props.expanded, selectedJob: this.props.selectedJob };

  componentDidMount() {
    // Stripe gradient provided by https://whatamesh.vercel.app
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas-stripe');

    this.selectJob = this.selectJob.bind(this);
  }

  /**
   * Genreate the markup for a job and attach hover events to update the
   * background.
   *
   * @param {Object} job the job configuration.
   */
  genJob = (job) => {
    const containerId = `experience-job-${job.id}`;
    const selectedState = this.state.selectedJob === job ? 'selected' : '';

    return (
      <div className="dev-grid-cell experience-job" id={ job.id } key={ job.id }>
        <div className="dev-grid-margin-top-left-corner-left" data-target={containerId}></div>
        <div className="dev-grid-margin-center-up" data-target={containerId}></div>
        <div id={containerId} className={`experience-job-company-container ${containerId}  ${selectedState}`} onClick={() => this.selectJob(job)} >
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

  selectJob(job) {
    this.setState({ selectedJob: job });
  }

  render() {
    return (
      <div className="Section experience dev-grid" id="experience">
        { JOBS.map(this.genJob) }
      </div>
    );
  }
}

export const JOBS = [
  {
    id: "intercom",
    company: "Intercom",
    position: "Software Engineer",
    term: `2021 - ${new Date(Date.now()).getFullYear()}`,
    blurbs: [
      "I recently joined Intercom to work on their Growth teams.",
    ],
    logo: intercom,
  },
  {
    id: "stripe",
    company: "Stripe",
    position: "Software Engineer",
    term: "2018 - 2021",
    blurbs: [
      "Working as a full-stack engineer on Stripe's Security Products, building great products to keep our users safe.",
      "At Stripe I've been fortunate enough to work between writing distributed services and message consumers in Ruby and Java and building, great user experiences in React.",
    ],
    logo: stripe,
  },
  {
    id: "twitter",
    company: "Twitter",
    position: "Software Engineer",
    term: "2013 - 2018",
    blurbs: [
      "Twitter is my favourite website and I’m very lucky to have had the opportunity to work and learn here.",
      "Mostly backend engineering on low and high throughput applications, from Ruby to Scala, from monoliths to micro services, and Hadoop.",
      "Built web-apps in React when I could.",
    ],
    logo: twitter,
  },
  {
    id: "mastercard",
    company: "MasterCard Labs",
    position: "Consultant Software Engineer",
    term: "2012 - 2013",
    blurbs: [
      "Researching emerging technologies and trends to create prototypes and other innovations for MasterCard’s next and future generation of products.",
      "Had to pleasure of launching several new, multi-platform services to prototype, pilot, beta and full production.",
    ],
    logo: mastercard,
  },
];

Experience.propTypes = {
  expanded: PropTypes.bool,
  selectedJob: PropTypes.object,
};

export default Experience;
