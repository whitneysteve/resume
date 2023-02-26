import React, { Component } from 'react';
import { Gradient } from '../3rdparty/Gradient';
import Job from '../experience/Job';
import intercom from '../img/companies/intercom.svg';
import stripe from '../img/companies/stripe.svg';
import tines from '../img/companies/tines.svg';
import twitter from '../img/companies/twitter.svg';
import mastercard from '../img/companies/mastercard.svg';
import PropTypes from 'prop-types';

/**
 * Experience renders my previous jobs.
 */
class Experience extends Component {
  static defaultProps = {
    selectedJob: null,
  };

  state = { selectedJob: this.props.selectedJob };

  componentDidMount() {
    // Stripe gradient provided by https://whatamesh.vercel.app
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas-stripe');
  }

  selectJob(job) {
    this.setState({ selectedJob: job });
  }

  render() {
    return (
      <div className="Section Experience dev-grid">
        {
          JOBS.map((job) =>
            <Job
              key={job.id}
              job={job}
              selected={this.state.selectedJob?.id === job.id}
              selectJob={this.selectJob.bind(this)}
            />,
          )
        }
      </div>
    );
  }
}

export const JOBS = [
  {
    id: "tines",
    company: "Tines",
    position: "Software Engineer",
    term: `2022 - ${new Date(Date.now()).getFullYear()}`,
    blurbs: [
      "I recently joined Tines as a software engineer.",
    ],
    logo: tines,
  },
  {
    id: "intercom",
    company: "Intercom",
    position: "Software Engineer",
    term: `2021 - 2022`,
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
  selectedJob: PropTypes.object,
};

export default Experience;
