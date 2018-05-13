import React, { Component } from 'react';

/**
 * Experience renders my previous jobs.
 */
class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: CURRENT
    }

    this.highlightJob = this.highlightJob.bind(this);
  }

  /**
   * Genreate the markup for a job and attach hover events to update the
   * background.
   *
   * @param {Object} job the job configuration.
   */
  genJob(job) {
    return (
      <div
        className="experience-job"
        id={job.id} key={job.company}
        onMouseOver={this.highlightJob}>
        <h3>{job.company}</h3>
        <h4>{job.position}</h4>
        { job.terms.map(genTerm) }
        { job.blurbs.map(genBlurb) }
      </div>
    );
  }

  highlightJob(e) {
    this.setState({ selected: e.target.id });
  }

  render() {
    return (
      <div className={`Section ${this.state.selected} experience`} id="experience">
        <h1>Experience</h1>
        <div>
          {/* Requires explicit arrow for scope in genJob. */}
          { JOBS.map(x => this.genJob(x)) }
          <div className="experience-footer">
            These aren’t all the details. Please get in touch for a full C.V.
          </div>
        </div>
      </div>
    );
  }
}

/**
 * Generate the markup for a term spent at a job.
 *
 * @param {String} term the length of time worked at the job.
 */
const genTerm = (term) => {
  return <h5 key={term}>{term}</h5>;
};

/**
 * Generate the markup for a blurb about a job.
 *
 * @param {string} blurb a short description of the job.
 */
const genBlurb = (blurb) => {
  return <p key={blurb}>{blurb}</p>;
};

const CURRENT = "twitter";

const JOBS = [
  {
    id: "twitter",
    company: "Twitter",
    position: "Staff Software Engineer",
    terms: [
      "December 2013 - Present"
    ],
    blurbs: [
      "Twitter is my favourite website and I’m very lucky to have the opportunity to work and learn here.",
      "Mostly backend engineering on low and high throughput applications, from Ruby to Scala, from monoliths to micro services and Hadoop.",
      "Building internal web-apps in React / Angular / Backbone when I can."
    ]
  },
  {
    id: "mastercard",
    company: "MasterCard Labs",
    position: "Consultant Software Engineer",
    terms: [
      "January 2012 - November 2013"
    ],
    blurbs: [
      "Researching emerging technologies and trends to create prototypes and other innovations for MasterCard’s next and future generation of products.",
      "Had to pleasure of launching several new, multi-platform services to prototype, pilot, beta and full production."
    ]
  },
  {
    id: "ibm",
    company: "IBM",
    position: "Intern, Software Engineer, Team Lead",
    terms: [
      "June 2005 - September 2007",
      "May 2010 - January 2012"
    ],
    blurbs: [
      "Working on Java enterprise software for Lotus collaboration products and sensor processing frameworks for Smarter Software (Smarter Cities, Smarter Industries etc.) I learned my trade as a software developer, designer and team lead."
    ]
  },
  {
    id: "newbay",
    company: "Newbay",
    position: "Senior Software Engineer",
    terms: [
      "July 2008 - May 2010"
    ],
    blurbs: [
      "Java Developer on white label photo and video sharing platform and social network gateways for telcos."
    ]
  },
  {
    id: "amdocs",
    company: "Amdocs",
    position: "Senior Subject Matter Expert",
    terms: [
      "September 2007 - July 2008"
    ],
    blurbs: [
      "Java Developer working deployment infrastructure and migrating existing applications to J2EE (billing, CRM and operational support)."
    ]
  }
]

export default Experience;
