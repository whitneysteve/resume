import React, { Component } from 'react';
import { Gradient } from '../3rdparty/Gradient';
import intercom from '../img/companies/intercom.svg';
import stripe from '../img/companies/stripe.svg';
import twitter from '../img/companies/twitter.svg';
import mastercard from '../img/companies/mastercard.svg';

/**
 * Experience renders my previous jobs.
 */
class Experience extends Component {
  componentDidMount() {
    // Stripe gradient provided by https://whatamesh.vercel.app
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas-stripe');
  }

  render() {
    return (
      <div className={`Section experience dev-grid`} id="experience">
        { JOBS.map(genJob) }
      </div>
    );
  }
}

/**
 * Genreate the markup for a job and attach hover events to update the
 * background.
 *
 * @param {Object} job the job configuration.
 */
const genJob = (job) => {
  const jobId = job.company.toLowerCase();
  const containerId = `experience-job-${jobId}`;

  return (
    <div className="dev-grid-cell experience-job" id={ job.id } key={ jobId }>
      <div className="dev-grid-margin-top-left-corner-left" data-target={containerId}></div>
      <div className="dev-grid-margin-center-up" data-target={containerId}></div>
      <div id={containerId} className={`experience-job-company-container ${containerId}`}>
        <img alt={ `${ job.company } logo` } src={ job.logo } />
        <canvas id={`gradient-canvas-${jobId}`} data-transition-in />
      </div>
    </div>
  );
};

const JOBS = [
  {
    id: "intercom",
    company: "Intercom",
    position: "Software Engineer",
    terms: [
      "2021 - Present",
    ],
    blurbs: [
      "I recently joined Intercom to work on their Growth teams.",
    ],
    logo: intercom,
  },
  {
    id: "stripe",
    company: "Stripe",
    position: "Software Engineer",
    terms: [
      "2018 - 2021",
    ],
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
    terms: [
      "2013 - 2018",
    ],
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
    terms: [
      "2012 - 2013",
    ],
    blurbs: [
      "Researching emerging technologies and trends to create prototypes and other innovations for MasterCard’s next and future generation of products.",
      "Had to pleasure of launching several new, multi-platform services to prototype, pilot, beta and full production.",
    ],
    logo: mastercard,
  },
];

export default Experience;
